import React from "react";
import "./WhyUs.scss";
import Main from "../../Main";
import Testimonials from "../../components/Testimonials/Testimonials";

const WhyUs = () => {
  return (
    <Main pageTitle={"Why Us"} pageClass={"why-us"}>
      <div className="container">
        <h1>Why Us?</h1>
        <div>
          <h2>Highly Qualified Team</h2>
          <p>
            Our Audiologists are trained to the highest standard, hold first
            class qualifications and are fully certified and regulated by:
          </p>
          <ul>
            <li>
              <b>BSA</b>
            </li>
            <li>
              <b>BHSAA</b>
            </li>
            <li>
              <b>HCPC</b>
            </li>
          </ul>
        </div>
        <div>
          <h2>Why are we so detailed?</h2>
          <p>
            It is our Ethos that patients deserve the best possible services.
            Hence we ensure our team is trained to the best of their abilities.
          </p>
        </div>
        <div>
          <h2>ENT specialists on hand with support & Advice</h2>
          <p>
            A unique element to our services, we have ENT specialists available
            24-7 to review your results, our unique technology stores your ear
            images and videos for our clinicians to review at any time if
            required.
          </p>
        </div>
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
            the convenience of at-home medical consultations. With [Clinic
            Name]'s home services, superior ear care is just a phone call away,
            ensuring that your hearing health is always our top priority.
          </p>
        </div>
        <div>
          <h2>Customer-Centric Approach:</h2>
          <p>
            At EarHealth, we place you, our valued customer, at the heart of
            everything we do. Our approach is deeply rooted in understanding and
            responding to your unique hearing needs and concerns. We believe
            that every ear tells a story, and our mission is to listen
            attentively to yours. From your first consultation to ongoing care,
            our dedicated team ensures a compassionate, respectful, and
            empathetic experience. We pride ourselves on creating a welcoming
            environment where you can express your concerns freely and receive
            tailored solutions. Our commitment to excellence is not just about
            providing the latest treatments and technologies; it's about
            building lasting relationships based on trust and understanding. At
            EarHealth, your hearing journey is our journey, and we are dedicated
            to walking alongside you every step of the way.
          </p>
        </div>
        <Testimonials />
      </div>
    </Main>
  );
};

export default WhyUs;
