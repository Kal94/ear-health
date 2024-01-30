import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-container">
          <div className="logo">
            <h2>EarHealth</h2>
          </div>
          <div className="nav-items">
            <div>
              <a href="/">Home</a>
            </div>
            <div>
                <a href="/services">Services</a>
            </div>
            <div>
                <a href="/why-us">Why Us</a>
            </div>
            <div>
                <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
