"use client";

import { Complex } from "@/shared/types/complex";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export type BasketComplex = {
  complex: Complex;
  date?: string;
  includeFlats: boolean;
  includeParkings: boolean;
  includeStorages: boolean;
  includeCommercials: boolean;
};

type State = {
  complexes: BasketComplex[];
};

type Action = {
  addToBasket: (complex: BasketComplex) => void;
  removeFromBasket: (id: BasketComplex["complex"]["id"]) => void;
  clearBasket: () => void;
  updateComplex: (complex: BasketComplex) => void;
};

export type ComplexBasket = State & Action;

const useComplexBasketStore = create<ComplexBasket>()(
  devtools(
    persist(
      (set) => ({
        complexes: [],
        addToBasket: (complex) =>
          set((state) => ({ complexes: [complex, ...state.complexes] })),
        removeFromBasket: (id) =>
          set((state) => ({
            complexes: state.complexes.filter((c) => c.complex.id !== id),
          })),
        clearBasket: () => set(() => ({ complexes: [] })),
        updateComplex: (complex) =>
          set((state) => ({
            complexes: [
              complex,
              ...state.complexes.filter(
                (c) => c.complex.id !== complex.complex.id
              ),
            ],
          })),
      }),
      {
        name: "basket-storage",
      }
    )
  )
);

export default useComplexBasketStore;
