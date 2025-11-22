import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Album } from '../model/types';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Album'],
  endpoints: (builder) => ({
    getAlbumsByUserId: builder.query<Album[], string | number>({
      query: (userId) => `albums?userId=${userId}`,
    }),
  }),
});

export const { useGetAlbumsByUserIdQuery } = albumsApi;