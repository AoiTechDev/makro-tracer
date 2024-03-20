import { render, screen } from "@testing-library/react";
import Hero from "@/components/Landpage/Hero";

it("Heading should be h1", () => {
    render(<Hero session={null} />);

    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeInTheDocument();
});

it("Heading should start with Nourish text", () => {
    render(<Hero session={null} />);

    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement?.textContent?.startsWith("Nourish")).toBeTruthy();
});

it("Hero contains paragraph with text which starts with Empower.", () => {
    render(<Hero session={null} />);
  
    const paragraph = screen.getByText(/Empower/i, { selector: 'p' });
  
    expect(paragraph?.textContent?.startsWith("Empower")).toBeTruthy();
  });

it("Hero contains button with text Discover", () => {
    render(<Hero session={null} />);

    const buttonElement = screen.getByRole("button", { name: "Discover" });
    expect(buttonElement).toBeInTheDocument();
});


it("Hero contains image", () => {
    render(<Hero session={null} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
});
