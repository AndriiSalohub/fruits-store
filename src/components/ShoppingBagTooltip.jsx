import PropTypes from "prop-types";
import "../assets/styles/components/ShoppingBag.scss";
import { Tooltip } from "react-tooltip";
import ShoppingBag from "./ShoppingBag";

const ShoppingBagTooltip = ({ fruits }) => {
  return (
    <Tooltip
      anchorSelect="#bag"
      clickable={true}
      place="bottom-end"
      opacity={1}
      className="shopping-bag-tooltip"
      border="1px solid #e5e5e5"
      variant="light"
    >
      <ShoppingBag fruits={fruits} />
    </Tooltip>
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
