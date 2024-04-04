import React from "react";
import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <div className="min-h-screen-custum  d-flex  flex-column bg-header ">
      <Navbar />
      <HeaderContent />
    </div>
  );
};

export default Header;
