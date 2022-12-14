import "./App.scss";
import Nav from "./containers/Nav/Nav";
import SearchBox from "./components/SearchBox/SearchBox";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import { useState } from "react";
import { useEffect } from "react";
import FilterCheckboxes from "./components/FilterCheckBoxes/FilterCheckboxes";
// import SearchMenu from "./containers/SearchMenu/SearchMenu";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGroup, setFilterGroup] = useState("all");

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
        </div>
        <BeerContainer
          title={`Search results for ${searchTerm}: `}
          beersArr={filterBeersBySearch}
        />
      </div>
    </div>
  );
};

export default App;
