import { CiTrash } from "react-icons/ci";
import { useCartContext } from "../hooks/useCartContext";
import { Product } from "../interfaces/product.interface";

interface CartItemProps {
  product: Product;
}

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { cartList, updateQuantity, removeProductFromCart } = useCartContext();

  const cartItem = cartList.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 1;

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeProductFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeProductFromCart(product.id);
  };

  return (
    <li className="flex gap-2">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-40 h-40 rounded-xl object-cover"
      />
      <div className="flex flex-col justify-between py-3 px-2">
        <h4 className="font-semibold">{product.name}</h4>
        <p>{`€ ${product.price.toFixed(2)}`}</p>
        <div className="flex items-center ">
          <div className="flex ">
            <button
              onClick={handleDecrease}
              className="bg-grey-3 w-5 rounded-md text-center font-semibold"
            >
              -
            </button>
            <h4 className="px-4">{quantity}</h4>
            <button
              onClick={handleIncrease}
              className="bg-grey-3 w-5 rounded-md text-center font-semibold"
            >
              +
            </button>
          </div>
          <CiTrash
            size={20}
            onClick={handleRemove}
            className="cursor-pointer ml-5"
          />
        </div>
      </div>
    </li>
  );
};
