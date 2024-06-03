import React, { useState } from "react";
import Layout from "../components/layout";
import { createJobOffer } from "../shared/apiService";
import SelectionProcess from "../components/selectionProcess";
import StatusButton from "../components/statusButton";

function CreateJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requisites, setRequisites] = useState("");
  const [benefits, setBenefits] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [deadline, setDeadline] = useState("");
  const [showPopup, setShowPopup] = useState(false); 


  const postTitle = (event) => {
    setTitle(event.target.value);
  };
  const postDescription = (event) => {
    setDescription(event.target.value);
  };
  const postRequisites = (event) => {
    setRequisites(event.target.value);
  };
  const postBenefits = (event) => {
    setBenefits(event.target.value);
  };
  const postResponsibilities = (event) => {
    setResponsibilities(event.target.value);
  };
  const postDeadline = (event) => {
    setDeadline(event.target.value);
  }

  const toggleStatus = () => {
    setIsOpen(!isOpen);
  };

  const create = () => {
    const obj = {
      title: title,
      description: description,
      requisites: requisites,
      benefits: benefits,
      responsibilities: responsibilities,
      status: isOpen ? "Open" : "Close",
      deadline: deadline,
    };
    console.log(obj);
    createJobOffer(obj);

    setShowPopup(true);

    setTitle("");
    setDescription("");
    setRequisites("");
    setBenefits("");
    setResponsibilities("");
    setIsOpen(true);
    setDeadline("");
  };

  return (
    <>
      <Layout>
        <div className="container-create">
          <div className="centered-container">
            <h1 className="title title-large text-center">Criar Oferta</h1>
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Título da Oferta</h3>
            <input
              type="text"
              placeholder="Digite algo..."
              className="input-box"
              onChange={postTitle}
            />
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Descrição</h3>
            <textarea
              placeholder="Digite algo..."
              className="input-box"
              rows="1"
              onChange={postDescription}
            ></textarea>
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Requerimentos</h3>
            <textarea
              placeholder="Digite algo..."
              className="input-box"
              rows="1"
              onChange={postRequisites}
            ></textarea>
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Beneficios</h3>
            <textarea
              placeholder="Digite algo... "
              className="input-box"
              rows="1"
              onChange={postBenefits}
            ></textarea>
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Responsabilidades</h3>
            <textarea
              placeholder="Digite algo... "
              className="input-box"
              rows="1"
              onChange={postResponsibilities}
            ></textarea>
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Data de Deadline</h3>
            <input
              type="date"
              className="input-box"
              rows="1"
              onChange={postDeadline}
            ></input>
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Estado atual:</h3>
            <StatusButton isOpen={isOpen} toggleStatus={toggleStatus} />
          </div>
          <SelectionProcess />
          <div className="d-flex justify-content-center">
            <button className="create-button" onClick={create}>
              Create
            </button>
          </div>
          {showPopup && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              Job offer created successfully!
              <button type="button" className="btn-close" onClick={() => setShowPopup(false)}></button>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default CreateJob;
