import React from "react";
import Layout from "../components/layout";
import SelectionProcess from "../components/selectionProcess";

function CreateJob() {
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
            />
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Descrição</h3>
            <textarea
              placeholder="Digite algo..."
              class="input-box"
              rows="1"
            ></textarea>
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Requerimentos</h3>
            <textarea
              placeholder="Digite algo..."
              class="input-box"
              rows="1"
            ></textarea>
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Beneficios</h3>
            <textarea
              placeholder="Digite algo... "
              class="input-box"
              rows="1"
            ></textarea>
          </div>
          <SelectionProcess />
          <div className="d-flex justify-content-center">
            <button className="create-button">Create</button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CreateJob;
