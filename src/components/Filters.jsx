import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import "../assets/styles/components/Filters.scss";
import FilterSection from "./FilterSection.jsx";
import { useFilters } from "../stores/useFilters.js";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isColorsOpen, setIsColorsOpen] = useState(true);
  const [colorsHeight, setColorsHeight] = useState(0);
  const colorsRef = useRef(null);

  const {
    colors,
    toggleColorFilter,
    families,
    toggleFamilyFilter,
    vitamins,
    toggleVitaminFilter,
  } = useFilters();

  useEffect(() => {
    setColorsHeight(colorsRef.current.scrollHeight);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleColorsOpen = () => {
    setIsColorsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleMenu} className="filters-toggle">
        {isOpen ? <RxCross2 /> : <IoMenu />}
      </button>
      <aside className={`filters ${isOpen ? "open" : ""}`}>
        <section className="filters__color">
          <div className="filters__block">
            <h4 className="filters__title filters__title_color">Color</h4>
            <IoIosArrowUp
              onClick={toggleColorsOpen}
              className={`arrow-icon ${isColorsOpen ? "arrow-rotate-open" : "arrow-rotate-closed"}`}
            />
          </div>
          <ul
            ref={colorsRef}
            className={`filters__color-list ${isColorsOpen ? "open-colors" : ""}`}
            style={{
              height: isColorsOpen ? `${colorsHeight}px` : "0px",
            }}
          >
            {colors.map((color) => (
              <li
                className={`filters__color-list-item ${color.isChecked ? "selected" : ""}`}
                key={color.name}
                onClick={() => {
                  toggleColorFilter(color.name);
                }}
              >
                <div style={{ backgroundColor: color.name.toLowerCase() }}>
                  {color.isChecked && <span className="tick-mark"></span>}
                </div>
                <p className="filters__color-name">{color.name}</p>
              </li>
            ))}
          </ul>
        </section>
        <FilterSection
          title="Family"
          items={families}
          itemType="family"
          updateFilters={toggleFamilyFilter}
        />
        <FilterSection
          title="Vitamins"
          items={vitamins}
          itemType="vitamins"
          updateFilters={toggleVitaminFilter}
        />
      </aside>
    </>
  );
};

export default Filters;
