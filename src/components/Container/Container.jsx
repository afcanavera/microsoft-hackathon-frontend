import React from "react";
import logo from "../../Assets/images/logo.png";
import "./Container.scss";

const Container = ({ children }) => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="logo-box">
          <img src={logo} alt="Autopilot Logo" className="logo" />
          <span className="logo-text">autopilot +</span>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Container;