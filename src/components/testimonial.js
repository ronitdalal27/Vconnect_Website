import React from "react";
import '../css/testimonial.css'; // Import the CSS file


const testimonials = [
  {
    text: `"The team demonstrates commendable consistency, sincerity & passion to get results for their clients."`, 
    name: "Himani Chandorkar",
    title: "CoFounder | Etude 360 & Acumen 360",
    image: "/images/himani.png"
  },
  {
    text: '"They have been very prompt in understanding the Ideal customer profile,& arranging meetings."',
    name: "Balavishnu",
    title: "Founder of TechnoTackle",
    image: "/images/balavishnu.png"
  },
  {
    text: '"From understanding your needs to connecting you with the right customers, the vConnect team is best."',
    name: "Ankit Shah",
    title: "CEO & Founder | Webtual",
    image: "/images/AnkitShah.png"
  }
];

function Testimonial() {
  return (
    <section className="testimonial-section" id="testimonial">
      {/* Testimonial Tag */}
      <div className="testimonial-tag">Testimonials</div>

      {/* Main Heading */}
      <h2 className="testimonial-heading">
        Why Businesses Love <br /> vConnect iDees
      </h2>

      {/* Sub Heading */}
      <p className="testimonial-subheading">
        Real businesses, real results with smart sales.
      </p>

      {/* Cards Container */}
      <div className="testimonial-cards-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            {/*Stars */}
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                  <path d="M17.8039 8.54257L14.2883 11.5762L15.3594 16.1129C15.4185 16.3592 15.4033 16.6174 15.3157 16.8551C15.228 17.0927 15.072 17.299 14.8672 17.448C14.6623 17.597 14.418 17.6819 14.1649 17.6921C13.9118 17.7022 13.6614 17.6371 13.4453 17.5051L9.50001 15.0769L5.55236 17.5051C5.33628 17.6364 5.08619 17.7008 4.83356 17.6903C4.58093 17.6798 4.33706 17.5947 4.13267 17.4459C3.92828 17.297 3.77249 17.091 3.68494 16.8538C3.59738 16.6166 3.58197 16.3588 3.64064 16.1129L4.71564 11.5762L1.20001 8.54257C1.00884 8.37734 0.870579 8.15945 0.802499 7.91612C0.734419 7.67278 0.739536 7.41478 0.817212 7.17434C0.894887 6.9339 1.04168 6.72166 1.23925 6.56415C1.43683 6.40663 1.67643 6.31081 1.92814 6.28866L6.53751 5.91679L8.31564 1.61366C8.41188 1.37914 8.57569 1.17854 8.78624 1.03736C8.99679 0.896183 9.24456 0.820801 9.49806 0.820801C9.75156 0.820801 9.99933 0.896183 10.2099 1.03736C10.4204 1.17854 10.5842 1.37914 10.6805 1.61366L12.4578 5.91679L17.0672 6.28866C17.3194 6.30999 17.5597 6.40527 17.758 6.56257C17.9563 6.71987 18.1038 6.93219 18.1819 7.17292C18.2601 7.41366 18.2655 7.67211 18.1974 7.91589C18.1293 8.15967 17.9908 8.37794 17.7992 8.54335L17.8039 8.54257Z" fill="white"/>
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="testimonial-text">{t.text}</p>

            {/* CEO Info */}
            <div className="testimonial-ceo">
              <img src={t.image} alt={t.name} className="testimonial-ceo-img" />
              <div className="testimonial-ceo-info">
                <p className="testimonial-ceo-name">{t.name}</p>
                <p className="testimonial-ceo-title">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
