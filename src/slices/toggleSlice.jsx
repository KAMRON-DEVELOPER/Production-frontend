import { createSlice } from "@reduxjs/toolkit";


export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    isOpen: false
  },
  reducers: {
    setToggle: (state, action) => {
      state.isOpen = action.payload
    }
  }
})


export const { setToggle } = toggleSlice.actions
export default toggleSlice.reducer