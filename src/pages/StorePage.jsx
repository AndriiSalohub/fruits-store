import "../assets/styles/pages/StorePage.scss";
import FruitsList from "../components/FruitsList";
import Filters from "../components/Filters";
import Modal from "../components/Modal";

const StorePage = () => {
  return (
    <main className="store-page">
      <Filters />
      <FruitsList />
      <Modal />
    </main>
  );
};

export default StorePage;
