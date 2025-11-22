import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Photo } from '../model/types';

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Photo'],
  endpoints: (builder) => ({
    getPhotosByAlbumId: builder.query<Photo[], string | number>({
      query: (albumId) => `photos?albumId=${albumId}`,
    }),
  }),
});

export const { useGetPhotosByAlbumIdQuery } = photosApi;