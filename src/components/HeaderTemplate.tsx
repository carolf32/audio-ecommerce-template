import { BsList } from "react-icons/bs";
import { MdAudiotrack } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useUserContext } from "../hooks/useUserContext";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import { CartModal } from "./CartModal";
import { useMenuContext } from "../hooks/useMenuContext";
import { MenuModal } from "./MenuModal";

export const HeaderTemplate = () => {
  const { user, setUser } = useUserContext();
  const { isCartModalOpen, setIsCartModalOpen } = useCartContext();
  const { isMenuOpen, setIsMenuOpen } = useMenuContext();
  const { cartList } = useCartContext();

  const totalItems = cartList.reduce((total, item) => {
    return total + (item.quantity || 1);
  }, 0);

  const cleanUser = () => {
    setUser(null);
    localStorage.removeItem("@USER");
    localStorage.removeItem("@TOKEN");
  };

  return (
    <div className="flex justify-between items-center pt-2 px-5">
      <BsList
        onClick={() => setIsMenuOpen(true)}
        className="hover:text-green-default cursor-pointer"
      />
      {isMenuOpen ? <MenuModal /> : null}

      <div className="flex justify-center items-center">
        <MdAudiotrack className="text-green-default" />
        <h3 className="font-semibold">Audio</h3>
      </div>
      <div className="flex gap-1">
        <IoCartOutline
          size={24}
          onClick={() => setIsCartModalOpen(true)}
          className="hover:text-green-default cursor-pointer"
        />
        {totalItems > 0 ? (
          <div className="bg-green-default absolute top-0 right-14 w-3 h-3 rounded-full text-center flex justify-center items-center text-xs mt-1">
            {totalItems}
          </div>
        ) : null}
        {isCartModalOpen ? <CartModal /> : null}

        {user ? (
          <Link to="/login">
            <h3
              onClick={cleanUser}
              className="cursor-pointer hover:text-green-default"
            >
              Logout
            </h3>
          </Link>
        ) : (
          <Link to="/login">
            <h3 className="cursor-pointer hover:text-green-default">Login</h3>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderTemplate;
