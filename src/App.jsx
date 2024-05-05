import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import Contacts from "./pages/contacts";
import About from "./pages/about";
import Companies from "./pages/companies";
import NoPage from "./pages/noPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
