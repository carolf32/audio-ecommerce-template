import style from "./bannerHome.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import headphoneHorizontal from "../../assets/banner-image/headphone-horizontal.jpg";
import headphoneHorizontal2 from "../../assets/banner-image/headphone-horizontal2.jpg";
import headphoneHorizontal3 from "../../assets/banner-image/headphone-horizontal4.jpg";
import { useEffect, useRef, useState } from "react";

export const BannerHomepage = () => {
  const bannerSliderWidthRef = useRef<HTMLDivElement>(null);
  const currentSlideRef = useRef<number>(0);
  const [widthSlide, setWidthSlide] = useState<number>(300);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 1024) {
        setWidthSlide(900);
      } else if (window.innerWidth >= 768) {
        setWidthSlide(600);
      } else if (window.innerWidth >= 425) {
        setWidthSlide(400);
      } else {
        setWidthSlide(300);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    const totalSlides = document.querySelectorAll(
      `.${style.bannerSliderItem}`
    ).length;

    if (bannerSliderWidthRef.current) {
      bannerSliderWidthRef.current.style.width = `calc(${
        totalSlides * widthSlide
      }px)`;
    }

    const updateSliderPosition = () => {
      if (bannerSliderWidthRef.current) {
        bannerSliderWidthRef.current.style.transform = `translateX(-${
          currentSlideRef.current * widthSlide
        }px)`;
      }
    };

    const goPrev = () => {
      if (currentSlideRef.current > 0) {
        currentSlideRef.current--;
      } else {
        currentSlideRef.current = totalSlides - 1;
      }
      updateSliderPosition();
    };

    const goNext = () => {
      if (currentSlideRef.current < totalSlides - 1) {
        currentSlideRef.current++;
      } else {
        currentSlideRef.current = 0;
      }
      updateSliderPosition();
    };

    const prevButton = document.querySelector(`.${style.prevButton}`);
    const nextButton = document.querySelector(`.${style.nextButton}`);

    prevButton?.addEventListener("click", goPrev);
    nextButton?.addEventListener("click", goNext);

    return () => {
      prevButton?.removeEventListener("click", goPrev);
      nextButton?.removeEventListener("click", goNext);
    };
  }, []);

  return (
    <div
      style={{ width: `${widthSlide}px`, height: "350px" }}
      className={style.bannerSlider}
    >
      <div
        style={{ width: `${widthSlide}px`, height: "350px" }}
        className={style.sliderControls}
      >
        <div className={`${style.sliderControl} ${style.prevButton}`}>
          <IoIosArrowBack />
        </div>
        <div className={`${style.sliderControl} ${style.nextButton}`}>
          <IoIosArrowForward />
        </div>
      </div>
      <div
        className={style.bannerSliderWidth}
        ref={bannerSliderWidthRef}
        style={{ height: "350px" }}
      >
        <div
          className={style.bannerSliderItem}
          style={{
            width: `${widthSlide}px`,
            height: "350px",
            backgroundImage: `url(${headphoneHorizontal})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{ width: `${widthSlide}px`, height: "350px" }}
            className={style.slideContent}
          >
            <h2 className={style.slideTitle}>TMA-2 Modular Headphone</h2>
            <div className={style.slideText}>
              <p>Shop now</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div
          className={style.bannerSliderItem}
          style={{
            width: `${widthSlide}px`,
            height: "350px",
            backgroundImage: `url(${headphoneHorizontal2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{ width: `${widthSlide}px`, height: "350px" }}
            className={style.slideContent}
          >
            <h2 className={style.slideTitle}>TMA-2 Modular Headphone</h2>
            <div className={style.slideText}>
              <p>Shop now</p>
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div
          className={style.bannerSliderItem}
          style={{
            width: `${widthSlide}px`,
            height: "350px",
            backgroundImage: `url(${headphoneHorizontal3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{ width: `${widthSlide}px`, height: "350px" }}
            className={style.slideContent}
          >
            <h2 className={style.slideTitle}>TMA-2 Modular Headphone</h2>
            <div className={style.slideText}>
              <p>Shop now</p>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
