import { Link } from "react-router-dom";
import headphone from "../../assets/product-image/headphone-white.jpg";

export const HomeProducts = () => {
  return (
    <div className="bg-grey-1 mt-5 rounded-t-3xl h-full pb-7">
      <div className="p-5 flex justify-evenly items-center flex-wrap gap-1">
        <Link
          to="/headphones"
          className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full hover:text-black"
        >
          Headphones
        </Link>
        <Link
          to="/earpads"
          className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full hover:text-black"
        >
          Earpads
        </Link>
        <Link
          to="/acessories"
          className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full hover:text-black"
        >
          Acessories
        </Link>
        <Link
          to="/products"
          className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full hover:text-black"
        >
          All Products
        </Link>
      </div>
      <div className="flex justify-between px-5 py-7">
        <h3 className="font-semibold ">Featured Products</h3>
        <Link
          to="/products"
          className="cursor-pointer hover:text-green-default"
        >
          See All
        </Link>
      </div>
      <div className="grid gap-4 max-[425px]:grid-cols-1  px-5 m-auto md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-white pt-0 mt-0 rounded-2xl flex flex-col text-center items-center cursor-pointer justify-center">
          <img src={headphone} className="w-60 h-40 rounded-t-2xl" />
          <p className="py-2">TMA-2 HD Wireless USD 350</p>
        </div>
        <div className="bg-white rounded-2xl flex flex-col text-center items-center cursor-pointer justify-center">
          <img src={headphone} className="w-60 h-40 rounded-t-2xl" />
          <p className="py-2">TMA-2 HD Wireless USD 350</p>
        </div>
        <div className="bg-white rounded-2xl flex flex-col text-center items-center cursor-pointer justify-center">
          <img src={headphone} className="w-60 h-40 rounded-t-2xl" />
          <p className="py-2">TMA-2 HD Wireless USD 350</p>
        </div>
        <div className="bg-white rounded-2xl flex flex-col text-center items-center cursor-pointer justify-center">
          <img src={headphone} className="w-60 h-40 rounded-t-2xl" />
          <p className="py-2">TMA-2 HD Wireless USD 350</p>
        </div>
        <div className="bg-white rounded-2xl flex flex-col text-center items-center cursor-pointer justify-center">
          <img src={headphone} className="w-60 h-40 rounded-t-2xl" />
          <p className="py-2">TMA-2 HD Wireless USD 350</p>
        </div>
        <div className="bg-white rounded-2xl flex flex-col text-center items-center cursor-pointer justify-center">
          <img src={headphone} className="w-60 h-40 rounded-t-2xl" />
          <p className="py-2">TMA-2 HD Wireless USD 350</p>
        </div>
      </div>
    </div>
  );
};
