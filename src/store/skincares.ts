import { create } from "zustand";

/* interface SkincareState {
  bears: number;
  increase: (by: number) => void;
} */

export const skincareStore = create((set) => ({
  skincare: {
    name: "Ma Nyo",
  },
}));
