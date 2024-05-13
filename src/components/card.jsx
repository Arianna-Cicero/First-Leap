import React from "react";
import "../../index.css";
function Card({ imageUrl, title, link }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <a className="text-decoration-none" href={link}>
          <img
            src={imageUrl}
            alt="Background"
            style={{
              width: "245px",
              display: "block",
              margin: "0 auto",
            }}
          />
          <h4 style={{ color: "black", margin: "10px 0" }}>{title}</h4>
        </a>
      </div>
    </div>
  );
}

export default Card;
