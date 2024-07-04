import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slices/userSlice'
import toggleReducer from '../slices/toggleSlice'
import settingsReducer from '../slices/settingsSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    tweaks: settingsReducer,
    toggle: toggleReducer,
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production'
})