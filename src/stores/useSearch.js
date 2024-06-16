import { create } from "zustand";

export const useSearch = create((set) => ({
  searchTerm: "",
  updateSearchTerm: (search) =>
    set(() => ({
      searchTerm: search,
    })),
}));
