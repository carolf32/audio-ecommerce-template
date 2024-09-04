import { CartItem } from "./CartItem";
import { HeaderTemplateCart } from "./HeaderTemplateCart";

export const CartModal = () => {
  return (
    <div
      role="dialog"
      className="fixed inset-0 sm:inset-y-0 right-0 max-w-[640px] z-50 flex flex-col gap-6 bg-white bg-opacity-95"
    >
      <HeaderTemplateCart />
      <ul className="flex justify-center">
        <CartItem />
      </ul>

      <div className="fixed bottom-0 max-w-full">
        <div className="flex justify-between p-2">
          <h4>Total 2 items</h4>
          <h3 className="font-semibold">EUR 295</h3>
        </div>
        <button className="p-2 w-11/12 z-60 bg-green-default rounded-lg m-2 max-w-80 mx-auto flex justify-center font-semibold text-white">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
