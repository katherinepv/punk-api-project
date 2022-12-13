import "./FilterCheckboxes";

const FilterCheckboxes = ({ onChange, selected, label, options }) => {
  return (
    <div className="filter-checkboxes">
      <p>{label}</p>
      {options.map((option, index) => {
        const optionLower = option.toLowerCase();
        const optionCapitalized =
          optionLower[0].toUpperCase() + optionLower.slice(1);
        return (
          <div key={"filter-checkbox" + option + index}>
            <input
              type="checkbox"
              name="filter"
              value={optionLower}
              checked={optionLower === selected.toLowerCase()}
              onChange={onChange}
            />
            <label className="filter-checkboxes__label" htmlFor={optionLower}>
              {optionCapitalized}
            </label>
          </div>
        );
      })}
    </div>
  );
};
export default FilterCheckboxes;
