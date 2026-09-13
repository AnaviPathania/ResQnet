// ---------- Reused data, array filtering, conditional rendering ----------

import { shortages } from "../../data/shortages.js";
import StatusBadge from "../../components/StatusBadge.jsx";

function ShortagesAlerts() {
  // array.filter() loops through and keeps only items matching the condition.
  const criticalAlerts = shortages.filter((item) => item.status === "critical");

  return (
    <div className="card">
      <h2>Shortages & Alerts</h2>

      {criticalAlerts.length === 0 ? (
        <p>No critical shortages right now.</p>
      ) : (
        <>
          <p>{criticalAlerts.length} blood group(s) urgently need donors:</p>
          <ul>
            {criticalAlerts.map((item) => (
              <li key={item.bloodGroup} style={{ padding: "0.4rem 0" }}>
                {item.bloodGroup} — only {item.unitsAvailable} units left{" "}
                <StatusBadge status={item.status} />
              </li>
            ))}
          </ul>
        </>
      )}

      <h3 style={{ marginTop: "1.5rem" }}>All Blood Groups</h3>
      <div className="card-grid">
        {shortages.map((item) => (
          <div className="card" key={item.bloodGroup}>
            <strong>{item.bloodGroup}</strong>
            <p>{item.unitsAvailable}/{item.unitsNeeded} units</p>
            <StatusBadge status={item.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShortagesAlerts;