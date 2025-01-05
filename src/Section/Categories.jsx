import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Categories = () => {
  return (
    <>
      <div className="pt-[140px] pb-[60px] shadow-md">
        <div className=" container w-container">
          <div className=" flex items-center gap-4">
            <div className="w-5 h-10 bg-third rounded-md"></div>
            <h5 className=" text-[16px] font-semibold leading-5 text-third ">
              Categories
            </h5>
          </div>
          <div className=" mt-6 flex justify-between items-center">
            <h2 className=" text-4xl leading-[48px] font-semibold ">
              Browse By Category
            </h2>
            <div className=" flex gap-2">
              <div className="w-7 h-7 rounded-full bg-deepsecondary text-primary flex items-center justify-center">
                <FaArrowLeft />
              </div>
              <div className="w-7 h-7 rounded-full bg-deepsecondary text-primary flex items-center justify-center">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
