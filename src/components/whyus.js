import React from "react";
import "../css/whyus.css";

function WhyUs() {
  const cardOneItems = [
    "Slow, inconsistent results",
    "Lots of time wasted on poor leads",
    "Difficult to track and measure progress",
    "Hard to scale operations",
    "High costs and heavy workload",
    "Limited industry focus and personalization"
  ];

  const cardTwoItems = [
    "Fast, targeted lead generation",
    "Delivers only qualified leads",
    "Easy to track progress with clear reports",
    "Scalable, industry-specific campaigns",
    "Lower costs and less manual effort",
    "Customized strategies for better results"
  ];

return (
    <section className="whyus-section">
      {/* Tag */}
      <div className="whyus-tag">Why us</div>

      {/* Heading */}
      <h2 className="whyus-heading">
        What makes us stand<br />
        out in the industry
      </h2>

      {/* Subtext */}
      <p className="whyus-description">
        Discover how our innovative strategies, data-driven approach, and<br />
        commitment to results set us apart from the competition
      </p>

      <div className="double-card-row">
        {/* Card 1 */}
        <div className="stacked-logo-card no-gradient">
          <div className="card-heading">Mannual Work</div>
          {cardOneItems.map((text, i) => (
            <div className="logo-line" key={i}>
              <div className="logo-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path d="M13.7882 12.087C13.9644 12.2631 14.0633 12.502 14.0633 12.751C14.0633 13.0001 13.9644 13.239 13.7882 13.4151C13.6121 13.5912 13.3733 13.6902 13.1242 13.6902C12.8751 13.6902 12.6362 13.5912 12.4601 13.4151L7.49997 8.45338L2.53825 13.4135C2.36213 13.5897 2.12326 13.6886 1.87418 13.6886C1.62511 13.6886 1.38624 13.5897 1.21012 13.4135C1.034 13.2374 0.935059 12.9986 0.935059 12.7495C0.935059 12.5004 1.034 12.2615 1.21012 12.0854L6.17184 7.12526L1.21168 2.16354C1.03556 1.98742 0.936621 1.74855 0.936621 1.49948C0.936621 1.25041 1.03556 1.01154 1.21168 0.835415C1.3878 0.659295 1.62668 0.560351 1.87575 0.560351C2.12482 0.560351 2.36369 0.659295 2.53981 0.835415L7.49997 5.79713L12.4617 0.834634C12.6378 0.658514 12.8767 0.55957 13.1257 0.55957C13.3748 0.55957 13.6137 0.658514 13.7898 0.834634C13.9659 1.01075 14.0649 1.24962 14.0649 1.4987C14.0649 1.74777 13.9659 1.98664 13.7898 2.16276L8.82809 7.12526L13.7882 12.087Z" fill="#CCCCCC"/>
                </svg>
              </div>
              <div className="logo-description">{text}</div>
            </div>
          ))}
        </div>

        {/* Card 2 */}
        <div className="stacked-logo-card">
          <div className="card-heading">vConnect iDees</div>
          {cardTwoItems.map((text, i) => (
            <div className="logo-line" key={i}>
              <div className="logo-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                    <path d="M16.6632 2.41364L6.66325 12.4136C6.57615 12.501 6.47266 12.5704 6.3587 12.6177C6.24475 12.665 6.12257 12.6894 5.99918 12.6894C5.8758 12.6894 5.75362 12.665 5.63967 12.6177C5.52571 12.5704 5.42222 12.501 5.33512 12.4136L0.960122 8.03864C0.872916 7.95143 0.803741 7.8479 0.756545 7.73396C0.70935 7.62002 0.685059 7.4979 0.685059 7.37458C0.685059 7.25125 0.70935 7.12913 0.756545 7.01519C0.803741 6.90125 0.872916 6.79772 0.960122 6.71051C1.04733 6.62331 1.15086 6.55413 1.2648 6.50694C1.37874 6.45974 1.50086 6.43545 1.62418 6.43545C1.74751 6.43545 1.86963 6.45974 1.98357 6.50694C2.09751 6.55413 2.20104 6.62331 2.28825 6.71051L5.99997 10.4222L15.3367 1.08708C15.5128 0.910955 15.7517 0.812012 16.0007 0.812012C16.2498 0.812012 16.4887 0.910955 16.6648 1.08708C16.8409 1.2632 16.9399 1.50207 16.9399 1.75114C16.9399 2.00021 16.8409 2.23908 16.6648 2.4152L16.6632 2.41364Z" fill="white"/>
                </svg>
              </div>
              <div className="logo-description">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;