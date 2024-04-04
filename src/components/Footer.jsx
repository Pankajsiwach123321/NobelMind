import React from "react";
import footerlogo from "../assets/images/footerlogo.webp";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Facebook, Instagram, Linkdin, Twitter } from "../comman/icon";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" bg-footer  pt-5">
      <Container className="pt-5">
        <Row className=" pt-40 justify-content-between">
          <Col md={3}>
            <a href="#">
              <Image src={footerlogo} width={241} height={42} />
            </a>
            <span className=" exo fw-normal fs-sm lh-s text-white pt-4 mt-1 d-block">
              Follow Us
            </span>
            <ul className=" ps-0 mb-0 mt-2">
              <li className=" d-flex align-items-center gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blanck"
                  className="circel-link"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blanck"
                  className="circel-link"
                >
                  <Instagram />
                </a>
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blanck"
                  className="circel-link"
                >
                  <Twitter />
                </a>
                <a
                  href="https://in.linkedin.com/"
                  target="_blanck"
                  className="circel-link"
                >
                  <Linkdin />
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={6} className=" pt-4 pt-md-0">
            <Row>
              <Col xs={6}>
                <ul className=" ps-0 mb-0">
                  <li className=" outfit fw-semibold fs-sm lh-s text-white">
                    Maine
                  </li>
                  <li className=" mt-3">
                    <a
                      href="#home"
                      className=" exo fw-normal footerlink transition-300 fs-sm lh-s c-tertiry-high text-decoration-none"
                    >
                      Home
                    </a>
                  </li>
                  <li className=" mt-14">
                    <a
                      href="#about"
                      className=" exo fw-normal footerlink transition-300 fs-sm lh-s c-tertiry-high text-decoration-none"
                    >
                      About Us
                    </a>
                  </li>
                  <li className=" mt-14">
                    <a
                      href="#service"
                      className=" exo fw-normal footerlink transition-300 fs-sm lh-s c-tertiry-high text-decoration-none"
                    >
                      services
                    </a>
                  </li>
                  <li className=" mt-14">
                    <a
                      href="#whychoose"
                      className=" exo fw-normal footerlink transition-300 fs-sm lh-s c-tertiry-high text-decoration-none"
                    >
                      Why Choose Us
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className=" ps-0 mb-0">
                  <li className=" outfit fw-semibold fs-sm lh-s text-white">
                    Legal
                  </li>
                  <li className=" mt-14">
                    <a
                      href="#"
                      className=" exo fw-normal footerlink transition-300 fs-sm lh-s c-tertiry-high text-decoration-none"
                    >
                      Term & Conduction
                    </a>
                  </li>
                  <li className=" mt-14">
                    <a
                      href="#"
                      className=" exo fw-normal footerlink transition-300 fs-sm lh-s c-tertiry-high text-decoration-none"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className=" mt-14">
                    <a
                      href="#"
                      className=" exo fw-normal footerlink transition-300 fs-sm lh-s c-tertiry-high text-decoration-none"
                    >
                      Contact
                    </a>
                  </li>
                  <li className=" mt-14">
                    <a
                      href="tel:+(629) 555-0129"
                      className=" exo fw-normal footerlink transition-300 fs-sm lh-s c-tertiry-high text-decoration-none"
                    >
                      (629) 555-0129
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className=" bordertop mt-52">
        <span className=" exo fw-normal px-1 lh-xsm c-foot text-center d-block py-3   fs-xsm">
          © Copyright {year} Noble Mind | All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
