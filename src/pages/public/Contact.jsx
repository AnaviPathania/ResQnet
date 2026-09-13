import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message regarding "${formData.subject}" has been received.`);
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Contact & Emergency Support</h1>
        <p>Have questions or need integration help? Reach out to the ResQNet support team.</p>
      </section>

      <div className="contact-grid">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Emergency Helplines</h2>
          <div className="info-box emergency-box">
            <p><strong>🚨 24/7 SOS Helpline:</strong> 1800-RESQ-NET</p>
            <p><strong>🚑 Dispatch Coordination:</strong> +91 98765 43210</p>
          </div>

          <h2>Office Address</h2>
          <p>ResQNet Operations Center<br />Block C, Healthcare Support Division<br />India</p>

          <p><strong>Email:</strong> support@resqnet.org</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>

          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="name@example.com"
          />

          <label htmlFor="subject">Subject</label>
          <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Hospital Onboarding">Hospital Onboarding</option>
            <option value="Blood Bank Sync">Blood Bank Sync</option>
            <option value="Technical Issue">Technical Issue</option>
          </select>

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Type your message here..."
          ></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;