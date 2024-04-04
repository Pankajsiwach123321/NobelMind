import React, { useEffect } from "react";

const ProgressBar = () => {
  useEffect(() => {
    const scrollHandler = () => {
      scrollProgress();
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollProgress = () => {
    const currentState = window.scrollY || document.documentElement.scrollTop;
    const pageHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollStatePercentage = (currentState / pageHeight) * 100;
    document.querySelector(".page-scroll-indicator > .progres").style.width =
      scrollStatePercentage + "%";
  };

  return (
    <div className="position-fixed top-0  z-7  w-100">
      <div className="page-scroll-indicator h-2">
        <div className="progres h-100 bg-grdiant" style={{ width: "0%" }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
