import React from 'react';
import PostLengthFilter from '../features/ui/PostLengthFilter/ui/PostLengthFilter';
import PostList from '../widgets/PostList/PostList';
import styles from './PostsPage.module.css';

interface PostsPageProps {
  maxLength: number;
  setMaxLength: (n: number) => void;
}

const PostsPage: React.FC<PostsPageProps> = ({ maxLength, setMaxLength }) => (
  <div className={styles.page}>
    <PostLengthFilter setMaxLength={setMaxLength} />
    <PostList maxLength={maxLength} />
  </div>
);

export default PostsPage;