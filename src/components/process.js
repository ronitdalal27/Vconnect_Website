import React from "react";
import '../css/process.css'; // Import the CSS file

function Process() {
  return (
    <section className="process" id="process">
      {/* Small Top Tag */}
      <div className="tag">
        <p>Our Process</p>
      </div>

      {/* Heading */}
      <h2>Our Simple, Smart,<br /> and Scalable Process</h2>

      {/* Four Containers */}
      <div className="grid">

        {/* Box 1 */}
        <div className="box">
          <div className="inner-content">
            <p className="step">Step 1</p>
            <p className="title">We build your hit list</p>
            <p className="desc">We map your ideal leads, sales targets, and messaging priorities, “No generic lists, just a plan built for your business.”</p>

            {/* Image Container */}
            <div className="image-container">
              <img src="/images/step1.png" alt="Step 1" />
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="box">
          <div className="inner-content">
            <p className="step">Step 2</p>
            <p className="title">Second step content</p>
            <p className="desc">Our data team verifies 100% of contacts - role, company, and buying signals. So you only reach real decision-makers.</p>

            <div className="image-container">
              <img src="/images/step2.png" alt="Step 2" />
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="box">
          <div className="inner-content">
            <p className="step">Step 3</p>
            <p className="title">Third step content</p>
            <p className="desc">Dedicated sales experts run tailored campaigns (email, LinkedIn, calls) to connect with prospects on their terms.</p>

            <div className="image-container">
              <img src="/images/step3.png" alt="Step 3" />
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className="box">
          <div className="inner-content">
            <p className="step">Step 4</p>
            <p className="title">Fourth step content</p>
            <p className="desc">We send validated leads to your CRM with context (e.g., “Showed interest in your AI product”) for easy follow-up.</p>

            <div className="image-container">
              <img src="/images/step4.png" alt="Step 4" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Process;
