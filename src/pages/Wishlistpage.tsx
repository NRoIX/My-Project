import {FC,useContext,useCallback} from "react";
import { Product, isProduct } from "src/models";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WishlistContext } from "src/provider";
import { useAppSelector } from "src/redux";
import { useCart } from "react-use-cart";

export const Whislistpage : FC = () =>{
    const {items,addItem,getItem} = useCart();
    const { products } = useAppSelector((state) => state.products);
    

        const { items: wishlistedItems, removeItem: removeItemFromWishlist } =
          useContext(WishlistContext);
          const handleAddToCard = useCallback(
            (product: Product) => {
              removeItemFromWishlist(product.id);
              const quantity = (getItem(product.id)?.quantity ?? 0) + 1;
        
              if (quantity > product.inStock) {
                return toast.error("No more in stock");
              }
              toast.success("Added to Cart!");
              addItem(product);
            },
            [removeItemFromWishlist, addItem, getItem]
          );
         

    return(
        <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <div  className="container my-24 px-6 mx-auto">
                    <h2 className="text-2xl font-bold mb-1 text-center">WISHLIST</h2>
      <hr />
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative">
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell" scope="col">
              #
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell" scope="col">
              Photo
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell" scope="col">
              Title
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell" scope="col">
              Quantity
            </th>
            <th className="p-2 md:border md:border-grey-500 text-left block md:table-cell" scope="col">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {wishlistedItems.map((productId, index) => {
            const product = products.find(
              (product) => product.id === productId
            );

            if (!product) return null;

            return (
              <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td className="p-2  md:text-left block md:table-cell">
                  <img width={150} src={product.img} alt={product.name} />
                </td>
                <td className="p-2  md:text-left block md:table-cell">{product.name}</td>
                <td className="p-2  md:text-left block md:table-cell">1</td>
                <td className="p-2  md:text-left block md:table-cell">{product.price}$</td>

                <td className="p-2  md:text-left block md:table-cell">
                  <button
                    type="button"
                    className="inline-block mr-4 rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-lime-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                    onClick={() => handleAddToCard(product)}
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
                    onClick={() => removeItemFromWishlist(product.id)}
                  >
                    Remove from wishlist
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
                    </div>

                </div>
              </div>
            </div>
        </div>
    )
}