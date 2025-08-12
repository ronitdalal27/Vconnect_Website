import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../css/header.css';
import logo from "../images/VconnectLogo.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollOrNavigate = (sectionId = null, page = "/") => {
    if (location.pathname === page) {
      if (!sectionId || sectionId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
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
      }, 400);
    }
    setMenuOpen(false); // close menu after navigation
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

        {/* Desktop Nav */}
        <nav className="nav-links">
          <button className="nav-btn" onClick={() => scrollOrNavigate("hero", "/")}>Home</button>
          <button className="nav-btn" onClick={() => scrollOrNavigate("heroabout", "/about")}>About</button>
          <button className="nav-btn" onClick={() => scrollOrNavigate("services", "/services")}>Services</button>
          <button className="nav-btn" onClick={() => scrollOrNavigate("contact", "/contact")}>Contact</button>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollOrNavigate("hero", "/")}>Home</button>
          <button onClick={() => scrollOrNavigate("heroabout", "/about")}>About</button>
          <button onClick={() => scrollOrNavigate("services", "/services")}>Services</button>
          <button onClick={() => scrollOrNavigate("contact", "/contact")}>Contact</button>
        </div>
      )}
    </header>
  );
}

export default Header;
