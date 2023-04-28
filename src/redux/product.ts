import { createSlice } from "@reduxjs/toolkit";
import { getProducts as apiGetProducts } from "src/api/product/get-products";
import { setProducts } from "src/api/product/set-products";
import { Product } from "src/models";
import { v4 } from "uuid";

export type Action<P> = {
  type: string;
  payload: P;
};

export type ProductsState = {
  products: Product[];
};

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: apiGetProducts(),
  },
  reducers: {
    getProducts: (state: ProductsState) => {
      state.products = apiGetProducts();
    },
    addProduct: (
      state: ProductsState,
      action: Action<{ data: Omit<Product, "id"> }>
    ) => {
      state.products.push({ ...action.payload.data, id: v4() });

      setProducts(state.products);
    },
    updateProduct: (
      state: ProductsState,
      action: Action<{ data: Product }>
    ) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.data.id ? action.payload.data : product
      );

      setProducts(state.products);
    },
    deleteProduct: (
      state: ProductsState,
      action: Action<{ id: Product["id"] }>
    ) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );

      setProducts(state.products);
    },
  },
});

export const { getProducts, addProduct, updateProduct, deleteProduct } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
