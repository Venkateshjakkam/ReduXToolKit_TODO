// todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        ...action.payload
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
