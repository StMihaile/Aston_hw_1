import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserTabs.module.css';

const UserTabs: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="posts"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
      >
        Посты
      </NavLink>
      <NavLink
        to="albums"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
      >
        Альбомы
      </NavLink>
      <NavLink
        to="todos"
        className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}
      >
        Задачи
      </NavLink>
    </nav>
  );
};

export default UserTabs;