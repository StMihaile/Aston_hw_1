import React from 'react';

interface Comment {
  id: number;
  text: string;
  author: string;
}

interface PostDetailsProps {
  post?: { title: string; content: string };
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  if (!post) {
    return <div>Нет данных по посту</div>;
  }

  const comments: Comment[] = [
    { id: 1, text: 'Комментарий 1', author: 'Пользователь 1' },
    { id: 2, text: 'Комментарий 2', author: 'Пользователь 2' }
  ];

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <h3>Комментарии:</h3>
      {comments.map(comment => (
        <div key={comment.id}>
          <strong>{comment.author}:</strong> {comment.text}
        </div>
      ))}
    </div>
  );
};

export default PostDetails;