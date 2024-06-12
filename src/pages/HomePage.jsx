import StoreInfo from "../components/StoreInfo";
import "../assets/styles/pages/HomePage.scss";
import FruitsSlider from "../components/FruitsSlider";

const HomePage = () => {
  return (
    <main className="home-page">
      <StoreInfo />
      <FruitsSlider />
    </main>
  );
};

export default HomePage;
