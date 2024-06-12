import { useEffect, useRef, useState } from "react";
import "../assets/styles/components/FruitsSlider.scss";
import { initialFruits } from "../data/fruits";
import { motion } from "framer-motion";

const FruitsSlider = () => {
  const [fruits, setFruits] = useState([]);
  const [width, setWidth] = useState([0]);
  const fruitsSlider = useRef(null);

  useEffect(() => {
    setFruits(initialFruits.slice(0, 7));
  }, []);

  useEffect(() => {
    setWidth(
      fruitsSlider.current.scrollWidth - fruitsSlider.current.offsetWidth,
    );
  });

  return (
    <>
      <motion.section ref={fruitsSlider} className="fruits-slider">
        <motion.ul
          className="fruits-slider__list"
          drag="x"
          dragConstraints={{
            right: 0,
            left: -width,
          }}
        >
          {fruits.map((fruit) => (
            <motion.li key={fruit.id} className="fruits-slider__list-item">
              <img src={fruit.image} alt={fruit.name} draggable="false" />
              <p className="fruits-slider__list-item-title">{fruit.name}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </>
  );
};

export default FruitsSlider;
