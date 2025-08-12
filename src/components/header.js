import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../css/header.css';
import logo from "../images/VconnectLogo.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollOrNavigate = (sectionId = null, page = "/") => {
    if (location.pathname === page) {
      // Same page → scroll now
      if (!sectionId || sectionId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Navigate first, then scroll
      navigate(page);
      setTimeout(() => {
        if (!sectionId || sectionId === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 400); // delay so the DOM is ready
    }
  };

  return (
    <header className="header" id="header">
      <div className="header-inner">
        <img
          src={logo}
          alt="Logo"
          className="logo-image"
          onClick={() => scrollOrNavigate("hero", "/")}
          style={{ cursor: "pointer" }}
        />

        <nav className="nav-links">
          <button className="nav-btn" onClick={() => scrollOrNavigate("hero", "/")}>
            Home
          </button>
          <button className="nav-btn" onClick={() => scrollOrNavigate("heroabout", "/about")}>
            About
          </button>
          <button className="nav-btn" onClick={() => scrollOrNavigate("services", "/services")}>
            Services
          </button>
          <button className="nav-btn" onClick={() => scrollOrNavigate("contact", "/contact")}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
