import { useNavigate } from "react-router-dom";
import "./Matching.css";

function Matching() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/emergency/chain");
  };

  return (
    <div className="matching-page">
      <header className="matching-header">
        <div className="matching-logo">
          ResQ<span>Net</span>
        </div>

        <span>EMERGENCY MODE</span>
      </header>

      <main className="matching-content">
        <div className="matching-icon">
          🔎
        </div>

        <p className="matching-label">
          SMART MATCHING
        </p>

        <h1>Finding the best emergency resources</h1>

        <p className="matching-description">
          ResQNet is checking nearby hospitals, blood banks
          and ambulances based on your selected location.
        </p>

        <div className="matching-card">
          <div className="matching-item">
            <span>🏥</span>
            <div>
              <h3>Hospital Bed</h3>
              <p>Checking nearby availability...</p>
            </div>
          </div>

          <div className="matching-item">
            <span>🩸</span>
            <div>
              <h3>Blood</h3>
              <p>Checking nearby blood banks...</p>
            </div>
          </div>

          <div className="matching-item">
            <span>🚑</span>
            <div>
              <h3>Ambulance</h3>
              <p>Checking available ambulances...</p>
            </div>
          </div>
        </div>

        <button
          className="matching-button"
          onClick={handleContinue}
        >
          Continue to Emergency Chain →
        </button>
      </main>
    </div>
  );
}

export default Matching;