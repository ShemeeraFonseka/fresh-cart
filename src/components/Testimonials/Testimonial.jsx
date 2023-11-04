import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I recently started using this delivery service for my weekly produce needs and have been extremely satisfied. The selection is always fresh and varied, and the convenience of having it delivered to my doorstep is unbeatable. I highly recommend this service to anyone looking for high-quality produce.",
    },
    {
      img: profilePic2,
      review:
        "I was blown away by the freshness and quality of the produce I received. This is the only place I'll order from now on!",
    },
    {
      img: profilePic3,
      review:
        "The delivery was prompt and the products were delicious. I highly recommend this service to anyone looking for quality produce.",
    },
    {
      img: profilePic4,
      review:
        "I've never tasted such flavorful fruits and vegetables. It's clear that this company is dedicated to providing the best quality possible.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Satisfying Taste Buds </span>
        <span>Testimonials From  </span>
        <span>Our Clients...</span>
      <div className="blur t-blur1" style={{ background: "#c4f593" }}></div>
      <div className="blur t-blur2" style={{ background: "#c4f593" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
