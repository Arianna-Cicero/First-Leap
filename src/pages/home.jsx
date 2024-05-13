import React, { useEffect, useRef } from "react";
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
    <Layout>
      <Caroussel />

      <hr className="container" />
      <div className="container-md text-center overflow-auto">
        <h1 className="title title-large">Bem-vindo à First Leap</h1>
        <p className="text-break">
          Em um mundo onde a transição para o mercado de trabalho pode parecer
          desafiadora, estamos aqui para simplificar e facilitar o processo
          tanto para os candidatos quanto para as empresas. Nosso objetivo é
          eliminar as barreiras tradicionais que muitas vezes impedem os
          profissionais alcançar seu potencial máximo.
        </p>
      </div>

      <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
        <div class="row align-items-center">
          <div class="col">
            <Card imageUrl={thinking} title="Primeiro Emprego" link="/about" />
          </div>
          <div class="col">
            <Card
              imageUrl={workingCuate}
              title="Desempregados a longo prazo"
              link="/desempregados"
            />
          </div>
          <div class="col">
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
        description="Oferecemos uma variedade de recursos projetados para ajudá-los a 
        dar o primeiro passo em suas carreiras. Nossa plataforma intuitiva permite a 
        criação de um perfil detalhado, destacando suas habilidades, experiências 
        e realizações de maneira atraente para potenciais empregadores."
        alt="Candidatos"
        reverse={false}
        backgroundcolor="#DEF6E5"
      />
      <ImageSideText
        imageUrl={select}
        title="Para empresas"
        description="Oferecemos uma maneira eficaz de encontrar 
        e recrutar talentos promissores. Nossa plataforma permite que se publiquem oportunidades 
        de emprego de maneira simples e eficiente, alcançando uma ampla gama de candidatos qualificados. 
        Além disso, fornecemos ferramentas robustas de seleção e avaliação para ajudá-lo a identificar os 
        candidatos mais adequados para suas necessidades específicas. Com a First Leap, recrutar os melhores 
        talentos nunca foi tão fácil."
        alt="Empresas"
        reverse={true}
        slideDirection="left"
        backgroundcolor="#F08650"
      />
      <ImageSideText
        imageUrl={collaboration}
        title="Por ti e para ti"
        description="Na First Leap, acreditamos que o futuro pertence aos inovadores, 
    aos audaciosos e aos que estão dispostos a dar o primeiro salto em direção ao 
    sucesso. Junte-se a nós hoje e descubra o que é possível quando talento encontra 
    oportunidade."
        alt="ccertification"
        reverse={false}
        slideDirection="right"
        backgroundcolor="#EAD2EE"
      />
    </Layout>
  );
}

export default Home;
