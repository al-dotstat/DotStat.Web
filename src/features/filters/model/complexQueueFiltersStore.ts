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

export type ComplexQueueFilters = State & Action;

const useComplexQueueFiltersStore = create<ComplexQueueFilters>((set) => ({
  developersIds: [],
  districtsIds: [],
  setDevelopers: (developers) => set(() => ({ developersIds: developers })),
  setDistricts: (districts) => set(() => ({ districtsIds: districts })),
  setFilters: (filters) => set(() => filters),
}));

export default useComplexQueueFiltersStore;
