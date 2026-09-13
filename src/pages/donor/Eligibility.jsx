// ---------- useMemo ----------
// useMemo recalculates a value ONLY when its dependencies change, instead of
// on every single re-render. Here the calculation is cheap, but in a real
// app this pattern matters a lot for expensive calculations.

import { useMemo } from "react";
import { currentDonor } from "../../data/donors.js";

function Eligibility() {
  const daysSinceLastDonation = useMemo(() => {
    const lastDate = new Date(currentDonor.lastDonationDate);
    const today = new Date();
    const diffInMs = today - lastDate; // subtracting dates gives milliseconds
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // convert ms -> days
  }, [currentDonor.lastDonationDate]); // only recalculates if this date changes

  const isEligible = daysSinceLastDonation >= 90; // rule: 90 days between donations

  return (
    <div className="card">
      <h2>Donation Eligibility</h2>
      <p>Last donation: {currentDonor.lastDonationDate}</p>
      <p>Days since last donation: {daysSinceLastDonation}</p>

      {/* Conditional rendering based on the calculated eligibility */}
      {isEligible ? (
        <p style={{ color: "green", fontWeight: "bold" }}>
          You are eligible to donate again!
        </p>
      ) : (
        <p style={{ color: "#c62828", fontWeight: "bold" }}>
          Please wait {90 - daysSinceLastDonation} more day(s) before donating again.
        </p>
      )}
    </div>
  );
}

export default Eligibility;