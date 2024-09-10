import { useContext } from "react";
import { MenuContext } from "../providers/MenuContext";
import { MenuContextProps } from "../interfaces/product.interface";

export const useMenuContext = (): MenuContextProps => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a Provider");
  }

  return context;
};
