import { useState, useEffect } from "react";

function BloodRequests({ bank }) {
  const [requests, setRequests] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [units, setUnits] = useState(1);

  // Runs again whenever "bank" changes (user picks a different blood bank)
  useEffect(() => {
    const saved = localStorage.getItem(`bloodRequests-${bank.id}`);
    setRequests(saved ? JSON.parse(saved) : []);
  }, [bank]);

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading

    // Spread (...) copies the old array, then we add the new request at the end
    const newRequest = { id: Date.now(), patientName, bloodGroup, units };
    const updatedRequests = [...requests, newRequest];

    setRequests(updatedRequests);
    localStorage.setItem(`bloodRequests-${bank.id}`, JSON.stringify(updatedRequests));

    // Reset the form
    setPatientName("");
    setUnits(1);
  }

  return (
    <section className="blood-requests">
      <h3>Blood Requests — {bank.name}</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="patientName">Patient Name</label>
        <input
          id="patientName"
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />

        <label htmlFor="bloodGroup">Blood Group</label>
        <select
          id="bloodGroup"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="O+">O+</option>
          <option value="AB+">AB+</option>
        </select>

        <label htmlFor="units">Units Needed</label>
        <input
          id="units"
          type="number"
          min="1"
          value={units}
          onChange={(e) => setUnits(Number(e.target.value))}
        />

        <button type="submit">Submit Request</button>
      </form>

      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        <ul>
          {requests.map((req) => (
            <li key={req.id}>
              {req.patientName} — {req.bloodGroup} ({req.units} units)
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default BloodRequests;
