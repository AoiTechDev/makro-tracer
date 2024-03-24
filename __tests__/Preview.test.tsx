import Preview from "@/components/Landpage/Preview";
import {  render, screen } from "@testing-library/react";
import preview from "@/assets/dashboard-preview.png";



it('Render image', () => {
    render(<Preview />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src' ,preview.toString());
    expect(image).toHaveAttribute('alt', 'dashboard preview');

})