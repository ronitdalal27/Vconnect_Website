import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/emailmarketing.css";
import LeadHero from "../images/service3.png"; // <- replace with your hero image

function EmailMarketing() {
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Handler must be inside component (hooks cannot be called conditionally/outside)
  const handleBookCallClick = (e) => {
    // If triggered by keyboard, prevent default scroll of spacebar etc.
    if (e && e.type === "keydown" && e.key !== "Enter" && e.key !== " ") {
      return;
    }
    // navigate to contact and optionally pass state
    navigate("/contact", { state: { scrollTo: "contact" } });
    // Removed window.scrollTo here
  };

  const benefits = [
    {
      title: "Personalized Engagement",
      text: "Deliver tailored content that resonates with your audience’s needs and interests.",
    },
    {
      title: "Higher ROI",
      text: "Optimize campaigns for better open rates, click-throughs, and conversions.",
    },
    {
      title: "Automated Workflows",
      text: "Save time with automated emails that nurture leads and retain customers.",
    },
    {
      title: "Regulatory Compliance",
      text: "Stay worry-free with campaigns that meet industry standards.",
    },
    {
      title: "Detailed Analytics",
      text: "Track performance with clear, actionable insights to improve results.",
    },
  ];

  return (
    <main className="lg-page">
      <div className="lg-top-wrapper">
        <div
          className="lg-back"
          onClick={() => navigate("/service")}
          role="button"
          tabIndex={0}
          aria-label="Go back to services"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate("/service");
          }}
        >
          <span className="lg-back-icon" aria-hidden="true">
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
            >
              <path
                d="M12.7501 5.5C12.7501 5.69891 12.6711 5.88968 12.5304 6.03033C12.3898 6.17098 12.199 6.25 12.0001 6.25H2.8126L6.0326 9.46938C6.1735 9.61027 6.25265 9.80137 6.25265 10.0006C6.25265 10.1999 6.1735 10.391 6.0326 10.5319C5.89171 10.6728 5.70061 10.7519 5.50135 10.7519C5.3021 10.7519 5.111 10.6728 4.9701 10.5319L0.470103 6.03188C0.400183 5.9622 0.344705 5.8794 0.306851 5.78824C0.268997 5.69708 0.249512 5.59934 0.249512 5.50063C0.249512 5.40192 0.268997 5.30418 0.306851 5.21301C0.344705 5.12185 0.400183 5.03905 0.470103 4.96938L4.9701 0.469376C5.03987 0.399611 5.12269 0.34427 5.21384 0.306514C5.30499 0.268758 5.40269 0.249325 5.50135 0.249325C5.60002 0.249325 5.69771 0.268758 5.78886 0.306514C5.88002 0.34427 5.96284 0.399611 6.0326 0.469376C6.10237 0.53914 6.15771 0.621963 6.19546 0.713115C6.23322 0.804267 6.25265 0.901963 6.25265 1.00063C6.25265 1.09929 6.23322 1.19698 6.19546 1.28814C6.15771 1.37929 6.10237 1.46211 6.0326 1.53188L2.8126 4.75H12.0001C12.199 4.75 12.3898 4.82902 12.5304 4.96967C12.6711 5.11032 12.7501 5.30109 12.7501 5.5Z"
                fill="#CCCCCC"
              />
            </svg>
          </span>
          <span className="lg-back-text">Go back</span>
        </div>

        {/* absolute pill that sits below the back link */}
        <div className="lg-pill">Email Marketing</div>
      </div>

      {/* Hero Section with Left Image and Right Text */}
      <div className="lg-hero-container">
      {/* LEFT - Text */}
      <div className="lg-hero-right">
        <h1 className="lg-title">
          Unlock a Steady Stream of High-Quality Leads
        </h1>
        <p className="lg-subtitle">
          Transform your business growth with vConnect iDees' expert lead
          generation services, designed to connect you with prospects who are
          ready to engage.
        </p>
      </div>

      {/* RIGHT - Image */}
      <div className="lg-hero-left">
        <img
          src={LeadHero}
          alt="Lead Generation Hero"
          className="lg-hero-image"
        />
      </div>
      </div>

      {/* Benefits heading */}
      <h2 className="lg-benefits-title">Benefits of Our Email Marketing Services</h2>

      {/* Repeated benefit blocks (5 times) */}
      <section className="lg-benefits-list">
        {benefits.map((b, i) => (
          <div className="lg-benefit" key={i}>
            <div className="lg-benefit-title">{b.title}</div>
            <div className="lg-benefit-text">{b.text}</div>
          </div>
        ))}
      </section>

      {/* Final Why Choose section */}
      <section className="lg-why">
        <h3 className="lg-why-title">Why Choose vConnect iDees?</h3>
        <p className="lg-why-desc">
          We combine creativity with data-driven precision to deliver email
          campaigns that get results. Our team stays updated on the latest email
          marketing trends, ensuring your campaigns stand out in crowded
          inboxes. With vConnect iDees, you’re partnering with experts dedicated
          to growing your business through effective email strategies.
        </p>
      </section>

      {/* ✅ CTA Section */}
      <div className="cta-container" role="region">
    <div className="cta-heading">
      Let us handle the scheduling so
      <br />
      you can focus on winning clients.
    </div>

    <div className="cta-subheading">Book a Call Today and Start Scaling</div>

    <div
      className="cta-button"
      onClick={handleBookCallClick} // ✅ moved here
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleBookCallClick(e);
      }}
    >
      Book a Call
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="cta-icon"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M4.66168 12.1637L11.3283 5.49707"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.66168 5.49707H11.3283V12.1637"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    </div>

    </main>
  );
}

export default EmailMarketing;
