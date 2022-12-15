import Card from "../../components/Card/Card";
import "./Favourites.scss";

const Favourites = ({ title, favouritesArr = [] }) => {
  const favouritesCardsJSX = favouritesArr.map(
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
    <div classNam="favourites">
      <h3>{title}</h3>
      <div>{favouritesCardsJSX}</div>
    </div>
  );
};

export default Favourites;
