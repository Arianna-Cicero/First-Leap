import React from "react";
import FixedNavBar from "./navBar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div>
      <FixedNavBar />
      <div style={{ marginTop: "80px", marginBottom: "80px" }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
