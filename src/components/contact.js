import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../css/contact.css";

const Contact = () => {
    const location = useLocation();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        companyName: "",
        companyWebsite: "",
        message: ""
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_joiofc8";       // Replace with your EmailJS Service ID
        const templateID = "template_bu80nme";     // Replace with your EmailJS Template ID
        const publicKey = "uEKfK6zG5oBjp9BbR";       // Replace with your EmailJS Public Key

        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName || "N/A",
            email: formData.email,
            mobile: formData.mobile,
            companyName: formData.companyName,
            companyWebsite: formData.companyWebsite || "N/A",
            message: formData.message || "No message provided"
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Form submitted and email sent successfully!");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobile: "",
                    companyName: "",
                    companyWebsite: "",
                    message: ""
                });
            })
            .catch((error) => {
                console.error("FAILED...", error);
                alert("Failed to send email. Please try again.");
            });
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
                {/* Row 1 */}
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
                        />
                    </div>
                </div>

                {/* Row 2 */}
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

                {/* Row 3 */}
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyWebsite">Company Website</label>
                        <input
                            type="url"
                            name="companyWebsite"
                            value={formData.companyWebsite}
                            onChange={handleChange}
                            placeholder="https://acme.com"
                        />
                    </div>
                </div>

                {/* Row 4: Message */}
                <div className="form-row">
                    <div className="form-group full-width">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            rows={4}
                        />
                    </div>
                </div>

                <button type="submit" className="submit-btn">Submit Form</button>
            </form>
        </div>
    );
};

export default Contact;
