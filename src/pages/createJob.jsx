import React, { useState } from "react";
import Layout from "../components/layout";
import { createJobOffer } from "../shared/apiService";
import SelectionProcess from "../components/selectionProcess";

function CreateJob() {
  const [titulo, SetTitulo] = useState("");
  const [descricao, SetDescricao] = useState("");
  const [requirimentos, SetRequirimentos] = useState("");
  const [beneficios, SetBeneficios] = useState("");

  const postTitulo = (event) => {
    SetTitulo(event.target.value);
  };
  const postDescricao = (event) => {
    SetDescricao(event.target.value);
  };
  const postRequirementos = (event) => {
    SetRequirimentos(event.target.value);
  };
  const postBeneficios = (event) => {
    SetBeneficios(event.target.value);
  };

  const Create = () => {
    const obj = {
      titulo: titulo,
      descricao: descricao,
      requirimentos: requirimentos,
      beneficios: beneficios,
    };
    createJobOffer(obj);
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
              onChange={postTitulo}
            />
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Descrição</h3>
            <textarea
              placeholder="Digite algo..."
              className="input-box"
              rows="1"
              onChange={postDescricao}
            ></textarea>
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Requerimentos</h3>
            <textarea
              placeholder="Digite algo..."
              className="input-box"
              rows="1"
              onChange={postRequirementos}
            ></textarea>
          </div>
          <div className="input-container">
            <h3 className="title title-medium text-left">Beneficios</h3>
            <textarea
              placeholder="Digite algo... "
              class="input-box"
              rows="1"
              onChange={postBeneficios}
            ></textarea>
          </div>
          <SelectionProcess />
          <div className="d-flex justify-content-center">
            <button className="create-button" onClick={Create}>
              Create
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default CreateJob;
