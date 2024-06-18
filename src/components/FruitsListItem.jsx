import PropTypes from "prop-types";
import { MdOutlineShoppingBag, MdShoppingBag } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useFruits } from "../stores/useFruits";

const FruitsListItem = ({ fruit }) => {
  const { id, name, image, family, price, isFavorite, inBag } = fruit;
  const { toggleLike, toggleInBag } = useFruits();

  return (
    <Link to={name}>
      <motion.li
        className="fruits-list__item"
        layout
        initial={{ opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring" }}
      >
        <button
          onClick={() => {
            toggleLike(id);
            e.stopPropagation();
            e.preventDefault();
          }}
          className="fruits-list__item-like"
        >
          {isFavorite ? <FaHeart className="liked" /> : <FaRegHeart />}
        </button>
        <img src={image} alt={name} className="fruits-list__item-image" />
        <h4 className="fruits-list__item-name">{name}</h4>
        <h4 className="fruits-list__item-family">{family.split(", ")}</h4>
        <div>
          <p className="fruits-list__item-price">${price}</p>
          <button
            className="fruits-list__item-in-bag-button"
            onClick={(e) => {
              toggleInBag(id);
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            {inBag ? <MdShoppingBag /> : <MdOutlineShoppingBag />}
          </button>
        </div>
      </motion.li>
    </Link>
  );
};

FruitsListItem.propTypes = {
  fruit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FruitsListItem;
