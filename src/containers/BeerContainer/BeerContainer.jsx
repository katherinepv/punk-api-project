import "./BeerContainer.scss";
import Card from "../../components/Card/Card";

const BeerContainer = ({ beersArr }) => {
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
  console.log(acidicCardsJSX);

  return (
    <div>
      <div className="card-container">{acidicCardsJSX}</div>
      <h3>All beers</h3>
      {/* <div className="card-container">{allBeerCardsJSX}</div> */}
    </div>
  );
};

export default BeerContainer;
