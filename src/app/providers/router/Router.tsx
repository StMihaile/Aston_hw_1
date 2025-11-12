import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PostsPage from '../../../pages/PostPage';
import PostDetailsPage from '../../../pages/PostDetailsPage';
import UserAlbums from '../../../pages/UserAlbums';
import AlbumPhotos from '../../../pages/AlbumPhoto';
import UserTodos from '../../../pages/UserTodos';
import UserPosts from '../../../pages/UserPosts';

const NotFound = () => (
  <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '22px' }}>
    Страница не найдена (404)
  </div>
);

const AppRouter = () => (
  <Routes>
    {/* редирект на список постов по умолчанию */}
    <Route path="/" element={<Navigate to="/posts" replace />} />
    <Route path="/posts" element={<PostsPage />} />
    <Route path="/posts/:id" element={<PostDetailsPage />} />
    <Route path="/users/:id/albums" element={<UserAlbums />} />
    <Route path="/albums/:id/photos" element={<AlbumPhotos />} />
    <Route path="/users/:id/todos" element={<UserTodos />} />
    <Route path="/users/:id/posts" element={<UserPosts />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;