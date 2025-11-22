import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodosByUserId: builder.query({
      query: (userId) => `todos?userId=${userId}`,
    }),
  }),
});

export const { useGetTodosByUserIdQuery } = todosApi;