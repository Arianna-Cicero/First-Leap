import React from "react";
import "../../index.css";
import linkedin from "../assets/linkedin.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import "../../index.css";

function Footer() {
  return (
    <footer
      className="text-white pt-5 pb-4"
      data-bs-theme="dark"
      style={{ background: "#304D30" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h2 className="footer-heading">
              <a href="#" className="link-light text-decoration-none">
                First Leap
              </a>
            </h2>
            <p className="menu">
              <a
                className="link-secondary text-decoration-none mx-2"
                href="/home"
              >
                Home
              </a>
              <a
                className="link-secondary text-decoration-none mx-2"
                href="/jobs"
              >
                Jobs
              </a>
              <a
                className="link-secondary text-decoration-none mx-2"
                href="/about"
              >
                About
              </a>
              <a
                className="link-secondary text-decoration-none mx-2"
                href="/companies"
              >
                Companies
              </a>
              <a
                className="link-secondary text-decoration-none mx-2"
                href="/contacts"
              >
                Contacts
              </a>
              <a
                className="link-secondary text-decoration-none mx-2"
                href="/chat"
              >
                Chat
              </a>
              <a
                className="link-secondary text-decoration-none mx-2"
                href="profile"
              >
                Profile
              </a>
            </p>
            <ul className="ftco-footer-social p-0">
              <li className="footer-li">
                <a
                  href="https://www.linkedin.com/in/arianna-cicero-ba0b5a220/"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Linkedin"
                >
                  <span>
                    <img src={linkedin} className="footer-image" />
                  </span>
                </a>
              </li>
              <li className="footer-li">
                <a
                  href="/contacts"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Email"
                >
                  <span>
                    <img src={email} className="footer-image" />
                  </span>
                </a>
              </li>
              <li className="footer-li">
                <a
                  href="/contacts"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Phone"
                >
                  <span>
                    <img src={phone} className="footer-image" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p className="copyright">
              Copyright &copy; All rights reserved | Owned by CodeCraft.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
