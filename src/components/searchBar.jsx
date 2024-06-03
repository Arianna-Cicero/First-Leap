import React, { useState } from "react";
import FilterButton from "./filterButton";

function SearchBar({ handleSearch, handleFilterChange }) {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Handle input change to update the search query state
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    handleSearch(searchQuery); // Pass the search query to the parent component
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Procurar..."
        className="search-bar"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Procurar
      </button>
      <FilterButton handleFilterChange={handleFilterChange} />
    </div>
  );
}

export default SearchBar;
