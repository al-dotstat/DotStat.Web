import { create } from "zustand";

type State = {
  developersIds: number[];
  districtsIds: number[];
};

type Action = {
  setDevelopers: (developers: State["developersIds"]) => void;
  setDistricts: (districts: State["districtsIds"]) => void;
  setFilters: (state: State) => void;
};

export type ComplexFilters = State & Action;

const useComplexFiltersStore = create<ComplexFilters>((set) => ({
  developersIds: [],
  districtsIds: [],
  setDevelopers: (developers) => set(() => ({ developersIds: developers })),
  setDistricts: (districts) => set(() => ({ districtsIds: districts })),
  setFilters: (filters) => set(() => filters),
}));

export default useComplexFiltersStore;
