// ---------- JS basics: loops/arrays (reduce), simple derived data, Grid/Flexbox ----------

import { donationHistory } from "../../data/donationHistory.js";
import { currentDonor } from "../../data/donors.js";

function DonorImpact() {
  // array.reduce() loops through the array and "accumulates" a single value.
  // Here we add up all the units given across every donation record.
  const totalUnits = donationHistory.reduce((total, record) => total + record.unitsGiven, 0);

  const livesImpacted = totalUnits * 3; // rough estimate: 1 unit can help ~3 people

  // A small array we build ourselves just to render simple "bars" with plain CSS,
  // instead of using any charting library (which is outside our allowed topics).
  const impactBars = [
    { label: "Donations", value: currentDonor.totalDonations, max: 10 },
    { label: "Units Given", value: totalUnits, max: 10 },
    { label: "Lives Impacted", value: livesImpacted, max: 30 },
  ];

  return (
    <div className="card">
      <h2>My Impact</h2>
      <p>A simple summary of the difference your donations have made.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
        {impactBars.map((bar) => {
          const percent = Math.min((bar.value / bar.max) * 100, 100); // cap at 100%
          return (
            <div key={bar.label}>
              <p>{bar.label}: {bar.value}</p>
              {/* A plain div whose width is controlled by inline style = simple bar chart */}
              <div style={{ background: "#eee", borderRadius: "6px", height: "16px" }}>
                <div
                  style={{
                    width: `${percent}%`,
                    background: "#7a1f1f",
                    height: "100%",
                    borderRadius: "6px",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DonorImpact;