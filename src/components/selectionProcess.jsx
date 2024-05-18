import React from "react";
import AddItem from "../assets/add_icon.svg";
function SelectionProcess() {
  return (
    <div>
      <div className="container-process">
        <h3 className="title title-medium text-left">Processos de Seleção</h3>
        <img src={AddItem} alt="Add Icon" className="nav-link add-icon" />
      </div>

      <div class="dropdown">
        <button
          class="btn-dropdown btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Processos de Seleção
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Análise do CV
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Desafio de Programação
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Entrevista com Recursos os Humanos
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Entrevista Técnica
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Entrevista com o Gestor
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Avaliação de Competências
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Verificação de Referências
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Proposta de Trabalho
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SelectionProcess;
