import React from "react";
import { Link } from "react-router-dom";
import "./LongBar.css"

const LongBar = () => {
  return (
    <div className="long-bar">
      <div className="phone-number">Call Us: </div>
      <Link to="/contact">
        <button className="contact-button">Contact</button>
      </Link>
    </div>
  );
};

export default LongBar;
