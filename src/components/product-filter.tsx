import { FC, useEffect, useMemo, useState } from "react";
import { useDebounce } from "src/hooks";
import { CATEGORIES, Category, isCategory } from "src/models";
import RangeSlider from "react-range-slider-input";
import { Input, initTE } from "tw-elements";
import "react-range-slider-input/dist/style.css";
import { useAppSelector } from "src/redux";

export type ProductFilters = {
  search: string;
  category: Category | null;
  price: [min: number, max: number];
};

type ProductFilterProps = {
  onChange: (filters: ProductFilters) => void;
};

export const ProductFilter: FC<ProductFilterProps> = ({ onChange }) => {
  const { products } = useAppSelector((state) => state.products);

  const priceRange = useMemo(
    () =>
      products.reduce<ProductFilters["price"]>(
        (acc, product) => {
          const convertedPrice = +product.price;

          acc[0] = Math.min(acc[0], convertedPrice);
          acc[1] = Math.max(acc[1], convertedPrice);

          return acc;
        },
        [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
      ),
    [products]
  );

  const [minPrice, maxPrice] = priceRange;

  const [search, setSearch] = useState<ProductFilters["search"]>("");
  const [category, setCategory] = useState<ProductFilters["category"]>(null);
  const [price, setPrice] = useState<ProductFilters["price"]>(priceRange);

  const debouncedSearch = useDebounce(search, 500);

  const priceRangeStep = useMemo(() => {
    const roundedMaxPrice = Math.round(maxPrice);
    const roundedMinPrice = Math.round(minPrice);

    if (roundedMaxPrice === 0) return 0;

    return (Math.round(roundedMaxPrice) - roundedMinPrice) / 20;
  }, [minPrice, maxPrice]);

  useEffect(() => {
    onChange({
      search: debouncedSearch,
      price: price.map((price) => Math.round(price)) as ProductFilters["price"],
      category,
    });
  }, [debouncedSearch, price, category, onChange]);
  useEffect(() => {
    initTE({ Input });
  }, []);

  return (
    <div className="flex container items-center gap-5 flex-col md:flex-row">
      <div className="relative mb-3 w-60" data-te-input-wrapper-init>
        <input
          type="search"
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-primary dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label
          htmlFor="search"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Search
        </label>
      </div>

      <div>
        <label htmlFor="category" className="mb-1">
          Category
        </label>
        <select
          value={category ?? ""}
          onChange={(e) =>
            isCategory(e.target.value) && setCategory(e.target.value)
          }
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category} className="capitalize">
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="inline-block">
        <label htmlFor="price" className="mb-1">
          Price
        </label>
        <div className="flex justify-between font-sm mb-1">
          <p>{price[0]}$</p>
          <p>{price[1]}$</p>
        </div>
        <RangeSlider
          className="w-80"
          min={Math.round(minPrice)}
          max={Math.round(maxPrice)}
          step={priceRangeStep}
          value={price}
          onInput={setPrice}
        />
      </div>
    </div>
  );
};
