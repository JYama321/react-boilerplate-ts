import configureStore from 'redux-mock-store'
import * as actions from './actions'
import { TodoActionTypes } from "./types";
describe('test todo actions', () => {
  const mockStore = configureStore();
  const store = mockStore();
  beforeEach(() => {
    store.clearActions();
  });
  it("should create addTodo action", () => {
    const todo = {
      title: 'test_1',
      done: false
    };
    const expectedActions = {
      type: TodoActionTypes.ADD_TODO,
      payload: todo
    };
    expect(actions.addTodo(todo)).toEqual(expectedActions)
  })
});
