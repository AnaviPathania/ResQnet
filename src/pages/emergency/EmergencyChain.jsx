import { useNavigate } from "react-router-dom";
import "./EmergencyChain.css";

function EmergencyChain() {
  const navigate = useNavigate();

  const handleTrackRequest = () => {
    navigate("/emergency/track");
  };

  return (
    <div className="chain-page">
      <header className="chain-header">
        <div className="chain-logo">
          ResQ<span>Net</span>
        </div>

        <span>EMERGENCY MODE</span>
      </header>

      <main className="chain-content">
        <p className="chain-label">
          EMERGENCY CHAIN
        </p>

        <h1>Your emergency response is being coordinated</h1>

        <p className="chain-description">
          ResQNet connects the required emergency resources
          so they can respond together.
        </p>

        <div className="chain-card">

          <div className="chain-step">
            <div className="step-number">1</div>

            <div>
              <h2>Emergency Request</h2>
              <p>Your emergency request has been received.</p>
            </div>

            <span className="step-status">
              ✓ Done
            </span>
          </div>

          <div className="chain-line"></div>

          <div className="chain-step">
            <div className="step-number">2</div>

            <div>
              <h2>Hospital</h2>
              <p>Searching for an available hospital bed.</p>
            </div>

            <span className="step-status">
              ✓ Matched
            </span>
          </div>

          <div className="chain-line"></div>

          <div className="chain-step">
            <div className="step-number">3</div>

            <div>
              <h2>Blood Bank</h2>
              <p>Checking nearby blood availability.</p>
            </div>

            <span className="step-status">
              ✓ Matched
            </span>
          </div>

          <div className="chain-line"></div>

          <div className="chain-step">
            <div className="step-number">4</div>

            <div>
              <h2>Ambulance</h2>
              <p>Finding an available ambulance.</p>
            </div>

            <span className="step-status">
              ✓ Matched
            </span>
          </div>

        </div>

        <button
          className="track-button"
          onClick={handleTrackRequest}
        >
          Track Emergency Request →
        </button>
      </main>
    </div>
  );
}

export default EmergencyChain;