import React from "react";
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import DropDown from "./Dropdown";

const Header = () => {
  return (
    <>
      <div className="bg-primary py-3">
        <div className="container w-container flex items-center justify-end">
          <h5 className=" text-secondary text-[14px] font-normal leading-[21px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className=" font-semibold leading-6 underline ml-2">
              ShopNow
            </span>
          </h5>
          <div className=" text-secondary text-[14px] font-normal leading-[21px] ml-[231px]">
            English
            <DropDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
