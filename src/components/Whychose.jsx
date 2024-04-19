import React from "react";
import meeting from "../assets/images/teammeeting.webp";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ArrowPloy, One, Three, Two, TwoStar } from "../comman/icon";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Autoplay, Pagination, Virtual } from "swiper/modules";

const Whychose = () => {
  return (
    <div className=" position-relative  z-1 pt-lg-5 mt-6" id="whychoose">
      <Container className="pt-5 mt-lg-5">
        <p
          data-aos="fade-down"
          className="exo fw-normal mb-2  fs-sm lh-s c-primery-low d-flex justify-content-center   align-items-center gap-1 "
        >
          <span>
            <TwoStar />
          </span>
          Why Choose Us
        </p>
        <h2
          data-aos="fade-down"
          className="outfit fw-light fs-lg lh_lg  c-primery text-center  "
        >
          Driving Innovation &
          <span className=" fw-semibold d-block ">
            {" "}
            Transforming Industries
          </span>
        </h2>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Virtual, Pagination, A11y, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="py-51"
        >
          <SwiperSlide className=" h-auto">
            <div className=" h-100">
              <div className="cardslider">
                <span className=" d-inline-block  mb-1">
                  <One />
                </span>
                <h3 className=" pt-2 outfit mb-1 fw-normal  fs-md lh-s c-primery-low">
                  Customer-Centric
                </h3>
                <p className="exo fw-normal  fs-sm lh-s c-secandary-low">
                  Prioritize and anticipate client needs, ensuring our
                  technology solutions consistently deliver unparalleled value.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className=" h-100">
              <div className="cardslider">
                <span className=" d-inline-block  mb-1">
                  <Two />
                </span>
                <h3 className=" pt-2 outfit mb-1 fw-normal  fs-md lh-s c-primery-low">
                  Workplace Harmony
                </h3>
                <p className="exo fw-normal  fs-sm lh-s c-secandary-low">
                  Create a nurturing and peaceful environment for our staff,
                  fostering growth, well-being, and unity. We are more than a
                  team; we are a family.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className=" h-100">
              <div className="cardslider">
                <span className=" d-inline-block  mb-1">
                  <Three />
                </span>
                <h3 className=" pt-2 outfit mb-1 fw-normal  fs-md lh-s c-primery-low">
                  Ethical Leadership
                </h3>
                <p className="exo fw-normal  fs-sm lh-s c-secandary-low">
                  Maintain the highest standards in all practices, ensuring our
                  solutions are responsible, safe, and transparent.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" h-auto">
            <div className=" h-100">
              <div className="cardslider">
                <span className=" d-inline-block  mb-1">
                  <Two />
                </span>
                <h3 className=" pt-2 outfit mb-1 fw-normal  fs-md lh-s c-primery-low">
                  Customer-Centric
                </h3>
                <p className="exo fw-normal  fs-sm lh-s c-secandary-low">
                  Prioritize and anticipate client needs, ensuring our
                  technology solutions consistently deliver unparalleled value.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Image
          data-aos="zoom-in"
          src={meeting}
          alt="meeting"
          className=" rounded-4  mt-2 w-100"
        />
      </Container>
      <span className="arrowchose1">
        <ArrowPloy />
      </span>
      <span className="arrowchose2">
        <ArrowPloy />
      </span>
    </div>
  );
};

export default Whychose;
