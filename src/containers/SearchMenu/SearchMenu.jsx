import SearchBox from "../../components/SearchBox/SearchBox";
import SearchFilterCheckbox from "../../components/SearchFilterCheckBox/SearchFilterCheckbox";
import blackCross from "../../assets/images/black-cross.png";
import "./SearchMenu.scss";
import BeerContainer from "../BeerContainer/BeerContainer";


  return (
    <div className="search-menu">
      <div className="search-menu__content">
        <img
          className="search-menu__cross"
          src={blackCross}
          alt="Close search"
          // onClick={toggleSearchMenu}
        />
        <SearchBox
          label="Search: "
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
        <SearchFilterCheckbox checkboxDescriptor="High ABV (>6.0%)" />
        <SearchFilterCheckbox checkboxDescriptor="Classic Range" />
        <SearchFilterCheckbox checkboxDescriptor="Acidic (pH < 4)" />
        <BeerContainer
          title="Search results: "
          beersArr={filteredBeersBySearch}
        />
      </div>
    </div>
  );
};

export default SearchMenu;
