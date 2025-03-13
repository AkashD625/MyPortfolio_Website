import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <p>divateakash21@gmail.com</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="contact-icon" />
            <p>+91 8431996751</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>Karnataka, India</p>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/akashdivate" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a href="https://github.com/akashdivate" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon github" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
