import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";

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
          <div className=" mt-16 flex gap-8">
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300 ">
              <CiMobile3 className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                Phones
              </p>
            </div>
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300">
              <RiComputerLine className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                Computers
              </p>
            </div>
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300">
              <BsSmartwatch className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                SmartWatch
              </p>
            </div>
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300">
              <IoCameraOutline className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                Camera
              </p>
            </div>
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300">
              <FiHeadphones className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                HeadPhones
              </p>
            </div>
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300">
              <IoGameControllerOutline className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                Gaming
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
