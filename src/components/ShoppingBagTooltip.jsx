import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useFruits } from "../stores/useFruits";
import { useCheckout } from "../stores/useCheckout";
import "../assets/styles/components/ShoppingBagTooltip.scss";

const ShoppingBagTooltip = ({ fruits }) => {
  const { deleteFruit } = useFruits();
  const { toggleCheckout } = useCheckout();

  return (
    <>
      <Tooltip
        anchorSelect="#bag"
        clickable={true}
        place="bottom-end"
        opacity={1}
        className="shopping-bag-tooltip"
        border="1px solid #e5e5e5"
        variant="light"
      >
        <h2 className="shopping-bag-tooltip__title">Shopping Bag</h2>
        <ul className="shopping-bag-tooltip__list">
          {fruits
            .filter((fruit) => fruit.inBag)
            .map((fruit) => (
              <li key={fruit.id} className="shopping-bag-tooltip__list-item">
                <div className="shopping-bag-tooltip__list-item-image-container">
                  <img
                    src={`../../${fruit.image}`}
                    alt={fruit.name}
                    className="shopping-bag-tooltip__list-item-image"
                  />
                </div>
                <div className="shopping-bag-tooltip__list-item-details">
                  <h4 className="shopping-bag-tooltip__list-item-details-name">
                    {fruit.name}
                  </h4>
                  <p className="shopping-bag-tooltip__list-item-details-family">
                    {fruit.family}
                  </p>
                  <p className="shopping-bag-tooltip__list-item-details-quantity">
                    Qty: {fruit.quantity}
                  </p>
                </div>
                <button
                  className="shopping-bag-tooltip__list-item-delete delete-button"
                  onClick={(e) => {
                    deleteFruit(fruit.id);
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <FaRegTrashAlt size={15} />
                </button>
                <span className="shopping-bag-tooltip__list-item-price">
                  ${(fruit.price * fruit.quantity).toFixed(2)}
                </span>
              </li>
            ))}
        </ul>
        <div className="shopping-bag-tooltip__total">
          <span className="shopping-bag-tooltip__total-label">
            Total <span>(incl. VAT)</span>
          </span>
          <span>
            $
            {fruits
              .filter((fruit) => fruit.inBag)
              .reduce((total, fruit) => total + fruit.price * fruit.quantity, 0)
              .toFixed(2)}
          </span>
        </div>
        <button
          className="shopping-bag-tooltip__checkout-button checkout blue-button"
          onClick={toggleCheckout}
        >
          Checkout
        </button>
        <button className="shopping-bag-tooltip__checkout-button see-in-bag outlined-button">
          <MdOutlineShoppingBag size={15} />
          <NavLink to="/bag">
            <p> See in Bag</p>
          </NavLink>
        </button>
      </Tooltip>
    </>
  );
};

ShoppingBagTooltip.propTypes = {
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

export default ShoppingBagTooltip;
