import React from "react";
import HExclusive from "../assets/HExclusive.png";
import { FiSearch } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const Navber = () => {
  return (
    <>
      <div className=" pt-10 pb-4 shadow-md">
        <div className=" container w-container flex items-center justify-between ">
          <img className=" w-[118px]" src={HExclusive} alt="Logo" />
          <ul className="  text-primary text-[16px] font-normal leading-[24px] flex gap-12 items-center">
            <li className=" underline underline-offset-8 decoration-primary ">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sing Up</a>
            </li>
          </ul>
          <div className=" flex items-center gap-6">
            <div className="border py-2 pl-[20px] pr-3 bg-deepsecondary flex items-center gap-8">
              <input
                className="text-[12px] leading-[18px] text-primary/50 bg-deepsecondary outline-none"
                placeholder="What are you looking for?"
                type="text"
              />
              <FiSearch />
            </div>
            <BsCart3 className=" text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
