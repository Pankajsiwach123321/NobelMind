import React from "react";
import { Container } from "react-bootstrap";
import Button from "./Button";
import { ArrowPloy } from "../comman/icon";

const Subcribe = () => {
  const [formData, setFormData] = React.useState({
    email: "",
  });
  const [formErrors, setFormErrors] = React.useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/,
    };
    const errors = {};
    if (!regex.email.test(formData.email)) {
      errors.email = "email is invalid!!";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setFormData({
        email: "",
      });
      setFormErrors({
        email: "",
      });
      alert("Newsletter! Subscribed");
    }
  };
  return (
    <div className=" position-relative -mt-13 z-1 mt-md-5 pt-lg-23" id="service">
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
            <form
              onSubmit={handleSubmit}
              className="d-flex justify-content-between align-items-center"
            >
              <input
                type="email"
                onChange={handleChange}
                value={formData.email}
                name="email"
                placeholder="Enter your email"
                className="input-subcribe bg-transparent"
              />
              <input
                type="submit"
                value="Subscribe"
                className="subscribe-button transition-300 px-4 py-14 lh-s fw-semibold outfit c-tertiry"
              />
            </form>
          </div>
          {formErrors.email && (
            <p className=" text-center text-white pt-1 exo">{formErrors.email}</p>
          )}
        </div>
      </Container>
      <span className="arrowsubscribe1 d-none d-sm-block">
        <ArrowPloy />
      </span>
    </div>
  );
};

export default Subcribe;
