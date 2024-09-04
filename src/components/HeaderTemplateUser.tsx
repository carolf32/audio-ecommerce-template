import { IoIosArrowBack } from "react-icons/io";
import { MdAudiotrack } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

export const HeaderTemplateUser = () => {
  const { user, setUser } = useUserContext();

  const cleanUser = () => {
    setUser(null);
    localStorage.removeItem("@USER");
    localStorage.removeItem("@TOKEN");
  };

  return (
    <div className="flex justify-between items-center pt-2 px-5">
      <Link to="/">
        <IoIosArrowBack className="hover:text-green-default cursor-pointer" />
      </Link>
      <div className="flex justify-center items-center">
        <MdAudiotrack className="text-green-default" />
        <h3 className="font-semibold">Audio</h3>
      </div>

      <div className="flex gap-1">
        <IoCartOutline
          size={24}
          className="hover:text-green-default cursor-pointer"
        />
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
