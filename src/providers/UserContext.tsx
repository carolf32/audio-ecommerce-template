import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import {
  UserContextProps,
  UserProviderProps,
  User,
  registerFormData,
  loginFormData,
} from "../interfaces/user.interface";

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  const userRegister = async (formData: registerFormData) => {
    try {
      const { data } = await api.post("/home/signup", formData);
      navigate("/login");
      console.log(data);
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  const userLogin = async (formData: loginFormData) => {
    try {
      const { data } = await api.post("/home/login", formData);
      navigate("/");
      console.log(data);
      setUser(data.user);

      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USER", JSON.stringify(data.user));
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ userRegister, userLogin, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
