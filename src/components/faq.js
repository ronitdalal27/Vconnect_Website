import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/faq.css";

const faqData = [
  {
    question: "What if you don't deliver the leads in the committed time frame i.e 3 months ?",
    answer: "If we don't deliver within 3 months, we extend the service at no additional cost until we meet the commitment.",
  },
  {
    question: "Where are you not working on a revenue sharing model ?",
    answer:
      "We don't work on a revenue sharing model because our focus is on delivering qualified leads upfront at a fixed cost, giving you full ownership and control without sharing your revenue.",
  },
  {
    question: "Why should we hire you over inhouse sales team ?",
    answer:
      "You should hire us over an in-house sales team because we leverage our deep industry expertise and proven lead generation strategies to rapidly connect you with key decision-makers, driving faster sales growth without the overhead or delays of building an internal team.",
  },
  {
    question: "How do we know if you are not giving the same lead to any other competitor of ours ?",
    answer:
      "We guarantee lead exclusivity. Every lead generated for you is locked to your account, and our system prevents duplicate or shared leads across competitors.",
  }
  // {
  //   question: "Why don't you do Linkedin marketing ?",
  //   answer:
  //     "While LinkedIn can work for some businesses, we focus on channels that consistently deliver higher ROI at scale. If LinkedIn is critical for your business, we can discuss a customized approach.",
  // },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleBookCallClick = () => {
    navigate("/contact", { state: { scrollTo: "contact" } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-tag">FAQs</div>

      <h2 className="faq-heading">
        We’ve Got the Answers <br /> You’re Looking For
      </h2>

      <p className="faq-subheading">
        Quick answers to your AI automation questions.
      </p>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFaq(index)}>
            <div className={`faq-question ${openIndex === index ? "active" : ""}`}>
              {item.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`faq-arrow ${openIndex === index ? "open" : ""}`}
                viewBox="0 0 11 7"
                fill="none"
              >
                <path
                  d="M10.6849 1.9227L5.99744 6.6102C5.93211 6.67575 5.85449 6.72776 5.76903 6.76325C5.68356 6.79874 5.59193 6.81701 5.49939 6.81701C5.40685 6.81701 5.31522 6.79874 5.22975 6.76325C5.14428 6.72776 5.06666 6.67575 5.00134 6.6102L0.313842 1.9227C0.181752 1.79061 0.107544 1.61146 0.107544 1.42466C0.107544 1.23785 0.181752 1.0587 0.313842 0.92661C0.445932 0.79452 0.625085 0.720313 0.811889 0.720313C0.998693 0.720313 1.17785 0.79452 1.30994 0.92661L5.49997 5.11665L9.69001 0.926025C9.8221 0.793934 10.0013 0.719727 10.1881 0.719727C10.3749 0.719727 10.554 0.793934 10.6861 0.926025C10.8182 1.05811 10.8924 1.23727 10.8924 1.42407C10.8924 1.61088 10.8182 1.79003 10.6861 1.92212L10.6849 1.9227Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className={`faq-content ${openIndex === index ? "show" : ""}`}>
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ CTA Section */}
      <div className="cta-container" onClick={handleBookCallClick} role="button" tabIndex="0">
        <div className="cta-heading">
          Let us do the Work so<br />you can Scale Faster
        </div>

        <div className="cta-subheading">
          Book a Call Today and Start Scaling
        </div>

        <div className="cta-button">
          Book a Call
          <svg xmlns="http://www.w3.org/2000/svg" className="cta-icon" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M4.66168 12.1637L11.3283 5.49707" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.66168 5.49707H11.3283V12.1637" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Faq;
