import React from "react";
import Layout from "../components/layout";
import "./styles.css"; // Import the CSS file for styling

function JobOffer() {
  return (
    <Layout>
      <div className="job-offer-container">
        <div className="job-details">
          <h1 className="text-center title title-large">Titulo da Oferta</h1>
        <div>
          <h2 className="text-center title title-small">Nome da Empresa</h2>
        </div>
          
        </div>
        <div className="job-description">
          <h3 className="title title-small">Descrição da Oferta</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
            turpis at risus iaculis tempus. Aliquam erat volutpat. Proin egestas
            sem id hendrerit malesuada. Phasellus non iaculis lacus, in ultrices
            ipsum. Praesent purus nunc, finibus ac risus ac, facilisis euismod
            dui. Phasellus imperdiet sem nec nibh varius, non tincidunt sem
            cursus. Integer nec sollicitudin lectus. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per ince
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut
            turpis at risus iaculis tempus. Aliquam erat volutpat. Proin egestas
            sem id hendrerit malesuada. Phasellus non iaculis lacus, in ultrices
            ipsum. Praesent purus nunc, finibus ac risus ac, facilisis euismod
            dui. Phasellus imperdiet sem nec nibh varius, non tincidunt sem
            cursus. Integer nec sollicitudin lectus. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per ince
          </p>
        </div>
        <div>
          <button className="apply-button">Candidatar</button>
        </div>
      </div>
    </Layout>
  );
}

export default JobOffer;

