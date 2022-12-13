import "./BeerContainer.scss";
import Card from "../../components/Card/Card";

const BeerContainer = ({ title, beersArr }) => {
  const allBeerCardsJSX = beersArr.map(({ id, name, image_url, tagline }) => (
    <Card key={id} name={name} image={image_url} tagline={tagline} />
  ));

  const highAbvCardsJSX = beersArr
    .filter((beer) => beer.abv >= 6)
    .map(({ id, name, image_url, tagline }) => (
      <Card key={id} name={name} image={image_url} tagline={tagline} />
    ));

  const acidicCardsJSX = beersArr
    .filter((beer) => beer.ph <= 4)
    .map(({ id, name, image_url, tagline }) => (
      <Card key={id} name={name} image={image_url} tagline={tagline} />
    ));

  return (
    <div>
      <h3>{title}</h3>
      <div className="card-container">{allBeerCardsJSX}</div>
      {/* <div className="card-container">{allBeerCardsJSX}</div> */}
    </div>
  );
};

export default BeerContainer;
