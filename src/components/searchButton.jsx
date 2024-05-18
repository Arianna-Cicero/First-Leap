import React from "react";
import FilterButton from "./filterButton";

function SearchBar() {
  return(
    <>
      <button className="search-button">Procurar</button>
      <FilterButton></FilterButton>
    </>
  );
}

export default SearchBar;