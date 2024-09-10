import { Link, useParams } from "react-router-dom";
import { HeaderTemplateUser } from "../components/HeaderTemplateUser";
import { useCartContext } from "../hooks/useCartContext";
import { useProductContext } from "../hooks/useProductContext";
import axios from "axios";
import { useEffect } from "react";

export const ProductPageFeat = () => {
  const { addProductToCart } = useCartContext();
  const { id } = useParams();
  const { product, setProduct } = useProductContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://users-api-1-zqfm.onrender.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, setProduct]);

  return (
    <div>
      <HeaderTemplateUser />

      <div className="flex flex-col gap-1 m-4">
        <p className="text-sm text-green-default font-semibold">
          € {product?.price}
        </p>
        <h2 className="font-semibold text-4xl pb-3">{product?.name}</h2>
      </div>

      <div className="flex justify-around items-center m-4">
        <Link
          to="/products/:id"
          className="hover:text-green-default cursor-pointer"
        >
          Overview
        </Link>
        <div className="flex flex-col justify-center items-center">
          Features
          <div className="bg-green-default text-green-default w-7 h-1 rounded"></div>
        </div>
      </div>

      <div className="m-4">
        <h3 className="font-semibold mb-3">Highly Detailed Audio</h3>
        <p className="leading-7">{product?.description}</p>
      </div>

      <div
        onClick={() => addProductToCart}
        className="bg-green-default text-white max-w-80 mx-auto items-center m-3 p-2 rounded-lg flex justify-center font-semibold"
      >
        Add to cart
      </div>
    </div>
  );
};
