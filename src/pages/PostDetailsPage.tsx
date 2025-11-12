import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetails from '../widgets/PostList/PostDetails';
import usePosts from '../features/ui/PostList/model/hooks/usePosts';
import { useNavigate } from 'react-router-dom';

const PostDetailsPage = () => {
  const { id } = useParams();
  const { posts } = usePosts();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === Number(id));

  return (
    <div>
      <h1>Детали поста</h1>
      <button onClick={() => navigate('/posts')} style={{ marginBottom: '16px', padding: '8px' }}>
        Домой
      </button>
      {post ? <PostDetails post={post} /> : <div>Пост не найден</div>}
    </div>
  );
};

export default PostDetailsPage;