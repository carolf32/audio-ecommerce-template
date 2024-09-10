import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../interfaces/product.interface";

export const useProducts = (category?: string, searchQuery?: string) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "https://users-api-1-zqfm.onrender.com/products";

        const params: { category?: string; search?: string } = {};
        if (category) {
          params.category = category;
        }
        if (searchQuery) {
          params.search = searchQuery;
        }

        const response = await axios.get(url, { params });
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [category, searchQuery]);

  return { products };
};
