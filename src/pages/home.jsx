import React from "react";
import Caroussel from "../components/caroussel";
import Layout from "../components/layout";
import workingCuate from "../assets/Working-cuate.svg";
import thinking from "../assets/Design-thinking-pana.svg";
import certification from "../assets/Certification-rafiki.svg";
import ImageSideText from "../components/imageWithSideText";
import select from "../assets/Select-pana.svg";
import inPro from "../assets/In-progress-bro.svg";
import collaboration from "../assets/Team-work-amico.svg";
import Card from "../components/card";
import "../../index.css";

function Home() {
  return (
    <div>
      <Layout>
        <div>
          <Caroussel />
          <hr className="container" />
          <div className="container-md text-center overflow-auto">
            <h1 className="title title-large" style={{ color: "#304D30" }}>
              Bem-vindo à First Leap
            </h1>
            <p className="text-break">
              Em um mundo onde a transição para o mercado de trabalho pode
              parecer desafiadora, estamos aqui para simplificar e facilitar o
              processo tanto para os candidatos quanto para as empresas. Nosso
              objetivo é eliminar as barreiras tradicionais que muitas vezes
              impedem os profissionais alcançar seu potencial máximo.
            </p>
          </div>
          <div
            className="container"
            style={{ marginTop: 30, marginBottom: 30 }}
          >
            <div className="row align-items-center">
              <div className="col">
                <Card
                  imageUrl={thinking}
                  title="Primeiro Emprego"
                  link="/about"
                />
              </div>
              <div className="col">
                <Card
                  imageUrl={workingCuate}
                  title="Desempregados a longo prazo"
                  link="/desempregados"
                />
              </div>
              <div className="col">
                <Card
                  imageUrl={certification}
                  title="Estágio professional"
                  link="/home"
                />
              </div>
            </div>
          </div>
          <ImageSideText
            imageUrl={inPro}
            title="Para candidatos"
            description="
            Oferecemos recursos para dar o primeiro passo na sua carreira. 
            Destaque suas habilidades em um perfil atraente. 
            Nossa plataforma facilita a interação com empregadores. 
            Destaque suas experiências de forma eficaz."
            alt="Candidatos"
            reverse={false}
          />
          <ImageSideText
            imageUrl={select}
            title="Para empresas"
            description="Encontre talentos promissores de forma eficaz. 
            Publique oportunidades de emprego de maneira direta. 
            Alcance candidatos qualificados na nossa plataforma. 
            Identifique os melhores talentos com nossas ferramentas. 
            Recrutar nunca foi tão fácil."
            alt="Empresas"
            reverse={true}
            slideDirection="left"
          />
          <ImageSideText
            imageUrl={collaboration}
            title="Por ti e para ti"
            description="Acreditamos no potencial dos inovadores. 
            Dê o primeiro passo rumo ao sucesso. 
            Junte-se a nós e descubra seu potencial. 
            Na First Leap, talento encontra oportunidade. 
            O futuro é para os que ousam começar."
            alt="certification"
            reverse={false}
            slideDirection="right"
          />
        </div>
      </Layout>
    </div>
  );
}

export default Home;
