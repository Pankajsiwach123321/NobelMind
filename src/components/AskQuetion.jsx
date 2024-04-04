import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { ArrowPloy } from "../comman/icon";

const AskQuetion = () => {
  return (
    <div className=" position-relative  z-1 pt-sm-5 mt-6" id="faq">
      <Container className=" pt-sm-5 mt-5">
        <h2
          data-aos="fade-down"
          className="outfit fw-light mb-3 fs-lg lh_lg text-center  c-primery "
        >
          Frequently
          <span className=" fw-semibold ">Asked Questions</span>
        </h2>
        <p
          data-aos="fade-down"
          className="exo mb-0 text-center  fw-normal fs-sm lh-s c-secandary-high"
        >
          Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu <br />{" "}
          volutpat mi leo. Nibh nisl consequat metus.
        </p>
        <Accordion
          defaultActiveKey="0"
          className=" max-w-774 mx-auto mt-5 pt-1"
        >
          <Accordion.Item eventKey="0" className=" mb-3">
            <Accordion.Header className="outfit fw-medium fs-sm c-primery">
              What is Artificial Intelligence (AI)?
            </Accordion.Header>
            <Accordion.Body className=" exo fs-sm fw-normal lh-s c-secandary-high">
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="mb-3">
            <Accordion.Header>
              How does AI benefit our company?
            </Accordion.Header>
            <Accordion.Body>
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="mb-3">
            <Accordion.Header>
              What types of AI technologies are relevant to our industry?
            </Accordion.Header>
            <Accordion.Body>
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="mb-3">
            <Accordion.Header>
              How can our employees adapt to AI integration?
            </Accordion.Header>
            <Accordion.Body>
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="mb-3">
            <Accordion.Header>
              How can our company ensure data security with AI?
            </Accordion.Header>
            <Accordion.Body>
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <span className="arrowask1">
        <ArrowPloy />
      </span>
      <span className="arrowask2">
        <ArrowPloy />
      </span>
    </div>
  );
};

export default AskQuetion;
