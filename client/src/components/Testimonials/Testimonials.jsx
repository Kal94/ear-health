import React, { useEffect } from "react";
import "./Testimonials.scss";
import Slider from "react-slick";
import { quotes } from "../../data";
import AOS from 'aos'

const Testimonials = () => {

  useEffect(()=> {
    AOS.init()
  })
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayDuration:3000
  };
  return (
    <div className="testimonials container" data-aos="fade-down" data-aos-duration="750" data-aos-delay="250" >
      <div className="testimonials-text">
        <h2>Testimonials</h2>
        <Slider {...settings}>
          {quotes.map((quote, key) => (
            <div key={key} className="quote">
              <h3>{quote}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
