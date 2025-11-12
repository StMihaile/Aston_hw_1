import React from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import { filterByLength } from '../../features/ui/PostLengthFilter/lib/filterByLength';
import withLoading from '../../shared/lib/hoc/withLoading';
import usePosts from '../../features/ui/PostList/model/hooks/usePosts';


import styles from './PostList.module.css';

const PostList = ({ maxLength }) => {
  const { posts, loading, error } = usePosts();

  const filteredPosts = React.useMemo(() => {
    if (posts) {
      return filterByLength(posts, maxLength || 20);
    }
    return [];
  }, [posts, maxLength]);

  if (error) return <div>Ошибка загрузки постов</div>;
  if (loading) return <div>Загрузка...</div>;

  return (
    <div className={styles.postList}>
      {filteredPosts.map((post) => (
        <PostCard key={post.id} id={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default withLoading(PostList);