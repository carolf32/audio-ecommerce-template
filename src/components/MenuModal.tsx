import { Link } from "react-router-dom";
import { HeaderTemplateMenu } from "./HeaderTemplateMenu";

export const MenuModal = () => {
  return (
    <div
      role="dialog"
      className="fixed inset-0 sm:inset-y-0 right-0 max-w-[768px] z-50 flex flex-col gap-6 bg-white bg-opacity-95"
    >
      <HeaderTemplateMenu />
      <ul className="grid grid-cols-1 gap-5 p-8">
        <Link to="/headphones">
          <li className="hover:text-black bg-green-default rounded text-white text-center">
            Headphones
          </li>
        </Link>
        <Link to="/earpads">
          <li className="hover:text-black bg-green-default rounded text-white text-center">
            Earpads
          </li>
        </Link>
        <Link to="/acessories">
          <li className="hover:text-black bg-green-default rounded text-white text-center">
            Acessories
          </li>
        </Link>
        <Link to="/products">
          <li className="hover:text-black bg-green-default rounded text-white text-center">
            All Products
          </li>
        </Link>
      </ul>
    </div>
  );
};
