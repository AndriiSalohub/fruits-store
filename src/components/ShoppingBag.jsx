import PropTypes from "prop-types";
import "../assets/styles/components/ShoppingBag.scss";
import { Tooltip } from "react-tooltip";
import { FaRegTrashAlt } from "react-icons/fa";

const ShoppingBag = ({ fruits }) => {
  return (
    <Tooltip
      anchorSelect="#bag"
      clickable={true}
      place="bottom-end"
      opacity={1}
      className="shopping-bag"
      border="1px solid #e5e5e5"
      variant="light"
    >
      <h2 className="shopping-bag__title">Shopping Bag</h2>
      <ul className="shopping-bag__list">
        {fruits
          .filter((fruit) => fruit.inBag)
          .map((fruit) => (
            <li key={fruit.id} className="shopping-bag__list-item">
              <div className="shopping-bag__list-item-image-container">
                <img
                  src={`../../${fruit.image}`}
                  alt={fruit.name}
                  className="shopping-bag__list-item-image"
                />
              </div>
              <div className="shopping-bag__list-item-details">
                <h4 className="shopping-bag__list-item-details-name">
                  {fruit.name}
                </h4>
                <p className="shopping-bag__list-item-details-family">
                  {fruit.family}
                </p>
                <p className="shopping-bag__list-item-details-quantity">
                  Qty: {fruit.quantity}
                </p>
              </div>
              <button className="shopping-bag__list-item-delete">
                <FaRegTrashAlt size={15} />
              </button>
              <span className="shopping-bag__list-item-price">
                ${(fruit.price * fruit.quantity).toFixed(2)}
              </span>
            </li>
          ))}
      </ul>
      <div className="shopping-bag__total">
        <span className="shopping-bag__total-label">Total (incl. VAT)</span>
        <span>
          $
          {fruits
            .filter((fruit) => fruit.inBag)
            .reduce((total, fruit) => total + fruit.price * fruit.quantity, 0)
            .toFixed(2)}
        </span>
      </div>
      <button className="shopping-bag__checkout-button checkout">
        Checkout
      </button>
      <button className="shopping-bag__checkout-button see-in-bag">
        See in Bag
      </button>
    </Tooltip>
  );
};

ShoppingBag.propTypes = {
  fruits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      family: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      inBag: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default ShoppingBag;
