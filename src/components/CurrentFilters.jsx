import { IoIosClose } from "react-icons/io";
import { useSearch } from "../stores/useSearch";
import { useFilters } from "../stores/useFilters";
import "../assets/styles/components/CurrentFilters.scss";
import { AnimatePresence, motion } from "framer-motion";

const CurrentFilters = () => {
  const { searchTerm, updateSearchTerm } = useSearch();
  const {
    colors,
    toggleColorFilter,
    families,
    toggleFamilyFilter,
    vitamins,
    toggleVitaminFilter,
  } = useFilters();

  const renderCheckedItems = (items, updateFunction) =>
    items
      .filter((item) => item.isChecked)
      .map((item) => (
        <motion.li
          className="current-filters__filter"
          key={item.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="current-filters__filter-text">{item.name}</p>
          <button
            className="current-filters__remove-button"
            onClick={() => updateFunction(item.name)}
          >
            <IoIosClose />
          </button>
        </motion.li>
      ));

  return (
    <ul className="current-filters">
      <AnimatePresence>
        {renderCheckedItems(colors, toggleColorFilter)}
        {renderCheckedItems(families, toggleFamilyFilter)}
        {renderCheckedItems(vitamins, toggleVitaminFilter)}
        {searchTerm.trim() != "" && (
          <motion.li className="current-filters__filter">
            <p className="current-filters__filter-text">"{searchTerm}"</p>
            <button
              className="current-filters__remove-button"
              onClick={() => updateSearchTerm("")}
            >
              {" "}
              <IoIosClose />
            </button>
          </motion.li>
        )}
      </AnimatePresence>
    </ul>
  );
};

export default CurrentFilters;
