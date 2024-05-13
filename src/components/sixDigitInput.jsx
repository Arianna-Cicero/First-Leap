import React from "react";

function SixDigitInput() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 d-flex justify-content-center">
          <input
            type="text"
            className="form-control"
            style={{
              width: "500px",
              height: "70px",
              paddingLeft: "40px",
              borderRadius: "20px",
              borderColor: "#a7a7a7",
              backgroundColor: "#F3F1FF",
              fontSize: "36px",
              letterSpacing: "40px",
              lineHeight: "90px",
              textAlign: "center",
            }}
            maxLength="6"
            pattern="[0-9]*"
          />
        </div>
      </div>
    </div>
  );
}

export default SixDigitInput;
