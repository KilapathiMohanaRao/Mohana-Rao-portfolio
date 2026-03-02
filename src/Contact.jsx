import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = ({ handleToast }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setLoading(true);
      setTimeout(() => {
        handleToast("Message Sent Successfully!");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <div className="container" id="contact-container">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Let's build something <br /><span className="gradient-text">extraordinary</span> together.</h3>
          <p>
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-details">
            <div className="detail-item">
              <span className="icon">✉️</span>
              <span>mohanarao@example.com</span>
            </div>
            <div className="detail-item">
              <span className="icon">📍</span>
              <span>Available for Remote Work</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass-panel"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" />
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Your message here..." rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
