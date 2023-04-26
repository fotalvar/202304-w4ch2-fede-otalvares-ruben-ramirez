import { CharacterStructure } from "../../types";
import Character from "../Character/Character";

const App = (): JSX.Element => {
  const character: CharacterStructure = {
    id: 4,
    name: "Darth Vader",
    picture: "https://starwars-visualguide.com/assets/img/characters/4.jpg",
    heigth: 202,
    mass: 136,
    created: "2014-12-09T13:50:51.644000Z",
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
          <Character character={character} />
        </ul>
      </section>
    </div>
  );
};

export default App;
