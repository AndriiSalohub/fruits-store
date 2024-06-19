import { useEffect, useRef, useState } from "react";
import "../assets/styles/components/FruitsSlider.scss";
import { motion } from "framer-motion";
import { useFruits } from "../stores/useFruits";

const FruitsSlider = () => {
  const { fruits } = useFruits();
  const [width, setWidth] = useState([0]);
  const fruitsSlider = useRef(null);

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
          {fruits.slice(0, 7).map((fruit) => (
            <motion.li className="fruits-slider__list-item" key={fruit.id}>
              <img src={fruit.image} alt={fruit.name} draggable="false" />
              <h4 className="fruits-slider__list-item-title">{fruit.name}</h4>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </>
  );
};

export default FruitsSlider;
