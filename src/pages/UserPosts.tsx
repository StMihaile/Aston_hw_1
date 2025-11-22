import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostsByUserIdQuery } from '../entities/post/api/postsApi';
import styles from './UserPosts.module.css';

const UserPosts: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: posts = [], isLoading, error } = useGetPostsByUserIdQuery(id);

  if (isLoading) return <div className={styles.info}>Загрузка...</div>;
  if (error) return <div className={styles.info}>Ошибка загрузки постов</div>;

  return (
    <div className={styles.wrapper}>
      <h2>Посты пользователя {id}</h2>
      <div className={styles.grid}>
        {posts.map(post => (
          <div key={post.id} className={styles.postCard}>
            <h3 className={styles.title}>{post.title}</h3>
            <div className={styles.body}>{post.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;