import { create } from "zustand";

type State = {
  developersIds: number[];
  districtsIds: number[];
  metrosIds: number[];
};

type Action = {
  setDevelopers: (developers: State["developersIds"]) => void;
  setDistricts: (districts: State["districtsIds"]) => void;
  setMetros: (metros: State["metrosIds"]) => void;
  setFilters: (state: State) => void;
};

export type ComplexFilters = State & Action;

const useComplexFiltersStore = create<ComplexFilters>((set) => ({
  developersIds: [],
  districtsIds: [],
  metrosIds: [],
  setDevelopers: (developers) => set(() => ({ developersIds: developers })),
  setMetros: (metros) => set(() => ({ metrosIds: metros })),
  setDistricts: (districts) => set(() => ({ districtsIds: districts })),
  setFilters: (filters) => set(() => filters),
}));

export default useComplexFiltersStore;
