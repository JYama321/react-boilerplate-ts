import { action } from "typesafe-actions";
import { Todo, TodoActionTypes } from "./types";

export const addTodo = (data: Todo) => action(TodoActionTypes.ADD_TODO, data);
export const removeTodo = (index: number) =>
  action(TodoActionTypes.REMOVE_TODO, index);
export const fetchTodo = () => action(TodoActionTypes.FETCH_TODOS);
