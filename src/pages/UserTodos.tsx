import React, { useState } from 'react';

const initialTodos = [
  { id: 1, text: 'Записаться к врачу', done: false },
  { id: 2, text: 'Купить хлеб', done: true }
];

const UserTodos = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleDone = id => {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div>
      <h1>Дела</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => toggleDone(todo.id)}>
              {todo.done ? 'Сделано' : 'В процессе'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserTodos;