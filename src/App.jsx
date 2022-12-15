import "./App.scss";
import Nav from "./containers/Nav/Nav";
import SearchBox from "./components/SearchBox/SearchBox";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import { useState } from "react";
import { useEffect } from "react";
import FilterCheckboxes from "./components/FilterCheckBoxes/FilterCheckboxes";
import Button from "./components/Button/Button";
import blackCross from "./assets/images/black-cross.png";
import Favourites from "./containers/Favourites/Favourites";
// import SearchMenu from "./containers/SearchMenu/SearchMenu";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGroup, setFilterGroup] = useState("all");
  const [showRandom, setShowRandom] = useState(false);
  const [randomBeer, setRandomBeer] = useState([]);
  const [favouriteBeers, setFavouriteBeers] = useState([]);
  const [favouriteBeerInput, setFavouriteBeerInput] = useState("");

  const handleInput = (event) => {
    const userSearchInput = event.target.value.toLowerCase();
    setSearchTerm(userSearchInput);
  };
  console.log(searchTerm);

  // filter by checkboxes

  const handleChange = (event) => {
    setFilterGroup(event.target.value);
  };

  // all beers from API

  const getBeers = async () => {
    let beersArr = [];
    for (let index = 1; index < 6; index++) {
      let response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${[index]}&per_page=80`
      );
      const data = await response.json();
      beersArr.push(data);
    }
    setBeers(beersArr.flat());
  };

  const getFilteredBeers = (filterGroup) => {
    console.log(filterGroup);
    if (filterGroup === "high abv") {
      return beers.filter((beer) => beer.abv >= 6);
    } else if (filterGroup === "classic range") {
      return beers.filter(
        (beer) => parseInt(beer.first_brewed.split("/").pop()) < 2010
      );
    } else if (filterGroup === "acidic") {
      return beers.filter((beer) => beer.ph <= 4);
    } else {
      return beers;
    }
  };

  const filteredBeers = getFilteredBeers(filterGroup);
  console.log(filteredBeers);

  // filter by user name search input on top of filters
  const filterBeersBySearch = filteredBeers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();
    return beerNameLower.includes(searchTerm);
  });

  useEffect(() => {
    getBeers(searchTerm, filterGroup);
  }, [searchTerm, filterGroup]);

  useEffect(() => {
    getRandomBeer();
  }, []);

  // for surprise me button
  const handleClick = () => {
    setShowRandom(!showRandom);
  };

  const getRandomBeer = async () => {
    let response = await fetch("https://api.punkapi.com/v2/beers/random");
    const data = await response.json();
    setRandomBeer(data);
  };

  // for favourites list

  // this listens to the beer card that the user has chosen to set as a favourite
  const getFavBeerInput = (event) => {
    let userFavBeerInput = event.target.value;
    setFavouriteBeerInput(userFavBeerInput);
  };

  // user can now click on add button - on click it runs this function - takes whatever is in the favouriteBeerInput and pushes it into the favBeersArr
  const getFavBeerToAddToArr = () => {
    setFavouriteBeers([...favouriteBeers, favouriteBeerInput]);
    setFavouriteBeerInput("");
  };

  let beerContainerTitle = searchTerm
    ? `Search results for "${searchTerm}" and "${filterGroup}":`
    : `Search results for "${filterGroup}":`;

  return (
    <div>
      <Nav />
      <div className="main">
        <div className="filters">
          <SearchBox
            label="Search name: "
            value={searchTerm}
            searchTerm={searchTerm}
            onInput={handleInput}
          />
          <FilterCheckboxes
            onChange={handleChange}
            selected={filterGroup}
            label="Filter by:"
            options={["All", "High ABV", "Classic Range", "Acidic"]}
          />
          <div className="buttons__filter-section">
            <div onClick={handleClick}>
              <Button classText="button__surprise" buttonText="Surprise Me!" />
            </div>
            <div>
              <Button
                classText="button__favourites"
                buttonText="🌟 My favourites"
              />
            </div>
          </div>
        </div>

        <div>
          {showRandom ? (
            <div className="random-beer-container">
              <img
                src={blackCross}
                className="card__cross"
                onClick={handleClick}
                alt="Close random beer"
              />
              <BeerContainer title="We recommend:" beersArr={randomBeer} />
            </div>
          ) : (
            <BeerContainer
              title={beerContainerTitle}
              beersArr={filterBeersBySearch}
            />
          )}
          <Favourites title="My Favourites:" favouritesArr={favouriteBeers} />
        </div>
      </div>
    </div>
  );
};

export default App;
