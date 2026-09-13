import { useState } from "react";
import "./FindBed.css";

function FindBed() {
  const [search, setSearch] = useState("");

  const hospitals = [
    {
      name: "City Care Hospital",
      area: "Sector 17",
      beds: 8
    },
    {
      name: "LifeLine Hospital",
      area: "Sector 22",
      beds: 5
    },
    {
      name: "Apollo Emergency Centre",
      area: "Industrial Area",
      beds: 3
    }
  ];

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="find-bed-page">

      <header className="resource-header">
        <div className="logo">
          ResQ<span>Net</span>
        </div>

        <span>EMERGENCY MODE</span>
      </header>


      <main className="find-bed-content">

        <p className="page-label">HOSPITAL RESOURCES</p>

        <h1>Find an Available Bed</h1>

        <p className="page-description">
          Search nearby hospitals and check their available beds.
        </p>


        <input
          type="text"
          placeholder="Search hospital..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />


        <div className="hospital-list">

          {filteredHospitals.length > 0 ? (

            filteredHospitals.map((hospital) => (

              <div className="hospital-card" key={hospital.name}>

                <div>
                  <h2>{hospital.name}</h2>

                  <p>📍 {hospital.area}</p>
                </div>

                <div className="bed-count">
                  <strong>{hospital.beds}</strong>
                  <span>beds available</span>
                </div>

                <button>
                  View Details
                </button>

              </div>

            ))

          ) : (

            <p className="no-results">
              No hospitals found.
            </p>

          )}

        </div>

      </main>

    </div>
  );
}

export default FindBed;