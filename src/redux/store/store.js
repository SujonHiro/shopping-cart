import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../state-slice/cart-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer, 
  },
});

export default store;
