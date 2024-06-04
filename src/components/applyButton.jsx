import React from "react";
import "./styles.css"; // Import the CSS file for styling

function ApplyButton() {
  const applyForJob = async () => {
    try {
      const candidateId = 1; // Replace with the actual candidate ID
      const jobId = await getJobOfferById();
      const response = await applyForJob(candidateId, jobId);
      console.log("Applied successfully:", response.data);
    } catch (error) {
      console.error("Error applying for job:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <button className="create-button" onClick={applyForJob}>
        Candidatar
      </button>
    </div>
  );
}

export default ApplyButton;
