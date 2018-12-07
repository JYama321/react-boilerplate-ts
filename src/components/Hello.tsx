import * as React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { ApplicationState, ConnectedReduxProps } from "../store"
import { fetchRequest } from "../store/heroes/actions"
import { Hero } from "../store/heroes/types"
import { addTodo } from "../store/todo/actions"
import { Todo } from "../store/todo/types"

export interface HelloProps {
  compiler: string
  framework: string
}

interface PropFromState {
  loading: boolean
  data: Hero[]
  errors?: string
}

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
  addTodo: typeof addTodo
}

type AllProps = PropFromState & PropsFromDispatch & ConnectedReduxProps

class Hello extends React.Component<AllProps> {
  public render() {
    return <h1>Hello React Typescript boilerplate</h1>
  }
}

function mapStateToProps({ heroes }: ApplicationState) {
  return {
    loading: heroes.loading,
    data: heroes.data,
    errors: heroes.errors
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchRequest: () => dispatch(fetchRequest()),
    addTodo: (todo: Todo) => dispatch(addTodo(todo))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)
