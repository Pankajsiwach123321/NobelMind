import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/images/logo.webp";
import Button from "./Button";
import { Navcross, Navline } from "../comman/icon";
const Navbar = () => {
  const [show, setshow] = React.useState(false);
  if (show) {
    document.body.classList.add("over_flow");
  } else {
    document.body.classList.remove("over_flow");
  }
  return (
    <nav className=" py-3 my-1">
      <Container>
        <div className=" position-relative  d-flex justify-content-between  align-items-center ">
          <ul className="mb-0 ps-0">
            <li>
              <a href="#">
                <img src={logo} width={221} alt="logo" />
              </a>
            </li>
          </ul>
          <ul className=" mb-0 ps-0 d-flex  align-items-center  gap-40">
            <li
              className={` ${
                show && " left-0"
              } d-flex mobileview  align-items-center gap-4`}
            >
              <a
                onClick={() => setshow(false)}
                href="#home"
                className="fs-sm text-decoration-none c-secandary-low lh-s exo fw-normal navlink transition-300"
              >
                Home
              </a>
              <a
                onClick={() => setshow(false)}
                href="#about"
                className="fs-sm text-decoration-none c-secandary-low lh-s exo fw-normal navlink transition-300"
              >
                About Us
              </a>
              <a
                onClick={() => setshow(false)}
                href="#service"
                className="fs-sm text-decoration-none c-secandary-low lh-s exo fw-normal navlink transition-300"
              >
                Services
              </a>
              <a
                onClick={() => setshow(false)}
                href="#whychoose"
                className="fs-sm text-decoration-none c-secandary-low lh-s exo fw-normal navlink transition-300"
              >
                Why Choose Us
              </a>
              <a
                onClick={() => setshow(false)}
                href="#blog"
                className="fs-sm text-decoration-none c-secandary-low lh-s exo fw-normal navlink transition-300"
              >
                Blogs
              </a>
              <a
                onClick={() => setshow(false)}
                href="#faq"
                className="fs-sm text-decoration-none c-secandary-low lh-s exo fw-normal navlink transition-300"
              >
                FAQ
              </a>
              <a
                onClick={() => setshow(false)}
                href="#"
                className=" d-sm-none  d-block "
              >
                <Button text="Contact Us" />
              </a>
            </li>
            <li className=" d-sm-block  d-none  me-5 me-lg-0">
              <Button text="Contact Us" />
            </li>
          </ul>
          <span
            onClick={() => setshow(!show)}
            className=" setbutton d-inline-block d-lg-none  "
          >
            {show ? <Navcross /> : <Navline />}
          </span>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
