import { IoIosArrowBack } from "react-icons/io";
import { MdAudiotrack } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const HeaderTemplateUser = () => {
  return (
    <div className="flex justify-between items-center pt-2 px-5">
      <Link to="/">
        <IoIosArrowBack className="hover:text-green-default cursor-pointer" />
      </Link>
      <div className="flex justify-center items-center">
        <MdAudiotrack className="text-green-default" />
        <h3 className="font-semibold">Audio</h3>
      </div>
      <IoCartOutline
        size={18}
        className="hover:text-green-default cursor-pointer"
      />
    </div>
  );
};
