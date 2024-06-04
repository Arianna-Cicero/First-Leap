import React, { useState } from "react";
import Layout from "../components/layout";
import { verifyEmail } from "../shared/apiService";
import { useLocation, useNavigate } from "react-router-dom";


function CodeInput() {
  const [codigo, setCodigo] = useState("");
  const location = useLocation();

  const { userId } = location.state || {}; // Get userId from route state

  if (!userId) {
    navigate("/register");
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await verifyEmail(codigo, userId);
      if (response.success) {
        alert("Verification successful");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      alert("An error occurred during verification.");
    }
  };

  return (
    <Layout>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "30vh",
        }}
      >
        <div className="text-center">
          <h1 className="title title-large">Código enviado</h1>
          <h4>
            Foi enviado um código de verificação a sua caixa de correio. Por
            favor, insira o código recebido para validar a sua conta.
          </h4>
        </div>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control register-input code-input"
            id="code"
            placeholder="Code"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default CodeInput;
