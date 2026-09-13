import { useNavigate } from "react-router-dom";
import "./TrackRequest.css";

function TrackRequest() {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate("/emergency/dashboard");
  };

  return (
    <div className="track-page">
      <header className="track-header">
        <div className="track-logo">
          ResQ<span>Net</span>
        </div>

        <span>EMERGENCY MODE</span>
      </header>

      <main className="track-content">
        <p className="track-label">
          REQUEST TRACKING
        </p>

        <h1>Track Your Emergency Request</h1>

        <p className="track-description">
          Your request has been created successfully.
          You can follow its current status below.
        </p>

        <div className="request-id">
          <span>Request ID</span>
          <strong>RQ-10245</strong>
        </div>

        <div className="timeline">

          <div className="timeline-item completed">
            <div className="timeline-circle">✓</div>

            <div>
              <h2>Request Created</h2>
              <p>Your emergency request has been received.</p>
            </div>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item completed">
            <div className="timeline-circle">✓</div>

            <div>
              <h2>Resources Matched</h2>
              <p>Hospital, blood bank and ambulance resources matched.</p>
            </div>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item active">
            <div className="timeline-circle">3</div>

            <div>
              <h2>Response In Progress</h2>
              <p>Emergency resources are preparing to respond.</p>
            </div>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item">
            <div className="timeline-circle">4</div>

            <div>
              <h2>Request Completed</h2>
              <p>Waiting for the emergency response to be completed.</p>
            </div>
          </div>

        </div>

        <button
          className="dashboard-button"
          onClick={handleBackToDashboard}
        >
          Back to Emergency Dashboard
        </button>
      </main>
    </div>
  );
}

export default TrackRequest;