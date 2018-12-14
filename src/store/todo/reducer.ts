import { Reducer } from "redux";
import { Todo, TodoActionTypes, TodoState } from "./types";
const initialState: TodoState = {
  todo: []
};

const reducer: Reducer<TodoState> = (state = initialState, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      // 元の配列を値渡し
      const newTodo: Todo[] = state.todo.slice();
      newTodo.push(action.payload);
      return Object.assign({}, state, { todo: newTodo });
    }
    case TodoActionTypes.REMOVE_TODO: {
      state.todo.splice(action.payload, 1);
      return { ...state, todo: state.todo };
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
