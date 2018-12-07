export interface Todo {
  title: string;
  done: boolean;
}

export interface TodoState {
  todo: Todo[];
}
export const initialTodoState: TodoState = {
  todo: []
};

export const enum TodoActionTypes {
  ADD_TODO = "@@todos/ADD_TODO",
  REMOVE_TODO = "@@todos/REMOVE_TODO",
  FETCH_TODOS = "@@todos/FETCH_TODOS"
}
