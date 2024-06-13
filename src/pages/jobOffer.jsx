import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import "./styles.css"; // Import the CSS file for styling
import { getJobOfferById } from "../shared/apiService";
import { useParams } from "react-router-dom";
import SharingIcon from "../components/shareIcon";
import ApplyButton from "../components/applyButton";
function JobOffer() {
  const { id } = useParams();
  const [jobOffer, setJobOffer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobOffer = async () => {
      try {
        const data = await getJobOfferById(id); 
        setJobOffer(data);
      } catch (error) {
        console.error("Error fetching job offer:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobOffer();
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!jobOffer) {
    return <div>Job offer not found</div>;
  }

  return (
    <Layout>
      <div className="container-create">
        <div className="centered-container">
          <h1 className="title title-large text-center">Job Offer</h1>
        </div>
        <div className="input-container">
          <h3 className="title title-medium text-left">Título da Oferta</h3>
          <input
            type="text"
            placeholder="Digite algo..."
            className="input-box"
            value={jobOffer.title}
            disabled
          />
        </div>
        <div className="input-container">
          <h3 className="title title-medium text-left">Descrição</h3>
          <textarea
            placeholder="Digite algo..."
            className="input-box"
            rows="1"
            value={jobOffer.description}
            disabled
          ></textarea>
        </div>
        <div className="input-container">
          <h3 className="title title-medium text-left">Requerimentos</h3>
          <textarea
            placeholder="Digite algo..."
            className="input-box"
            rows="1"
            value={jobOffer.requisites}
            disabled
          ></textarea>
        </div>
        <div className="input-container">
          <h3 className="title title-medium text-left">Benefícios</h3>
          <textarea
            placeholder="Digite algo..."
            className="input-box"
            rows="1"
            value={jobOffer.benefits}
            disabled
          ></textarea>
        </div>
        <div className="input-container">
          <h3 className="title title-medium text-left">Responsabilidades</h3>
          <textarea
            placeholder="Digite algo..."
            className="input-box"
            rows="1"
            value={jobOffer.responsibilities}
            disabled
          ></textarea>
        </div>
        <div className="input-container">
          <h3 className="title title-medium text-left">Deadline</h3>
          <input
            type="date"
            className="input-box"
            value={jobOffer.deadline}
            disabled
          />
        </div>
        <div className="input-container">
          <h3 className="title title-medium text-left">Estado atual:</h3>
          <input
            type="text"
            className="input-box"
            value={jobOffer.status}
            disabled
          />
        </div>
        <div className="d-flex justify-content-center mt-3">
          <ApplyButton/>
          <SharingIcon/>
        </div>
      </div>
    </Layout>
  );
}

export default JobOffer;
