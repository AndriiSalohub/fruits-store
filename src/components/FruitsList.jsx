import { useFruits } from "../stores/useFruits";
import FruitsListItem from "./FruitsListItem";
import "../assets/styles/components/FruitList.scss";

const FruitsList = () => {
  const { fruits, handleLike } = useFruits();

  return (
    <section className="fruits-section">
      <h3 className="fruits-list-title">Items ({fruits.length})</h3>
      <ul className="fruits-list">
        {fruits.map((fruit) => (
          <FruitsListItem
            fruit={fruit}
            handleLike={handleLike}
            key={fruit.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default FruitsList;
