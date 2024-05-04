import React from "react";
import Collab from "../assets/Collab-pana.svg";
import jobHunt from "../assets/Job-hunt-amico.svg";
import dev from "../assets/Developer-activity-bro.svg";

function Caroussel() {
  return (
    <div id="carouselExampleCaptions" className="carousel carousel-dark slide">
      <div className="carousel-indicators ">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Collab}
            className="d-block w-100"
            alt="Slide 1"
            height="600"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Primeiro slide titulo</h5>
            <p>Este é o slide de collab</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={jobHunt}
            className="d-block w-100"
            alt="Slide 2"
            height="600"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Segundo slide titulo</h5>
            <p>Este é o slide de jobHunt</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={dev} className="d-block w-100" alt="Slide 3" height="600" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Terceiro slide titulo</h5>
            <p>Este é o slide de developer.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Caroussel;
