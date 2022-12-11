import SearchBox from "../../components/SearchBox/SearchBox";
import SearchFilterCheckbox from "../../components/SearchFilterCheckBox/SearchFilterCheckbox";
import "./SearchMenu.scss";

const SearchMenu = () => {
  return (
    <div className="search-menu">
      <SearchBox />
      <SearchFilterCheckbox checkboxDescriptor="High ABV (>6.0%)" />
      <SearchFilterCheckbox checkboxDescriptor="Classic Range" />
      <SearchFilterCheckbox checkboxDescriptor="Acidic (pH < 4)" />
    </div>
  );
};

export default SearchMenu;
