import { useEffect, useState } from "react";
import { CharacterStructure } from "../../types";
import Character from "../Character/Character";

const App = (): JSX.Element => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [character, setCharacter] = useState<CharacterStructure[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${apiUrl}characters`);
      const characterApi = (await response.json()) as CharacterStructure[];
      loadCharacter(characterApi);
    })();
  }, [apiUrl]);

  const loadCharacter = (character: CharacterStructure[]): void => {
    setCharacter(character);
  };

  return (
    <div className="container">
      <header className="main-header">
        <img
          className="main-logo"
          src="images/main-logo.webp"
          alt="stars words logo"
          width="200"
          height="96"
        />
        <h1 className="main-title">Characters of StarWars</h1>
      </header>
      <section className="main">
        <ul className="characters">
          {character.map((character) => (
            <Character character={character} key={character.id} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
