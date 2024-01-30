import React from "react";
import "./Testimonials.scss";
import Slider from "react-slick";
import { quotes } from "../../data";

const Testimonials = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonials">
      <div className="testimonials-text">
        <h2>Testimonials</h2>
        <Slider {...settings}>
          {quotes.map((quote) => (
            <div className="quote">
              <h3>{quote}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
