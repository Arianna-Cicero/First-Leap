import React from "react";
import Layout from "../components/layout";

function CodeInput() {


  
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
        <input
          type="Codigo"
          className="form-control register-input code-input"
          id="code"
          placeholder="Code"
        />
      </div>
    </Layout>
  );
}

export default CodeInput;
