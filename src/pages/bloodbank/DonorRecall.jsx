import { useState, useMemo } from "react";
import { donorsData, LOW_STOCK_THRESHOLD } from "./bloodBankData.jsx";

function DonorRecall({ bank }) {
  // Tracks which donor IDs we've "notified" in this session (just UI state,
  // not a real notification system).
  const [notifiedIds, setNotifiedIds] = useState([]);

  // Work out which blood groups are running low at this bank.
  const lowGroups = useMemo(() => {
    return Object.entries(bank.bloodStock)
      .filter(([, units]) => units < LOW_STOCK_THRESHOLD)
      .map(([group]) => group); // keep just the group names, e.g. ["B+", "O+"]
  }, [bank]);

  // Only show donors whose blood group matches one of the low groups.
  const matchingDonors = useMemo(() => {
    return donorsData.filter((donor) => lowGroups.includes(donor.bloodGroup));
  }, [lowGroups]);

  function handleNotify(donorId) {
    // Spread (...) makes a new array instead of changing the old one directly.
    // This is the correct React way to update an array in state.
    setNotifiedIds([...notifiedIds, donorId]);
  }

  return (
    <section className="donor-recall">
      <h3>Donor Recall — {bank.name}</h3>

      {lowGroups.length === 0 ? (
        <p>Stock levels are fine. No recall needed right now.</p>
      ) : (
        <>
          <p>Low stock groups: {lowGroups.join(", ")}</p>

          {matchingDonors.length === 0 ? (
            <p>No matching donors found for these groups.</p>
          ) : (
            <ul>
              {matchingDonors.map((donor) => {
                const alreadyNotified = notifiedIds.includes(donor.id);
                return (
                  <li key={donor.id}>
                    {donor.name} — {donor.bloodGroup} ({donor.area}){" "}
                    <button
                      onClick={() => handleNotify(donor.id)}
                      disabled={alreadyNotified}
                    >
                      {alreadyNotified ? "Notified" : "Notify"}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </section>
  );
}

export default DonorRecall;
