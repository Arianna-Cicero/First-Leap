import React, { useState } from "react";
import Filter from "../assets/filter_icon.svg";

function FilterButton({ handleFilterChange }) {
  // Local state to manage the selected filter options
  const [order, setOrder] = useState("asc");
  const [dateOrder, setDateOrder] = useState("rec");

  // Handle changes to filter options
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
    handleFilterChange({ order: e.target.value });
  };

  const handleDateOrderChange = (e) => {
    setDateOrder(e.target.value);
    handleFilterChange({ order, dateOrder: e.target.value });
  };

  return (
    <>
      <img
        src={Filter}
        alt="Filter Icon"
        className="icon-filter"
        data-bs-toggle="modal"
        data-bs-target="#OrderModal"
      />
      <div className="modal fade" id="OrderModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Filtros</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <h5 className="title text-center">Ordenar Por</h5>
              <div className="container text-center">
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btn-asc"
                    autoComplete="off"
                    value="asc"
                    checked={order === "asc"}
                    onChange={handleOrderChange}
                  />
                  <label className="btn btn-outline-primary btn-asc" htmlFor="btn-asc">Ascendente</label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btn-desc"
                    autoComplete="off"
                    value="desc"
                    checked={order === "desc"}
                    onChange={handleOrderChange}
                  />
                  <label className="btn btn-outline-primary btn-desc" htmlFor="btn-desc">Descendente</label>
                </div>
              </div>

              <h5 className="title text-center">Ordenar Data De Publicação Por</h5>
              <div className="container text-center">
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio2"
                    id="btn-rec"
                    autoComplete="off"
                    value="rec"
                    checked={dateOrder === "rec"}
                    onChange={handleDateOrderChange}
                  />
                  <label className="btn btn-outline-primary btn-rec" htmlFor="btn-rec">Mais Recente</label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio2"
                    id="btn-old"
                    autoComplete="off"
                    value="old"
                    checked={dateOrder === "old"}
                    onChange={handleDateOrderChange}
                  />
                  <label className="btn btn-outline-primary btn-old" htmlFor="btn-old">Mais Antigo</label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterButton;
