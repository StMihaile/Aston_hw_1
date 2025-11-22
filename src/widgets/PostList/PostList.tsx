import React from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import { filterByLength } from '../../features/ui/PostLengthFilter/lib/filterByLength';
import { useGetPostsQuery } from '../../entities/post/api/postsApi';
import styles from './PostList.module.css';

const PostList = ({ maxLength }) => {
  const { data: posts = [], error, isLoading } = useGetPostsQuery();

  const filteredPosts = React.useMemo(() => {
    return filterByLength(posts, maxLength);
  }, [posts, maxLength]);

  if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>Ошибка загрузки постов</div>;

  return (
    <div className={styles.list}>
      {filteredPosts.map(post => (
        <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};
export default PostList;