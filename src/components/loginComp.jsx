import "./styles.css";
import Imagem from "../assets/Login-rafiki.svg";
import React, { useState } from "react";
import FacebookIcon from "../assets/Facebook_Icon.svg";
import GoogleIcon from "../assets/Google_Icon.svg";
import { Link } from "react-router-dom";
import { getUtilizador } from "../shared/apiService";
function LoginComp() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    //event.present.default();
    console.log("entrou aqui");
    let response;
    const userobj = {
      user: user,
      password: password,
    };
    const login = {
      user: user,
      login: "1",
    };
    try {
      //response = await getUtilizador(userobj);

      response = "1";
    } catch (err) {
      console.log(err);
    }
    if (response != "" || response != null) {
      localStorage.setItem("login", JSON.stringify(login));
      history.push("/home");
    } else {
      alert("Combinação Invalidada");
    }
  };
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <img src={Imagem} height="600" alt="ImagemDesempregados" />
        </div>
        <div className="col">
          <form method="get" onSubmit={handleSubmit}>
            <h3>LOGIN</h3>
            <input
              type="email"
              className="form-control register-input"
              id="username"
              placeholder="Username"
              onChange={(e) => setUser(e.target.value)}
            ></input>
            <input
              type="password"
              className="form-control register-input"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit" className="btn btn-primary register-button">
              Login
            </button>
          </form>
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
          <Link to="/register" className="btn btn-primary register-button">
            Registrar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
