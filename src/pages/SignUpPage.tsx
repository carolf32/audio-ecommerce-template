import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "../schemas/FormSchema";
import { registerFormData } from "../interfaces/user.interface";
import { useUserContext } from "../hooks/useUserContext";
import { useState } from "react";

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormData>({ resolver: zodResolver(FormSchema) });
  const { userRegister } = useUserContext();

  const submit = (formData: registerFormData) => {
    userRegister(formData);
    console.log(formData);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <main className="bg-[url('../assets/theme2.jpg')] bg-cover h-lvh bg-center overflow-hidden">
      <div className="flex flex-col text-center pt-16 pb-20 sm:text-left sm:pl-6 ">
        <h1 className=" text-grey-1 text-6xl font-semibold pb-4 ">Audio</h1>
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
            className="p-2 mx-3  rounded-xl pl-10 outline-none"
          ></input>

          <GoLock className="absolute top-16 left-5 text-grey-3 size-5" />
          <input
            type={passwordVisible ? "text" : "password"}
            {...register("password")}
            placeholder="Create a password"
            className=" p-2 mx-3 rounded-xl pl-10 outline-none"
            required
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

          <GoLock className="absolute left-5 top-[7.5rem] text-grey-3 size-5 " />
          <input
            type={passwordVisible ? "text" : "password"}
            {...register("confirmPassword")}
            placeholder="Repeat the password"
            className="p-2 mx-3 rounded-xl pl-10 outline-none"
            required
          ></input>
          {passwordVisible ? (
            <FaRegEye
              className="absolute top-[7.5rem] right-6 text-grey-3 size-5"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FaRegEyeSlash
              className="absolute top-[7.5rem] right-6 text-grey-3 size-5"
              onClick={togglePasswordVisibility}
            />
          )}

          <input
            type="text"
            {...register("name")}
            placeholder="First name"
            className="p-2 mx-3  rounded-xl pl-10 outline-none"
          ></input>

          {errors.email && <span>{errors.email.message}</span>}
          {errors.password && <span>{errors.password.message}</span>}
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}

          <button
            type="submit"
            className="text-grey-0 p-2 mx-3 rounded-xl font-semibold bg-green-default text-center cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="text-grey-0 text-sm text-center pt-2">
          If you have an account{" "}
          <Link
            to="/login"
            className="text-green-default font-semibold cursor-pointer text-sha"
          >
            Sign in here
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
