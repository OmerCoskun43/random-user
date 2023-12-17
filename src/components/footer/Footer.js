import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/anthonyharold67"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <h2 className="brand">{"CSKN"}</h2>
      </a>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1200px-Code.org_logo.svg.png"
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px", borderRadius: "50%" }}
      />
      <span>Copyright {new Date().toLocaleDateString()}</span>
    </div>
  );
};

export default Footer;
