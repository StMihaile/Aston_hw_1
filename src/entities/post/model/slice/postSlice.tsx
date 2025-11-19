import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store/store';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const postsAdapter = createEntityAdapter<Post>();
const initialState = postsAdapter.getInitialState();

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export const postsSelectors = postsAdapter.getSelectors<RootState>(
  (state) => state.posts
);
export default postSlice.reducer;