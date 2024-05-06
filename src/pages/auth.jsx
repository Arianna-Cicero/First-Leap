import React from "react";
import Layout from "../components/layout";
import SixDigitInput from "../components/sixDigitInput";

function Auth() {
  return (
    <Layout>
      <div className="container">
        <h1>Código enviado</h1>
        <p>
          Foi enviado um código de verificação a sua caixa de correio. Por
          favor, insira o código recebido para validar a sua conta
        </p>
        <SixDigitInput />
      </div>
    </Layout>
  );
}

export default Auth;
