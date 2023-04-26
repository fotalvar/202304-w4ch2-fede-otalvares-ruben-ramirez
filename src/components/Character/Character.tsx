import { CharacterStructure } from "../../types";

interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({
  character: { id, name, heigth, mass, created },
}: CharacterProps): JSX.Element => {
  return (
    <li className="character">
      <div className="character__container">
        <h2 className="character__name">{name}</h2>
        <img
          className="character__image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={name}
        />
        <span className="character__details">Heigth: {heigth}</span>
        <span className="character__details">Mass: {mass}</span>
        <span className="character__details">Creation date: {created}</span>
      </div>
    </li>
  );
};

export default Character;
