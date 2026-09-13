import { useState } from "react";

// "onDispatch" is the updateAmbulanceStatus function passed down from the
// parent (prop drilling) — this child never touches the ambulances array
// directly, it just calls the function the parent gave it.
function Dispatch({ ambulance, onDispatch }) {
  const [patientName, setPatientName] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTrip = {
      id: Date.now(),
      patientName,
      pickup,
      destination,
      startedAt: new Date().toLocaleString(),
    };

    // Save this as the CURRENT active trip for this specific ambulance
    localStorage.setItem(`activeTrip-${ambulance.id}`, JSON.stringify(newTrip));

    // Tell the parent to flip this ambulance's status to "On Trip"
    onDispatch(ambulance.id, "On Trip");

    // Reset the form
    setPatientName("");
    setPickup("");
    setDestination("");
  }

  return (
    <section className="dispatch">
      <h3>Dispatch — {ambulance.vehicleNumber}</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="patientName">Patient Name</label>
        <input
          id="patientName"
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />

        <label htmlFor="pickup">Pickup Location</label>
        <input
          id="pickup"
          type="text"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          required
        />

        <label htmlFor="destination">Destination</label>
        <input
          id="destination"
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <button type="submit">Dispatch Ambulance</button>
      </form>
    </section>
  );
}

export default Dispatch;
