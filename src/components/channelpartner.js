import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../css/channelpartner.css";

const ChannelPartner = () => {
    const location = useLocation();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
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

        const serviceID = "service_uwtgqyn";       // Replace with your EmailJS Service ID
        const templateID = "template_a4sl74k";     // Replace with your EmailJS Template ID
        const publicKey = "J84htKbjl68eKS8wa";       // Replace with your EmailJS Public Key

        const templateParams = {
            firstName: formData.firstName,
            lastName: formData.lastName || "N/A",
            email: formData.email,
            mobile: formData.mobile,
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
                    message: ""
                });
            })
            .catch((error) => {
                console.error("FAILED...", error);
                alert("Failed to send email. Please try again.");
            });
    };

    return (
        <div id="channelpartner" className="channel-partner-section">
            <div className="channel-partner-tag">Channel Partner</div>
            <h2 className="channel-partner-heading">Join us as a Channel Partner</h2>
            <p className="channel-partner-subheading">
                Join vConnect iDees and earn through as a Channel Partner
            </p>

            <form className="channel-partner-form" onSubmit={handleSubmit}>
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

                {/* Row 3: Message */}
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

export default ChannelPartner;
