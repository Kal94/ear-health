import React, { useEffect, useState } from "react";
import "./Contact.scss";
import Main from "../../Main";
import axios from "axios";
import Button from "../../components/Button/Button";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  });
  const defaultFormFields = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [emailSent, setEmailSent] = useState(false);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, phone, email, message } = formFields;

    try {
      axios
        .post("/email", { name, phone, email, message })
        .then((res) => {
          console.log(res);
          setEmailSent(true);
        })
        .catch((err) => {
          console.log("Error!");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Main pageTitle={"Contact"} pageClass={"contact"}>
      <div className="container">
        <h1>Contact</h1>
        <h2>How to book an appointment</h2>
        <div className="contact-details">
          <div
            className="contact-detail"
            data-aos="fade-up"
            data-aos-duration="750"
          >
            <i className="fa-solid fa-2x fa-phone"></i>
            <p>
              <a href="tel:+443332422827">+44 (0) 333 242 2827</a>
            </p>
          </div>
          <div
            className="contact-detail"
            data-aos="fade-up"
            data-aos-duration="750"
            data-aos-delay="500"
          >
            <i className="fa-2x fa-regular fa-envelope"></i>
            <p>contact@earhealth.co.uk</p>
          </div>
        </div>

        <div
          className="form-container"
          data-aos="fade-up"
          data-aos-duration="750"
          data-aos-delay="1500"
        >
          <h2>You can also use our contact form</h2>
          {!emailSent ? (
            <>
              <h2>Contact us</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-input">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    onChange={handleChange}
                    value={formFields.name}
                  />
                </div>

                <div className="email-and-phone">
                  <div className="form-input half">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      onChange={handleChange}
                      value={formFields.email}
                    />
                  </div>

                  <div className="form-input half">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      required
                      onChange={handleChange}
                      value={formFields.phone}
                    />
                  </div>
                </div>

                <div className="form-input">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    type="textarea"
                    onChange={handleChange}
                    value={formFields.message}
                  />
                </div>

                <div className="send-button">
                  <Button text="Send" />
                </div>
              </form>
            </>
          ) : (
            <>
              <h2>
                Thank you for getting in touch, we will get back to you as soon
                as possible
              </h2>
            </>
          )}
        </div>
      </div>
    </Main>
  );
};

export default Contact;
