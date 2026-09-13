import React, { useState } from 'react';
import './EmergencyAccess.css';

const EmergencyAccess = () => {
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState('Ambulance');
  const [patientLocation, setPatientLocation] = useState('');

  const handleSOSSubmit = (e) => {
    e.preventDefault();
    if (!patientLocation.trim()) return;
    setRequestSubmitted(true);
  };

  const handleReset = () => {
    setRequestSubmitted(false);
    setPatientLocation('');
  };

  return (
    <div className="emergency-container">
      <div className="emergency-header">
        <h1>🚨 Quick Emergency SOS</h1>
        <p>Instant dispatch connection for critical medical support.</p>
      </div>

      {!requestSubmitted ? (
        <form className="emergency-card" onSubmit={handleSOSSubmit}>
          <h2>Submit SOS Request</h2>

          <label htmlFor="service">Required Service</label>
          <select 
            id="service" 
            value={serviceType} 
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="Ambulance">Ambulance Dispatch</option>
            <option value="Blood Bank">Blood Requirement</option>
            <option value="ICU Bed">Emergency ICU Bed</option>
          </select>

          <label htmlFor="location">Patient Pickup Location / City</label>
          <input
            type="text"
            id="location"
            placeholder="Enter full address or city"
            value={patientLocation}
            onChange={(e) => setPatientLocation(e.target.value)}
            required
          />

          <button type="submit" className="sos-btn">
            🚨 Trigger Emergency Response
          </button>
        </form>
      ) : (
        <div className="emergency-card success-card">
          <h2>✅ SOS Request Dispatched!</h2>
          <p><strong>Service Requested:</strong> {serviceType}</p>
          <p><strong>Location:</strong> {patientLocation}</p>
          <p className="status-badge">Status: Dispatcher Assigned & En Route (Est. 5-8 mins)</p>
          
          <button onClick={handleReset} className="reset-btn">
            Submit Another Request
          </button>
        </div>
      )}

      <div className="helpline-banner">
        <p>Immediate phone dispatch hotline: <strong>1800-RESQ-NET</strong></p>
      </div>
    </div>
  );
};

export default EmergencyAccess;