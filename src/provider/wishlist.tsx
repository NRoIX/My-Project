import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Product } from "src/models";
import { User } from "./auth";

export type WishlistContextValues = {
  items: Product["id"][];
  isInWishlist: (id: Product["id"]) => boolean;
  addItem: (productId: Product["id"]) => void;
  removeItem: (productId: Product["id"]) => void;
};

const LOCAL_STORAGE_WISHLIST_KEY = "wishlist";

export const WishlistContext = createContext<WishlistContextValues>({
  items: [],
  isInWishlist: () => false,
  addItem: () => null,
  removeItem: () => null,
});

export const WishlistContextProvider: FC<
  PropsWithChildren<{
    userId: User["id"];
  }>
> = ({ userId, children }) => {
  const localStorageKey = useMemo<string>(
    () => `${LOCAL_STORAGE_WISHLIST_KEY}-${userId}`,
    [userId]
  );

  const [items, setItems] = useState<Product["id"][]>(() => {
    try {
      if (!userId) return [];
      
      const cachedWishlist = localStorage.getItem(localStorageKey);
      if (!cachedWishlist) return [];
      const parsedWishlist = JSON.parse(cachedWishlist);

      return Array.isArray(parsedWishlist) &&
        parsedWishlist.every((id) => typeof id === "string")
        ? parsedWishlist
        : [];
    } catch {
      return [];
    }
  });

  const handleChange = useCallback(
    (newItems: Product["id"][]) => {
      setItems(newItems);
      localStorage.setItem(localStorageKey, JSON.stringify(newItems));
    },
    [localStorageKey]
  );

  const isInWishlist = useCallback(
    (id: Product["id"]) => {
      return items.includes(id);
    },
    [items]
  );

  const handleAdd = useCallback(
    (id: Product["id"]) => {
      if (isInWishlist(id)) return;

      handleChange([...items, id]);
    },
    [items, handleChange, isInWishlist]
  );

  const handleRemove = useCallback(
    (id: Product["id"]) => {
      if (!isInWishlist(id)) return;

      handleChange(items.filter((item) => item !== id));
    },
    [items, isInWishlist, handleChange]
  );

  return (
    <WishlistContext.Provider
      value={{
        items,
        isInWishlist,
        addItem: handleAdd,
        removeItem: handleRemove,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
