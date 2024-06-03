import React from "react";
import FilterButton from "./filterButton";

function SearchBar({ searchQuery, setSearchQuery, handleFilterChange }) {
  // Handle input change to update the search query state
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
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
      <button className="search-button">Procurar</button>
      <FilterButton handleFilterChange={handleFilterChange} />
    </div>
  );
}

export default SearchBar;
