// ---------- Lists, conditional rendering, reused mock data ----------

import { shortages } from "../../data/shortages.js";
import StatusBadge from "../../components/StatusBadge.jsx";

function Shortages() {
  return (
    <div className="card">
      <h2>Current Blood Shortages</h2>
      <p>See which blood groups need donors most right now.</p>

      <div className="card-grid">
        {shortages.map((item) => (
          <div className="card" key={item.bloodGroup}>
            <h3>{item.bloodGroup}</h3>
            <p>{item.unitsAvailable} / {item.unitsNeeded} units available</p>
            <StatusBadge status={item.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shortages;