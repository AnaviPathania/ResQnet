import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  // Simple state for FAQ accordion open/close
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Emergency Healthcare Network</h1>
        <p>Rapid response coordination connecting patients, ambulances, and blood banks.</p>
        <div className="hero-buttons">
          <Link to="/emergency" className="btn btn-red">🚨 Request SOS</Link>
          <Link to="/about" className="btn btn-blue">Learn More</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Core Services</h2>
        <div className="services-grid">
          <div className="card">
            <h3>🚑 Ambulance Dispatch</h3>
            <p>Real-time GPS tracking and instant dispatching for emergency transport.</p>
          </div>
          <div className="card">
            <h3>🩸 Blood Bank Sync</h3>
            <p>Direct inventory matching for rare blood groups across local centers.</p>
          </div>
          <div className="card">
            <h3>🏥 Hospital Beds</h3>
            <p>Live updates on available ICU and general beds in nearby facilities.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleFaq(1)}>
            How fast is emergency response dispatch? <span>{openFaq === 1 ? '-' : '+'}</span>
          </button>
          {openFaq === 1 && <p className="faq-answer">Dispatch requests are routed to the nearest driver within 30 seconds.</p>}
        </div>

        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleFaq(2)}>
            Is this platform free to use? <span>{openFaq === 2 ? '-' : '+'}</span>
          </button>
          {openFaq === 2 && <p className="faq-answer">Yes, emergency SOS requests and blood search services are completely free.</p>}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;