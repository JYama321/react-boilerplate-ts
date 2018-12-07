export type ThemeColors = "light" | "dark";

export const enum LayoutActionTypes {
  SET_THEME = "@@layout/SET_THEME"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface LayoutState {
  readonly theme: ThemeColors;
}

export const initialLayoutState: LayoutState = {
  theme: "dark"
};
