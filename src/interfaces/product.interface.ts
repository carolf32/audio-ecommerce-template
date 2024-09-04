import { ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  createdAt: Date;
}

export interface CartContextProps {
  cartList: Product[];
  isCartModalOpen: boolean;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  setIsCartModalOpen: (isOpen: boolean) => void;
}

export interface CartProviderProps {
  children: ReactNode;
}
