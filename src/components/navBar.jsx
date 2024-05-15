import React from "react";
import Logo from "../assets/Logo.svg";
import ProfileIcon from "../assets/icon_profile.svg";
import Chat from "../assets/icon_chat.svg";
import "../../index.css";

function FixedNavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{ backgroundColor: "rgba(128, 128, 128, 0.1)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img
            src={Logo}
            alt="First Leap"
            className="Logo"
            width="100"
            height="40"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav flex-grow-1 justify-content-center">
            <a className="nav-link" href="/jobs">
              Jobs
            </a>
            <a className="nav-link" href="/about">
              About
            </a>
            <a className="nav-link" href="/companies">
              Companies
            </a>
            <a className="nav-link" href="/contacts">
              Contacts
            </a>
          </div>
          <div className="navbar-nav">
            <a className="navbar-brand" href="/chat">
              <img
                src={Chat}
                alt="Chat"
                width="30"
                height="30"
                className="icon"
              />
            </a>
            <a className="navbar-brand" href="/login">
              <img
                src={ProfileIcon}
                alt="Profile"
                width="30"
                height="30"
                className="icon"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default FixedNavBar;
