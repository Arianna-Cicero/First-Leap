import Layout from "../components/layout";
import SearchBar from "../components/searchBar";
import "./styles.css";
import React, { useState } from "react";
import JobOffersComponents from "../components/jobOffersComponents";
import CreateIcon from "../assets/create-icon.svg";

function Jobs() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filters, setFilters] = useState({ order: "asc", dateOrder: "rec" }); // State for filters

  // Handle search function
  const handleSearch = (query) => {
    setSearchQuery(query); // Update search query state
    // Perform search operation based on the query (you can implement this according to your backend logic)
  };

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); // Update filters state
    // Perform filter operation based on the new filters (you can implement this according to your backend logic)
  };

  return (
    <Layout>
      <div className="d-flex justify-content-center bar-button">
        <a href="/createJob">
          {" "}
          <img
            src={CreateIcon}
            alt="Create Icon"
            className="nav-link create-icon"
          ></img>
        </a>
        <SearchBar
          handleSearch={handleSearch}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <JobOffersComponents searchQuery={searchQuery} filters={filters} />
    </Layout>
  );
}

export default Jobs;
