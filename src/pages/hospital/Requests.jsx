import { useState, useEffect } from "react";

function Requests({ hospital }) {
  const [requests, setRequests] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [bedType, setBedType] = useState("General");

  // Runs again every time "hospital" changes (e.g. user picks a different hospital)
  useEffect(() => {
    const saved = localStorage.getItem(`requests-${hospital.id}`);
    setRequests(saved ? JSON.parse(saved) : []);
  }, [hospital]);

  function handleSubmit(e) {
    e.preventDefault(); // stops the page from reloading
    const newRequest = { id: Date.now(), patientName, bedType };
    const updatedRequests = [...requests, newRequest]; // spread: copy old + add new
    setRequests(updatedRequests);
    localStorage.setItem(`requests-${hospital.id}`, JSON.stringify(updatedRequests));
    setPatientName(""); // clear the form
  }

  return (
    <section className="requests">
      <h3>Bed Requests — {hospital.name}</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="patientName">Patient Name</label>
        <input
          id="patientName"
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />

        <label htmlFor="bedType">Bed Type</label>
        <select id="bedType" value={bedType} onChange={(e) => setBedType(e.target.value)}>
          <option value="General">General</option>
          <option value="ICU">ICU</option>
          <option value="Ventilator">Ventilator</option>
        </select>

        <button type="submit">Submit Request</button>
      </form>

      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        <ul>
          {requests.map((req) => (
            <li key={req.id}>{req.patientName} — {req.bedType}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Requests;
