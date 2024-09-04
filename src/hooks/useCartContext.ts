import { useContext } from "react";
import { CartContextProps } from "../interfaces/product.interface";
import { CartContext } from "../providers/CartContext";

export const useCartContext = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a Provider");
  }

  return context;
};
