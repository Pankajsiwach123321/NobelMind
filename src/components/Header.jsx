import React from "react";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";
import { ArrowPloy } from "../comman/icon";

const Header = () => {
  return (
    <div className="min-h-screen-custum  d-flex  flex-column bg-header position-relative z-2 layer_max_lg ">
      <Navbar />
      <HeaderContent />
      <span className="arrowabout1">
        <ArrowPloy />
      </span>
    </div>
  );
};

export default Header;
