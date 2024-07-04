import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoggedIn: false,
    isLoading: false
  },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = true
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const selectUser = (state) => state.user.user;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectIsLoading = (state) => state.user.isLoading;

export const { setUserData, setIsLoading } = userSlice.actions
export default userSlice.reducer