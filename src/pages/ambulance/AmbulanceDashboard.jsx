import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { ambulancesData } from "./ambulanceData.jsx";
import useLocalStorage from "./useLocalStorage.jsx";
import Fleet from "./Fleet.jsx";
import Dispatch from "./Dispatch.jsx";
import ActiveTrip from "./ActiveTrip.jsx";
import History from "./History.jsx";
import "./AmbulanceDashboard.css";

// Pretends to call a real backend, same pattern as the other two modules.
function fetchAmbulances() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ambulancesData), 800); // fake 0.8s network delay
  });
}

function AmbulanceDashboard() {
  // ---------- STATE ----------
  // "ambulances" lives here in the PARENT so every child (Fleet, Dispatch,
  // ActiveTrip) can read and update the same shared list. This is
  // "lifting state up" — instead of each child keeping its own copy.
  const [ambulances, setAmbulances] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // Custom hook — remembers the status filter across page refreshes
  const [statusFilter, setStatusFilter] = useLocalStorage("ambulanceStatusFilter", "All");

  const searchInputRef = useRef(null);

  // Runs once on page load
  useEffect(() => {
    async function loadData() {
      const data = await fetchAmbulances();
      setAmbulances(data);
      setIsLoading(false);
    }
    loadData();
  }, []);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // useMemo: only recalculates when ambulances/searchText/statusFilter change
  const filteredAmbulances = useMemo(() => {
    return ambulances.filter((ambulance) => {
      const matchesSearch = ambulance.vehicleNumber
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchesStatus = statusFilter === "All" || ambulance.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [ambulances, searchText, statusFilter]);

  // useCallback: stable function reference passed down to the Fleet list
  const handleSelectAmbulance = useCallback((id) => {
    setSelectedId(id);
  }, []);

  // This function is passed DOWN to Dispatch and ActiveTrip (prop drilling)
  // so they can update the shared ambulances list without owning it.
  function updateAmbulanceStatus(id, newStatus) {
    // .map() returns a brand-new array — we never change the old one directly
    const updated = ambulances.map((ambulance) =>
      ambulance.id === id ? { ...ambulance, status: newStatus } : ambulance
    );
    setAmbulances(updated);
  }

  // Find the full ambulance object that matches the selected id
  const selectedAmbulance = ambulances.find((a) => a.id === selectedId) || null;

  return (
    <main className="ambulance-dashboard">
      <h1>Ambulance Dashboard</h1>

      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search by vehicle number..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        aria-label="Search ambulances"
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        aria-label="Filter by status"
      >
        <option value="All">All</option>
        <option value="Available">Available</option>
        <option value="On Trip">On Trip</option>
        <option value="Maintenance">Maintenance</option>
      </select>

      {isLoading ? (
        <p>Loading ambulances...</p>
      ) : (
        <Fleet
          ambulances={filteredAmbulances}
          selectedId={selectedId}
          onSelect={handleSelectAmbulance}
        />
      )}

      {/* Conditional rendering: different children depending on the
          selected ambulance's current status */}
      {selectedAmbulance && selectedAmbulance.status === "Available" && (
        <Dispatch
          ambulance={selectedAmbulance}
          onDispatch={updateAmbulanceStatus}
        />
      )}

      {selectedAmbulance && selectedAmbulance.status === "On Trip" && (
        <ActiveTrip
          ambulance={selectedAmbulance}
          onCompleteTrip={updateAmbulanceStatus}
        />
      )}

      {selectedAmbulance && (
        <History ambulance={selectedAmbulance} />
      )}
    </main>
  );
}

export default AmbulanceDashboard;
