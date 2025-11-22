import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Photo'],
  endpoints: (builder) => ({
    getPhotosByAlbumId: builder.query({
      query: (albumId) => `photos?albumId=${albumId}`,
    }),
  }),
});

export const { useGetPhotosByAlbumIdQuery } = photosApi;
