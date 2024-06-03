import React from "react";
import "../../index.css";

function OfertasDesemp() {
  return (
    <div className="container-desemp text-center">
      <div className="row align-items-start">
        <div className="col">
          <h2 className="title title-large section-title">
            Orientações para a Procura de Emprego
          </h2>
          <p className="section-text p-section">
            Orientações sobre como criar um currículo eficaz, escrever cartas de
            apresentação personalizadas, preparar-se para entrevistas e expandir
            a sua rede de contactos profissionais através de networking online e
            offline.
          </p>
        </div>
        <div className="col">
          <h2 className="title title-large section-title">
            Recursos de Desenvolvimento Profissional
          </h2>
          <p className="section-text p-section">
            Lista de plataformas online que oferecem cursos gratuitos ou
            acessíveis, workshops ou eventos de desenvolvimento profissional
            locais, sugestões para adquirir novas competências e certificações,
            além de links para recursos de aprendizagem, como tutoriais, blogs e
            podcasts.
          </p>
        </div>
        <div className="col">
          <h2 className="title title-large section-title">
            Informações sobre Benefícios e Assistência
          </h2>
          <p className="section-text p-section">
            Explicação detalhada sobre como solicitar o subsídio de desemprego,
            outros benefícios disponíveis para desempregados, como assistência
            alimentar, assistência médica ou programas de habitação, e recursos
            para encontrar assistência financeira adicional.
          </p>
        </div>
      </div>
    </div>
  );
}
export default OfertasDesemp;
