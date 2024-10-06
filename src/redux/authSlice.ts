import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

const initialState: AuthState = {
  name: '',
  email: '',
  accessToken: '',
  refreshToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state, action) => {
      state.accessToken = '';
    },
  },
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;
