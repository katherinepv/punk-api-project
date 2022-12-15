import "./Card.scss";
import Button from "../Button/Button";
import whiteCross from "../../assets/images/white-cross.png";
import { useState } from "react";

// as a prop:
// , "food pairing"
const Card = ({ name, image, tagline, description, food_pairing }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  const briefJSX = (
    // className="card__content card__content--brief"
    <>
      <img className="card__image" src={image} alt="beer" />
      <h3 className="card__title">{name}</h3>
      <p className="card__tagline">"{tagline}"</p>
      <div className="card__buttons">
        <div onClick={handleClick}>
          <Button classText="card__button--info" buttonText="Find out more" />
        </div>
        <div>
          <Button
            classText="card__button--fave"
            buttonText=" 🌟Add to favourites"
          />
        </div>
      </div>
    </>
  );

  const infoJSX = (
    <>
      <img
        src={whiteCross}
        className="card__image--info"
        onClick={handleClick}
        alt="Close extra information"
      />
      <h3 className="card__title--info">{name}</h3>
      {description.split(".").map((sentence, index) => (
        <p className="card__text--info" key={name + index}>
          {sentence + "."}
        </p>
      ))}
      <h4 className="card__subheading--info">Pairs well with:</h4>
      <ul>
        {food_pairing.map((sentence, index) => (
          <li className="card__text--info" key={name + index + "food pairing"}>
            {sentence + "."}
          </li>
        ))}
      </ul>
    </>
  );

  return <div className="card">{showInfo ? infoJSX : briefJSX}</div>;
};

export default Card;
