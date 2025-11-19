import React from 'react';

const albums = [
  { id: 1, name: 'Путешествия', photoCount: 12 },
  { id: 2, name: 'Учёба', photoCount: 8 }
];

const UserAlbums = () => (
  <div>
    <h1>Альбомы пользователя</h1>
    <ul>
      {albums.map(album => (
        <li key={album.id}>
          {album.name} ({album.photoCount} фото)
        </li>
      ))}
    </ul>
  </div>
);

export default UserAlbums;