import { NavLink } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import "../assets/styles/components/Header.scss";

const Header = () => {
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
        <input
          type="text"
          placeholder="Search"
          className="header__search-input"
        />
        <div>
          <NavLink to="/store">
            <FaRegHeart size={30} />
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
