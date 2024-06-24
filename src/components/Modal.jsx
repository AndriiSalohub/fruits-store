import { useEffect } from "react";
import "../assets/styles/components/Modal.scss";
import { useCheckout } from "../stores/useCheckout";

const Modal = () => {
  const { isCheckout, toggleCheckout } = useCheckout();
  useEffect(() => {
    if (isCheckout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCheckout]);

  return (
    <div className={`container ${isCheckout ? "show" : ""}`}>
      <div className="modal">
        <p className="modal__text">
          Congratulations! You would have made a successful purchase if this was
          a real store 😁
        </p>
        <button className="modal__ok-button" onClick={toggleCheckout}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
