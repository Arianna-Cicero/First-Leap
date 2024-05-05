import React from "react";
import FixedNavBar from "./navBar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <FixedNavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
