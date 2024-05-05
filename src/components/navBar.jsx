import React from "react";
import Logo from "../assets/Logo.svg";
import ProfileIcon from "../assets/icon_profile.svg";
import Chat from "../assets/icon_chat.svg";

function FixedNavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            alt="First Leap"
            className="Logo"
            width="100"
            height="40"
          />
        </a>

        <div className="navbar-nav">
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
        <div className="navbar-nav d-flex">
          <a className="navbar-brand " href="#">
            <img
              src={Chat}
              alt="Chat"
              width="30"
              height="30"
              className="icon"
            />
          </a>
          <a className="navbar-brand" href="#">
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
    </nav>
  );
}

export default FixedNavBar;
