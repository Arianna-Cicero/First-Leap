import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import EmailCode from "./pages/emailCode";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/jobs", element: <Jobs /> },
  { path: "/home", element: <Home /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/about", element: <About /> },
  { path: "/companies", element: <Companies /> },
  { path: "/desempregados", element: <Desempregados /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/joboffer/:id", element: <JobOffer /> },
  { path: "/createJob", element: <CreateJob /> },
  { path: "/emailCode", element: <EmailCode /> },
  { path: "*", element: <NoPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="946542670115-ndfkrdtcfhsnd8i99r8shm9r855utrqd.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
