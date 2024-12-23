/* eslint-disable no-undef */
import React from "react";
import Banner_one from "../../assets/Banner/Banner.png";
import Banner_two from "../../assets/Banner/Bannerr.png";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
  const BannerImage = [{ Banner: Banner_one }, { Banner: Banner_two }];
  const settings = {
    dots: {},
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className=" w-full h-[344px] bg-black flex items-center pt-4 relative">
        <div className=" w-4/12 pl-[64px]">
          <div className=" text-secondary flex items-center gap-6">
            <FaApple className=" text-6xl" />
            <h5 className=" text-[16px] leading-6">iPhone 14 Series</h5>
          </div>
          <h1 className=" w-[294px] text-secondary text-5xl leading-[60px] font-semibold tracking-normal mt-5 mb-6">
            Up to 10% off Voucher
          </h1>
          <button className=" text-[16px] leading-6 text-secondary underline underline-offset-8 flex items-center gap-2">
            Shop Now
            <FaArrowRight />
          </button>
        </div>

        <Slider className=" w-8/12 h-[350px] pr-[278px]" {...settings}>
          {BannerImage.map((item, index) => (
            <img key={index} src={item.Banner} alt={`Banner ${index}`} />
          ))}
        </Slider>

        <div className=" flex items-center gap-4 absolute bottom-3 left-[50%] translate-x-[-50%]">
          {/* {settings.dots} */}
          <div className="w-3 h-3 bg-secondary/50 rounded-full"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full border-2"></div>
          <div className="w-3 h-3 bg-secondary/50 rounded-full"></div>
          <div className="w-3 h-3 bg-secondary/50 rounded-full"></div>
          <div className="w-3 h-3 bg-secondary/50 rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
