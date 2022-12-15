import "./BeerContainer.scss";
import Card from "../../components/Card/Card";

const BeerContainer = ({ title, beersArr = [] }) => {
  const beerCardsJSX = beersArr.map(
    ({ id, name, image_url, tagline, description, food_pairing }) => (
      <Card
        key={id}
        name={name}
        image={image_url}
        tagline={tagline}
        description={description}
        food_pairing={food_pairing}
      />
    )
  );

  return (
    <div className="card-section">
      <h3>{title}</h3>
      <div className="card-container">{beerCardsJSX}</div>
    </div>
  );
};

export default BeerContainer;
