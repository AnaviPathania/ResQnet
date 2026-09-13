import { useState, useEffect } from "react";

function History({ ambulance }) {
  const [history, setHistory] = useState([]);

  // Re-reads history from storage whenever the selected ambulance changes,
  // OR whenever a trip is completed (we just re-check on every render trigger
  // caused by the parent re-rendering after status changes).
  useEffect(() => {
    const saved = localStorage.getItem(`tripHistory-${ambulance.id}`);
    setHistory(saved ? JSON.parse(saved) : []);
  }, [ambulance, ambulance.status]);

  return (
    <section className="history">
      <h3>Trip History — {ambulance.vehicleNumber}</h3>

      {history.length === 0 ? (
        <p>No completed trips yet.</p>
      ) : (
        <ul>
          {history.map((trip) => (
            <li key={trip.id}>
              {trip.patientName}: {trip.pickup} → {trip.destination}{" "}
              (completed {trip.completedAt})
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default History;
