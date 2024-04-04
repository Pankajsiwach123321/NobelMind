import React from "react";
import { Container } from "react-bootstrap";
import { TwoStar } from "../comman/icon";

const HeaderContent = () => {
  return (
    <div className=" flex-grow-1  d-flex  align-items-center" id="home">
      <Container>
        <p className="exo fw-normal mb-2 justify-content-center justify-content-sm-start  fs-sm lh-s c-primery-low d-flex  align-items-center gap-1 ">
          <span>
            <TwoStar />
          </span>
          AI With Noble Mind
        </p>
        <div className="max-w-584">
          <h1 className=" text-center text-sm-start fw-light mb-3 outfit lh-3xl fs-xl c-primery">
            Inspiring Innovation, Elevating Solutions –{" "}
            <span className=" fs-lg fw-800  lh-2xl">Noble Mind"</span>
          </h1>
          <p className="exo text-center text-sm-start mb-0 fw-normal fs-sm lh-s c-secandary-high">
            At Noble Mind is a forward-thinking AI specialised company dedicated
            to reshaping the future of how we live, work, and learn. Our mission
            is to create ground-breaking AI solutions for Healthcare, Education,
            and beyond, aligning with Saudi Arabia’s Vision 2030.”
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HeaderContent;
