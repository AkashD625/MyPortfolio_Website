import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null); // Reference for form

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "email-portfolio", // Replace with your EmailJS Service ID
        "template_895a1kq", // Replace with your EmailJS Template ID
        formRef.current, // Send the form data
        "UOB7-iTJpzsXXvLHl" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Your message has been sent!");
          formRef.current.reset(); // Reset form
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => setIsSending(false));
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
            <a
              href="https://linkedin.com/in/akashdivate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a
              href="https://github.com/akashdivate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon github" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="send-button" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
