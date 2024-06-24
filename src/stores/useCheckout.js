import { create } from "zustand";

export const useCheckout = create((set) => ({
  isCheckout: false,
  toggleCheckout: () =>
    set((state) => ({
      isCheckout: !state.isCheckout,
    })),
}));
