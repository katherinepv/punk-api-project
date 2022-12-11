import "./Main.scss";
import Card from "../../components/Card/Card";

const Main = ({ title, beersArr }) => {
  const allBeerCardsJSX = beersArr.map(({ id, name, image_url, tagline }) => (
    <Card key={id} name={name} image={image_url} tagline={tagline} />
  ));

  const highAbvCardsJSX = beersArr
    .filter((beer) => beer.abv >= 6)
    .map(({ id, name, image_url, tagline }) => (
      <Card key={id} name={name} image={image_url} tagline={tagline} />
    ));

  //   const classicDateString = "01/2010";
  //   const classicDate = classicDateString.replace("/", "-").getTime();

  //   const classicRangeCardsJSX = beersArr
  //     .filter((beer) => beer.first_brewed.replace("/", "-") <= classicDate)
  //     .map(({ id, name, image_url, tagline }) => (
  //       <Card key={id} name={name} image={image_url} tagline={tagline} />
  //     ));
  //   console.log(classicRangeCardsJSX);

  const acidicCardsJSX = beersArr
    .filter((beer) => beer.ph <= 4)
    .map(({ id, name, image_url, tagline }) => (
      <Card key={id} name={name} image={image_url} tagline={tagline} />
    ));
  return (
    <div className="main">
      <h2>{title}</h2>
      <div className="card-container">{allBeerCardsJSX}</div>
      <div className="card-container">{highAbvCardsJSX}</div>
      {/* <div className="card-container">{classicRangeCardsJSX}</div> */}
      <div className="card-container">{acidicCardsJSX}</div>
    </div>
  );
};

export default Main;
