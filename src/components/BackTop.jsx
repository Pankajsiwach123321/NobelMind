import React, { useEffect, useRef, useState } from "react";
import backtop from "../assets/images/Backtop.webp";
const BackTop = () => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: "smooth",
    });
  });
  const scrollTop = React.useRef();
  React.useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 1000
        ? (scrollTop.current.style.display = "inline-block")
        : (scrollTop.current.style.display = "none");
    });
  });
  return (
    <div>
      <div
        onClick={() =>
          setPosition({ ...position, position: { top: 0, left: 0 } })
        }
        className="setbacktop"
        ref={scrollTop}
      >
        <div className=" bg-grdiant p-1 rounded-2">
          <img
            src={backtop}
            alt="backtop"
            width={25}
            height={25}
            className=" rounded-2 box-line "
          />
        </div>
      </div>
    </div>
  );
};

export default BackTop;
