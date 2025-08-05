import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/contact.css";

const Contact = () => {
    const location = useLocation();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        plan: ""
    });

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = document.getElementById(location.state.scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const scriptURL = "https://script.google.com/macros/s/AKfycbx1m5T0QR3GX-_cGuHf2SzDCbkL8YtJ4Q1ZeZmS55whmSUjc2k0-oS57bZKjDd2iI2o_Q/exec";

        // Create form data in the format Google Apps Script expects
        const form = new FormData();
        form.append("firstName", formData.firstName);
        form.append("lastName", formData.lastName);
        form.append("email", formData.email);
        form.append("mobile", formData.mobile);
        form.append("plan", formData.plan);

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                body: form
            });

            if (response.ok) {
                alert("Form submitted successfully!");

                // Clear form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobile: "",
                    plan: ""
                });
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form. Please try again.");
        }
    };

    return (
        <div id="contact" className="contact-section">
            <div className="contact-tag">Contact</div>
            <h2 className="contact-heading">Get In Touch With Us</h2>
            <p className="contact-subheading">
                Have questions or need AI solutions? Let us know by filling out the form, and <br />
                we'll be in touch!
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                {/* Row 1: First Name / Last Name */}
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Jane"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            required
                        />
                    </div>
                </div>

                {/* Row 2: Email / Mobile */}
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane@example.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="+1234567890"
                            required
                        />
                    </div>
                </div>

                {/* Row 3: Plan selection */}
                <div className="form-row plan-row">
                    <label className="plan-label">Choose a Plan:</label>
                    <div className="radio-group">
                        {["Starter", "Growth", "Scale", "Custom"].map((option) => (
                            <label key={option} className="radio-option">
                                <input
                                    type="radio"
                                    name="plan"
                                    value={option.toLowerCase()}
                                    checked={formData.plan === option.toLowerCase()}
                                    onChange={handleChange}
                                    required
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">Submit Form</button>
            </form>
        </div>
    );
};

export default Contact;
