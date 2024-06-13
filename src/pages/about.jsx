import React from "react";
import Layout from "../components/layout";

function About() {
  return (
    <>
      <Layout>
        <div style={styles.container}>
          <h1 style={styles.header}>Sobre o First Leap</h1>
          <p style={styles.paragraph}>
            O First Leap é uma plataforma dedicada a facilitar o acesso ao
            primeiro emprego para recém-licenciados, desempregados de longa
            duração e estagiários profissionais. Nosso objetivo é conectar
            candidatos talentosos com empresas que procuram novos talentos,
            oferecendo uma experiência de recrutamento simplificada e eficiente.
          </p>
          <p style={styles.paragraph}>
            Através da nossa aplicação web, os usuários podem criar perfis
            detalhados que destacam suas habilidades, experiências educacionais
            e outras qualificações relevantes. As empresas podem publicar suas
            oportunidades de emprego, permitindo que os candidatos se candidatem
            diretamente através da plataforma.
          </p>
          <p style={styles.paragraph}>
            Com foco na transparência e na equalização de oportunidades, o First
            Leap visa tornar o processo de busca de emprego mais acessível e
            justo para todos os envolvidos.
          </p>
          <p style={styles.paragraph}>
            Explore nosso site para saber mais sobre como podemos ajudá-lo a dar
            o próximo salto em sua carreira!
          </p>
        </div>
      </Layout>
    </>
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

export default About;
