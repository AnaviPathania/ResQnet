import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { bloodBanksData } from "./bloodBankData.jsx";
import useLocalStorage from "./useLocalStorage.jsx";
import BloodInventory from "./BloodInventory.jsx";
import BloodRequests from "./BloodRequests.jsx";
import DonorRecall from "./DonorRecall.jsx";
import "./BloodBankDashboard.css";

// Pretends to call a real backend, same pattern as the hospital module.
function fetchBloodBanks() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(bloodBanksData), 800); // fake 0.8s network delay
  });
}

function BloodBankDashboard() {
  // ---------- STATE ----------
  const [bloodBanks, setBloodBanks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectedBank, setSelectedBank] = useState(null);

  // Custom hook — remembers the chosen blood-group filter across refreshes
  const [groupFilter, setGroupFilter] = useLocalStorage("bloodGroupFilter", "All");

  const searchInputRef = useRef(null);

  // Runs once on page load
  useEffect(() => {
    async function loadData() {
      const data = await fetchBloodBanks(); // wait for the "network" call
      setBloodBanks(data);
      setIsLoading(false);
    }
    loadData();
  }, []);

  // Also runs once — auto-focus the search box
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // useMemo: only recalculates when bloodBanks/searchText/groupFilter change
  const filteredBanks = useMemo(() => {
    return bloodBanks.filter((bank) => {
      const matchesSearch = bank.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesGroup =
        groupFilter === "All" || (bank.bloodStock[groupFilter] ?? 0) > 0;
      return matchesSearch && matchesGroup;
    });
  }, [bloodBanks, searchText, groupFilter]);

  // useCallback: keeps this function reference stable between renders
  const handleSelectBank = useCallback((bank) => {
    setSelectedBank(bank);
  }, []);

  return (
    <main className="bloodbank-dashboard">
      <h1>Blood Bank Dashboard</h1>

      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search blood bank by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        aria-label="Search blood banks"
      />

      <select
        value={groupFilter}
        onChange={(e) => setGroupFilter(e.target.value)}
        aria-label="Filter by blood group availability"
      >
        <option value="All">All Groups</option>
        <option value="A+">A+</option>
        <option value="B+">B+</option>
        <option value="O+">O+</option>
        <option value="AB+">AB+</option>
      </select>

      {/* Conditional rendering based on loading/empty/normal state */}
      {isLoading ? (
        <p>Loading blood banks...</p>
      ) : filteredBanks.length === 0 ? (
        <p>No blood banks match your search.</p>
      ) : (
        <ul className="bank-list">
          {filteredBanks.map((bank) => (
            <li key={bank.id} className="bank-card">
              <h2>{bank.name}</h2>
              <p>{bank.area} — {bank.distance} km away</p>
              <button onClick={() => handleSelectBank(bank)}>
                View Stock & Requests
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Lifting state up + prop drilling: "selectedBank" lives here in the
          parent and is passed DOWN to three separate children as a prop. */}
      {selectedBank && (
        <section className="bank-details">
          <BloodInventory bank={selectedBank} />
          <BloodRequests bank={selectedBank} />
          <DonorRecall bank={selectedBank} />
        </section>
      )}
    </main>
  );
}

export default BloodBankDashboard;
