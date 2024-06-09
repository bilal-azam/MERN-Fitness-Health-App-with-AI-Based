import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
      user: null,
      token: null,
  },
  reducers: {
      setUser(state, action) {
          state.user = action.payload.user;
          state.token = action.payload.token;
      },
      clearUser(state) {
          state.user = null;
          state.token = null;
      }
  }
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;