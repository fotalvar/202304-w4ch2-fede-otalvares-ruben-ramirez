import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When showing the header", () => {
    test("Then it should show stars words logo", () => {
      const alternativeText = "stars words logo";

      render(<App />);

      const logo = screen.getByRole("img", { name: alternativeText });

      expect(logo).toBeInTheDocument();
    });

    test("Then is should show the text 'Characters Stars Words'", () => {
      const text = "Characters Stars Words";

      render(<App />);

      const heading = screen.getByRole("heading", { level: 1 });

      expect(heading).toHaveTextContent(text);
    });
  });
});
