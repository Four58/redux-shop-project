import { createSlice } from "@reduxjs/toolkit";

const initialStateCart = {
  items: [],
  totalAmount: 0,
  changed: false,
};

// item: {id: title: amount: price: totalPrice: }

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
    addItem(state, action) {
      state.changed = true;
      const itemClick = action.payload;
      const selectedItem = state.items.find((item) => item.id === itemClick.id);
      state.totalAmount++;
      if (selectedItem) {
        selectedItem.amount++;
        selectedItem.totalPrice = selectedItem.totalPrice + selectedItem.price;
      } else {
        state.items.push({
          id: itemClick.id,
          title: itemClick.title,
          amount: 1,
          price: itemClick.price,
          totalPrice: itemClick.price,
        });
      }
    },
    removeItem(state, action) {
      state.changed = true;
      const itemClick = action.payload;
      const selectedItem = state.items.find((item) => item.id === itemClick.id);
      state.totalAmount--;
      if (selectedItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== itemClick.id);
      } else {
        selectedItem.amount--;
        selectedItem.totalPrice = selectedItem.totalPrice - selectedItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
