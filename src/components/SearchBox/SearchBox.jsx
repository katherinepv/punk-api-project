import "./SearchBox.scss";

const SearchBox = ({ label, searchTerm, onInput }) => {
  const capitalizedLabel = label[0].toUpperCase() + label.slice(1);

  return (
    <form className="search-box">
      <label className="search-box__label" htmlFor={label}>
        {capitalizedLabel}
      </label>
      <input
        className="search-box__input"
        type="text"
        name={label}
        value={searchTerm}
        onInput={onInput}
      />
    </form>
  );
};

export default SearchBox;
