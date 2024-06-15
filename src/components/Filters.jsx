import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import "../assets/styles/components/Filters.scss";
import { initialFilters } from "../data/filters";
import FilterSection from "./FilterSection.jsx";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [isColorsOpen, setIsColorsOpen] = useState(true);
  const [colorsHeight, setColorsHeight] = useState(0);
  const colorsRef = useRef(null);

  useEffect(() => {
    setColorsHeight(colorsRef.current.scrollHeight);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleColor = (colorName) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(colorName)
        ? prevSelectedColors.filter((color) => color !== colorName)
        : [...prevSelectedColors, colorName],
    );
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
            {initialFilters.colors.map((color) => (
              <li
                className={`filters__color-list-item ${selectedColors.includes(color.name) ? "selected" : ""}`}
                key={color.name}
                onClick={() => toggleColor(color.name)}
              >
                <div style={{ backgroundColor: color.name.toLowerCase() }}>
                  {selectedColors.includes(color.name) && (
                    <span className="tick-mark"></span>
                  )}
                </div>
                <p className="filters__color-name">{color.name}</p>
              </li>
            ))}
          </ul>
        </section>
        <FilterSection
          title="Family"
          items={initialFilters.families}
          itemType="family"
        />
        <FilterSection
          title="Vitamins"
          items={initialFilters.vitamins}
          itemType="vitamins"
        />
      </aside>
    </>
  );
};

export default Filters;
