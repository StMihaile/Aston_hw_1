
import React from 'react';
import PostList from '../widgets/PostList/PostList';

const PostsPage = () => {

  return (
    <div>
      <h1>Посты</h1>
      <PostList maxLength={20} />
    </div>
  );
};

export default PostsPage;