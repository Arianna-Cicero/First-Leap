import React from "react";

function SixDigitInput() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            style={{
              width: "839px",
              height: "129px",
              borderRadius: "59px",
              backgroundColor: "#F3F1FF",
              textAlign: "center",
              fontSize: "36px",
              letterSpacing: "40px",
              lineHeight: "90px",
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
