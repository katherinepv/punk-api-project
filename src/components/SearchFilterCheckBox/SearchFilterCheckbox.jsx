import "./SearchFilterCheckbox";

const SearchFilterCheckbox = ({ checkboxDescriptor }) => {
  return (
    <form>
      <label className="search-checkbox" htmlFor={checkboxDescriptor}>
        {checkboxDescriptor}
      </label>
      <input
        type="checkbox"
        id={checkboxDescriptor}
        name={checkboxDescriptor}
      />
    </form>
  );
};
export default SearchFilterCheckbox;
