import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetPostByIdQuery } from '../entities/post/api/postsApi';
import { useGetCommentsByPostIdQuery } from '../entities/comments/api/commentsApi';
import styles from './PostDetailsPage.module.css';

const PostDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading, error } = useGetPostByIdQuery(id);
  const { data: comments = [], isLoading: commentsLoading } = useGetCommentsByPostIdQuery(id);

  if (isLoading || commentsLoading) return <div className={styles.info}>Загрузка...</div>;
  if (error) return <div className={styles.info}>Ошибка</div>;
  if (!post) return <div className={styles.info}>Пост не найден</div>;

  return (
    <div className={styles.wrapper}>
      <button className={styles.backBtn} onClick={() => navigate('/posts')}>← Все посты</button>
      <div className={styles.postBlock}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.body}>{post.body}</p>
      </div>
      <div className={styles.commentsBlock}>
        <h3>Комментарии:</h3>
        {comments.length === 0 ? (
          <div className={styles.noComments}>Нет комментариев</div>
        ) : (
          <ul className={styles.list}>
            {comments.map(comment => (
              <li key={comment.id} className={styles.comment}>
                <b className={styles.author}>{comment.email}</b>
                <span className={styles.text}>{comment.body}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default PostDetailsPage;