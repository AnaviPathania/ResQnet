import { useState, useEffect } from "react";

function ActiveTrip({ ambulance, onCompleteTrip }) {
  const [trip, setTrip] = useState(null);

  // Runs again whenever "ambulance" changes (a different one gets selected)
  useEffect(() => {
    const saved = localStorage.getItem(`activeTrip-${ambulance.id}`);
    setTrip(saved ? JSON.parse(saved) : null);
  }, [ambulance]);

  function handleComplete() {
    // Read the existing trip history array (or start a new one)
    const historyKey = `tripHistory-${ambulance.id}`;
    const existingHistory = localStorage.getItem(historyKey);
    const history = existingHistory ? JSON.parse(existingHistory) : [];

    // Spread (...) copies the old history array and adds this finished trip
    const finishedTrip = { ...trip, completedAt: new Date().toLocaleString() };
    const updatedHistory = [...history, finishedTrip];
    localStorage.setItem(historyKey, JSON.stringify(updatedHistory));

    // Clear the active trip and free up the ambulance again
    localStorage.removeItem(`activeTrip-${ambulance.id}`);
    setTrip(null);
    onCompleteTrip(ambulance.id, "Available");
  }

  if (!trip) {
    return <p>No active trip found for this ambulance.</p>;
  }

  return (
    <section className="active-trip">
      <h3>Active Trip — {ambulance.vehicleNumber}</h3>
      <p>Patient: {trip.patientName}</p>
      <p>Pickup: {trip.pickup}</p>
      <p>Destination: {trip.destination}</p>
      <p>Started: {trip.startedAt}</p>
      <button onClick={handleComplete}>Complete Trip</button>
    </section>
  );
}

export default ActiveTrip;
