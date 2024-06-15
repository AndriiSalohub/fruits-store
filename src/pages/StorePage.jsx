import "../assets/styles/pages/StorePage.scss";
import FruitsList from "../components/FruitsList";
import Filters from "../components/Filters";

const StorePage = () => {
  return (
    <main className="store-page">
      <Filters />
      <FruitsList />
    </main>
  );
};

export default StorePage;
