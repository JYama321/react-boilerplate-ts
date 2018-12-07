import { Reducer } from "redux";
import { TodoActionTypes, TodoState } from "./types";

const initialState: TodoState = {
  todo: []
};

const reducer: Reducer<TodoState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      return { ...state, todos: state.todo.push(action.payload) };
    }
    case TodoActionTypes.REMOVE_TODO: {
      state.todo.splice(action.payload, 1);
      return { ...state, todos: state.todo };
    }
    case TodoActionTypes.FETCH_TODOS: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export { reducer as todoReducer };
