import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Main = ({ children, pageTitle, pageClass }) => {
  return (
    <div className="ear-health">
      <Helmet>
        <title>{`${pageTitle}`} | Ear Health</title>
      </Helmet>
      <Navbar />
      <div className={`${pageClass}`}>
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default Main