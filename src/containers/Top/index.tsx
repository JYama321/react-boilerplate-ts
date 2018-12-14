// @ts-ignore
import Hello from "components/Hello";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
// @ts-ignore
import { ApplicationState, ConnectedReduxProps } from "../../store";
import { fetchRequest } from "../../store/heroes/actions";
import { Hero } from "../../store/heroes/types";
import { addTodo } from "../../store/todo/actions";
import { Todo } from "../../store/todo/types";
import { TopWrapper } from "./style";

interface PropFromState {
  loading: boolean;
  data: Hero[];
  errors?: string;
  todo: Todo[];
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest;
  addTodo: typeof addTodo;
}

type AllProps = PropFromState & PropsFromDispatch & ConnectedReduxProps;

class Top extends React.Component<AllProps> {
  public componentWillUpdate() {
    console.log("nextProps", this.props);
  }

  public renderTodo(todo: Todo[]) {
    return todo.map((elem, index) => {
      return (
        <li key={"todo-" + index}>
          {index + 1}: {elem.title}
        </li>
      );
    });
  }

  public render() {
    const todos = this.renderTodo(this.props.todo);
    return (
      <TopWrapper>
        <Hello />
        {/*<ButtonNormal text={"Buttondayo-nn"} onClick={this.props.addTodo} />*/}
        <button
          onClick={() =>
            this.props.addTodo({
              title: `Sample-${this.props.todo.length + 1}`,
              done: false
            })
          }
        >
          addTODO
        </button>
        <ul>{todos}</ul>
      </TopWrapper>
    );
  }
}

function mapStateToProps({ heroes, todos }: ApplicationState) {
  return {
    data: heroes.data,
    errors: heroes.errors,
    loading: heroes.loading,
    todo: todos.todo
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addTodo: (todo: Todo) => {
      return dispatch(addTodo(todo));
    },
    fetchRequest: () => dispatch(fetchRequest())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
