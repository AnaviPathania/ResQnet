import { useNavigate } from "react-router-dom";
import "./ResourceDetails.css";

function ResourceDetails() {
  const navigate = useNavigate();

  const handleRequest = () => {
    navigate("/emergency/track");
  };

  return (
    <div className="resource-details-page">
      <header className="details-header">
        <div className="details-logo">
          ResQ<span>Net</span>
        </div>

        <span>EMERGENCY MODE</span>
      </header>

      <main className="details-content">
        <p className="details-label">
          RESOURCE DETAILS
        </p>

        <h1>City Care Hospital</h1>

        <p className="details-location">
          📍 Sector 17
        </p>

        <div className="details-card">
          <div className="detail-row">
            <span>Resource Type</span>
            <strong>Hospital</strong>
          </div>

          <div className="detail-row">
            <span>Available Beds</span>
            <strong>8</strong>
          </div>

          <div className="detail-row">
            <span>Emergency Support</span>
            <strong>Available</strong>
          </div>

          <div className="detail-row">
            <span>Distance</span>
            <strong>2.4 km</strong>
          </div>
        </div>

        <div className="details-info">
          <h2>About this resource</h2>

          <p>
            This hospital currently has emergency beds
            available and can receive emergency patients.
          </p>
        </div>

        <button
          className="request-button"
          onClick={handleRequest}
        >
          Request This Resource →
        </button>
      </main>
    </div>
  );
}

export default ResourceDetails;