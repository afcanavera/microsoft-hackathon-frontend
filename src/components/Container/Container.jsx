import React from "react";
import logo from "../../Assets/images/logo.png";

const Container = () => {
  return (
    <div className="container">
      <div className="logo-box">
        <img src={logo} alt="Autopilot Logo" className="logo" />
        <span className="logo-text">autopilot+</span>
      </div>
    </div>
  );
};

export default Container;
