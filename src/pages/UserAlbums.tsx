import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAlbumsByUserIdQuery } from '../entities/albums/api/albumsApi';
import styles from './UserAlbums.module.css';

const UserAlbums: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: albums = [], isLoading, error } = useGetAlbumsByUserIdQuery(id);

  if (isLoading) return <div className={styles.info}>Загрузка...</div>;
  if (error) return <div className={styles.info}>Ошибка загрузки альбомов</div>;

  return (
    <div className={styles.wrapper}>
      <h2>Альбомы пользователя {id}</h2>
      <ul className={styles.list}>
        {albums.map(album => (
          <li key={album.id} className={styles.album}>
            <div className={styles.icon}>🖼️</div>
            <div className={styles.content}>
              <div className={styles.title}>{album.title}</div>
              <div className={styles.id}>ID альбома: {album.id}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAlbums;