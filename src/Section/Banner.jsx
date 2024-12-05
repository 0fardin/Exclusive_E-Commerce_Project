import React from "react";
import ImageSlider from "./Component/ImageSlider";

const Banner = () => {
  return (
    <>
      <div className=" pt-10 pb-4 shadow-md">
        <div className=" container w-container ">
          <ImageSlider />
        </div>
      </div>
    </>
  );
};

export default Banner;
