import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import image1 from "../assets/banner-image/headphone-horizontal3.jpg";
import image2 from "../assets/banner-image/headphone-horizontal4.jpg";
import { HeaderTemplateUser } from "../components/HeaderTemplateUser";
import { Link } from "react-router-dom";

export const ProductPage = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
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
        <p className="text-sm text-green-default font-semibold">USD 350</p>
        <h2 className="font-semibold text-4xl pb-3">TMA-2 HD Wireless</h2>
      </div>

      <div className="flex justify-between items-center m-4">
        <div className="flex flex-col justify-center items-center">
          Overview
          <div className="bg-green-default text-green-default w-7 h-1 rounded"></div>
        </div>
        <Link
          to="/:id/features"
          className="hover:text-green-default cursor-pointer"
        >
          Features
        </Link>
        <Link
          to="/:id/specifications"
          className="hover:text-green-default cursor-pointer"
        >
          Specification
        </Link>
      </div>

      <Swiper
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        className="mx-5"
        style={{
          "--swiper-pagination-color": "#0acf83",
          "--swiper-navigation-color": "#0acf83",
        }}
      >
        <SwiperSlide className="w-full h-[450px] object-cover">
          <img
            src={image1}
            alt="1"
            className="rounded-3xl "
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-[450px]">
          <img
            src={image2}
            alt="2"
            className="rounded-3xl "
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      </Swiper>

      <div
        href=""
        className="bg-green-default text-white cursor-pointer max-w-80 mx-auto items-center m-3 p-2 rounded-lg flex justify-center font-semibold"
      >
        Add to cart
      </div>
    </div>
  );
};
