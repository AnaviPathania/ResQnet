import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Header */}
      <section className="about-hero">
        <h1>About ResQNet</h1>
        <p>Bridging the gap between emergency seekers and life-saving healthcare resources.</p>
      </section>

      {/* Mission & Vision */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          ResQNet was built to eliminate critical delays during medical emergencies. By integrating 
          ambulance tracking, hospital bed availability, and blood bank stock into a single system, 
          we empower families and responders to act fast when every second counts.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>30s</h3>
          <p>Average Dispatch Time</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Emergency Availability</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Verified Network</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="about-section">
        <h2>Key Platform Pillars</h2>
        <ul className="pillar-list">
          <li><strong>Real-Time Coordination:</strong> Instant routing between patients and nearby drivers.</li>
          <li><strong>Inventory Transparency:</strong> Live tracking of blood groups and ICU beds.</li>
          <li><strong>Unified Access:</strong> A single entry point for all regional emergency services.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;