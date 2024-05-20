import "./styles.css";
import Imagem from "../assets/Login-rafiki.svg";
import React from "react";
import FacebookIcon from "../assets/Facebook_Icon.svg";
import GoogleIcon from "../assets/Google_Icon.svg";
function LoginComp() {
  return (
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col">
          <img src={Imagem} height="600" alt="ImagemDesempregados" />
        </div>
        <div class="col">
          <h3>LOGIN</h3>
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
          <button className="btn btn-primary register-button">Login</button>
          <hr className="line"></hr>
          <div>
            <button className="btn btn-google" type="button">
              <img src={GoogleIcon} alt="Google Icon" className="icon" />
              Login with Google
            </button>
          </div>
          <div>
            <button className="btn btn-facebook" type="button">
              <img src={FacebookIcon} alt="Facebook Icon" className="icon" />
              Login with Facebook
            </button>
          </div>
          <p>Se ainda não se encontra resgistado clique aqui</p>
          <button className="btn btn-primary register-button" href="/register">Registrar</button>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
