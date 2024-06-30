import style from "./products.module.css";
import headphone from "../../assets/product-image/headphone-white.jpg";

export const HomeProducts = () => {
  return (
    <div className={style.homeproductsDiv}>
      <div className="p-5 flex justify-evenly items-center flex-wrap gap-1">
        <a className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full">
          Headphones
        </a>
        <a className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full">
          Earpads
        </a>
        <a className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full">
          Acessories
        </a>
        <a className="bg-green-default cursor-pointer text-grey-0 px-4 py-1 font-semibold rounded-full">
          All Products
        </a>
      </div>
      <div className="flex justify-between px-5 py-7">
        <h3 className="font-semibold ">Featured Products</h3>
        <p className="cursor-pointer">See All</p>
      </div>
      <div className="grid gap-4 grid-cols-2 px-5 m-auto md:grid-cols-3 lg:grid-cols-4">
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
