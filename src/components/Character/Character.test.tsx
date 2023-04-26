import { render, screen } from "@testing-library/react";
import { CharacterStructure } from "../../types";
import Character from "./Character";

describe("Given a Character component", () => {
  describe("When it receives the character name 'Darth Vader'", () => {
    test("Then it should show 'Darth Vader'", () => {
      const expectedText = "Darth Vader";

      const character: CharacterStructure = {
        id: 4,
        name: "Darth Vader",
        picture: "img/darthvader.jpg",
        heigth: 202,
        mass: 136,
        created: "2014-12-09T13:50:51.644000Z",
      };

      render(<Character character={character} />);
      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
