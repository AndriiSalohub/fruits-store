import { IoBagHandleOutline } from "react-icons/io5";

const FruitsListItem = ({ fruit }) => {
  const { name, image, family, price } = fruit;

  return (
    <li className="fruits-list__item">
      <img src={image} alt={name} className="fruits-list__item-image" />
      <h4 className="fruits-list__item-name">{name}</h4>
      <h4 className="fruits-list__item-family">{family.split(", ")}</h4>
      <div>
        <p className="fruits-list__item-price">${price}</p>
        <button className="fruits-list__item-buy-button">
          <IoBagHandleOutline />
        </button>
      </div>
    </li>
  );
};

export default FruitsListItem;
