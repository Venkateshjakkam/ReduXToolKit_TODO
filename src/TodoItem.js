// TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './todosSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div>
      <input type="checkbox" />
      <span>{todo.note}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
