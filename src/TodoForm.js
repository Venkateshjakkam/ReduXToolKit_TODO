// TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';
import { TextField, Button } from '@material-ui/core';

function TodoForm() {
  const [note, setNote] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!note || !name || !email || !phone) return;

    dispatch(addTodo({
      note,
      name,
      email,
      phone
    }));

    setNote('');
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Note"
        value={note}
        onChange={e => setNote(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add Todo
      </Button>
    </form>
  );
}

export default TodoForm;
