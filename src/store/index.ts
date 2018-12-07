import { Action, AnyAction, combineReducers, Dispatch } from "redux"
import { all, fork } from "redux-saga/effects"
import { heroesReducer } from "./heroes/reducer"
import heroesSaga from "./heroes/sagas"
import { HeroesState, initialHeroesState } from "./heroes/types"
import { initialLayoutState, layoutReducer, LayoutState } from "./layout"
import { todoReducer } from "./todo/reducer"
import { initialTodoState, TodoState } from "./todo/types"

export interface ApplicationState {
  layout: LayoutState
  heroes: HeroesState
  todos: TodoState
}

export interface rootState {
  root: ApplicationState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export const initialState: ApplicationState = {
  layout: initialLayoutState,
  heroes: initialHeroesState,
  todos: initialTodoState
}

export const rootReducer = combineReducers<ApplicationState>({
  layout: layoutReducer,
  heroes: heroesReducer,
  todos: todoReducer
})

export function* rootSaga() {
  yield all([fork(heroesSaga)])
}