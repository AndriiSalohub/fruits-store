import { create } from "zustand";
import { initialFruits } from "../data/fruits";

export const useFruits = create((set) => ({
  fruits: initialFruits,
  handleLike: (id) =>
    set((state) => ({
      fruits: state.fruits.map((fruit) =>
        fruit.id === id ? { ...fruit, isFavorite: !fruit.isFavorite } : fruit,
      ),
    })),
}));
