import React from "react";
import "../../index.css";
import linkedin from "../assets/linkedin.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import "../../index.css";

function Footer() {
  return (
    <footer class="bg-dark text-white pt-5 pb-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <h2 class="footer-heading">
              <a href="#" class="link-light text-decoration-none">
                First Leap
              </a>
            </h2>
            <p class="menu">
              <a class="link-secondary text-decoration-none mx-2" href="/home">
                Home
              </a>
              <a class="link-secondary text-decoration-none mx-2" href="/jobs">
                Jobs
              </a>
              <a class="link-secondary text-decoration-none mx-2" href="/about">
                About
              </a>
              <a
                class="link-secondary text-decoration-none mx-2"
                href="/companies"
              >
                Companies
              </a>
              <a
                class="link-secondary text-decoration-none mx-2"
                href="/contacts"
              >
                Contacts
              </a>
              <a class="link-secondary text-decoration-none mx-2" href="/chat">
                Chat
              </a>
              <a
                class="link-secondary text-decoration-none mx-2"
                href="profile"
              >
                Profile
              </a>
            </p>
            <ul class="ftco-footer-social p-0">
              <li class="footer-li">
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
              <li class="footer-li">
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
              <li class="footer-li">
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
        <div class="row mt-5">
          <div class="col-md-12 text-center">
            <p class="copyright">
              Copyright &copy; All rights reserved | Owned by CodeCraft.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
