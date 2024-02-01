import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import Logo from "../../assets/Ear_Health.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`navbar ${isMobile ? "mobile" : ""}`}>
      <div className="container">
        <div className="navbar-container">
          <div className="logo">
            <a href="/"><img src={Logo} width={250}/></a>
          </div>
          {isMobile && (
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          )}
          <div className={`nav-items ${menuOpen ? "open" : ""}`}>
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
