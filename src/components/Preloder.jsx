import React from "react";

const Preloder = () => {
  return (
    <div className=" min-vh-100 position-fixed  z-11  bg-white w-100">
      <div id="preloader">
        <div id="loader"></div>
      </div>
    </div>
  );
};

export default Preloder;
