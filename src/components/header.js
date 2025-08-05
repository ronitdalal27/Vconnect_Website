import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import '../css/header.css';
import logo from "../images/VconnectLogo.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

const handleScrollOrNavigate = (sectionId) => {
  if (location.pathname === "/") {
    // ✅ If section is "header", scroll to top
    if (sectionId === "header") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  } else {
    navigate("/", { state: { scrollTo: sectionId } });
  }
};


  return (
    <header className="header" id="header">
      <img
        src={logo}
        alt="Logo"
        className="logo-image"
        style={{ cursor: "pointer" }}
        onClick={() => handleScrollOrNavigate("header")}
      />
      <nav className="nav-links">
        <button className="nav-btn" onClick={() => handleScrollOrNavigate("header")}>
          Home
        </button>
        <Link to="/about">
          <button className="nav-btn">About</button>
        </Link>
        <Link to="/service">
        <button className="nav-btn" onClick={() => handleScrollOrNavigate("services")}>
          Services
        </button>
        </Link>
        <Link to="/contact">
          <button className="nav-btn">Contact</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
