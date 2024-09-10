import { HeaderTemplateUser } from "../components/HeaderTemplateUser";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../interfaces/product.interface";
import axios from "axios";

export const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://users-api-1-zqfm.onrender.com/products",
          {
            params: { search: query },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  return (
    <div>
      <HeaderTemplateUser />
      <h2 className="font-semibold text-xl p-4">
        Search Results for "{query}"
      </h2>
      <div className="bg-grey-1 mt-5 rounded-t-3xl h-full py-6">
        <div className="grid gap-4 max-[425px]:grid-cols-1 px-5 m-auto md:grid-cols-3 lg:grid-cols-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white pt-0 mt-0 rounded-2xl flex flex-col text-center items-center cursor-pointer justify-center"
              >
                <img
                  src={product.images[0]}
                  className="w-60 h-40 rounded-xl mt-2"
                />
                <p className="py-2">{product.name}</p>
                <p className="mb-2">{`€ ${product.price.toFixed(2)}`}</p>
              </div>
            ))
          ) : (
            <p>No products found for your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};
