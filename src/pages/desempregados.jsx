import Jobhunt from "../assets/Job-hunt-amico.svg";
import OfertasDesemp from "../components/ofertasDesemp";
import Certification from "../assets/Certification-rafiki.svg"
function Desempregados() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src={Jobhunt} height="700" alt="ImagemDesempregados" />
      </div>
      <div>
        <OfertasDesemp />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img src={Certification} height="700" alt="ImagemDesempregados" />
      </div>
    </>
  );
}
export default Desempregados;
