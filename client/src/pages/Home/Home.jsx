import React, { useEffect } from "react";
import "./Home.scss";
import Main from "../../Main";
import Logo from "../../assets/Ear_Health.svg";
import Button from "../../components/Button/Button";
import Testimonials from "../../components/Testimonials/Testimonials";
import image2 from "../../assets/2.jpg";
import doctors from '../../assets/doctors.png'
import AOS from 'aos'

const Home = () => {

  useEffect(() => {
    AOS.init()
  })

  return (
    <Main pageTitle={"Home"} pageClass="home">
        <div className="centered container">
          <div className="hero">
            <div data-aos="fade-right" data-aos-duration="750">
              <img className="logo" src={Logo} />
              <p>Specialist Ear care from the comfort of your own home.</p>
              <a href="contact">
                <Button text={"Book Your Appointment"} />
              </a>
              <p>
                Contact us on{" "}
                <a href="tel:+443332422827">+44 (0) 333 242 2827</a>
              </p>
            </div>
            <div data-aos="fade-left" data-aos-duration="750">
              <img className="doctors" src={doctors} width={500} />
            </div>
          </div>
          <div className="arrow-container">
            <p>Scroll to find out more</p>
            <div className="arrow bounce"></div>
          </div>
        </div>
        <div className="about-us" data-aos="fade-up" data-aos-duration="750">
          <div className="about-us-text container">
            <h2>About us</h2>
            <p>
              With 20 years of combined experience in healthcare, we are
              dedicated to providing quality ear wax removal and audiology
              services to your home. Our team of qualified audiologists are
              fully registered and regulated under the BSA, HCPC & BSHAA.
            </p>
            <h2>Why EarHealth?</h2>
            <div className="flex">
              <ul>
                <li>
                  HD Digital Otoscopy: clearly visualise and understand your
                  diagnosis
                </li>
                <li>Quick, Safe and painless microsuction technology</li>
                <li>
                  Mobile review of images by our ENT specialists who can offer
                  support, advice and guidance as required.
                </li>
              </ul>
              <div className="image">
                <img src={image2} />
              </div>
            </div>
          </div>
        </div>

        <Testimonials />
        <div className="services" >
          <h2>Services we offer:</h2>
          <div className="services-container container">
            <div className="service" data-aos="fade-down" data-aos-duration="750">
              <h4>Home Ear Wax Removal</h4>
              <p>
                Quick, safe and painless procedure for ear cleaning, our state
                of the art machinery gently suctions wax from the ear
              </p>
            </div>
            <div className="service" data-aos="fade-down" data-aos-duration="750">
              <h4>Hearing Check</h4>
              <p>
                Fully mobile hearing check for you at home, using 4 frequencies.
                Checking your hearing functionality.
              </p>
            </div>
            <div className="service" data-aos="fade-down" data-aos-duration="750">
              <h4>ENT & Audiologist Consultation</h4>
              <p>
                We can securely send high resolution images and videos to your
                team of Audiologists and ENT specialists on hand for support and
                guidance when required.
              </p>
            </div>
            <div className="service" data-aos="fade-down" data-aos-duration="750">
              <h4>Tinnitus Assessment</h4>
              <p>
                Troubled by tinnitus? Our expert tinnitus specialists can be on
                hand to diagnose and support treatment for residents.
              </p>
            </div>
          </div>
        </div>
        <div className="cta">
          <a href="/contact">
            <Button text={"Schedule your appointment today"} />
          </a>
        </div>
    </Main>
  );
};

export default Home;
