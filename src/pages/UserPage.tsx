import React from 'react';
import UserTabs from '../widgets/UserTabs/UserTabs';
import styles from './UserPage.module.css';

const UserPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Профиль пользователя {id}</h1>
      <UserTabs />
    </div>
  );
};


export default UserPage;