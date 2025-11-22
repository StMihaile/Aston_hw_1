import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../model/types';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
    getPostById: builder.query<Post, string | number>({
      query: (id) => `posts/${id}`,
    }),
    getPostsByUserId: builder.query<Post[], string | number>({
      query: (userId) => `posts?userId=${userId}`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostsByUserIdQuery,
} = postsApi;