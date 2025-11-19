import React from 'react';

const photos = [
  { id: 1, src: 'https://placekitten.com/150/150', caption: 'Первое фото' },
  { id: 2, src: 'https://placekitten.com/160/160', caption: 'Второе фото' }
];

const AlbumPhotos = () => (
  <div>
    <h1>Фотографии альбома</h1>
    <div style={{ display: 'flex', gap: '10px' }}>
      {photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.src} alt={photo.caption} style={{ width: 100, height: 100 }} />
          <div>{photo.caption}</div>
        </div>
      ))}
    </div>
  </div>
);

export default AlbumPhotos;