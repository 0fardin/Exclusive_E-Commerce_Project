/* eslint-disable no-undef */
import React, { useState } from "react";
import Banner_one from "../../assets/Banner/Banner.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const [slide, setSlide] = useState(0);
  const BannerImage = [
    { Banner: Banner_one },
    { Banner: Banner_one },
    { Banner: Banner_one },
    { Banner: Banner_one },
    { Banner: Banner_one },
    { Banner: Banner_one },
  ];
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          transform: "translateY(-50px)",
        }}
      >
        <ul
          style={{
            margin: "0px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === slide
            ? {
                width: "12px",
                height: "12px",
                borderRadius: "100%",
                border: "2px solid white",
                backgroundColor: "red",
              }
            : {
                width: "12px",
                height: "12px",
                borderRadius: "100%",
                backgroundColor: "gray",
              }
        }
      >
        {/* {i + 1} */}
      </div>
    ),
  };
  return (
    <>
      <div className=" w-full">
        <Slider {...settings}>
          {BannerImage.map((item, index) => (
            <a href="#" key={index}>
              <img
                className=" h-auto w-full"
                key={index}
                src={item.Banner}
                alt={`Banner ${index}`}
              />
            </a>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
