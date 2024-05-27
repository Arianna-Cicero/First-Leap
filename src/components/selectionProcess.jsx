import React, { useState } from "react";
import AddItem from "../assets/add_icon.svg";

const DropdownButton = ({ buttonText, handleOptionClick }) => (
  <div className="dropdown">
    <button
      className="btn-dropdown btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {buttonText}
    </button>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#" onClick={(event) => handleOptionClick("Análise do CV", event)}>
          Análise do CV
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#" onClick={(event) => handleOptionClick("Desafio de Programação", event)}>
          Desafio de Programação
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#" onClick={(event) => handleOptionClick("Entrevista com Recursos Humanos", event)}>
          Entrevista com Recursos Humanos
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#" onClick={(event) => handleOptionClick("Entrevista Técnica", event)}>
          Entrevista Técnica
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#" onClick={(event) => handleOptionClick("Entrevista com o Gestor", event)}>
          Entrevista com o Gestor
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#" onClick={(event) => handleOptionClick("Avaliação de Competências", event)}>
          Avaliação de Competências
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#" onClick={(event) => handleOptionClick("Verificação de Referências", event)}>
          Verificação de Referências
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#" onClick={(event) => handleOptionClick("Proposta de Trabalho", event)}>
          Proposta de Trabalho
        </a>
      </li>
    </ul>
  </div>
);

function SelectionProcess() {
  const [buttons, setButtons] = useState([{ id: 1, text: "Selecione o Processo" }]);

  const handleOptionClick = (option, event, id) => {
    event.preventDefault();
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.id === id ? { ...button, text: option } : button
      )
    );
  };

  const addButton = () => {
    setButtons([...buttons, { id: buttons.length + 1, text: "Selecione o Processo" }]);
  };

  return (
    <div>
      <div className="container-process">
        <h3 className="title title-medium text-left">Processos de Seleção</h3>
        <a href="#" onClick={(e) => {e.preventDefault(); addButton();}}>
          <img src={AddItem} alt="Add Icon" className="nav-link add-icon" />
        </a>
      </div>

      {buttons.map((button) => (
        <DropdownButton
          key={button.id} // Unique key for each button
          buttonText={button.text} // Pass the button text as prop
          handleOptionClick={(option, event) => handleOptionClick(option, event, button.id)} // Pass the click handler as prop
        />
      ))}
    </div>
  );
}

export default SelectionProcess;
