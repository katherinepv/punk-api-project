import "./SearchFilterCheckbox";

const SearchFilterCheckbox = ({ checkboxDescriptor }) => {
  return (
    <form>
      <label htmlFor={checkboxDescriptor}>{checkboxDescriptor}</label>
      <input
        type="checkbox"
        id={checkboxDescriptor}
        name={checkboxDescriptor}
      />
    </form>
  );
};
export default SearchFilterCheckbox;
