import "./styles.css";
import Imagem from "../assets/Login-rafiki.svg";
import React from "react";
import FacebookIcon from "../assets/Facebook_Icon.svg";
import GoogleIcon from "../assets/Google_Icon.svg";
function ImgSideInputs() {
  return (
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col">
          <img src={Imagem} height="600" alt="ImagemDesempregados" />
        </div>
        <div class="col">
          <h3>REGISTER</h3>
          <p>What is Lorem Ipsum? Lorem ipsum is a simple dummy text</p>
          <input
            type="text"
            class="form-control register-input"
            id="username"
            placeholder="Username"
          ></input>
          <input
            type="text"
            class="form-control register-input"
            id="password"
            placeholder="Password"
          ></input>
          <input
            type="text"
            class="form-control register-input"
            id="repeatpassword"
            placeholder="Repeat Password"
          ></input>
          <button className="btn btn-primary register-button">Register</button>
          <hr className="line"></hr>
          <div>
            <button className="btn btn-google" type="button">
              <img src={GoogleIcon} alt="Google Icon" className="icon" />
              Register with Google
            </button>
          </div>
          <div>
            <button className="btn btn-facebook" type="button">
              <img src={FacebookIcon} alt="Facebook Icon" className="icon" />
              Register with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgSideInputs;
