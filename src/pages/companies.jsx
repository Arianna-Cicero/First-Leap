import React from "react";
import Layout from "../components/layout";

function Companies() {
  return (
    <Layout>
      <div className="companies-page">
      <div style={styles.container}>
          <h1 style={styles.header}>Para Empresas</h1>
          <p style={styles.paragraph}>
            Bem-vindo à First Leap, a plataforma dedicada a facilitar o recrutamento de talentos recém-licenciados,
            desempregados de longa duração e estagiários profissionais.
          </p>
          <p style={styles.paragraph}>
            Nosso principal objetivo é conectar sua empresa com candidatos qualificados que estejam prontos para dar o
            próximo passo em suas carreiras. Através da nossa aplicação web, você pode publicar suas ofertas de emprego e
            explorar perfis detalhados de candidatos que se encaixam nos requisitos necessários para suas vagas.
          </p>
          <p style={styles.paragraph}>
            Oferecemos uma experiência de recrutamento simplificada e eficiente, permitindo que você encontre talentos de
            forma rápida e precisa. Estamos comprometidos em ajudar sua empresa a preencher posições importantes com os
            melhores profissionais disponíveis no mercado.
          </p>
          <p style={styles.paragraph}>
            Explore nossos serviços e descubra como podemos ajudá-lo a encontrar os talentos que sua empresa precisa para
            crescer e prosperar.
          </p>
        </div>
        </div>
    </Layout>
  );
}
const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#666",
  },
};

export default Companies;
