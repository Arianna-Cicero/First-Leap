import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import Contacts from "./pages/contacts";
import About from "./pages/about";
import Companies from "./pages/companies";
import NoPage from "./pages/noPage";
import Desempregados from "./pages/desempregados";
import Login from "./pages/login";
import Register from "./pages/register";
import JobOffer from "./pages/jobOffer";
import Jobs from "./pages/jobs";
import CreateJob from "./pages/createJob";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/desempregados" element={<Desempregados />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/joboffers" element={<JobOffer />} />
          <Route path="/createJob" element={<CreateJob />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
