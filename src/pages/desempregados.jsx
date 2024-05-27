import JobHunt from "../assets/Job hunt-amico2.svg";
import OfertasDesemp from "../components/OfertasDesemp";
import Certification from "../assets/Certification-rafiki.svg";
import Layout from "../components/layout"
function Desempregados() {
  return (
    <>
      <Layout>
        <div className="d-flex justify-content-center align-items-center">
          <img src={JobHunt} height="700" alt="ImagemDesempregados" />
        </div>
        <div>
          <OfertasDesemp />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img src={Certification} height="700" alt="ImagemDesempregados" />
        </div>
        <div>
          <h2 className="title title-large text-center">
            Aconselhamento de Carreira
          </h2>
          <p className="text-center p-section">
            Sugestões sobre como lidar com o stress e a ansiedade relacionados
            com o desemprego, procurar aconselhamento de carreira profissional,
            encontrar grupos de apoio ou comunidades online para desempregados e
            aceder a recursos de saúde mental e bem-estar.
          </p>
        </div>
      </Layout>
    </>
  );
}
export default Desempregados;
