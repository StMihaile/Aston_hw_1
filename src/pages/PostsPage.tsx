/*import { useGetPostsQuery } from '../entities/post/api/postsApi';

const PostsPage = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  return (
    <div>
      <h1>Посты</h1>
      {data.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};
export default PostsPage;*/

import React from 'react';
import PostLengthFilter from '../features/ui/PostLengthFilter/ui/PostLengthFilter';
import PostList from '../widgets/PostList/PostList';
import styles from './PostsPage.module.css';

const PostsPage = ({ maxLength, setMaxLength }) => (
  <div className={styles.page}>
    <PostLengthFilter setMaxLength={setMaxLength} />
    <PostList maxLength={maxLength} />
  </div>
);

export default PostsPage;