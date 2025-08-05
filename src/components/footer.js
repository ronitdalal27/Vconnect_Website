import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/footer.css";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollOrNavigate = (sectionId, page = "/") => {
    if (location.pathname === page) {
      setTimeout(() => {
        if (sectionId === "top") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    } else {
      navigate(page, { state: { scrollTo: sectionId } });
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Left Side Container */}
        <div className="footer-left">
          <div className="footer-logo"></div>
          <p className="footer-text">
            vConnect iDees - Grow Smarter, Optimize Faster, and Scale Stronger.
          </p>
        </div>

        {/* Right Side Container */}
        <div className="footer-right">

          {/* Column 1 - Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Links</h3>
            <p className="footer-item" onClick={() => scrollOrNavigate("service", "/service")}>Services</p>
            <p className="footer-item" onClick={() => scrollOrNavigate("process")}>Process</p>
            <p className="footer-item" onClick={() => scrollOrNavigate("case-study")}>Case Study</p>
            <p className="footer-item" onClick={() => scrollOrNavigate("benefits")}>Benefits</p>
            <p className="footer-item" onClick={() => scrollOrNavigate("pricing")}>Pricing</p>
          </div>

          {/* Column 2 - Pages */}
          <div className="footer-column">
            <h3 className="footer-heading">Pages</h3>
            <p className="footer-item" onClick={() => scrollOrNavigate("top", "/")}>Home</p>
            <p className="footer-item" onClick={() => scrollOrNavigate("heroabout", "/about")}>About</p>
            <p className="footer-item" onClick={() => scrollOrNavigate("contact", "/contact")}>Contact</p>
          </div>

          {/* Column 3 - Socials */}
          <div className="footer-column">
            <h3 className="footer-heading">Socials</h3>

            <a
              href="https://www.linkedin.com/company/vconnectideees/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-item"
            >
              {/* LinkedIn Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M12 6C13.1935 6 14.3381 6.47411 15.182 7.31802C16.0259 8.16193 16.5 9.30653 16.5 10.5V15.75H13.5V10.5C13.5 10.1022 13.342 9.72065 13.0607 9.43934C12.7794 9.15804 12.3978 9 12 9C11.6022 9 11.2206 9.15804 10.9393 9.43934C10.658 9.72065 10.5 10.1022 10.5 10.5V15.75H7.5V10.5C7.5 9.30653 7.97411 8.16193 8.81802 7.31802C9.66193 6.47411 10.8065 6 12 6Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.5 6.75H1.5V15.75H4.5V6.75Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 4.5C3.82843 4.5 4.5 3.82843 4.5 3C4.5 2.17157 3.82843 1.5 3 1.5C2.17157 1.5 1.5 2.17157 1.5 3C1.5 3.82843 2.17157 4.5 3 4.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/vconnectidees_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-item"
            >
              {/* Instagram Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M13.125 4.875H13.1325M5.25 1.5H12.75C14.8211 1.5 16.5 3.17893 16.5 5.25V12.75C16.5 14.8211 14.8211 16.5 12.75 16.5H5.25C3.17893 16.5 1.5 14.8211 1.5 12.75V5.25C1.5 3.17893 3.17893 1.5 5.25 1.5ZM12 8.5275C12.0926 9.15168 11.9859 9.78916 11.6953 10.3493C11.4047 10.9094 10.9449 11.3636 10.3812 11.6473C9.81758 11.931 9.17884 12.0297 8.55584 11.9294C7.93284 11.8292 7.35732 11.5351 6.91113 11.0889C6.46494 10.6427 6.1708 10.0672 6.07055 9.44416C5.9703 8.82117 6.06905 8.18242 6.35274 7.61878C6.63644 7.05514 7.09064 6.59531 7.65074 6.30468C8.21084 6.01406 8.84832 5.90744 9.4725 6C10.1092 6.09441 10.6986 6.3911 11.1538 6.84623C11.6089 7.30136 11.9056 7.89081 12 8.5275Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <p className="footer-copy">&copy; {new Date().getFullYear()} Vconnect. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
