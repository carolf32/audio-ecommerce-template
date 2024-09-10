import { useCartContext } from "../hooks/useCartContext";
import { Product } from "../interfaces/product.interface";
import { CartItem } from "./CartItem";
import { HeaderTemplateCart } from "./HeaderTemplateCart";

export const CartModal = () => {
  const { cartList } = useCartContext();

  const calculateTotal = cartList.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const totalItems = cartList.reduce((total, item) => {
    return total + (item.quantity || 1);
  }, 0);

  return (
    <div
      role="dialog"
      className="fixed inset-0 sm:inset-y-0 right-0 max-w-[768px] z-50 flex flex-col gap-6 bg-white bg-opacity-95"
    >
      <div className="sticky top-0 z-50 bg-white">
        <HeaderTemplateCart />
      </div>

      <ul className="flex flex-col ml-8 gap-4 overflow-y-auto pt-20 pb-32 ">
        {cartList.map((product: Product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>

      <div className="fixed bottom-0 w-full max-w-[768px] bg-white shadow-md">
        <div className="flex justify-between p-2 px-8 border-t">
          <h4>Total {totalItems} items</h4>
          <h3 className="font-semibold">€ {calculateTotal.toFixed(2)}</h3>
        </div>
        <button className="p-2 w-11/12 z-60 bg-green-default rounded-lg m-2  mx-auto flex justify-center font-semibold text-white">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
