import { useParams } from "react-router-dom";
import { useFruits } from "../stores/useFruits";
import { IoCubeOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import "../assets/styles/components/FruitPageItem.scss";

const FruitPageItem = () => {
  const { fruits } = useFruits();
  const { fruitName } = useParams();
  const [fruit] = fruits.filter((fruit) => fruit.name === fruitName);

  return (
    <article className="fruit-page-item">
      <div className="fruit-page-item__view-details">
        <div className="fruit-page-item__image-container">
          <img
            src={`../../${fruit.image}`}
            alt={fruit.name}
            className="fruit-page-item__image"
          />
        </div>
        <ul className="fruit-page-item__characteristics">
          {fruit.colors.map((color) => (
            <li
              className="fruit-page-item__characteristic fruit-page-item__characteristic_color"
              key={color}
            >
              {color}
            </li>
          ))}
          {fruit.vitamins.map((vitamin) => (
            <li
              className="fruit-page-item__characteristic fruit-page-item__characteristic_vitamin"
              key={vitamin}
            >
              {vitamin}
            </li>
          ))}
        </ul>
      </div>
      <div className="fruit-page-item__text-details">
        <h2 className="fruit-page-item__title">{fruit.name}</h2>
        <p className="fruit-page-item__family">{fruit.family} Family</p>
        <p className="fruit-page-item__stock">
          <IoCubeOutline /> In Stock
        </p>
        <p className="fruit-page-item__price">${fruit.price.toFixed(1)}</p>
        <div className="fruit-page-item__quantity">
          <button className="fruit-page-item__quantity-button fruit-page-item__quantity-button_decrease">
            -
          </button>
          <span className="fruit-page-item__current-quantity">
            {fruit.quantity}
          </span>
          <button className="fruit-page-item__quantity-button fruit-page-item__quantity-button_increase">
            +
          </button>
        </div>
        <p className="fruit-page-item__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          iusto cupiditate nulla earum aut ipsum veritatis quaerat recusandae?
          Illum blanditiis illo facere nobis exercitationem aspernatur officiis.
          Eum, totam pariatur. Perspiciatis!
        </p>
        <div className="fruit-page-item__actions">
          <button className="fruit-page-item__actions-button fruit-page-item__actions-button_buy-now">
            Buy Now
          </button>
          <button className="fruit-page-item__actions-button fruit-page-item__actions-button_to-bag">
            <MdOutlineShoppingBag size={15} />
            Add to Bag
          </button>
        </div>
      </div>
    </article>
  );
};

export default FruitPageItem;
