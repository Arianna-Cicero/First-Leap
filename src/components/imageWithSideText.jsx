import React from "react";

function ImageSideText({ imageUrl, description, alt, reverse }) {
  return (
    <div className="container">
      <div
        className={`row align-items-start ${reverse ? "flex-row-reverse" : ""}`}
      >
        <div className="col">
          <img
            src={imageUrl}
            alt={alt}
            style={{
              width: "255px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <div className="col">
          <p style={{ color: "black", margin: "10px 0" }}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageSideText;
