import { Link } from "react-router-dom";
import "../assets/styles/components/StoreInfo.scss";

const StoreInfo = () => {
  return (
    <section className="store-info">
      <h2 className="store-info__title">Welcome to fruits.</h2>
      <h4 className="store-info__subtitle">
        Discover our selection of fresh fruits, bursting with flavor and
        vitality. Delivered straight from the farm to your table.
      </h4>
      <button className="store-info__shop-button">
        <Link to="/store">Shop Now</Link>
      </button>
    </section>
  );
};

export default StoreInfo;
