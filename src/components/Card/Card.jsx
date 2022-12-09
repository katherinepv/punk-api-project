import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <img className="card__image" src="" alt="beer image" />
      <h3 className="card__title">Beer Name</h3>
      <p className="card__description">
        This beer tastes like beer and goes well in a glass.
      </p>
    </div>
  );
};

export default Card;
