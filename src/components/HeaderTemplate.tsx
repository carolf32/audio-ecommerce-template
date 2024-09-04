import { BsList } from "react-icons/bs";
import { MdAudiotrack } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useUserContext } from "../hooks/useUserContext";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import { CartModal } from "./CartModal";

export const HeaderTemplate = () => {
  const { user, setUser } = useUserContext();
  const { isCartModalOpen, setIsCartModalOpen } = useCartContext();

  const cleanUser = () => {
    setUser(null);
    localStorage.removeItem("@USER");
    localStorage.removeItem("@TOKEN");
  };

  return (
    <div className="flex justify-between items-center pt-2 px-5">
      <BsList className="hover:text-green-default cursor-pointer" />
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
          <Link to="/">
            <h3 className="cursor-pointer hover:text-green-default">Login</h3>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderTemplate;
