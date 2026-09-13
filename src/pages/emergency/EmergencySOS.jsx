import { useState } from "react";
import "./EmergencySOS.css";

function EmergencySOS() {
  const [emergencyType, setEmergencyType] = useState("");
  const [message, setMessage] = useState("");

  const handleSOS = () => {
    if (emergencyType === "") {
      alert("Please select the type of emergency.");
      return;
    }

    alert("Emergency SOS request created.");
  };

  return (
    <div className="sos-page">

      <header className="sos-header">
        <div className="sos-logo">
          ResQ<span>Net</span>
        </div>

        <span>EMERGENCY MODE</span>
      </header>


      <main className="sos-content">

        <div className="sos-title">
          <p>PRIORITY RESPONSE</p>

          <h1>Emergency SOS</h1>

          <h2>Get multiple resources coordinated at once.</h2>

          <p>
            Tell us what kind of emergency you are facing.
            ResQNet can help coordinate the required resources.
          </p>
        </div>


        <div className="sos-card">

          <label>
            Type of Emergency
          </label>

          <select
            value={emergencyType}
            onChange={(event) =>
              setEmergencyType(event.target.value)
            }
          >
            <option value="">
              Select emergency type
            </option>

            <option value="Medical Emergency">
              Medical Emergency
            </option>

            <option value="Accident">
              Accident
            </option>

            <option value="Critical Patient">
              Critical Patient
            </option>

            <option value="Other">
              Other
            </option>
          </select>


          <label>
            Additional Information
          </label>

          <textarea
            placeholder="Describe anything important..."
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
          ></textarea>


          <div className="sos-warning">
            <strong>⚠ Emergency request</strong>

            <p>
              Make sure the information provided is correct
              before sending the request.
            </p>
          </div>


          <button
            className="send-sos-button"
            onClick={handleSOS}
          >
            Send Emergency SOS
          </button>

        </div>

      </main>

    </div>
  );
}

export default EmergencySOS;