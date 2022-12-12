import "./App.scss";
import Nav from "./containers/Nav/Nav";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import { useState } from "react";
import { useEffect } from "react";
// import SearchMenu from "./containers/SearchMenu/SearchMenu";

const App = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=1&per_page=80"
    );
    const data = await response.json();
    setBeers(data);
    console.log(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div>
      <Nav />
      {beers && <BeerContainer beersArr={beers} />}
    </div>
  );
};

export default App;
