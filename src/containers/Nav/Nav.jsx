import "./Nav.scss";
import search from "../../assets/images/search-icon.png";
import profile from "../../assets/images/profile-picture.png";
// import SearchMenu from "../SearchMenu/SearchMenu";
// import { useState } from "react";

const Nav = ({ allBeers }) => {
  // const [showSearchMenu, setShowSearchMenu] = useState(false);

  // const toggleSearchMenu = () => {
  //   setShowSearchMenu(!showSearchMenu);
  // };

  return (
    <nav className="nav">
      {/* {showSearchMenu && (
        <SearchMenu toggleSearchMenu={toggleSearchMenu} beersArr={allBeers} />
      )} */}
      <img
        className="nav__icon--search"
        src={search}
        alt="search icon"
        // onClick={toggleSearchMenu}
      />
      <h2 className="nav__heading">Beers.</h2>
      <img className="nav__icon--profile" src={profile} alt="profile icon" />
    </nav>
  );
};

export default Nav;
