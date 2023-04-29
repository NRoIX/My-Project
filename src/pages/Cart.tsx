import { FC, useCallback, useContext } from "react";
import { useCart } from "react-use-cart";
import { Product, isProduct } from "src/models";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WishlistContext } from "src/provider";
import { useAppSelector } from "src/redux";

export const Cart: FC = () => {
  const {
    items,
    updateItemQuantity,
    removeItem,
    isEmpty,
    cartTotal,
    emptyCart,
    addItem,
    getItem,
  } = useCart();

  const handlebuyitem = () => {
    toast.success("Successfully purchased!");
    emptyCart();
  };

  const { products } = useAppSelector((state) => state.products);

  const { items: wishlistedItems, removeItem: removeItemFromWishlist } =
    useContext(WishlistContext);

  const handleQuantityChange = (product: Product, quantity: number) => {
    if (quantity > product.inStock) {
      return toast.error("No more in stock");
    }

    updateItemQuantity(product.id, quantity);
  };

  const handleAddToCard = useCallback(
    (product: Product) => {
      removeItemFromWishlist(product.id);
      const quantity = (getItem(product.id)?.quantity ?? 0) + 1;

      if (quantity > product.inStock) {
        return toast.error("No more in stock");
      }

      addItem(product);
    },
    [removeItemFromWishlist, addItem, getItem]
  );

  if (isEmpty)
    return (
      <div className="flex justify-center items-center h-full mb-24 p-24 ">
        <img
          src="https://professionalscareer.com/assets/images/emptycart.png"
          alt="err"
        />
      </div>
    );

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto ">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
    <div className="container my-24 px-6 mx-auto">
      <h2 className="mb-2 mt-0 text-3xl font-bold leading-tight">CART</h2>
      <hr />
      <table className="min-w-full border-collapse block md:table">
        <thead className=" block md:table-header-group">
          <tr className="md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative">
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell " scope="col">
              #
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell" scope="col">
              Photo
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell" scope="col">
              Title
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell" scope="col">
              Price
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell" scope="col">
              Quantity
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell" scope="col">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((product, index) => {
            const carItem = product;

            if (!isProduct(product)) return null;

            return (
              <tr  key={product.id}>
                <th scope="row">{index + 1}</th>
                <td className="p-2  md: text-left block md:table-cell ">
                  <img width={150} src={product.img} alt={product.name} />
                </td>
                <td className="p-2  md: text-left block md:table-cell ">{product.name}</td>
                <td className="p-2  md: text-left block md:table-cell">{product.price}$</td>
                <td className="p-2  md: text-left block md:table-cell">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={() =>
                      handleQuantityChange(product, (carItem.quantity ?? 1) - 1)
                    }
                  >
                    -
                  </button>
                  <span className="mx-3">{carItem.quantity}</span>
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] disabled:bg-slate-600"
                    disabled={product.inStock === carItem.quantity}
                    onClick={() =>
                      handleQuantityChange(product, (carItem.quantity ?? 0) + 1)
                    }
                  >
                    +
                  </button>
                </td>
                <td className="p-2  md:text-left block md:table-cell">
                  <button
                    type="button"
                    className="inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                    onClick={() => removeItem(product.id)}
                  >
                    Del
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2 className="mt-5 font-bold">Total Price:{cartTotal.toFixed(2)}$</h2>
      <button
        type="button"
        className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]"
        onClick={handlebuyitem}
      >
        Buy
      </button>
</div>
    </div>
    </div>
    </div>
    </div>
  );
};
