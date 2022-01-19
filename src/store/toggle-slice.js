import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { cartVisible: false },
  reducers: {
    press(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice;
