import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PostsPage from '../../../pages/PostsPage';
import PostDetailsPage from '../../../pages/PostDetailsPage';
import UserAlbums from '../../../pages/UserAlbums';
import AlbumPhotos from '../../../pages/AlbumPhotos';
import UserTodos from '../../../pages/UserTodos';
import UserPosts from '../../../pages/UserPosts';

const NotFound: React.FC = () => (
  <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '22px' }}>
    [translate:Страница не найдена (404)]
  </div>
);

interface AppRouterProps {
  maxLength: number;
  setMaxLength: React.Dispatch<React.SetStateAction<number>>;
}

const AppRouter: React.FC<AppRouterProps> = ({ maxLength, setMaxLength }) => (
  <Routes>
    <Route path="/" element={<Navigate to="/posts" replace />} />
    <Route path="/posts" element={<PostsPage maxLength={maxLength} setMaxLength={setMaxLength} />} />
    <Route path="/posts/:id" element={<PostDetailsPage />} />
    <Route path="/users/:id/albums" element={<UserAlbums />} />
    <Route path="/albums/:id/photos" element={<AlbumPhotos />} />
    <Route path="/users/:id/todos" element={<UserTodos />} />
    <Route path="/users/:id/posts" element={<UserPosts />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;