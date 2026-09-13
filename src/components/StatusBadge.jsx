// ---------- Conditional rendering ----------
// StatusBadge shows a colored label depending on the "status" prop it receives.

function StatusBadge({ status }) {
  // A small lookup object instead of writing multiple if/else statements.
  const statusClassMap = {
    available: "status-available",
    low: "status-low",
    critical: "status-critical",
  };

  // Fallback to "status-low" style if an unknown status is passed in.
  const cssClass = statusClassMap[status] || "status-low";

  return <span className={`status-badge ${cssClass}`}>{status.toUpperCase()}</span>;
}

export default StatusBadge;