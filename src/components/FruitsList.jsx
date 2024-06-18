import { useFruits } from "../stores/useFruits";
import FruitsListItem from "./FruitsListItem";
import "../assets/styles/components/FruitList.scss";
import { useSearch } from "../stores/useSearch";
import { useFilters } from "../stores/useFilters";
import CurrentFilters from "./CurrentFilters";
import { AnimatePresence } from "framer-motion";

const FruitsList = () => {
  const { fruits, showOnlyFavorites } = useFruits();
  const { searchTerm } = useSearch();
  const { colors, families, vitamins } = useFilters();

  const filterFruitsBySearchTerm = (fruit) => {
    const search = searchTerm.toLowerCase();

    return Object.values(fruit).some((value) => {
      if (Array.isArray(value)) {
        return value.some((item) => item.toLowerCase().includes(search));
      } else if (typeof value === "string") {
        return value.toLowerCase().includes(search);
      }
      return false;
    });
  };

  const filterFruitsByFilters = (fruit) => {
    const checkedColors = colors
      .filter((color) => color.isChecked)
      .map((color) => color.name);
    const checkedFamilies = families
      .filter((family) => family.isChecked)
      .map((family) => family.name);
    const checkedVitamins = vitamins
      .filter((vitamin) => vitamin.isChecked)
      .map((vitamin) => vitamin.name);

    const colorMatch = checkedColors.length
      ? checkedColors.every((color) => fruit.colors.includes(color))
      : true;
    const familyMatch = checkedFamilies.length
      ? checkedFamilies.includes(fruit.family)
      : true;
    const vitaminMatch = checkedVitamins.length
      ? checkedVitamins.every((vitamin) => fruit.vitamins.includes(vitamin))
      : true;

    return colorMatch && familyMatch && vitaminMatch;
  };

  const filteredFruits = fruits
    .filter(filterFruitsBySearchTerm)
    .filter(filterFruitsByFilters);

  const displayedFruits = showOnlyFavorites
    ? filteredFruits.filter((fruit) => fruit.isFavorite)
    : filteredFruits;

  return (
    <section className="fruits-section">
      <h3 className="fruits-list-title">
        Items ({displayedFruits.length}){" "}
        {showOnlyFavorites ? (
          <span className="fruits-list-title__favorites">- Favorites</span>
        ) : (
          ""
        )}
      </h3>
      <CurrentFilters />
      <ul className="fruits-list">
        <AnimatePresence>
          {displayedFruits.map((fruit) => (
            <FruitsListItem fruit={fruit} key={fruit.id} />
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
};

export default FruitsList;
