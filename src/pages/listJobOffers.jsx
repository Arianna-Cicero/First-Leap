import Layout from "../components/layout";
import SearchBar from "../components/searchBar";
import "./styles.css";
import React from "react";
import SearchButton from "../components/searchButton";
import JobOffersComponents from "../components/jobOffersComponents";
function ListJobOffers() {
  return (
    <Layout>
      <div class="d-flex justify-content-center bar-button">
        <SearchBar />
        <SearchButton />
      </div>
      <JobOffersComponents />
      <JobOffersComponents />
      <JobOffersComponents />
    </Layout>
  );
}

export default ListJobOffers;
