import "./App.scss";
import Nav from "./containers/Nav/Nav";
import SearchBox from "./components/SearchBox/SearchBox";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import { useState } from "react";
import { useEffect } from "react";
import SearchFilterCheckbox from "./components/SearchFilterCheckBox/SearchFilterCheckbox";
// import SearchMenu from "./containers/SearchMenu/SearchMenu";

const App = () => {
  // all beers from page 1 (0-80)
  const [beersPageOne, setBeersPageOne] = useState([]);
  const getBeersPageOne = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=1&per_page=80"
    );
    const data = await response.json();
    setBeersPageOne(data);
  };

  useEffect(() => {
    getBeersPageOne();
  }, []);

  // all beers from page 2 (81-160)
  const [beersPageTwo, setBeersPageTwo] = useState([]);
  const getBeersPageTwo = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=2&per_page=80"
    );
    const data = await response.json();
    setBeersPageTwo(data);
  };

  useEffect(() => {
    getBeersPageTwo();
  }, []);

  // all beers from page 3 (161-240)
  const [beersPageThree, setBeersPageThree] = useState([]);
  const getBeersPageThree = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=3&per_page=80"
    );
    const data = await response.json();
    setBeersPageThree(data);
  };

  useEffect(() => {
    getBeersPageThree();
  }, []);

  // all beers from page 4 (241-320)
  const [beersPageFour, setBeersPageFour] = useState([]);
  const getBeersPageFour = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=4&per_page=80"
    );
    const data = await response.json();
    setBeersPageFour(data);
  };

  useEffect(() => {
    getBeersPageFour();
  }, []);

  // all beers from page 5 (320-325)
  const [beersPageFive, setBeersPageFive] = useState([]);
  const getBeersPageFive = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=5&per_page=80"
    );
    const data = await response.json();
    setBeersPageFive(data);
  };

  useEffect(() => {
    getBeersPageFive();
  }, []);

  const allBeers = beersPageOne.concat(
    beersPageTwo,
    beersPageThree,
    beersPageFour,
    beersPageFive
  );

  // filter by user search input

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const userSearchInput = event.target.value.toLowerCase();
    setSearchTerm(userSearchInput);
  };

  const filteredBeersBySearch = allBeers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();
    return beerNameLower.includes(searchTerm);
  });

  // filter by checkboxes
  const [searchFilter, setSearchFilter] = useState("");
  const handleChange = (event) => {
    setSearchFilter(event.target.value);
  };

  // all beers from classic range
  const [classicBeers, setClassicBeers] = useState([]);
  const getClassicBeers = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?brewed_before=01-2010&per_page=80"
    );
    const data = await response.json();
    setClassicBeers(data);
    console.log(data);
  };

  useEffect(() => {
    getClassicBeers();
  }, []);

  return (
    <div>
      <Nav />
      <SearchBox
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
      />
      <BeerContainer
        title="Search results: "
        beersArr={filteredBeersBySearch}
      />
    </div>
  );
};

export default App;
