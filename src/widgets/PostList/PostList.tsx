import React, { useMemo, useState, useEffec } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import { filterByLength } from '../../features/ui/PostLengthFilter/lib/filterByLength';
import withLoading from '../../shared/lib/hoc/withLoading';



const posts = [
  { id: 1, title: 'Первый пост', content: 'Контент первого поста' },
  { id: 2, title: 'Второй пост тест', content: 'Контент второго поста' },
  { id: 3, title: 'Третий пост', content: 'Контент третьего поста' },
];

const PostList = ({ maxLength }) => {

  const filteredPosts = useMemo(() => {
    return filterByLength(posts, maxLength || 20);
  }, [posts, maxLength]);

  return (
    <div>
      {filteredPosts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.content} />

      ))}
    </div>
  );
};

export default withLoading(PostList);