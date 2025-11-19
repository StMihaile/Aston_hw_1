import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from '../../../entities/post/api/postsApi'
import { commentsApi } from '../../../entities/comments/api/commentsApi'
import { albumsApi } from '../../../entities/albums/api/albumsApi'
import { todosApi } from '../../../entities/todos/api/todosApi'
import postReducer from '../../../entities/post/model/slice/postSlice'
import userReducer from '../../../entities/users/model/slice/userSlice'
import { photosApi } from '../../../entities/photos/api/potosApi';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
    posts: postReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      commentsApi.middleware,
      albumsApi.middleware,
      todosApi.middleware,
      photosApi.middleware 
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;