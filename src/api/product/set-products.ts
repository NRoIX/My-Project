import { Product } from "src/models";
import { LOCAL_STORAGE_PRODUCTS_LIST_KEY } from "./consts";

export const setProducts = (products: Product[]) => {
  const stringified = JSON.stringify(products);

  localStorage.setItem(LOCAL_STORAGE_PRODUCTS_LIST_KEY, stringified);
};
