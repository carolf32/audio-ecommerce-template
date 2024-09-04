import { IoIosArrowBack } from "react-icons/io";
import { MdAudiotrack } from "react-icons/md";
import { useCartContext } from "../hooks/useCartContext";

export const HeaderTemplateCart = () => {
  const { setIsCartModalOpen } = useCartContext();

  return (
    <div className="flex flex-row justify-between w-full items-center h-10 pt-2 px-5">
      <IoIosArrowBack
        onClick={() => setIsCartModalOpen(false)}
        className="hover:text-green-default cursor-pointer"
      />

      <h3 className="font-semibold">Shopping Cart</h3>

      <MdAudiotrack className="text-green-default" />
    </div>
  );
};
