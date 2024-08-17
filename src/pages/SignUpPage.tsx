import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const SignUpPage = () => {
  const { register, handleSubmit } = useForm();

  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <main className="bg-[url('../assets/theme2.jpg')] bg-cover h-lvh bg-center overflow-hidden">
      <div className="flex flex-col text-center pt-16 pb-20 sm:text-left sm:pl-6 ">
        <h1 className=" text-grey-1 text-6xl font-semibold pb-4 ">Audio</h1>
        <h3 className=" text-grey-1 font-semibold ">
          It's modular and designed do last
        </h3>
      </div>

      <div className="pt-10 w-auto md:w-2/4 md:pt-0">
        <form className="flex flex-col gap-4 w-auto relative">
          <MdOutlineEmail className="absolute top-2.5 left-5 text-grey-3 size-5" />
          <input
            type="text"
            placeholder="Email"
            className="p-2 mx-3  rounded-xl pl-10 outline-none"
          ></input>

          <GoLock className="absolute top-16 left-5 text-grey-3 size-5" />
          <input
            type="password"
            placeholder="Create a password"
            className=" p-2 mx-3 rounded-xl pl-10 outline-none"
          ></input>
          <FaRegEyeSlash className="absolute top-16 right-6 text-grey-3 size-5 " />
          {/* <FaRegEye /> */}

          <GoLock className="absolute bottom-16 left-5 text-grey-3 size-5 ." />
          <input
            type="password"
            placeholder="Repeat the password"
            className="p-2 mx-3 rounded-xl pl-10 outline-none"
          ></input>
          <FaRegEyeSlash className="absolute bottom-16 right-6 text-grey-3 size-5" />
          {/* <FaRegEye /> */}

          <a className="text-grey-0 p-2 mx-3 rounded-xl font-semibold bg-green-default text-center cursor-pointer">
            Sign Up
          </a>
        </form>

        <p className="text-grey-0 text-sm text-center pt-2">
          If you have an account{" "}
          <Link
            to="/login"
            className="text-green-default font-semibold cursor-pointer text-sha"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </main>
  );
};
