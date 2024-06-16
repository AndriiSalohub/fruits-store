import { useFruits } from "../stores/useFruits";
import FruitsListItem from "./FruitsListItem";
import "../assets/styles/components/FruitList.scss";

const FruitsList = () => {
  const { fruits, toggleLike, showOnlyFavorites } = useFruits();

  const filteredFruits = showOnlyFavorites
    ? fruits.filter((fruit) => fruit.isFavorite)
    : fruits;

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
