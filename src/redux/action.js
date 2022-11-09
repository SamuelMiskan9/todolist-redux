import * as types from "./actionTypes";

export const completeTodo = (todo) =>  ({
    types: types.COMPLETE_TODO,
    payload: todo,
})
