import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../../assets/banner-image/earpad-horizontal2.jpg";
import image2 from "../../assets/banner-image/headphone-horizontal.jpg";
import image3 from "../../assets/banner-image/headphone-horizontal2.jpg";
import image4 from "../../assets/banner-image/headphone-horizontal3.jpg";
import image5 from "../../assets/banner-image/headphone-horizontal4.jpg";
import { useEffect, useState } from "react";

export const BannerHomepage = () => {
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
      <Swiper
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        spaceBetween={30}
        modules={[Autoplay, Pagination, Navigation]}
        className="mx-5"
        style={
          {
            "--swiper-pagination-color": "#0acf83",
            "--swiper-navigation-color": "#0acf83",
          } as React.CSSProperties
        }
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
        <SwiperSlide className="w-full h-[450px]">
          <img
            src={image3}
            alt="3"
            className="rounded-3xl "
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-[450px]">
          <img
            src={image4}
            alt="4"
            className="rounded-3xl "
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-[450px]">
          <img
            src={image5}
            alt="5"
            className="rounded-3xl "
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
