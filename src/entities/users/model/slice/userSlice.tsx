import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store/store';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const usersAdapter = createEntityAdapter<User>();
const initialState = usersAdapter.getInitialState();

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const usersSelectors = usersAdapter.getSelectors<RootState>(
  (state) => state.users
);
export default userSlice.reducer;