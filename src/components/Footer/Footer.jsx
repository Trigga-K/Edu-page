import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Copyright ⓒ {year}</p>
      <ul>
        <li>Terms of service</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;

