import React from "react";
import "./Footer.scss";

const Footer = () => {
  const d = new Date();
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <span><a href="/">EarHealth</a> &#169; {d.getFullYear()}</span>
          <a href="privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
