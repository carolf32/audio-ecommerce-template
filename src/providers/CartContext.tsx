import { createContext, useState } from "react";
import {
  CartContextProps,
  CartProviderProps,
  Product,
} from "../interfaces/product.interface";

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const localCartList = localStorage.getItem("@CARTLIST");
  const [cartList, setCartList] = useState<Product[]>(
    localCartList ? JSON.parse(localCartList) : []
  );
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);

  const addProductToCart = (product: Product) => {
    setCartList([...cartList, product]);
  };

  const removeProductFromCart = (product: Product) => {
    const indexToRemove = cartList.findIndex(
      (item: Product) => item.id === product.id
    );

    if (indexToRemove !== -1) {
      const newCartList = cartList.splice(indexToRemove, 1);
      setCartList(newCartList);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProductToCart,
        removeProductFromCart,
        isCartModalOpen,
        setIsCartModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
