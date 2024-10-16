import { Complex } from "./complex";
import { Developer } from "./developer";

export type SearchResponse = {
  complexes: Complex[];
  developers: Developer[];
};
