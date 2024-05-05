import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import Contacts from "./pages/contacts";
import About from "./pages/about";
import Companies from "./pages/companies";
import NoPage from "./pages/noPage";

function App() {
  return (
    <>
      <div>
        <NavBar links={links} />
        <Caroussel />
      </div>
    </>
  );
}

export default App;
