import { Hero } from "../../store/heroes/types";
import { Todo } from "../../store/todo/types";
import { fetchRequest } from "../../store/heroes/actions";
import { addTodo } from "../../store/todo/actions";

export interface PropFromState {
  loading: boolean;
  data: Hero[];
  errors?: string;
  todo: Todo[];
}

export interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
  addTodo: typeof addTodo;
}
