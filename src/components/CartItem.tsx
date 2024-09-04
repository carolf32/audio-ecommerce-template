import { CiTrash } from "react-icons/ci";
import product1 from "../assets/product-image/headphone-white.jpg";

export const CartItem = () => {
  return (
    <li className="flex gap-2">
      <img src={product1} alt="" className="w-56 rounded-xl" />
      <div className="flex flex-col justify-between py-3 px-2">
        <h4 className="font-semibold">TMA-2 Comfort Wireless USD 270</h4>
        <div className="flex justify-between items-center">
          <div className="flex ">
            <a
              href=""
              className="bg-grey-3 w-5 rounded-md text-center font-semibold"
            >
              -
            </a>
            <h4 className="px-4">1</h4>
            <a
              href=""
              className="bg-grey-3 w-5 rounded-md text-center font-semibold"
            >
              +
            </a>
          </div>
          <CiTrash size={20} />
        </div>
      </div>
    </li>
  );
};
