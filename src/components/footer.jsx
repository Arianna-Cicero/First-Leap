import React from "react";
import "../../index.css";

function Footer() {
  return (
    <footer class="bg-dark text-white pt-5 pb-4 w-100">
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
              <a class="link-secondary text-decoration-none mx-2" href="chat">
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
              <li class="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                >
                  <span class="ion-logo-twitter"></span>
                </a>
              </li>
              <li class="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                >
                  <span class="ion-logo-facebook"></span>
                </a>
              </li>
              <li class="ftco-animate">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                >
                  <span class="ion-logo-instagram"></span>
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
