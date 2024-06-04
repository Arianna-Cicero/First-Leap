import "./styles.css";
import Imagem from "../assets/Login-rafiki.svg";
import { React, useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterComp() {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate()

  const url = "http://localhost:3000/candidate";
  /* eslint-disable */
  // prettier-ignore
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    skills: "",
    experience: "",
    number: "",
    birth_date: "",
    cv: "",
    verificado: false,
  });

  /* eslint-enable */

  const [matchPwd, setMatchPwd] = useState("");
  const [userFocus, setUserFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [skillsFocus, setSkillsFocus] = useState(false);
  const [experienceFocus, setExperienceFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);
  const [birthDateFocus, setBirthDateFocus] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [data]);

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== matchPwd) {
      setErrMsg("Passwords do not match");
      return;
    }
    try {
      console.log("entrei ca");
      await axios
        .post(url, {
          name: data.name,
          username: data.username,
          email: data.email,
          password: data.password,
          skills: data.skills,
          experience: data.experience,
          number: data.number,
          birth_date: data.birth_date,
          cv: data.cv,
          verificado: false,
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
        
      
      const userId = response.data.id;

      setErrMsg("");
      setSuccess(true); 
      return navigate("/emailCode", { state: {userId}})
    } catch (err) {
      console.error("Error registering user:", err);
      setErrMsg("Registration failed");
      errRef.current.focus();
    }
  };

  return (
    <div className="container text-center">
      <div className="row align-items-start">
        {errMsg && (
          <div ref={errRef} className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <div className="col">
          <img src={Imagem} height="600" alt="ImagemDesempregados" />
        </div>
        <div className="col">
          <h3>REGISTER</h3>
          <p>What is Lorem Ipsum? Lorem ipsum is a simple dummy text</p>
          <form method="post" onSubmit={handleSubmit}>
            <label>
              Username
              <input
                type="text"
                className="form-control register-input"
                id="username"
                placeholder="Username"
                ref={userRef}
                autoComplete="off"
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                className="form-control register-input"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                required
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                className="form-control register-input"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                required
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
            </label>
            <label>
              Repeat Password
              <input
                type="password"
                className="form-control register-input"
                id="repeatpassword"
                placeholder="Repeat Password"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
            </label>
            <label htmlFor="skills">
              Skills
              <input
                type="text"
                className="form-control register-input"
                id="skills"
                placeholder="Skills"
                onChange={handleChange}
                required
                onFocus={() => setSkillsFocus(true)}
                onBlur={() => setSkillsFocus(false)}
              />
            </label>
            <label>
              Experience
              <input
                type="text"
                className="form-control register-input"
                id="experience"
                placeholder="Experience"
                onChange={handleChange}
                required
                onFocus={() => setExperienceFocus(true)}
                onBlur={() => setExperienceFocus(false)}
              />
            </label>
            <label htmlFor="name">
              Name
              <input
                type="text"
                className="form-control register-input"
                id="name"
                placeholder="Name"
                onChange={handleChange}
                required
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
              />
            </label>
            <label>
              Number
              <input
                type="text"
                className="form-control register-input"
                id="number"
                placeholder="Number"
                onChange={handleChange}
                required
                onFocus={() => setNumberFocus(true)}
                onBlur={() => setNumberFocus(false)}
              />
            </label>
            <label>
              Birth Date
              <input
                type="date"
                className="form-control register-input"
                id="birth_date"
                onChange={handleChange}
                required
                onFocus={() => setBirthDateFocus(true)}
                onBlur={() => setBirthDateFocus(false)}
              />
            </label>
            <button type="submit" className="btn btn-primary register-button">
              Register
            </button>
            {/* <hr className="line"></hr> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterComp;
