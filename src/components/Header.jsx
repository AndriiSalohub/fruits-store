import { NavLink } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFruits } from "../stores/useFruits";
import "../assets/styles/components/Header.scss";
import { useSearch } from "../stores/useSearch";

const Header = () => {
  const { toggleShowOnlyFavorites, fruits, showOnlyFavorites } = useFruits();
  const { updateSearchTerm } = useSearch();

  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__title">fruits.</h1>
        <nav className="header__navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/store">Store</NavLink>
        </nav>
      </div>
      <div className="header__right">
        <div className="header__search">
          <input
            type="text"
            placeholder="Search"
            className="header__search-input"
            onChange={(e) => updateSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <NavLink to="/store" className="header__favorite">
            {showOnlyFavorites ? (
              <FaHeart size={30} onClick={toggleShowOnlyFavorites} />
            ) : (
              <FaRegHeart size={30} onClick={toggleShowOnlyFavorites} />
            )}
            <span className="header__favorite-number">
              {" "}
              {fruits.filter((fruit) => fruit.isFavorite == true).length}
            </span>
          </NavLink>
          <NavLink to="/bag">
            <IoBagHandleOutline size={30} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
