import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Hello from "../../components/Hello";
import { ApplicationState, ConnectedReduxProps } from "../../store";
import { fetchRequest } from "../../store/heroes/actions";
import { Hero } from "../../store/heroes/types";
import { addTodo } from "../../store/todo/actions";
import { Todo } from "../../store/todo/types";

interface PropFromState {
  loading: boolean;
  data: Hero[];
  errors?: string;
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
  addTodo: typeof addTodo;
}

type AllProps = PropFromState & PropsFromDispatch & ConnectedReduxProps;

class Top extends React.Component<AllProps> {
  public render() {
    return <Hello />;
  }
}

function mapStateToProps({ heroes }: ApplicationState) {
  return {
    data: heroes.data,
    errors: heroes.errors,
    loading: heroes.loading
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addTodo: (todo: Todo) => dispatch(addTodo(todo)),
    fetchRequest: () => dispatch(fetchRequest())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
