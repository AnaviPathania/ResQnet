// Fleet is a "reusable UI" component: it receives everything it needs as
// props from the parent (AmbulanceDashboard) instead of holding its own state.
function Fleet({ ambulances, selectedId, onSelect }) {
  if (ambulances.length === 0) {
    return <p>No ambulances match your search.</p>;
  }

  return (
    <ul className="fleet-list">
      {ambulances.map((ambulance) => (
        <li
          key={ambulance.id}
          className={
            ambulance.id === selectedId ? "fleet-card fleet-card-selected" : "fleet-card"
          }
        >
          <h2>{ambulance.vehicleNumber}</h2>
          <p>Driver: {ambulance.driver}</p>
          <p>Area: {ambulance.area}</p>
          <span
            className={
              ambulance.status === "Available"
                ? "status status-ok"
                : ambulance.status === "On Trip"
                ? "status status-trip"
                : "status status-maintenance"
            }
          >
            {ambulance.status}
          </span>
          <br />
          <button onClick={() => onSelect(ambulance.id)}>
            {ambulance.id === selectedId ? "Selected" : "Select"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Fleet;
