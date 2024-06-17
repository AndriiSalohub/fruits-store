import PropTypes from "prop-types";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const FruitsListItem = ({ fruit, handleLike }) => {
  const { id, name, image, family, price, isFavorite } = fruit;

  return (
    <motion.li
      className="fruits-list__item"
      layout
      initial={{ opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring" }}
    >
      <button onClick={() => handleLike(id)} className="fruits-list__item-like">
        {isFavorite ? <FaHeart className="liked" /> : <FaRegHeart />}
      </button>
      <img src={image} alt={name} className="fruits-list__item-image" />
      <h4 className="fruits-list__item-name">{name}</h4>
      <h4 className="fruits-list__item-family">{family.split(", ")}</h4>
      <div>
        <p className="fruits-list__item-price">${price}</p>
        <button className="fruits-list__item-buy-button">
          <IoBagHandleOutline />
        </button>
      </div>
    </motion.li>
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
  handleLike: PropTypes.func.isRequired,
};

export default FruitsListItem;
