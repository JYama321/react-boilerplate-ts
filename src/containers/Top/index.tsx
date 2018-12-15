// @ts-ignore
import Hello from "components/Hello";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ButtonNormal } from "../../components/DeafultButton";
// @ts-ignore
import { ApplicationState, ConnectedReduxProps } from "../../store";
import { fetchRequest } from "../../store/heroes/actions";
import { addTodo } from "../../store/todo/actions";
import { Todo } from "../../store/todo/types";
import { PropFromState, PropsFromDispatch } from "./interfaces";
import { TopWrapper } from "./style";

type AllProps = PropFromState & PropsFromDispatch & ConnectedReduxProps;

class Top extends React.Component<AllProps> {
  public renderTodo(todo: Todo[]) {
    return todo.map((elem, index) => {
      return (
        <li key={"todo-" + index}>
          {index + 1}: {elem.title}
        </li>
      );
    });
  }

  public addTodo(todo: Todo) {
    this.props.addTodo(todo);
  }

  public fetchRequest() {
    this.props.fetchRequest();
  }

  public render() {
    const todo = this.renderTodo(this.props.todo);
    return (
      <TopWrapper>
        <Hello />
        <ButtonNormal
          text={"AddTodoButton"}
          onclick={() =>
            this.addTodo({
              title: "unko",
              done: false
            })
          }
        />
        <ul>{todo}</ul>
        <h2>fetch heroes</h2>
        <ButtonNormal
          text={"Fetch heroes"}
          onclick={() => this.props.fetchRequest()}
        />
      </TopWrapper>
    );
  }
}

function mapStateToProps({ heroes, todo }: ApplicationState) {
  return {
    data: heroes.data,
    errors: heroes.errors,
    loading: heroes.loading,
    todo: todo.todo
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
