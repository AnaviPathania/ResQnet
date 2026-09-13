import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { hospitalsData } from "./hospitalData.jsx";
import useLocalStorage from "./useLocalStorage.jsx";
import BedInventory from "./BedInventory.jsx";
import Requests from "./Requests.jsx";
import "./HospitalDashboard.css";

// Pretends to call a real backend. Wrapped in a Promise so we can
// practice async/await, even with no real server yet.
function fetchHospitals() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(hospitalsData), 800); // fake 0.8s network delay
  });
}

function HospitalDashboard() {
  // ---------- STATE ----------
  const [hospitals, setHospitals] = useState([]);       // "fetched" data
  const [isLoading, setIsLoading] = useState(true);     // loading flag
  const [searchText, setSearchText] = useState("");     // typed search
  const [selectedHospital, setSelectedHospital] = useState(null); // clicked card

  // Custom hook — remembers the filter even after refreshing the page
  const [statusFilter, setStatusFilter] = useLocalStorage("hospitalStatusFilter", "All");

  const searchInputRef = useRef(null); // will "point to" the <input> DOM element

  // Runs ONCE when the page first loads (empty [] = "only once")
  useEffect(() => {
    async function loadData() {
      const data = await fetchHospitals(); // pause here until the Promise finishes
      setHospitals(data);
      setIsLoading(false);
    }
    loadData();
  }, []);

  // Also runs once — auto-focuses the search box
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // useMemo: only recalculates this list when hospitals/searchText/statusFilter change
  const filteredHospitals = useMemo(() => {
    return hospitals.filter((hospital) => {
      const matchesSearch = hospital.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesStatus = statusFilter === "All" || hospital.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [hospitals, searchText, statusFilter]);

  // useCallback: keeps this function the same between renders (small optimization)
  const handleSelectHospital = useCallback((hospital) => {
    setSelectedHospital(hospital);
  }, []);

  return (
    <main className="hospital-dashboard">
      <h1>Hospital Dashboard</h1>

      {/* Controlled input: React state IS the value of the box */}
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search hospital by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        aria-label="Search hospitals"
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        aria-label="Filter by bed status"
      >
        <option value="All">All</option>
        <option value="Available">Available</option>
        <option value="Full">Full</option>
      </select>

      {/* Conditional rendering: different UI depending on state */}
      {isLoading ? (
        <p>Loading hospitals...</p>
      ) : filteredHospitals.length === 0 ? (
        <p>No hospitals match your search.</p>
      ) : (
        <ul className="hospital-list">
          {filteredHospitals.map((hospital) => (
            <li key={hospital.id} className="hospital-card">
              <h2>{hospital.name}</h2>
              <p>{hospital.area} — {hospital.distance} km away</p>
              <span className={hospital.status === "Available" ? "status status-ok" : "status status-full"}>
                {hospital.status}
              </span>
              <button onClick={() => handleSelectHospital(hospital)}>
                View Beds & Requests
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Lifting state up + prop drilling:
          "selectedHospital" lives here in the parent, then gets passed
          DOWN to both children as a prop. */}
      {selectedHospital && (
        <section className="hospital-details">
          <BedInventory hospital={selectedHospital} />
          <Requests hospital={selectedHospital} />
        </section>
      )}
    </main>
  );
}

export default HospitalDashboard;
