import "./BeerContainer.scss";
import Card from "../../components/Card/Card";

const BeerContainer = ({ title, beersArr }) => {
  const beerCardsJSX = beersArr.map(({ id, name, image_url, tagline }) => (
    <Card key={id} name={name} image={image_url} tagline={tagline} />
  ));

  // one function to join all search/filters
  // const filteredCardsJSX = beersArr.filter((beer) =>  )

  const classicCardsJSX = beersArr
    .filter((beer) => parseInt(beer.first_brewed.split("/").pop()) < 2010)
    .map(({ id, name, image_url, tagline }) => (
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
    <div className="card-section">
      <h3>{title}</h3>
      <div className="card-container">{beerCardsJSX}</div>
      {/* <div className="card-container">{allBeerCardsJSX}</div> */}
    </div>
  );
};

export default BeerContainer;
