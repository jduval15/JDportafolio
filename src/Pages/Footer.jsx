import React from "react";
import "./styles/Footer.css";

const Footer = ({ translations }) => {
  return (
    <div className="footer">
      <h3>
        Jose Luis Duval <span>{translations.footer}</span>
      </h3>
    </div>
  );
};

export default Footer;
