import { useFruits } from "../stores/useFruits";
import "../assets/styles/components/OrderSummary.scss";

const OrderSummary = () => {
  const { fruits } = useFruits();
  const subtotal = fruits
    .filter((fruit) => fruit.inBag)
    .reduce(
      (sum, currentFruit) => sum + currentFruit.price * currentFruit.quantity,
      0,
    );
  const vat = subtotal * 0.2;

  return (
    <section className="order-summary">
      <h2 className="order-summary__title">Order Summary</h2>
      <p className="order-summary__price-total">
        ${(subtotal + vat).toFixed(2)}
      </p>
      <div className="order-summary__subtotal order-summary__price-part">
        <p className="order-summary__subtotal-text">
          Subtotal ({fruits.filter((fruit) => fruit.inBag).length} items)
        </p>
        <p className="order-summary__subtotal-number">${subtotal.toFixed(2)}</p>
      </div>
      <div className="order-summary__vat order-summary__price-part">
        <p className="order-summary__vat-text">VAT (20%)</p>
        <p className="order-summary__vat-number">${vat.toFixed(2)}</p>
      </div>
      <div className="order-summary__total order-summary__price-part">
        <p className="order-summary__total-text">Total:</p>
        <p className="order-summary__total-number">
          ${(subtotal + vat).toFixed(2)}
        </p>
      </div>
      <button className="order-summary__checkout-button blue-button">
        Checkout
      </button>
    </section>
  );
};

export default OrderSummary;
