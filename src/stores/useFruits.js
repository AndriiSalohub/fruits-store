import { create } from "zustand";
import { initialFruits } from "../data/fruits";

export const useFruits = create((set) => ({
  fruits: initialFruits,
  showOnlyFavorites: false,
  toggleLike: (id) =>
    set((state) => ({
      fruits: state.fruits.map((fruit) =>
        fruit.id === id ? { ...fruit, isFavorite: !fruit.isFavorite } : fruit,
      ),
    })),
  toggleShowOnlyFavorites: () =>
    set((state) => ({
      showOnlyFavorites: !state.showOnlyFavorites,
    })),
}));
