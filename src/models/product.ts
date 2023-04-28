export const CATEGORIES = [
  "tech",
  "console",
  "videogame",
  "education",
] as const;
export type Category = (typeof CATEGORIES)[number];

export const isCategory = (arg: unknown): arg is Category =>
  CATEGORIES.includes(arg as Category);

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  img?: string;
  variations?: string[];
  inStock: number;
};

export const isProduct = (arg: unknown): arg is Product => {
  if (!arg || typeof arg !== "object") return false;

  const { id, name, category, price, description, img, variations, inStock } =
    arg as Partial<Product>;

  if (
    typeof id !== "string" ||
    typeof name !== "string" ||
    typeof price !== "number" ||
    typeof description !== "string" ||
    typeof inStock !== "number" ||
    !isCategory(category)
  )
    return false;

  if (img && typeof img !== "string") return false;
  if (variations && !Array.isArray(variations)) return false;

  return true;
};
