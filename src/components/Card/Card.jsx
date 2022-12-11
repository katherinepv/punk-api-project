import "./Card.scss";
import Button from "../Button/Button";

const Card = ({ name, image, tagline }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt="beer" />
      <h3 className="card__title">{name}</h3>
      <p className="card__tagline">"{tagline}"</p>
      <Button classText="card__button" buttonText="Find out more" />
    </div>
  );
};

export default Card;
