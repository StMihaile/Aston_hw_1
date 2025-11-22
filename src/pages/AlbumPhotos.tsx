import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPhotosByAlbumIdQuery } from '../entities/photos/api/potosApi';
import styles from './AlbumPhotos.module.css';

const AlbumPhotos: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: photos = [], isLoading, error } = useGetPhotosByAlbumIdQuery(id);

  if (isLoading) return <div className={styles.info}>Загрузка...</div>;
  if (error) return <div className={styles.info}>Ошибка загрузки фотографий</div>;

  return (
    <div className={styles.wrapper}>
      <h2>Фото из альбома {id}</h2>
      <div className={styles.albumGrid}>
        {photos.map(photo => (
          <div key={photo.id} className={styles.photoCard}>
            <img src={photo.thumbnailUrl} alt={photo.title} className={styles.img} />
            <div className={styles.caption}>{photo.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AlbumPhotos;