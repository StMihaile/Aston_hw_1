import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

const PostCard = ({ id, title, body }) => (
  <div className={styles.card}>
    <Link className={styles.title} to={`/posts/${id}`}>
      {title}
    </Link>
    <p className={styles.body}>{body}</p>
  </div>
);

export default PostCard;