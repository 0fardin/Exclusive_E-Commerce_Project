import React from "react";
import Header from "../Section/Header";
import Navber from "../Section/Navber";
import Footer from "../Section/Footer";
import Footerlast from "../Section/Footerlast";
import { Outlet } from "react-router";

const Applayout = () => {
  return (
    <>
      <Header />
      <Navber />
      <Outlet />
      <Footer />
      <Footerlast />
    </>
  );
};

export default Applayout;
