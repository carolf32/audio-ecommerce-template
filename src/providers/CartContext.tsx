import { createContext, useEffect, useState } from "react";
import {
  CartContextProps,
  CartItem,
  CartProviderProps,
  Product,
} from "../interfaces/product.interface";

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider = ({ children }: CartProviderProps) => {
  const localCartList = localStorage.getItem("@CARTLIST");
  const [cartList, setCartList] = useState<CartItem[]>(
    localCartList ? JSON.parse(localCartList) : []
  );
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (cartList.length > 0) {
      localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
    } else {
      localStorage.removeItem("@CARTLIST");
    }
  }, [cartList]);

  const addProductToCart = (product: Product, quantity: number) => {
    setCartList((prevList) => {
      const existingProduct = prevList.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevList.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevList, { ...product, quantity }];
      }
    });
  };

  const removeProductFromCart = (id: number) => {
    setCartList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartList((prevList) => {
      return prevList.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addProductToCart,
        updateQuantity,
        removeProductFromCart,
        isCartModalOpen,
        setIsCartModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
