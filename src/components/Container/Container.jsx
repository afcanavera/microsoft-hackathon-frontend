import React from "react";
import logo from "../../Assets/images/logo.png";
import userIcon from "../../Assets/images/user4.png";
import "./Container.scss"; 

const Container = ({ children }) => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="header">
          <div className="logo-box">
            <img src={logo} alt="Autopilot Logo" className="logo" />
            <span className="logo-text">AUTOPILOT+</span>
          </div>
          <div className="chatbot-info">
            <img src={userIcon} alt="User Icon" className="user-icon" />
            <span className="chatbot-name">Chatbot's Name</span>
          </div>
        </div>

        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Container;
