import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import '../css/header.css';
import logo from "../images/VconnectLogo.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (sectionId) => {
    if (location.pathname === "/") {
      if (sectionId === "header") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // If you want to navigate to the home and then scroll, keep this.
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="header" id="header">
      <div className="header-inner">
        <img
          src={logo}
          alt="Logo"
          className="logo-image"
          onClick={() => handleScrollOrNavigate("header")}
          style={{ cursor: "pointer" }}
        />

        <nav className="nav-links">
          <button className="nav-btn" onClick={() => handleScrollOrNavigate("header")}>
            Home
          </button>

          <Link to="/about">
            <button className="nav-btn">About</button>
          </Link>

          <Link to="/services">
            <button className="nav-btn">Services</button>
          </Link>

          <Link to="/contact">
            <button className="nav-btn">Contact</button>
          </Link>
        </nav>
      </div>
    </header>

  );
}

export default Header;
