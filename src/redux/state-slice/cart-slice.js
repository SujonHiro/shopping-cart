import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action);
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) state[index].quanity += 1;
    },
    decrementQuantity(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1 && state[index].quanity > 1) state[index].quanity -= 1;
    },
  },
});

export const { addToCart, removeFromCart,incrementQuantity,decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
