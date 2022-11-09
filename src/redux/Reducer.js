import * as types from "./actionTypes";

const initalState = {
  todos: [{ id: 1, task: "Wake Up", completed: false }],
};

const todosReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.COMPLETE_TODO:
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : t
      );
      return {
        ...state,
        todos: toggleTodos,
      };
    default:
      return state;
  }
};

export default todosReducer;
