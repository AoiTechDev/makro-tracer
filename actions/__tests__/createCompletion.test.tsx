import { createCompletion } from '../actions';

// Mock the global fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve( [{ food: 'apple', calories: 95 }]),
    }) as Promise<Response>
);

describe('createCompletion', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    (global.fetch as jest.Mock).mockClear();
  });

  it('returns nutrition data when prompt is valid', async () => {
    const prompt = '100g chicken';
    const response = await createCompletion(prompt);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.api-ninjas.com/v1/nutrition?query=${prompt}`,
      expect.objectContaining({
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": process.env.NINJA_API_KEY || "",
        },
      })
    );

    expect(response).toEqual({ success: [{ food: 'apple', calories: 95 }] });
  });

  it('returns error when prompt is empty', async () => {
    const prompt = '';
    const response = await createCompletion(prompt);

    expect(global.fetch).not.toHaveBeenCalled();
    expect(response).toEqual({ error: 'prompt is required' });
  });
});