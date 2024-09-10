import { createContext, useState } from "react";
import {
  MenuContextProps,
  MenuProviderProps,
} from "../interfaces/product.interface";

export const MenuContext = createContext<MenuContextProps | undefined>(
  undefined
);

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
