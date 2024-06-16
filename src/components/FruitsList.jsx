import { useFruits } from "../stores/useFruits";
import FruitsListItem from "./FruitsListItem";
import "../assets/styles/components/FruitList.scss";
import { useSearch } from "../stores/useSearch";

const FruitsList = () => {
  const { fruits, toggleLike, showOnlyFavorites } = useFruits();
  const { searchTerm } = useSearch();

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

  const filteredFruits = showOnlyFavorites
    ? fruits.filter(
      (fruit) => fruit.isFavorite && filterFruitsBySearchTerm(fruit),
    )
    : fruits.filter((fruit) => filterFruitsBySearchTerm(fruit));

  return (
    <section className="fruits-section">
      <h3 className="fruits-list-title">
        Items ({filteredFruits.length}){" "}
        {showOnlyFavorites ? (
          <span className="fruits-list-title__favorites">- Favorites</span>
        ) : (
          ""
        )}
      </h3>
      <ul className="fruits-list">
        {filteredFruits.map((fruit) => (
          <FruitsListItem
            fruit={fruit}
            handleLike={toggleLike}
            key={fruit.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default FruitsList;
