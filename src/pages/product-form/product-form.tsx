import { ChangeEvent, FC, useCallback, useMemo, useState } from "react";
import {
  BsFillPencilFill,
  BsFillPlusCircleFill,
  BsFillTrashFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { useHistory, useParams } from "react-router-dom";
import { CATEGORIES, Product } from "src/models";
import { useAppDispatch, useAppSelector } from "src/redux";
import { addProduct, updateProduct } from "src/redux/product";
import { routes } from "src/route";

type QueryParams = { id?: Product["id"] };

export const ProductForm: FC = () => {
  const { products } = useAppSelector((state) => state.products);
  const { id } = useParams<QueryParams>();
  const isEdit = useMemo<boolean>(() => !!id, [id]);

  const dispatch = useAppDispatch();
  const history = useHistory();

  const editedProduct = useMemo<Product | null>(
    () => (isEdit && products.find((product) => product.id === id)) || null,
    [id, products, isEdit]
  );

  const [values, setValues] = useState<Required<Omit<Product, "id">>>({
    name: editedProduct?.name ?? "",
    price: editedProduct?.price ?? 1,
    description: editedProduct?.description ?? "",
    category: editedProduct?.category ?? "tech",
    img: editedProduct?.img ?? "",
    inStock: editedProduct?.inStock ?? 1,
    variations: editedProduct?.variations ?? [],
  });

  const [editedVariationValue, setEditedVariationValue] = useState<string>("");
  const [editedVariationIndex, setEditedVariationIndex] = useState<number>(-1);

  const isSubmitDisabled = useMemo<boolean>(() => {
    const { name, description, category, price } = values;

    return !name || !description || !category || !price;
  }, [values]);

  const handleToggleVariation = useCallback(
    (index: number) => {
      if (editedVariationIndex !== -1) {
        setValues((prevValues) => ({
          ...prevValues,
          variations: prevValues.variations.map((varitation, index) =>
            index === editedVariationIndex ? editedVariationValue : varitation
          ),
        }));
        setEditedVariationIndex(-1);
        setEditedVariationValue("");
      } else {
        setEditedVariationValue(values.variations[index]);
        setEditedVariationIndex(index);
      }
    },
    [values, editedVariationIndex, editedVariationValue]
  );

  const handleChange = useCallback(
    (key: keyof Omit<Product, "id" | "variations">) =>
      (
        e: ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      ) => {
        setValues((prevValues) => ({
          ...prevValues,
          [key]:
            typeof prevValues[key] === "number"
              ? +e.target.value
              : e.target.value,
        }));
      },
    []
  );

  const handleAddVariation = useCallback(() => {
    setValues((prevValues) => ({
      ...prevValues,
      variations: [
        ...prevValues.variations,
        `Empty value ${prevValues.variations.length + 1}`,
      ],
    }));
  }, []);

  const handleRemoveVariation = useCallback((index: number) => {
    setValues((prevValues) => ({
      ...prevValues,
      variations: prevValues.variations.filter((_, idx) => idx !== index),
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (isEdit && id) {
      dispatch(updateProduct({ data: { ...values, id } }));
    } else {
      dispatch(addProduct({ data: values }));
    }

    history.push(routes.dashboard);
  }, [isEdit, values, history, id, dispatch]);

  return (
    <div className=" my-36 px-6 mx-auto content-center">
    <div className=" h-screen flex flex-col mt-20 items-center">
      <h1 className="text-center mb-5 text-xl">
        {isEdit ? "Edit product" : "Add product"}
      </h1>
      <div className="max-w-2xl w-screen border border-black rounded-xl p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="w-full border p-4 rounded-lg h-10 border-black"
            value={values.name}
            onChange={handleChange("name")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            className="w-full border p-4 rounded-lg h-10 border-black"
            type="number"
            step="0.01"
            value={values.price}
            onChange={handleChange("price")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer" htmlFor="inStock">
            In stock
          </label>
          <input
            id="inStock"
            className="w-full border p-4 rounded-lg h-10 border-black"
            type="number"
            step="1"
            min="0"
            value={values.inStock}
            onChange={handleChange("inStock")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer" htmlFor="img">
            Image
          </label>
          <input
            name="img"
            className="w-full border p-4 rounded-lg h-10 border-black"
            value={values.img}
            onChange={handleChange("img")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer" htmlFor="category">
            Select
          </label>
          <select
            name="category"
            className="w-full border p-2 pl-4 rounded-lg h-10 border-black"
            value={values.category}
            onChange={handleChange("category")}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category} className="capitalize">
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl mb-2">Variations</h2>
            <button onClick={handleAddVariation}>
              <BsFillPlusCircleFill size="20" color="#0066ee" />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {values.variations.length > 0 ? (
              values.variations.map((variation, index) => {
                const isEditingVariation = editedVariationIndex >= 0;
                const isCurrentVariationEdited = editedVariationIndex === index;

                return (
                  <div key={variation}>
                    <div className="flex justify-between items-center">
                      {index === editedVariationIndex ? (
                        <input
                          value={editedVariationValue}
                          className="border border-black rounded-lg p-2"
                          onChange={(e) =>
                            setEditedVariationValue(e.target.value)
                          }
                        />
                      ) : (
                        <p>{variation}</p>
                      )}
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1 disabled:text-gray-300"
                          disabled={
                            isEditingVariation && !isCurrentVariationEdited
                          }
                          onClick={() => handleToggleVariation(index)}
                        >
                          {isCurrentVariationEdited ? (
                            <BsFillCheckCircleFill size="15" />
                          ) : (
                            <BsFillPencilFill size="15" />
                          )}
                        </button>
                        <button
                          disabled={isEditingVariation}
                          className="p-1 disabled:text-gray-300"
                          onClick={() => handleRemoveVariation(index)}
                        >
                          <BsFillTrashFill size="15" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-gray-400 text-center">No variations</div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="w-full border p-4 rounded-lg h-40 border-black"
            value={values.description}
            onChange={handleChange("description")}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-800 px-10 text-white py-2 rounded-full disabled:bg-gray-300 disabled:text-gray-600"
            disabled={isSubmitDisabled}
            onClick={handleSubmit}
          >
            {isEdit ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
