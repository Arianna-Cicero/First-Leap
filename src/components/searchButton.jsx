import React from "react";
import Filter from "../assets/filter_icon.svg"

function SearchBar() {
  return(
    <>
      <button className="search-button">Search</button>
      <img src={Filter} alt="Filter Icon" className="icon-filter"></img>
    </>
  );
}

export default SearchBar;