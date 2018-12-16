import { todoReducer } from "./reducer";

describe("test todo reducers", () => {
  it("initial state", () => {
    const dummy_action = { type: "DUMMY" };

    const initialState = todoReducer(undefined, dummy_action);

    expect(initialState.todo.length).toEqual(0)
  })
});
