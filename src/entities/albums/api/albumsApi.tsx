import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Album'],
  endpoints: (builder) => ({
    getAlbumsByUserId: builder.query({
      query: (userId) => `albums?userId=${userId}`,
    }),
  }),
});

export const { useGetAlbumsByUserIdQuery } = albumsApi;