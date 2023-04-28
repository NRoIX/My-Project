import { FC, useCallback, useMemo, useState } from "react";
import { useAppSelector } from "./redux";
import { ProductCard } from "./components/product-card";
import { ProductFilter, ProductFilters } from "./components/product-filter";
import { Product } from "./models";
import { createEscapedRegExp } from "./utils/regex";

export const App: FC = () => {
  const { products } = useAppSelector((state) => state.products);

  const [filters, setFilters] = useState<ProductFilters>({
    search: "",
    category: null,
    price: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  });

  const handleFiltersChange = useCallback((newFilters: ProductFilters) => {
    setFilters(newFilters);
  }, []);

  const filteredProducts = useMemo<Product[]>(() => {
    const searchPattern = createEscapedRegExp(filters.search, "i");

    return products.filter((product) => {
      if (
        filters.search &&
        ![product.name, product.description].some((str) =>
          searchPattern.test(str)
        )
      )
        return false;

      if (filters.category && product.category !== filters.category)
        return false;

      const roundedPrice = Math.round(+product.price);

      if (filters.price[0] > roundedPrice || roundedPrice > filters.price[1]) {
        console.log(roundedPrice, filters.price);

        return false;
      }

      return true;
    });
  }, [filters, products]);
  
  return (
    <div className=" my-24 px-6 mx-auto gap-5 p2  ">
      <h2 className="text-2xl font-bold mb-1 text-center">PRODUCTS</h2>
      <hr />
      <ProductFilter onChange={handleFiltersChange} />
      <div className="container my-24 justify-center mx-auto flex flex-wrap gap-5">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
        {filteredProducts.length === 0 && <div>No products</div>}
      </div>
    </div>
  );
};
