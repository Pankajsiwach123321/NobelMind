import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import test from "../assets/images/abutus.webp";
import { ArrowPloy, TwoStar } from "../comman/icon";
import Button from "./Button";
const Aboutus = () => {
  return (
    <div className=" position-relative  z-1 pt-sm-5 mt-6" id="about">
      <Container className="pt-5 mt-sm-5">
        <Row>
          <Col lg={6}>
            <div className=" pe-14">
              <Image
                data-aos="zoom-in"
                src={test}
                className=" w-100  aboutusimg  "
                height={567}
              />
            </div>
          </Col>
          <Col lg={6} data-aos="zoom-out" className=" pt-4 pt-lg-0 my-auto">
            <div className=" max-w-523  ms-lg-auto mx-auto text-center text-lg-start">
              <p className="exo fw-normal mb-2 justify-content-center justify-content-lg-start fs-sm lh-s c-primery-low d-flex  align-items-center gap-1 ">
                <span>
                  <TwoStar />
                </span>
                About Us
              </p>
              <h2 className="outfit fw-light text-center text-lg-start fs-lg lh_lg c-primery ">
                Pioneering Vision & Mission-{" "}
                <span className=" fw-semibold ">
                  {" "}
                  Driven Sectoral Innovation
                </span>
              </h2>
              <p className="exo mb-0 fw-normal fs-sm lh-s c-secandary-high">
                Imagine a future in Saudi Arabia influenced by the potential of
                Al, with Noble Mind at the forefront of this transformation.
                Healthcare stands to gain with the promise of enhanced data
                precision. In education, there's the potential for
                individualized learning experiences. Finance could witness
                seamless transactions, and entertainment may revel in customized
                experiences. Through Al's promise, transportation could innovate
                and cities might adapt smarter infrastructures. In every domain,
                the vision of Noble Mind hints at a brighter, more efficient
                nation.
              </p>
              <Button text="Read More" class="mt-42" />
            </div>
          </Col>
        </Row>
      </Container>
      <span className="arrowabout1">
        <ArrowPloy />
      </span>
      <span className="arrowabout2">
        <ArrowPloy />
      </span>
    </div>
  );
};

export default Aboutus;
