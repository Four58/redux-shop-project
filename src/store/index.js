import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import notiSlice from "./noti-slice";
import toggleSlice from "./toggle-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    toggle: toggleSlice.reducer,
    noti: notiSlice.reducer,
  },
});

export default store;
