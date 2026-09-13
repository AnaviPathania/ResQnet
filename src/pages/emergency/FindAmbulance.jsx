import { useState } from "react";
import "./FindAmbulance.css";

function FindAmbulance() {
  const [search, setSearch] = useState("");

  const ambulances = [
    {
      name: "Rapid Response 101",
      area: "Sector 17",
      type: "Basic Life Support",
      status: "Available"
    },
    {
      name: "LifeCare Ambulance",
      area: "Sector 22",
      type: "Advanced Life Support",
      status: "Available"
    },
    {
      name: "Emergency Express",
      area: "Industrial Area",
      type: "Basic Life Support",
      status: "Available"
    }
  ];

  const filteredAmbulances = ambulances.filter((ambulance) =>
    ambulance.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="find-ambulance-page">

      <header className="ambulance-header">

        <div className="ambulance-logo">
          ResQ<span>Net</span>
        </div>

        <span>EMERGENCY MODE</span>

      </header>


      <main className="find-ambulance-content">

        <p className="ambulance-label">
          AMBULANCE RESOURCES
        </p>

        <h1>Find an Ambulance</h1>

        <p className="ambulance-description">
          Find available ambulances near your selected location.
        </p>


        <input
          type="text"
          placeholder="Search ambulance..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />


        <div className="ambulance-list">

          {filteredAmbulances.length > 0 ? (

            filteredAmbulances.map((ambulance) => (

              <div
                className="ambulance-card"
                key={ambulance.name}
              >

                <div className="ambulance-info">

                  <div className="ambulance-icon">
                    🚑
                  </div>

                  <div>
                    <h2>{ambulance.name}</h2>

                    <p>📍 {ambulance.area}</p>
                  </div>

                </div>


                <div className="ambulance-type">
                  {ambulance.type}
                </div>


                <div className="ambulance-status">
                  <span></span>
                  {ambulance.status}
                </div>


                <button>
                  Request Ambulance
                </button>

              </div>

            ))

          ) : (

            <p className="ambulance-no-results">
              No ambulances found.
            </p>

          )}

        </div>

      </main>

    </div>
  );
}

export default FindAmbulance;