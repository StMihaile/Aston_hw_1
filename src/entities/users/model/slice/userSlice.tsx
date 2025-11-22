import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store/store';
import { User } from '../../model/types';

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