import Caroussel from "./components/caroussel";
import NavBar from "./components/navBar";

function App() {
  const links = [
    { url: "/", text: "Home" },
    { url: "/about", text: "About" },
    { url: "/contact", text: "Contact" },
  ];

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
