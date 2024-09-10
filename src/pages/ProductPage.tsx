import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { HeaderTemplateUser } from "../components/HeaderTemplateUser";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import { useProductContext } from "../hooks/useProductContext";
import axios from "axios";
import { Product } from "../interfaces/product.interface";

export const ProductPage = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setSlidesPerView(1);
      } else if (product?.images && product?.images.length == 1) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <HeaderTemplateUser />

      <div className="flex flex-col gap-1 m-4">
        <p className="text-sm text-green-default font-semibold">
          {`€ ${product?.price.toFixed(2)}`}
        </p>
        <h2 className="font-semibold text-4xl pb-3">{product?.name}</h2>
      </div>

      <div className="flex justify-around items-center m-4">
        <div className="flex flex-col justify-center items-center">
          Overview
          <div className="bg-green-default text-green-default w-7 h-1 rounded"></div>
        </div>
        <Link
          to="/products/:id/features"
          className="hover:text-green-default cursor-pointer"
        >
          Features
        </Link>
      </div>

      {product?.images && product?.images.length > 0 ? (
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          spaceBetween={30}
          modules={[Pagination, Navigation]}
          className="mx-5"
          style={
            {
              "--swiper-pagination-color": "#0acf83",
              "--swiper-navigation-color": "#0acf83",
            } as React.CSSProperties
          }
        >
          {product?.images.map((image, index) => (
            <SwiperSlide className="w-full h-[450px] object-cover">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="rounded-3xl "
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No images available</p>
      )}

      <div
        onClick={() => addProductToCart(product as Product, 1)}
        className="bg-green-default text-white cursor-pointer max-w-80 mx-auto items-center m-3 p-2 rounded-lg flex justify-center font-semibold"
      >
        Add to cart
      </div>
    </div>
  );
};
