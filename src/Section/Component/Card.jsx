import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const Card = () => {
  return (
    <>
      <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white  shadow-md duration-300 hover:scale-105 hover:shadow-lg group">
        <div className="h-72 w-full px-10 py-9 bg-deepsecondary relative ">
          <div className=" w-14 h-7 bg-third rounded-md py-1 px-3 text-secondary absolute top-3 left-3">
            -40%
          </div>
          <img
            className=" h-full w-full object-center "
            src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Product Image"
          />

          <div className=" flex flex-col gap-2 absolute top-3 right-3">
            <div className=" w-8 h-8 rounded-full bg-white text-xl text-primary flex items-center justify-center">
              <IoIosHeartEmpty className=" text-xl text-primary" />
            </div>
            <div className=" w-8 h-8 rounded-full bg-white text-xl text-primary flex items-center justify-center">
              <IoEyeOutline className=" text-xl text-primary" />
            </div>
          </div>
          <div className=" w-full py-2 bg-primary text-center group-hover:visible invisible duration-300 absolute bottom-0 -left-full group-hover:bottom-0 group-hover:left-0">
            <h5 className="text-secondary text-[16px] leading-6">
              Add To Cart
            </h5>
          </div>
        </div>
        <div className="pt-4 pl-1 ">
          <h2 className="mb-4 text-lg font-medium text-primary">
            HAVIT HV-G92 Gamepad
          </h2>
          <div className="flex items-center mb-2">
            <p className="mr-3 text-lg font-medium text-third">$120</p>
            <p className="text-base  font-medium text-gray-500 line-through ">
              $25.00
            </p>
          </div>
          <div className=" flex items-center gap-2">
            <div className=" flex items-center text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-base font-medium text-gray-500 ">(88)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
