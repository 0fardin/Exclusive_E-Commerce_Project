import React from "react";
import Card from "./Component/Card";

const FeaturesProduct = () => {
  return (
    <>
      <div className="pt-[140px] pb-[60px] shadow-md">
        <div className=" container w-container">
          <div className=" flex items-center gap-4">
            <div className="w-5 h-10 bg-third rounded-md"></div>
            <h5 className=" text-[16px] font-semibold leading-5 text-third ">
              Features
            </h5>
          </div>
          <h2 className=" text-4xl leading-[48px] font-semibold mt-6">
            Features Products
          </h2>
          <div className=" flex items-center gap-7">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className=" flex justify-center">
            <button className=" text-[16px] text-secondary font-medium py-4 px-12 bg-third rounded-md mt-14">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesProduct;
