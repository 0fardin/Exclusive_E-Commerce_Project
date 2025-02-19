import React from "react";
import Logo from "../assets/Exclusive.png";
import { LuSendHorizontal } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import QR from "../assets/Qr Code.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

const Footer = () => {
  return (
    <>
      <div className=" bg-primary pt-20 pb-16">
        <div className=" container w-container">
          <footer className="px-4 divide-y text-secondary">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
              <div className="lg:w-1/3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex justify-center space-x-3 lg:justify-start"
                >
                  <img src={Logo} alt="Logo" />
                </a>
                <div className=" w-[217px] flex flex-col gap-5 mt-5">
                  <h5 className=" text-lg font-medium text-secondary">
                    Subscribe
                  </h5>
                  <p className=" text-sm font-normal text-secondary">
                    Get 10% off your first order
                  </p>
                  <div className=" w-[217px] relative">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full border rounded-md border-secondary py-2 pl-5 bg-transparent"
                    />
                    <div className=" text-secondary text-2xl absolute top-[50%] right-4 translate-y-[-50%]">
                      <LuSendHorizontal />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 text-sm gap-x-8 gap-y-8 lg:w-2/3 sm:grid-cols-4 text-secondary">
                <div className="space-y-3 w-[172px]">
                  <h3 className=" font-medium text-xl">Support</h3>
                  <ul className="space-y-3 font-normal text-sm">
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        exclusive@gmail.com
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        +88015-88888-9999
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-medium text-xl">Account</h3>
                  <ul className="space-y-3 font-normal text-sm">
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        Login / Register
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        Shop
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-medium text-xl">Quick Link</h3>
                  <ul className="space-y-3 font-normal text-sm">
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        Terms Of Use
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-[198px] space-y-3 text-secondary">
                  <div className="font-medium text-xl">Download App</div>
                  <div className=" pb-5">
                    <p className=" text-[12px] font-medium text-stone-400 mb-1">
                      {" "}
                      Save $3 with App New User Only
                    </p>
                    <div className="w-full flex justify-between items-center">
                      <div className=" w-20">
                        <img src={QR} alt="Qrcode" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <a href="#">
                          <img src={playstore} alt="playstore" />
                        </a>
                        <a href="#">
                          <img src={appstore} alt="appstore" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start space-x-6 text-secondary text-2xl">
                    <a href="#">
                      <GrFacebookOption />
                    </a>
                    <a href="#">
                      <FiTwitter />
                    </a>
                    <a href="#">
                      <FaInstagram />
                    </a>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
