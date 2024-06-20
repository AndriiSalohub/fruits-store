import { useFruits } from "../stores/useFruits";
import { IoCubeOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import "../assets/styles/components/ShoppingBag.scss";

const ShoppingBag = () => {
  const { fruits, decreaseQuantity, increaseQuantity, deleteFruit } =
    useFruits();

  if (fruits.filter((fruit) => fruit.inBag).length < 1) {
    return <h2 className="shopping-bag_empty">Bag is empty</h2>;
  }

  return (
    <section className="shopping-bag">
      <ul className="shopping-bag__list">
        {fruits
          .filter((fruit) => fruit.inBag)
          .map((fruit) => (
            <li className="shopping-bag__item" key={fruit.id}>
              <div className="shopping-bag__item-container">
                <div className="shopping-bag__item-image-container">
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="shopping-bag__item-image"
                  />
                </div>
                <div className="shopping-bag__item-info">
                  <h4 className="shopping-bag__item-title">{fruit.name}</h4>
                  <p className="shopping-bag__item-family">
                    {fruit.family} Family
                  </p>
                  <p className="shopping-bag__item-stock">
                    <IoCubeOutline /> In Stock
                  </p>
                  <p className="shopping-bag__item-quantity">
                    Qty: {fruit.quantity}
                  </p>
                </div>
              </div>
              <div className="shopping-bag__item-quantity-actions">
                <button
                  className="shopping-bag__item-quantity-actions-button shopping-bag__item-quantity-actions-button_decrease"
                  onClick={() => decreaseQuantity(fruit.id)}
                  disabled={fruit.quantity === 1}
                >
                  -
                </button>
                <span className="shopping-bag__item-current-quantity">
                  {fruit.quantity}
                </span>
                <button
                  className="shopping-bag__item-quantity-actions-button shopping-bag__item-quantity-actions-button_increase"
                  onClick={() => increaseQuantity(fruit.id)}
                >
                  +
                </button>
              </div>
              <button
                className="shopping-bag__item-delete-button"
                onClick={(e) => {
                  deleteFruit(fruit.id);
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <FaRegTrashAlt size={15} />
              </button>
              <p className="shopping-bag__item-price">
                {(fruit.price * fruit.quantity).toFixed(1)} $
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ShoppingBag;
