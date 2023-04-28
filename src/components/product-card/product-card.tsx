import { FC, useContext } from "react";
import { Product } from "src/models";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import "./product-card.css";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WishlistContext } from "src/provider";

type ProductCardProps = {
  product: Product;
};

const ProductVariation: FC<{ variation: string }> = ({ variation }) => (
  <div className="px-4 py-1 border rounded text-blue-800 border-blue-800">
    {variation}
  </div>
);

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addItem, getItem } = useCart();

  const {
    isInWishlist,
    addItem: addItemToWishlist,
    removeItem,
  } = useContext(WishlistContext);

  const handleAddItem = () => {
    const productInCart = getItem(product.id);

    if (productInCart && productInCart.quantity >= product.inStock) {
      toast.error("No more in stock");
      return;
    }
    toast.success("Added to Cart!");
    addItem(product);
  };

  return (
    <div className="h-full rounded-lg flex flex-col justify-between shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-w-xs transition duration-250 ease-in-out hover:scale-110">
      <div>
        <a href="#!" data-te-ripple-init data-te-ripple-color="light">
          <img
            className="rounded-t-lg h-60"
            src={product.img}
            alt={product.name}
          />
        </a>
        <div className="p-6">
          <div className="flex items-center gap-5 mb-2">
            <h5 className="text-xl font-medium leading-tight">
              {product.name}
            </h5>
            {isInWishlist(product.id) ? (
              <button
                className="text-red-500"
                onClick={() => removeItem(product.id)}
              >
                <MdFavorite />
              </button>
            ) : (
              <button
                className="text-red-500"
                onClick={() => addItemToWishlist(product.id)}
              >
                <MdOutlineFavoriteBorder />
              </button>
            )}
          </div>
          <p className="mb-2 capitalize text-green-700 font-semibold">
            {product.category}
          </p>
          <p className="mb-4">{product.price}$</p>
          {!!product.variations?.length && (
            <div className="flex gap-4 mb-4">
              {product.variations.map((variation) => (
                <ProductVariation key={variation} variation={variation} />
              ))}
            </div>
          )}

          <div className="desc-text overflow-hidden h-24 text-justify mb-4 line-clamp-5">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="block mb-4 rounded mx-auto px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light"
        onClick={handleAddItem}
      >
        Add to cart
      </button>
    </div>
  );
};
