import {render, screen} from '@testing-library/react';
import Hero from '@/components/Landpage/Hero';

it('should have Nourish in title', () => {
    render(<Hero session={null}/>); // ARRANGE
   
    const myElement = screen.getByText(/Nourish/i); // ACT

    expect(myElement).toBeInTheDocument() // ASSERT
})