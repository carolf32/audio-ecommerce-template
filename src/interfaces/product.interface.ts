import { ReactNode } from "react";

export interface Product {
  images: string[];
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  createdAt: Date;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextProps {
  cartList: CartItem[];
  isCartModalOpen: boolean;
  addProductToCart: (product: Product, quantity: number) => void;
  removeProductFromCart: (id: number) => void;
  setIsCartModalOpen: (isOpen: boolean) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export interface ProductContextProps {
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

export interface CartProviderProps {
  children: ReactNode;
}

export interface MenuContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export interface MenuProviderProps {
  children: ReactNode;
}
