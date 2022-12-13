import "./App.scss";
import Nav from "./containers/Nav/Nav";
import SearchBox from "./components/SearchBox/SearchBox";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import { useState } from "react";
import { useEffect } from "react";
import SearchFilterCheckbox from "./components/SearchFilterCheckBox/SearchFilterCheckbox";
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
  };

  useEffect(() => {
    getBeers();
  }, []);

  // // filter by user search input

  // const [searchTerm, setSearchTerm] = useState("");

  // const handleInput = (event) => {
  //   const userSearchInput = event.target.value.toLowerCase();
  //   setSearchTerm(userSearchInput);
  // };

  // const filteredBeersBySearch = allBeers.filter((beer) => {
  //   const beerNameLower = beer.name.toLowerCase();
  //   return beerNameLower.includes(searchTerm);
  // });

  // // filter by checkboxes
  // const [searchFilter, setSearchFilter] = useState("");
  // const handleChange = (event) => {
  //   setSearchFilter(event.target.value);
  // };

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
      {/* <SearchBox
        label="Search name: "
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <SearchFilterCheckbox
        handleChange={handleChange}
        checkboxDescriptor="High ABV (>6.0%)"
      />
      <SearchFilterCheckbox
        handleChange={handleChange}
        checkboxDescriptor="Classic Range"
      />
      <SearchFilterCheckbox
        handleChange={handleChange}
        checkboxDescriptor="Acidic (pH < 4)"
      /> */}
      <BeerContainer title="Search results: " beersArr={beers} />
    </div>
  );
};

export default App;
