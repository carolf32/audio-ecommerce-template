import { useContext } from "react";
import { UserContextProps } from "../interfaces/user.interface";
import { UserContext } from "../providers/UserContext";

export const useUserContext = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};
