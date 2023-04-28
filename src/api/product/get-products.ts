import { Product, isProduct } from "src/models";
import { LOCAL_STORAGE_PRODUCTS_LIST_KEY } from "./consts";

export const getProducts = (): Product[] => {
  const products = localStorage.getItem(LOCAL_STORAGE_PRODUCTS_LIST_KEY);

  if (!products) return [];

  try {
    const json = JSON.parse(products);

    if (!Array.isArray(json)) return [];

    return json.filter((product) => isProduct(product));
  } catch {
    return [];
  }
};
