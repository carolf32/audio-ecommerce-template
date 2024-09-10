import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../schemas/LoginSchema";
import { loginFormData } from "../interfaces/user.interface";
import { useUserContext } from "../hooks/useUserContext";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({ resolver: zodResolver(LoginSchema) });
  const { userLogin } = useUserContext();

  const submit = (formData: loginFormData) => {
    userLogin(formData);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <main className="bg-[url('../assets/theme2.jpg')] bg-cover h-lvh bg-center">
      <div className="flex flex-col text-center pt-16 pb-20 sm:text-left sm:pl-6 ">
        <h1 className=" text-grey-1 text-6xl font-semibold pb-4  ">Audio</h1>
        <h3 className=" text-grey-1 font-semibold ">
          It's modular and designed to last
        </h3>
      </div>

      <div className="pt-10 w-auto md:w-2/4 md:pt-0">
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-4 w-auto relative"
        >
          <MdOutlineEmail className="absolute top-2.5 left-5 text-grey-3 size-5" />
          <input
            type="text"
            {...register("email")}
            placeholder="Email"
            required
            className="p-2 mx-3  rounded-xl pl-10 outline-none"
          ></input>

          <GoLock className="absolute top-16 left-5 text-grey-3 size-5" />
          <input
            type={passwordVisible ? "text" : "password"}
            {...register("password")}
            placeholder="Password"
            required
            className=" p-2 mx-3 rounded-xl pl-10 outline-none"
          ></input>
          {passwordVisible ? (
            <FaRegEye
              className="absolute top-16 right-6 text-grey-3 size-5 "
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FaRegEyeSlash
              className="absolute top-16 right-6 text-grey-3 size-5 "
              onClick={togglePasswordVisibility}
            />
          )}

          {errors.email && <span>{errors.email.message}</span>}
          {errors.password && <span>{errors.password.message}</span>}

          <button
            type="submit"
            className="text-grey-0 p-2 mx-3 rounded-xl font-semibold bg-green-default text-center cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <p className="text-grey-0 text-sm text-center pt-2">
          If you don't have an account{" "}
          <Link
            to="/signup"
            className="text-green-default font-semibold cursor-pointer"
          >
            Sign up here
          </Link>{" "}
          or{" "}
          <Link to="/" className="font-semibold">
            continue as a guest
          </Link>
        </p>
      </div>
    </main>
  );
};
