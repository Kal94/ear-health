import React from "react";
import "./WhyUs.scss";
import Main from "../../Main";
import Testimonials from "../../components/Testimonials/Testimonials";
import HCPC from "../../assets/HCPC.webp";
import AHCS from "../../assets/ahcs-logo-cropped.svg";
import BSHAA from "../../assets/BSHAA.png";
import image7 from "../../assets/7.jpg";
import image5 from "../../assets/5.jpg";
import magnify from "../../assets/magnify.png";
import medical from "../../assets/medical.png";
import physician from "../../assets/physician.png";

const WhyUs = () => {
  return (
    <Main pageTitle={"Why Us"} pageClass={"why-us"}>
      <div className="container">
        <h1>Why Us?</h1>
      </div>
      <div className="container">
        <h2>Highly Qualified Team</h2>
        <p>
          Our Audiologists are trained to the highest standard, hold first class
          qualifications and are fully certified and regulated by:
        </p>
        <div className="credit-images">
          <img src={HCPC} data-aos="fade-up" data-aos-duration="750" />
          <img
            src={AHCS}
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-delay="500"
          />
          <img
            src={BSHAA}
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-delay="1000"
          />
          <img
            src={physician}
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-delay="1000"
          />
        </div>
      </div>
      <div className="card-container container">
        <div className="card" data-aos="fade-right" data-aos-duration="750">
          <img src={magnify} width={50} />
          <h2>Why are we so detailed?</h2>
          <p>
            It is our Ethos that patients deserve the best possible services.
            Hence we ensure our team is trained to the best of their abilities.
          </p>
        </div>
        <div className="card" data-aos="fade-left" data-aos-duration="750">
          <img src={medical} width={50} />
          <h2>ENT specialists on hand with support & Advice</h2>
          <p>
            A unique element to our services, we have ENT specialists available
            24-7 to review your results, our unique technology stores your ear
            images and videos for our clinicians to review at any time if
            required.
          </p>
        </div>
      </div>

      <div className="flex container"  data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
        <div>
          <h2>Convenient Home Services:</h2>
          <p>
            At EarHealth, we understand that access to quality ear care should
            be hassle-free and comfortable. That's why we're proud to offer our
            convenient home services, designed to bring our exceptional ear care
            directly to your doorstep. Whether it's a hearing assessment,
            fitting for hearing aids, or follow-up care, our team of experienced
            audiologists and hearing specialists are equipped to provide the
            same high-quality, personalized service you'd receive in our clinic,
            all from the comfort of your own home. This service is ideal for
            seniors, individuals with mobility challenges, or anyone who prefers
            the convenience of at-home medical consultations. With EarHealth's
            home services, superior ear care is just a phone call away, ensuring
            that your hearing health is always our top priority.
          </p>
        </div>
        <div className="image">
          <img src={image7} />
        </div>
      </div>
      <Testimonials />
      <div className="flex-reverse"  data-aos="fade-up" data-aos-duration="750" data-aos-delay="750">
        <div className="container">
          <div>
            <h2>Customer-Centric Approach:</h2>
            <p>
              At EarHealth, we place you, our valued customer, at the heart of
              everything we do. Our approach is deeply rooted in understanding
              and responding to your unique hearing needs and concerns. We
              believe that every ear tells a story, and our mission is to listen
              attentively to yours. From your first consultation to ongoing
              care, our dedicated team ensures a compassionate, respectful, and
              empathetic experience. We pride ourselves on creating a welcoming
              environment where you can express your concerns freely and receive
              tailored solutions. Our commitment to excellence is not just about
              providing the latest treatments and technologies; it's about
              building lasting relationships based on trust and understanding.
              At EarHealth, your hearing journey is our journey, and we are
              dedicated to walking alongside you every step of the way.
            </p>
          </div>
          <div className="image">
            <img src={image5} />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default WhyUs;
