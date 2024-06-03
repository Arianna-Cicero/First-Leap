import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function JobOffersComponents({ searchQuery, filters }) {
  const [jobOffers, setJobOffers] = useState([]); // State to store job offers
  const navigate = useNavigate();

  const handleCardClick = (jobId) => {
    navigate(`/joboffer/${jobId}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/job-offer") // Make a GET request to fetch job offers
      .then((response) => {
        setJobOffers(response.data); // Set the fetched job offers to state
      })
      .catch((error) => {
        console.error("There was an error fetching the job offers!", error); // Handle errors
      });
  }, []); // Empty dependency array means this runs only once, when the component mounts

  // Filter job offers based on the search query
  const filteredJobOffers = jobOffers.filter((offer) =>
    offer.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort job offers based on filters
  const sortedJobOffers = filteredJobOffers.sort((a, b) => {
    if (filters.order === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  }); 

  // Sort job offers based on publication date
  if (filters.dateOrder === "rec") {
    sortedJobOffers.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
  } else {
    sortedJobOffers.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  return (
    <div className="container-offers d-flex justify-content-center align-items-center">
      <div className="row justify-content-center">
        {sortedJobOffers.map((offer) => (
          <div key={offer.JO_id} className="col-md-6 d-flex justify-content-center">
            <div
              className="job-card card d-flex justify-content-center align-items-center"
              onClick={() => handleCardClick(offer.JO_id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-body">
                <h3 className="card-title">{offer.title}</h3>
                <h4>{offer.recruiter ? offer.recruiter.name : "Unknown Company"}</h4>
                <p>Published on: {new Date(offer.date_created).toLocaleDateString()}</p>
                <h5>{offer.description}</h5>
                <p><strong>Requisites:</strong> {offer.requisites}</p>
                <p><strong>Responsibilities:</strong> {offer.responsibilities}</p>
                <p><strong>Benefits:</strong> {offer.benefits}</p>
                <p><strong>Status:</strong> {offer.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobOffersComponents; // Export the component
