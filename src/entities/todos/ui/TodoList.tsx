import React from 'react';
import { Todo } from '../../entities/todos/model/types';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <span>{todo.completed ? '✔' : '•'}</span> {todo.title}
      </li>
    ))}
  </ul>
);

export default TodoList;