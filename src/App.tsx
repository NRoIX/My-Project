import { FC, useCallback, useMemo, useState } from "react";
import { useAppSelector } from "./redux";
import { ProductCard } from "./components/product-card";
import { ProductFilter, ProductFilters } from "./components/product-filter";
import { Product } from "./models";
import { createEscapedRegExp } from "./utils/regex";
import { useTranslation } from "react-i18next";
export const App: FC = () => {
  const { t } = useTranslation();
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
 <div>
<div className="container my-24 px-6 mx-auto">
 
  <section className="mb-32 text-gray-800 text-center">
    <div className="flex justify-center">
      <div className="max-w-[800px]">
        <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
          {t("products.header")} <br />
          <span className="text-danger-600">{t("products.header2")}</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
          adipisci tenetur repudiandae rerum quos.
        </p>
      </div>
    </div>
  </section>

</div>
<hr />
<div className="container my-24 px-6 mx-auto" data-aos="zoom-in">
  <section className="mb-32 text-gray-800 text-center md:text-left">
    <div className="block rounded-lg shadow-lg ">
      <div className="flex flex-wrap items-center">
        <div className="grow-0 shrink-0 basis-auto block lg:flex w-full lg:w-6/12 xl:w-4/12">
          <img src="https://sun9-9.userapi.com/impg/2SD7Srkc-zJjjgXZX-kzTW_KkltQYbbM6p5ViQ/9Peu6dzZJ8Q.jpg?size=750x750&quality=96&sign=1e87b3fddfdf395529c30c32022bb689&c_uniq_tag=PRvOT162njqcOUYE5vZiyBwb8j9ad5ulPf8S6fULFgk&type=album" alt="Trendy Pants and Shoes" className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="text-3xl font-bold mb-6 pb-2">{t("products.top")}</h2>
            <h2 className="text-3xl font-bold mb-6 pb-2">
            Lumin HYPERPC Minecraft Edition 
            </h2>
            <p className="text-gray-500 mb-6 pb-2">Proccesor: Intel i7-11850F , VideoCard : NVIDIA RTX 4050/60/70, RAM: DDR5 32GB (Up to 64)</p>
            <div className="flex flex-wrap mb-6">
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center justify-center md:justify-start">
                  <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>{t("products.topicon")}
                </p>
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                <p className="flex items-center justify-center md:justify-start">
                  <svg className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                    </path>
                  </svg>{t("products.topicon2")}
                </p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<div className=" my-24 px-6 mx-auto gap-5 p2  ">
      <h3 className=" mb-2 mt-0 text-3xl font-bold leading-tight">{t("products.title")}</h3>
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
    </div>
  );
};
