import React from 'react';

const posts = [
  { id: 1, title: 'Мой первый пост', content: 'Привет! Это мой первый пост.' },
  { id: 2, title: 'React интересен', content: 'Пишу приложение на React.' }
];

const UserPosts = () => (
  <div>
    <h1>Посты пользователя</h1>
    {posts.map(post => (
      <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    ))}
  </div>
);

export default UserPosts;