import Layout from "../components/layout";
import SearchBar from "../components/searchBar";
import "./styles.css";
import React from "react";
import SearchButton from "../components/searchButton";
import JobOffersComponents from "../components/jobOffersComponents";
import CreateIcon from "../assets/create-icon.svg";
function Jobs() {
  return (
    <Layout>
      <div className="d-flex justify-content-center bar-button">
        <a href="/createJob">
          {" "}
          <img
            src={CreateIcon}
            alt="Create Icon"
            className="nav-link create-icon "
          ></img>
        </a>
        <SearchBar />
        <SearchButton />
      </div>
      <JobOffersComponents />
      <JobOffersComponents />
      <JobOffersComponents />
    </Layout>
  );
}

export default Jobs;
