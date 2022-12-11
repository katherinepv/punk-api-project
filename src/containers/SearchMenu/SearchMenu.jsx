import SearchBox from "../../components/SearchBox/SearchBox";
import SearchFilterCheckbox from "../../components/SearchFilterCheckBox/SearchFilterCheckbox";
import blackCross from "../../assets/images/black-cross.png";
import "./SearchMenu.scss";

const SearchMenu = ({ toggleSearchMenu }) => {
  return (
    <div className="search-menu">
      <div className="search-menu__content">
        <img
          className="search-menu__cross"
          src={blackCross}
          alt="Close search"
          onClick={toggleSearchMenu}
        />
        <SearchBox label="Search: " />
        <SearchFilterCheckbox checkboxDescriptor="High ABV (>6.0%)" />
        <SearchFilterCheckbox checkboxDescriptor="Classic Range" />
        <SearchFilterCheckbox checkboxDescriptor="Acidic (pH < 4)" />
      </div>
    </div>
  );
};

export default SearchMenu;
