import { ComplexFiltersParams } from "../types/complex";

export const userKeys = {
  all: ["users"] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
};

export const meKeys = {
  me: ["me"] as const,
};

export const buildingKeys = {
  all: ["buildings"] as const,
  details: () => [...buildingKeys.all, "detail"] as const,
  detail: (id: number) => [...buildingKeys.details(), id] as const,
};

export const complexKeys = {
  all: ["complexes"] as const,
  details: () => [...complexKeys.all, "detail"] as const,
  detail: (id: number) => [...complexKeys.details(), id] as const,
  search: (data: ComplexFiltersParams) =>
    [...complexKeys.details(), data] as const,
  developers: (id: number) =>
    [...complexKeys.detail(id), "developers"] as const,
  buildings: (id: number) => [...complexKeys.detail(id), "buildings"] as const,
};

export const developerKeys = {
  all: ["developers"] as const,
  details: () => [...developerKeys.all, "detail"] as const,
  detail: (id: number) => [...developerKeys.details(), id] as const,
  complexes: (id: number) =>
    [...developerKeys.detail(id), "complexes"] as const,
};

export const districtKeys = {
  all: ["districts"] as const,
  details: () => [...districtKeys.all, "detail"] as const,
  detail: (id: number) => [...districtKeys.details(), id] as const,
  complexes: (id: number) => [...districtKeys.detail(id), "complexes"] as const,
};

export const orderKeys = {
  all: ["orders"] as const,
  details: () => [...orderKeys.all, "detail"] as const,
  detail: (id: number) => [...orderKeys.details(), id] as const,
  history: () => [...orderKeys.details(), "history"] as const,
};

export const searchKeys = {
  all: ["search"] as const,
  search: (search: string) => [...searchKeys.all, search] as const,
};
