import { IoIosClose } from "react-icons/io";
import { useSearch } from "../stores/useSearch";
import { useFilters } from "../stores/useFilters";
import "../assets/styles/components/CurrentFilters.scss";

const CurrentFilters = () => {
  const { searchTerm, updateSearchTerm } = useSearch();
  const {
    colors,
    updateColorsFilters,
    families,
    updateFamiliesFilters,
    vitamins,
    updateVitaminsFilters,
  } = useFilters();

  const renderCheckedItems = (items, updateFunction) =>
    items
      .filter((item) => item.isChecked)
      .map((item) => (
        <li className="current-filters__filter" key={item.name}>
          <p className="current-filters__filter-text">{item.name}</p>
          <button
            className="current-filters__remove-button"
            onClick={() => updateFunction(item.name)}
          >
            <IoIosClose />
          </button>
        </li>
      ));

  return (
    <ul className="current-filters">
      {renderCheckedItems(colors, updateColorsFilters)}
      {renderCheckedItems(families, updateFamiliesFilters)}
      {renderCheckedItems(vitamins, updateVitaminsFilters)}
      {searchTerm.trim() != "" && (
        <li className="current-filters__filter">
          <p className="current-filters__filter-text">"{searchTerm}"</p>
          <button
            className="current-filters__remove-button"
            onClick={() => updateSearchTerm("")}
          >
            {" "}
            <IoIosClose />
          </button>
        </li>
      )}
    </ul>
  );
};

export default CurrentFilters;
