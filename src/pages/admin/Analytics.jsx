// ---------- useMemo for derived data, simple bar chart with plain CSS ----------

import { useMemo } from "react";
import { donors } from "../../data/donors.js";

function Analytics() {
  // useMemo: only recalculates this grouping when the "donors" array changes.
  const donorsByBloodGroup = useMemo(() => {
    // array.reduce() building up an object that counts donors per blood group.
    return donors.reduce((counts, donor) => {
      const group = donor.bloodGroup;
      counts[group] = (counts[group] || 0) + 1; // increase count, or start at 1
      return counts;
    }, {});
  }, [donors]);

  // Object.entries() turns { "O+": 1, "A-": 1 } into [["O+", 1], ["A-", 1]]
  // so we can .map() over it like a normal array.
  const entries = Object.entries(donorsByBloodGroup);
  const maxCount = Math.max(...entries.map(([, count]) => count));

  return (
    <div className="card">
      <h2>Donor Analytics</h2>
      <p>Number of registered donors per blood group.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem" }}>
        {entries.map(([bloodGroup, count]) => {
          const percent = (count / maxCount) * 100;
          return (
            <div key={bloodGroup}>
              <p>{bloodGroup}: {count} donor(s)</p>
              <div style={{ background: "#eee", height: "16px", borderRadius: "6px" }}>
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

export default Analytics;