import { queryByTestId, render, screen, within } from "@testing-library/react";
import Hero from "@/components/Landpage/Hero";

it("Heading should be h1", () => {
  render(<Hero session={null} />);

  const headingElement = screen.getByRole("heading", { level: 1 });
  expect(headingElement).toBeInTheDocument();
});

it("Heading should contains: Nourish Your Body, Delight Your Palate", () => {
  render(<Hero session={null} />);

  const headingElement = screen.getByRole("heading", { level: 1 });

  //Nourish Your Body, Delight Your Palate
  expect(headingElement.textContent).toBe(
    "Nourish Your Body, Delight Your Palate"
  );
});

it("Hero contains paragraph with proper text", () => {
  render(<Hero session={null} />);

  const {getByText} = within(screen.getByTestId("heroArticle"))

  expect(getByText('Empower Yourself with Comprehensive Meal Tracking: Easily Create, Add and Search for Meals to Stay On Track.')).toBeInTheDocument()
});

it("Hero contains button with text Discover", () => {
  render(<Hero session={null} />);

  const buttonElement = screen.getByRole("button", { name: "Discover" });
  expect(buttonElement).toBeInTheDocument();
});
