import { Action, AnyAction, combineReducers, Dispatch } from "redux";
import { all, fork } from "redux-saga/effects";
import { heroesReducer } from "./heroes/reducer";
import heroesSaga from "./heroes/sagas";
import { HeroesState, initialHeroesState } from "./heroes/types";
import { initialLayoutState, layoutReducer, LayoutState } from "./layout";
import { todoReducer } from "./todo/reducer";
import { initialTodoState, TodoState } from "./todo/types";

export interface ApplicationState {
  heroes: HeroesState;
  layout: LayoutState;
  todo: TodoState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export const initialState: ApplicationState = {
  heroes: initialHeroesState,
  layout: initialLayoutState,
  todo: initialTodoState
};

export const rootReducer = combineReducers<ApplicationState>({
  heroes: heroesReducer,
  layout: layoutReducer,
  todo: todoReducer
});

export function* rootSaga() {
  yield all([fork(heroesSaga)]);
}
