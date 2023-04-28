import { configureStore } from "@reduxjs/toolkit";
import { ProductsState, productsReducer } from "./product";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = {
  products: ProductsState;
};
export type AppDispatch = typeof store.dispatch;
