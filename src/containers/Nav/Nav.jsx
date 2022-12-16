import "./Nav.scss";
import "../../assets/sass/_variables.scss";
import search from "../../assets/images/search-icon.png";
import profile from "../../assets/images/profile-picture.png";
import { Link } from "react-router-dom";
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
      <Link style={{ color: "rgb(251, 133, 0)" }} to="/">
        <h2 className="nav__heading">Beers.</h2>
      </Link>
      <img className="nav__icon--profile" src={profile} alt="profile icon" />
    </nav>
  );
};

export default Nav;
