import { create } from "zustand";
import { initialFruits } from "../data/fruits";

export const useFruits = create((set) => ({
  fruits: initialFruits,
}));
