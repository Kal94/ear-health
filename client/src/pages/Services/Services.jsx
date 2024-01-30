import React from "react";
import "./Services.scss";
import Main from "../../Main";
import Faq from "react-faq-component";
import { faqs } from "../../data";
const Services = () => {
  return (
    <Main pageTitle={"Services"} pageClass={"services"}>
      <div className="container">
        <h1>Services</h1>
        <h2>What is Microsuction?</h2>
        <p>
          Microsuction ear wax removal is a technique employing gentle suction
          to eliminate excessive or bothersome ear wax. Our skilled Audiologists
          utilize a microscope to directly inspect the ear canal, employing a
          sterile suction device to delicately extract the wax. Our professional
          staff are are all equipped with the latest state-of-the-art
          technology, ensuring a thorough and reassuring experience from the
          comfort of your own home.
        </p>
        <p>
          <b>What to expect from our ear wax removal appointment:</b>
        </p>
        <ol>
          <li>
            Medical History: the audiologist will take history related to your
            ears.
          </li>
          <li>
            Examination: Your ears will be assessed and images will be recorded
            using a HD otoscope, you will also be able to view these images
            live.
          </li>
          <li>
            Explanation of procedure: Our Audiologists will explain the process
            of cleaning your ears.
          </li>
          <li>
            Procedure: the removal procedure will be performed by the
            Audiologist.
          </li>
          <li>
            Review: Once complete further imaging will be done on your ears to
            see the outcome of your procedure.
          </li>
        </ol>
        <div className="faqs">
          <Faq data={faqs} />
        </div>
      </div>
    </Main>
  );
};

export default Services;
