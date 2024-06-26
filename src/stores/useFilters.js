import { create } from "zustand";
import { initialFilters } from "../data/filters.js";

export const useFilters = create((set) => ({
  colors: initialFilters.colors,
  families: initialFilters.families,
  vitamins: initialFilters.vitamins,
  toggleColorFilter: (colorName) =>
    set((state) => ({
      colors: state.colors.map((color) =>
        color.name === colorName
          ? { ...color, isChecked: !color.isChecked }
          : color,
      ),
    })),
  toggleFamilyFilter: (familyName) =>
    set((state) => ({
      families: state.families.map((family) =>
        family.name === familyName
          ? { ...family, isChecked: !family.isChecked }
          : { ...family, isChecked: false },
      ),
    })),
  toggleVitaminFilter: (vitaminName) =>
    set((state) => ({
      vitamins: state.vitamins.map((vitamin) =>
        vitamin.name === vitaminName
          ? { ...vitamin, isChecked: !vitamin.isChecked }
          : vitamin,
      ),
    })),
}));
