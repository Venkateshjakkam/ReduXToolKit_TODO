// TodoList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector(state => state.todos);

  // Check if todos is an array before attempting to map over it
  if (!Array.isArray(todos)) {
    console.error("Todos is not an array:", todos);
    return null; // or render an error message or loading indicator
  }

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
