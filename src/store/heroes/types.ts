export interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  legs: number;
}

export type ApiResponse = Record<string, any>;

export const enum HeroesActionTypes {
  FETCH_REQUEST = "@@heroes/FETCH_REQUEST",
  FETCH_SUCCESS = "@@heroes/FETCH_SUCCESS",
  FETCH_ERROR = "@@heroes/FETCH_ERROR",
  SELECTED = "@@heroes/SELECTED"
}

export interface HeroesState {
  readonly loading: boolean;
  readonly data: Hero[];
  readonly errors?: string;
}

export const initialHeroesState = {
  loading: false,
  data: [],
  errors: ""
};
