import React from "react";
import { Link } from "react-router-dom"; 
import logo from "../../Assets/images/logo.png";
import userIcon from "../../Assets/images/user4.png";
import "./Container.scss"; 

const Container = ({ children }) => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="header">
          <div className="logo-box">
          <Link to="/"> 
            <img src={logo} alt="Autopilot Logo" className="logo" />
            <span className="logo-text">AUTOPILOT+</span>
          </Link>
          </div>
          <div className="chatbot-info">
            <img src={userIcon} alt="User Icon" className="user-icon" />
            <span className="chatbot-name">Chatbot</span>
          </div>
        </div>

        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Container;
