import React from "react";
import { Container } from "react-bootstrap";
import Button from "./Button";
import { ArrowPloy } from "../comman/icon";

const Subcribe = () => {
  //   const [fromdata, setFromdata] = React.useState("");
  //   const [Fromerror, setFromerror] = React.useState("");
  //   const inputCon = (e) => {
  //     const { name } = e.target;
  //     setFromdata(name);
  //   };
  //   const clg = (e) => {
  //     e.preventDefault();
  //     const regex = {
  //       email:
  //         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //     };
  //     const error = {};
  //     if (!regex.email.test(fromdata)) {
  //       error.name = "invaild eamil";
  //     }
  //     setFromerror(error);
  //     if (Object.keys(error).length === 0) {
  //       setFromdata("");
  //       setFromerror("");
  //     }
  //   };
  return (
    <div className=" position-relative z-1 mt-md-5 pt-lg-23" id="service">
      <Container>
        <div className="bg-newsellter translate-y-card">
          <h2
            data-aos="fade-down"
            className="outfit fw-light c-tertiry fs-lg lh_lg text-center  c-primery "
          >
            Subscribe to our
            <span className=" fw-semibold "> Newsletter!</span>
          </h2>
          <p
            data-aos="fade-down"
            className="exo mb-0 text-center c-tertiry  fw-normal fs-sm lh-s c-secandary-high"
          >
            Be the first to get exclusive offers and the latest news.
          </p>
          <div className="email-outer ">
            <form className="d-flex justify-content-between align-items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-subcribe"
              />
              <input
                onClick={(e)=>e.preventDefault()}
                type="submit"
                value="Subscribe"
                className="subscribe-button transition-300 px-4 py-14 lh-s fw-semibold outfit c-tertiry"
              />
            </form>
          </div>
        </div>
      </Container>
      <span className="arrowsubscribe1">
        <ArrowPloy />
      </span>
    </div>
  );
};

export default Subcribe;
