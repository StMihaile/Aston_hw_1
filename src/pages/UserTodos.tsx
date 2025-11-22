import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetTodosByUserIdQuery } from '../entities/todos/api/todosApi';
import styles from './UserTodos.module.css';

const UserTodos = () => {
  const { id } = useParams();
  const { data: todos = [], isLoading, error } = useGetTodosByUserIdQuery(id);

  if (isLoading) return <div className={styles.info}>Загрузка...</div>;
  if (error) return <div className={styles.info}>Ошибка загрузки задач</div>;

  return (
    <div className={styles.wrapper}>
      <h2>Задачи пользователя {id}</h2>
      <ul className={styles.list}>
        {todos.map(todo => (
          <li key={todo.id} className={styles.todo}>
            <span className={todo.completed ? styles.done : styles.inProgress}>
              {todo.completed ? '✔' : '•'}
            </span>
            <span className={styles.title}>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserTodos;