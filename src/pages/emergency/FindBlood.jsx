import { useState } from "react";
import "./FindBlood.css";

function FindBlood() {
  const [bloodGroup, setBloodGroup] = useState("");

  const bloodBanks = [
    {
      name: "City Blood Bank",
      area: "Sector 17",
      bloodGroup: "O+",
      units: 12
    },
    {
      name: "LifeLine Blood Centre",
      area: "Sector 22",
      bloodGroup: "A+",
      units: 8
    },
    {
      name: "Red Cross Blood Bank",
      area: "Industrial Area",
      bloodGroup: "B+",
      units: 6
    },
    {
      name: "Hope Blood Centre",
      area: "City Centre",
      bloodGroup: "O+",
      units: 10
    }
  ];

  const filteredBanks = bloodGroup
    ? bloodBanks.filter(
        (bank) => bank.bloodGroup === bloodGroup
      )
    : bloodBanks;

  return (
    <div className="find-blood-page">

      <header className="blood-header">
        <div className="blood-logo">
          ResQ<span>Net</span>
        </div>

        <span>EMERGENCY MODE</span>
      </header>


      <main className="find-blood-content">

        <p className="blood-label">
          BLOOD RESOURCES
        </p>

        <h1>Find Blood Nearby</h1>

        <p className="blood-description">
          Search nearby blood banks for the blood group you need.
        </p>


        <div className="blood-filter">

          <label>
            Select Blood Group
          </label>

          <select
            value={bloodGroup}
            onChange={(event) => setBloodGroup(event.target.value)}
          >
            <option value="">
              All Blood Groups
            </option>

            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

        </div>


        <div className="blood-bank-list">

          {filteredBanks.length > 0 ? (

            filteredBanks.map((bank) => (

              <div
                className="blood-bank-card"
                key={bank.name}
              >

                <div className="blood-bank-info">

                  <div className="blood-icon">
                    🩸
                  </div>

                  <div>
                    <h2>{bank.name}</h2>

                    <p>📍 {bank.area}</p>
                  </div>

                </div>


                <div className="blood-group">
                  {bank.bloodGroup}
                </div>


                <div className="blood-units">

                  <strong>
                    {bank.units}
                  </strong>

                  <span>
                    units available
                  </span>

                </div>


                <button>
                  View Details
                </button>

              </div>

            ))

          ) : (

            <p className="blood-no-results">
              No blood banks found for this blood group.
            </p>

          )}

        </div>

      </main>

    </div>
  );
}

export default FindBlood;