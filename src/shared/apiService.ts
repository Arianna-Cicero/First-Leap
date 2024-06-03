import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const initiateOAuth2Flow = async () => {
  try {
    // Make a POST request to your backend endpoint that generates the OAuth2 authorization URL
    const response = await apiService.post("/oauth");
    // Redirect the user to the authorization URL obtained from the backend
    window.location.href = response.data.url;
  } catch (error) {
    console.error("Error initiating OAuth2 flow:", error);
    // Handle error, e.g., display error message to the user
  }
};

//get
export const get = async (path) => {
  try {
    const response = await apiService.get(path);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error);
    throw error;
  }
};

//post
export const post = async (path, data) => {
  try {
    const response = await apiService.post(path, data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to ${path}:`, error);
    throw error;
  }
};

export const registerCandidate = async (data: FormData) => {
  try {
    const response = await apiService.post("/candidate", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating candidate:", error);
    throw error;
  }
};

//delete
export const deleteResource = async (path, id) => {
  try {
    const response = await apiService.delete(`${path}/${id}`);
    console.log("Dados apagados ", response.data);
    return response.data;
  } catch (error) {
    console.error(`Error deleting data from ${path}:`, error);
    throw error;
  }
};

//patch
export const patch = async (path, id, data) => {
  try {
    const response = await apiService.patch(`${path}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error patching data to ${path}/${id}:`, error);
    throw error;
  }
};

// Auth/Login requests
const path_login = "/candidacy";
export const getAuth = () => get(path_login);
export const createAuth = (data) => post(path_login, data);
export const updateAuth = (id, data) => patch(path_login, id, data);
export const deleteAuth = (id) => deleteResource(path_login, id);

//Candidacy requests
const path_candidacy = "/candidacy";
export const getCandidacy = () => get(path_candidacy);
export const createCandidacy = (data) => post(path_candidacy, data);
export const updateCandidacy = (id, data) => patch(path_candidacy, id, data);
export const deleteCandidacy = (id) => deleteResource(path_candidacy, id);

//Candidate requests
const path_candidate = "/candidate";
export const getCandidate = () => get("/candidates");
export const createCandidate = (data: any) => axios.post(path_candidate, data);
export const updateCandidate = (id, data) => patch(path_candidate, id, data);
export const deleteCandidate = (id) => deleteResource(path_candidate, id);

//Utilizador requests
const path_utilizador = "/utilizador";
export const getUtilizador = () => get(path_utilizador);
export const createUtilizador = (data) => post(path_utilizador, data);
export const updateUtilizador = (id, data) => patch(path_utilizador, id, data);
export const deleteUtilizador = (id) => deleteResource(path_utilizador, id);

//JobOffers requests
const path_joboffer = "/job-offer";
export const getJobOffers = () => get(path_joboffer);
export const createJobOffer = (data) => post(path_joboffer, data);
export const updateJobOffer = (id, data) => patch(path_joboffer, id, data);
export const deleteJobOffer = (id) => deleteResource(path_joboffer, id);
export const getJobOfferById = (id) => get(`${path_joboffer}/${id}`);

//Company requests
const path_company = "/company";
export const getCompany = () => get(path_company);
export const createCompany = (data) => post(path_company, data);
export const updateCompany = (id, data) => patch(path_company, id, data);
export const deleteCompany = (id) => deleteResource(path_company, id);

//Feedback requests
const path_feedback = "/feedback";
export const getFeedback = () => get(path_feedback);
export const createFeedback = (data) => post(path_feedback, data);
export const updateFeedback = (id, data) => patch(path_feedback, id, data);
export const deleteFeedback = (id) => deleteResource(path_feedback, id);

//emailverification requests
const path_email = "/email-verification";
export const getEmailVerification = () => get(path_email);
export const createEmailVerification = (data) => post(path_email, data);
export const updateEmailVerification = (id, data) =>
  patch(path_email, id, data);
export const deleteEmailVerification = (id) => deleteResource(path_email, id);

//jobtype requests
const path_jobtype = "/jobtype";
export const getJobType = () => get(path_jobtype);
export const createJobType = (data) => post(path_jobtype, data);
export const updateJobType = (id, data) => patch(path_jobtype, id, data);
export const deleteJobType = (id) => deleteResource(path_jobtype, id);

//postal_code requests
const path_postal_code = "/postal-code";
export const getPostalCode = () => get(path_postal_code);
export const createPostalCode = (data) => post(path_postal_code, data);
export const updatePostalCode = (id, data) => patch(path_postal_code, id, data);
export const deletePostalCode = (id) => deleteResource(path_postal_code, id);

//recruiter requests
const path_recruiter = "/recruiter";
export const getRecruiter = () => get(path_recruiter);
export const createRecruiter = (data) => post(path_recruiter, data);
export const updateRecruiter = (id, data) => patch(path_recruiter, id, data);
export const deleteRecruiter = (id) => deleteResource(path_recruiter, id);

//result requests
const path_result = "/result";
export const getResult = () => get(path_result);
export const createResult = (data) => post(path_result, data);
export const updateResult = (id, data) => patch(path_result, id, data);
export const deleteResult = (id) => deleteResource(path_result, id);

//selection_phase requests
const path_selection_phase = "/selection-phase";
export const getSelectionPhase = () => get(path_selection_phase);
export const createSelectionPhase = (data) => post(path_selection_phase, data);
export const updateSelectionPhase = (id, data) =>
  patch(path_selection_phase, id, data);
export const deleteSelectionPhase = (id) =>
  deleteResource(path_selection_phase, id);

//selection_process requests
const path_selection_process = "/selection-process";
export const getSelectionProcess = () => get(path_selection_process);
export const createSelectionProcess = (data) =>
  post(path_selection_process, data);
export const updateSelectionProcess = (id, data) =>
  patch(path_selection_process, id, data);
export const deleteSelectionProcess = (id) =>
  deleteResource(path_selection_process, id);

//vacancy requests
const path_vacancy = "/vacancy";
export const getVacancy = () => get(path_vacancy);
export const createVacancy = (data) => post(path_vacancy, data);
export const updateVacancy = (id, data) => patch(path_vacancy, id, data);
export const deleteVacancy = (id) => deleteResource(path_vacancy, id);

export default apiService;
