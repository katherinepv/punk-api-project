import "./SearchBox.scss";

const SearchBox = ({ label }) => {
  return (
    <form className="search-box">
      <label className="search-box__label" htmlFor={label}>
        {label}
      </label>
      <input
        className="search-box__input"
        type="text"
        name={label}
        // value={searchTerm}
      />
    </form>
  );
};

export default SearchBox;
