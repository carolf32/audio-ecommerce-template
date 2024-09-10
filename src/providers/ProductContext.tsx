import { createContext, ReactNode, useState } from "react";
import { Product, ProductContextProps } from "../interfaces/product.interface";

export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
