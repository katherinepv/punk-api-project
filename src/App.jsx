import "./App.scss";
import beers from "./data/beers";
import Nav from "./containers/Nav/Nav";

import Main from "./containers/Main/Main";
import SearchMenu from "./containers/SearchMenu/SearchMenu";

const App = () => {
  return (
    <div>
      <Nav />
      <Main title="All Beers" beersArr={beers} />
    </div>
  );
};

export default App;
