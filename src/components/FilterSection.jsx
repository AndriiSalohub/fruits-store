/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../assets/styles/components/FilterSection.scss";

const FilterSection = ({ title, items, itemType }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [sectionHeight, setSectionHeight] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    setSectionHeight(sectionRef.current.scrollHeight);
  }, []);

  const toggleSectionOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <section className={`filters__section filters__${itemType}`}>
      <div className="filters__block">
        <h4 className={`filters__title filters__title_${itemType}`}>{title}</h4>
        <IoIosArrowUp
          onClick={toggleSectionOpen}
          className={`arrow-icon ${isOpen ? "arrow-rotate-open" : "arrow-rotate-closed"}`}
        />
      </div>
      <ul
        ref={sectionRef}
        className={`filters__section-list filters__${itemType}-list ${isOpen ? "open-section" : ""}`}
        style={{
          height: isOpen ? `${sectionHeight}px` : "0px",
        }}
      >
        {items.map((item) => (
          <li
            className={`filters__section-list-item filters__${itemType}-list-item`}
            key={item.name}
          >
            <input
              type="checkbox"
              className={`filters__section-checkbox filters__${itemType}-checkbox`}
            />
            <p className={`filters__section-name filters__${itemType}-name`}>
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default FilterSection;
