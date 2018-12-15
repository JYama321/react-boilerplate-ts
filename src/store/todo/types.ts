export interface Todo {
  title: string;
  done: boolean;
}

export interface TodoState {
  readonly todo: Todo[];
}
export const initialTodoState: TodoState = {
  todo: [
    {
      done: false,
      title: "UNKO"
    }
  ]
};

export const enum TodoActionTypes {
  ADD_TODO = "@@todos/ADD_TODO",
  REMOVE_TODO = "@@todos/REMOVE_TODO",
  FETCH_TODOS = "@@todos/FETCH_TODOS",
  FINISH_FETCH_TODO = "@@todos/FINISH_FETCH_TODO"
}
