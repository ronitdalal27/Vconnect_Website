import React, { useEffect, useState } from "react";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import '../css/casestudy.css';


const slides = [
  {
    id: 1,
    image: slide1,
    heading: "Accelerate Success with vConnect iDees: 3 Lakh Deals in Just 2 Months!",
    description:
      "Technotackle, a dynamic tech innovator based in India, crafts tailored web and mobile applications. Leveraging cutting-edge technologies they deliver seamless, high-performance solutions to meet diverse business needs.",
    impact: [
      "Targeted South India for staff augmentation.",
      "Closed 3 lakh deal in second month.",
      "Earned CEO's praise and referrals."
    ]
  },
  {
    id: 2,
    image: slide2,
    heading: "Boost Your Business with vConnect iDees: 3–5 Lakhs in Quarterly Wins!",
    description:
      "Symco Plus, a dynamic consultancy, delivers ERP-driven financial solutions, empowering businesses with tailored strategies and real-time insights through cutting-edge tech.",
    impact: [
      "Delivered pre-qualified leads.",
      "Closed deals worth 3–5 lakhs quarterly.",
      "Powered two years of stellar partnership."
    ]
  },
  {
    id: 3,
    image: slide3,
    heading: "Expand Market Reach with Data-Driven StrategiesSupercharge Your Growth with vConnect iDees: $28,000 Deals Closed!",
    description:
      "Technohertz, a dynamic software engineering company headquartered in Pune, India, specializes in delivering cutting-edge, customized software solutions.",
    impact: [
      "Delivered high-quality leads for the US market.",
      "Enabled a $28,000 deal for field management software.",
      "Powered two years of stellar partnership."
    ]
  },
  {
    id: 4,
    image: slide4,
    heading: "Skyrocketing Manufacturing Innovation with vConnect iDees: 38 Lakh POCs!",
    description:
      "ZestIOT, a cutting-edge innovator, delivers advanced camera AI solutions tailored for the manufacturing industry, revolutionizing efficiency and precision.",
    impact: [
      "Fueled middle-funnel growth via email campaigns.",
      "Converted leads into multiple POCs.",
      "Secured a top POC worth 38 lakhs."
    ]
  }
];


function CaseStudy() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Handle manual navigation
  const nextSlide = () => setCurrentIndex(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="case-study" id="case-study">
      <div className="case-study-tag">Case Studies</div>

      <h2 className="case-study-heading">
        How We <br />
        Transforms Businesses
      </h2>

      <p className="case-study-subtext">
        See how streamlines operations boosts sales and drives growth.
      </p>

      {/* ✅ Carousel Container */}
      <div className="case-study-carousel-wrapper">
        <div
          className="case-study-carousel"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="case-slide">
              <div className="case-slide-image">
                <img src={slide.image} alt="Case Logo" className="slide-logo" />
              </div>

              <div className="case-slide-content">  
                <h3 className="case-slide-heading">{slide.heading}</h3>
                <p className="case-slide-description">{slide.description}</p>

                <div className="case-slide-impact">
                  <span>Impact:</span>
                  <ul>
                    {slide.impact.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Drag to Explore */}
      <div className="case-study-drag">
        <span className="drag-icon left" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
          <path d="M15.5 6.79966C15.5 6.96542 15.4342 7.1244 15.3169 7.24161C15.1997 7.35882 15.0408 7.42466 14.875 7.42466H2.6336L7.19219 11.9825C7.25026 12.0405 7.29632 12.1095 7.32775 12.1854C7.35918 12.2612 7.37535 12.3425 7.37535 12.4247C7.37535 12.5068 7.35918 12.5881 7.32775 12.664C7.29632 12.7398 7.25026 12.8088 7.19219 12.8669C7.13412 12.9249 7.06518 12.971 6.98931 13.0024C6.91344 13.0338 6.83213 13.05 6.75 13.05C6.66788 13.05 6.58656 13.0338 6.51069 13.0024C6.43482 12.971 6.36588 12.9249 6.30782 12.8669L0.682816 7.24185C0.624706 7.18381 0.578606 7.11488 0.547154 7.039C0.515701 6.96313 0.499512 6.8818 0.499512 6.79966C0.499512 6.71753 0.515701 6.6362 0.547154 6.56033C0.578606 6.48445 0.624706 6.41552 0.682816 6.35748L6.30782 0.732476C6.42509 0.615201 6.58415 0.549316 6.75 0.549316C6.91586 0.549316 7.07492 0.615201 7.19219 0.732476C7.30947 0.849752 7.37535 1.00881 7.37535 1.17466C7.37535 1.34052 7.30947 1.49958 7.19219 1.61685L2.6336 6.17466H14.875C15.0408 6.17466 15.1997 6.24051 15.3169 6.35772C15.4342 6.47493 15.5 6.6339 15.5 6.79966Z" fill="white" fill-opacity="0.75"/>
          </svg>
        </span>

        <span className="drag-text">DRAG TO EXPLORE</span>

        <span className="drag-icon right" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
          <path d="M15.3172 7.24185L9.69219 12.8669C9.57491 12.9841 9.41585 13.05 9.25 13.05C9.08415 13.05 8.92509 12.9841 8.80781 12.8669C8.69054 12.7496 8.62465 12.5905 8.62465 12.4247C8.62465 12.2588 8.69054 12.0998 8.80781 11.9825L13.3664 7.42466H1.125C0.95924 7.42466 0.800269 7.35882 0.683058 7.24161C0.565848 7.1244 0.5 6.96542 0.5 6.79966C0.5 6.6339 0.565848 6.47493 0.683058 6.35772C0.800269 6.24051 0.95924 6.17466 1.125 6.17466H13.3664L8.80781 1.61685C8.69054 1.49958 8.62465 1.34052 8.62465 1.17466C8.62465 1.00881 8.69054 0.849752 8.80781 0.732476C8.92509 0.615201 9.08415 0.549316 9.25 0.549316C9.41585 0.549316 9.57491 0.615201 9.69219 0.732476L15.3172 6.35748C15.3753 6.41552 15.4214 6.48445 15.4529 6.56033C15.4843 6.6362 15.5005 6.71753 15.5005 6.79966C15.5005 6.8818 15.4843 6.96313 15.4529 7.039C15.4214 7.11488 15.3753 7.18381 15.3172 7.24185Z" fill="white" fill-opacity="0.75"/>
          </svg>
        </span>
      </div>
    </section>
  );
}

export default CaseStudy;
