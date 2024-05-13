import React from "react";
import Footer from "./footer";
import FixedNavBar from "../components/navBar";

function Layout({ children }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <FixedNavBar />
      <div style={{ flex: 1, marginTop: "80px" }}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
