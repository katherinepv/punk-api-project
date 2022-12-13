import "./App.scss";
import Nav from "./containers/Nav/Nav";
import SearchBox from "./components/SearchBox/SearchBox";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import { useState } from "react";
import { useEffect } from "react";
import FilterCheckboxes from "./components/FilterCheckBoxes/FilterCheckboxes";
// import SearchMenu from "./containers/SearchMenu/SearchMenu";

const App = () => {
  // all beers from API
  const [beers, setBeers] = useState([]);

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
    // if (chosenFilter === "high ABV") {
    //   return;
    // }
  };

  useEffect(() => {
    getBeers(filterGroup);
  }, [filterGroup]);

  // filter by user name search input

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const userSearchInput = event.target.value.toLowerCase();
    setSearchTerm(userSearchInput);
  };

  const filteredBeersBySearch = beers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();
    return beerNameLower.includes(searchTerm);
  });

  // filter by checkboxes

  const [filterGroup, setFilterGroup] = useState("all");
  const handleChange = (event) => {
    setFilterGroup(event.target.value);
  };

  // // all beers from classic range
  // const [classicBeers, setClassicBeers] = useState([]);
  // const getClassicBeers = async () => {
  //   const response = await fetch(
  //     "https://api.punkapi.com/v2/beers?brewed_before=01-2010&per_page=80"
  //   );
  //   const data = await response.json();
  //   setClassicBeers(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getClassicBeers();
  // }, []);

  return (
    <div>
      <Nav />
      <SearchBox
        label="Search name: "
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <FilterCheckboxes
        onChange={handleChange}
        selected={filterGroup}
        label="Filter by:"
        options={["All", "High ABV", "Classic Range", "Acidic"]}
      />
      <BeerContainer
        title={`Search results for ${searchTerm}: `}
        beersArr={filteredBeersBySearch}
      />
    </div>
  );
};

export default App;
