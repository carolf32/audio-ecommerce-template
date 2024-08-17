import { MdOutlineTune } from "react-icons/md";
import headphone from "../assets/product-image/headphone-white.jpg";
import { HeaderTemplateUser } from "../components/HeaderTemplateUser";
import { Link } from "react-router-dom";

export const AcessoriesPage = () => {
  return (
    <div>
      <HeaderTemplateUser />

      <div className="flex flex-col gap-1 m-4">
        <p className="text-sm">Acessories</p>
        <h2 className="font-semibold text-xl pb-3">TMA Wireless</h2>
      </div>

      <div className="flex justify-between items-center m-4">
        <div className="flex gap-1 items-center bg-grey-2 p-2 rounded-lg cursor-pointer hover:text-green-default">
          <MdOutlineTune />
          Filter
        </div>
        <div className="hover:text-green-default cursor-pointer">
          Popularity
        </div>
        <div className="hover:text-green-default cursor-pointer">Newest</div>
        <Link
          to="/acessories"
          className="hover:text-green-default cursor-pointer"
        >
          See All
        </Link>
      </div>

      <div className="bg-grey-1 mt-5 rounded-t-3xl h-full py-6">
        <div className="grid gap-4 max-[425px]:grid-cols-1  px-5 m-auto md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-white pt-0 mt-0 rounded-2xl flex flex-col text-center items-center cursor-pointer justify-center">
            <img src={headphone} className="w-60 h-40 rounded-t-2xl" />
            <p className="py-2">TMA-2 HD Wireless USD 350</p>
          </div>
          <div className="bg-white rounded-2xl flex flex-col text-center items-center cursor-pointer justify-center">
            <img src={headphone} className="w-60 h-40 rounded-t-2xl" />
            <p className="py-2">TMA-2 HD Wireless USD 350</p>
          </div>
        </div>
      </div>
    </div>
  );
};
