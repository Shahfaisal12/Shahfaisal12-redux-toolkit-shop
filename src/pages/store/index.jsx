import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice";
import productReducer from "./ProviderSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
