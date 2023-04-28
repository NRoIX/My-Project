import { FC, useCallback } from "react";
import {
  BsFillPencilFill,
  BsFillPlusCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Product } from "src/models";
import { useAppSelector } from "src/redux";
import { deleteProduct } from "src/redux/product";
import { routes } from "src/route";

export const Dashboard: FC = () => {
  const { products } = useAppSelector((state) => state.products);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAddNew = useCallback(() => {
    history.push(routes.createProduct);
  }, [history]);

  const handleEdit = useCallback(
    (id: Product["id"]) => {
      history.push(routes.updateProduct.replace(":id", id));
    },
    [history]
  );

  const handleDelete = useCallback(
    (id: Product["id"]) => {
      dispatch(deleteProduct({ id }));
    },
    [dispatch]
  );

  return (
    <div className="p-4 pt-40">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold text-4xl">Products</h1>
        <button onClick={handleAddNew}>
          <BsFillPlusCircleFill size="40" color="#0066ee" />
        </button>
      </div>
      <table className="border p-1 text-center w-full">
        <thead>
          <tr>
            <th className="border p-1 w-10">#</th>
            <th className="border p-1 w-56">Image</th>
            <th className="border p-1 w-28">Name</th>
            <th className="border p-1">Category</th>
            <th className="border p-1 w-28">In stock</th>
            <th className="border p-1">Price</th>
            <th className="border p-1 w-56">Variations</th>
            <th className="border p-1">Description</th>
            <th className="border p-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td className="border p-2 text-center">{index + 1}</td>
              <td className="border p-2 text-center">
                {product.img ? (
                  <img src={product.img} alt={product.name} />
                ) : (
                  "No image"
                )}
              </td>
              <td className="border p-2 text-center">{product.name}</td>
              <td className="border p-2 text-center">{product.category}</td>
              <td className="border p-2 text-center">{product.inStock}</td>
              <td className="border p-2 text-center">{product.price}$</td>
              <td className="border p-2 text-center">
                {product.variations?.join(", ") ?? "No variations"}
              </td>
              <td className="border p-2 text-center">
                <p className="line-clamp-3 hover:line-clamp-none">
                  {product.description}
                </p>
              </td>
              <td className="border p-2 text-center">
                <div className="flex items-center justify-center gap-4">
                  <button
                    className="p-1"
                    onClick={() => handleEdit(product.id)}
                  >
                    <BsFillPencilFill size="20" />
                  </button>
                  <button
                    className="p-1"
                    onClick={() => handleDelete(product.id)}
                  >
                    <BsFillTrashFill size="20" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
