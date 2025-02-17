import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import Ads from "../assets/Frame 600.png";

const Categories = () => {
  return (
    <>
      <div className="pt-[140px] pb-[153px] shadow-md">
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
              <div className="w-11 h-11 rounded-full bg-deepsecondary text-primary flex items-center justify-center cursor-pointer text-2xl">
                <FaArrowLeft />
              </div>
              <div className="w-11 h-11 rounded-full bg-deepsecondary text-primary flex items-center justify-center cursor-pointer text-2xl">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className=" mt-16 flex gap-8">
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300 cursor-pointer">
              <CiMobile3 className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                Phones
              </p>
            </div>
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300 cursor-pointer">
              <RiComputerLine className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                Computers
              </p>
            </div>
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300 cursor-pointer">
              <BsSmartwatch className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                SmartWatch
              </p>
            </div>
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300 cursor-pointer">
              <IoCameraOutline className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                Camera
              </p>
            </div>
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300 cursor-pointer">
              <FiHeadphones className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                HeadPhones
              </p>
            </div>
            <div className=" w-[170px] h-[145px] border border-primary/50 rounded-md flex flex-col items-center justify-center group hover:bg-third hover:border-third duration-300 cursor-pointer">
              <IoGameControllerOutline className=" text-6xl  text-primary group-hover:text-white" />
              <p className=" text-[16px] leading-6 text-primary font-normal group-hover:text-white">
                Gaming
              </p>
            </div>
          </div>
          <div className="my-20 w-full cursor-pointer">
            <img src={Ads} alt="Ads Banner" className=" w-full" />
          </div>
          <div className=" flex gap-[88px] px-[113px]">
            <div className=" w-[260px] flex flex-col gap-6 items-center">
              <div className=" w-20 h-20 rounded-full border-[10px] border-stone-300 text-4xl text-secondary bg-primary flex items-center justify-center">
                <FaTruckFast />
              </div>
              <div className=" flex flex-col items-center gap-2">
                <h5 className=" text-xl text-primary font-semibold">
                  FREE AND FAST DELIVERY
                </h5>
                <p className=" text-sm font-normal text-primary">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
            <div className=" w-[260px] flex flex-col gap-6 items-center">
              <div className=" w-20 h-20 rounded-full border-[10px] border-stone-300 text-4xl text-secondary bg-primary flex items-center justify-center">
                <MdOutlineHeadsetMic />
              </div>
              <div className=" flex flex-col items-center gap-2">
                <h5 className=" text-xl text-primary font-semibold">
                  24/7 CUSTOMER SERVICE
                </h5>
                <p className=" text-sm font-normal text-primary">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
            <div className=" w-[260px] flex flex-col gap-6 items-center">
              <div className=" w-20 h-20 rounded-full border-[10px] border-stone-300 text-4xl text-secondary bg-primary flex items-center justify-center">
                <RiShieldCheckLine />
              </div>
              <div className=" flex flex-col items-center gap-2">
                <h5 className=" text-xl text-primary font-semibold">
                  MONEY BACK GUARANTEE
                </h5>
                <p className=" text-sm font-normal text-primary">
                  We reurn money within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
