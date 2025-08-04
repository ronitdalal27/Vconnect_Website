import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css'; // Import the CSS file

function Header() {
  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="header" id="header">
      <img src="VconnectLogo.png" alt="Logo" className="logo" />
      <nav className="nav-links">
        <Link to="/">
          <button className="nav-btn" onClick={scrollToHome}>Home</button>
        </Link>
        <Link to="/about">
          <button className="nav-btn">About</button>
        </Link>
        <Link to="/">
          <button className="nav-btn" onClick={scrollToServices}>Services</button>
        </Link>
        <Link to="/contact">
          <button className="nav-btn">Contact</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
