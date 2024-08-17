import { Link } from "react-router-dom";
import { HeaderTemplateUser } from "../components/HeaderTemplateUser";

export const ProductPageSpecifications = () => {
  return (
    <div>
      <HeaderTemplateUser />

      <div className="flex flex-col gap-1 m-4">
        <p className="text-sm text-green-default font-semibold">USD 350</p>
        <h2 className="font-semibold text-4xl pb-3">TMA-2 HD Wireless</h2>
      </div>

      <div className="flex justify-between items-center m-4">
        <Link to="/:id">Overview</Link>
        <Link to="/:id/features">Features</Link>
        <div className="flex flex-col items-center">
          Specification
          <div className="bg-green-default text-green-default w-7 h-1 rounded"></div>
        </div>
      </div>

      <div className="leading-7 m-4">
        <p>-Lorem ipsum dolor sit amet.</p>
        <p>-Lorem ipsum dolor sit amet.</p>
        <p>-Lorem ipsum dolor sit amet.</p>
        <p>-Lorem ipsum dolor sit amet.</p>
        <p>-Lorem ipsum dolor sit amet.</p>
        <p>-Lorem ipsum dolor sit amet.</p>
      </div>

      <div
        href=""
        className="bg-green-default text-white max-w-80 mx-auto items-center m-3 p-2 rounded-lg flex justify-center font-semibold"
      >
        Add to cart
      </div>
    </div>
  );
};
