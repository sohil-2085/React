// here we use the nanoid , the use of that is to generate the unique id
// because when we created todoapp using react then I used the date as a unique id it solves this problem
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "First Todo",
    },
  ],
};

// this is the syntax to use redux-toolkit and also syntax to create reducers
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => {
        todo.id === action.payload.id;
      });
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
  // before this first we take all values from state and after usgin spread operator we again push in the state like context api
  // because context api does not preserve the values
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer