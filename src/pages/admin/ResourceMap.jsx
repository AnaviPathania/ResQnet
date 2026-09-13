// ---------- Grid layout, lists, conditional styling ----------
// A real map integration is outside our allowed topics, so this is a simple
// MOCK representation: one colored box per city showing its overall status.

const cityStatus = [
  { city: "Chandigarh", status: "available" },
  { city: "Mohali", status: "low" },
  { city: "Panchkula", status: "critical" },
  { city: "Zirakpur", status: "available" },
];

function ResourceMap() {
  return (
    <div className="card">
      <h2>Resource Map (Mock)</h2>
      <p>A simplified grid view standing in for a real map.</p>

      <div className="stat-grid">
        {cityStatus.map((entry) => {
          // Conditional styling based on status - JS basics + JSX inline style
          const backgroundColor =
            entry.status === "critical" ? "#c62828" :
            entry.status === "low" ? "#ef6c00" : "#2e7d32";

          return (
            <div
              key={entry.city}
              className="card"
              style={{ backgroundColor, color: "white", textAlign: "center" }}
            >
              <strong>{entry.city}</strong>
              <p style={{ textTransform: "capitalize" }}>{entry.status}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResourceMap;