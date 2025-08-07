import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/career.css";

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    experience: "",
    position: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_joiofc8";     //Replace with your EmailJS Service ID
    const templateID = "template_frt5tib";   //Replace with your EmailJS Template ID
    const publicKey = "uEKfK6zG5oBjp9BbR";     //Replace with your EmailJS Public Key

    const templateParams = {
      fullName: formData.fullName,
      phone: formData.phone,
      city: formData.city,
      experience: formData.experience,
      position: formData.position,
      description: formData.description,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      alert("Application submitted successfully!");

      setFormData({
        fullName: "",
        phone: "",
        city: "",
        experience: "",
        position: "",
        description: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send application. Please try again.");
    }
  };

  return (
    <div id="career" className="career-section">
      <div className="contact-tag">Career</div>
      <h2 className="contact-heading">Join Our Team</h2>
      <p className="contact-subheading">
        Apply now and be part of our mission-driven team. <br />
        Fill in your details and tell us why you're a great fit.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Full Name / Phone */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1234567890"
              required
            />
          </div>
        </div>

        {/* City / Experience */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="experience">Total Experience (in years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 3"
              required
            />
          </div>
        </div>

        {/* Position */}
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="position">Position Applying For</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="e.g., Frontend Developer"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Why should we shortlist you?</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Max 150 characters"
            maxLength="150"
            required
          />
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Career;
