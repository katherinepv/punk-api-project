import "./SearchFilterCheckbox";

const SearchFilterCheckbox = ({ checkboxDescriptor, handleChange }) => {
  return (
    <form>
      <label className="search-checkbox" htmlFor={checkboxDescriptor}>
        {checkboxDescriptor}
      </label>
      <input
        type="checkbox"
        onChange={handleChange}
        id={checkboxDescriptor}
        name={checkboxDescriptor}
      />
    </form>
  );
};
export default SearchFilterCheckbox;
