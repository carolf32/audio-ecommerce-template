import { IoIosArrowBack } from "react-icons/io";
import { MdAudiotrack } from "react-icons/md";
import { useMenuContext } from "../hooks/useMenuContext";

export const HeaderTemplateMenu = () => {
  const { setIsMenuOpen } = useMenuContext();

  return (
    <div className="flex flex-row justify-between w-full items-center h-10 pt-2 px-5">
      <IoIosArrowBack
        onClick={() => setIsMenuOpen(false)}
        className="hover:text-green-default cursor-pointer"
      />

      <h3 className="font-semibold">Explore</h3>

      <MdAudiotrack className="text-green-default" />
    </div>
  );
};
