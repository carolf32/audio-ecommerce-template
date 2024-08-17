import { BsList } from "react-icons/bs";
import { MdAudiotrack } from "react-icons/md";
import profilePic from "../assets/profilepic.jpg";

export const HeaderTemplate = () => {
  return (
    <div className="flex justify-between items-center pt-2 px-5">
      <BsList className="hover:text-green-default cursor-pointer" />
      <div className="flex justify-center items-center">
        <MdAudiotrack className="text-green-default" />
        <h3 className="font-semibold">Audio</h3>
      </div>
      <img src={profilePic} className="w-8 h-8 rounded-full cursor-pointer" />
    </div>
  );
};

export default HeaderTemplate;
