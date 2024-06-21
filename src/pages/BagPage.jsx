import "../assets/styles/pages/BagPage.scss";
import OrderSummary from "../components/OrderSummary";
import ShoppingBag from "../components/ShoppingBag";

const BagPage = () => {
  return (
    <main className="bag-page">
      <h2 className="bag-page__title">Shopping Bag</h2>
      <div className="bag-page__content">
        <ShoppingBag />
        <OrderSummary />
      </div>
    </main>
  );
};

export default BagPage;
