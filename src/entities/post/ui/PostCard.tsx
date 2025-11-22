import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostCard.module.css';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body }) => (
  <div className={styles.card}>
    <Link className={styles.title} to={`/posts/${id}`}>
      {title}
    </Link>
    <p className={styles.body}>{body}</p>
  </div>
);

export default PostCard;