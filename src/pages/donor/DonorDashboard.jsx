// ---------- useState, useEffect, Promises/async-await (mocked), lists ----------

import { useState, useEffect } from "react";
import StatCard from "../../components/StatCard.jsx";
import { currentDonor } from "../../data/donors.js";
import { notifications } from "../../data/notifications.js";

// A fake "API call" using a Promise, since we have no real backend.
// setTimeout simulates network delay. This is how you'd structure a real
// fetch() call too - just swap the inside of the Promise for an actual fetch.
function fetchDonorStats() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalDonations: currentDonor.totalDonations,
        livesImpacted: currentDonor.totalDonations * 3, // JS basics: simple maths
        unreadNotifications: notifications.filter((n) => !n.read).length, // array method
      });
    }, 800); // 800ms fake delay
  });
}

function DonorDashboard() {
  // useState: holds the stats once they're "fetched", and a loading flag.
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect with an empty dependency array [] means:
  // "run this once, right after the component first appears on screen."
  useEffect(() => {
    // async/await used inside an async function defined inline.
    async function loadStats() {
      const result = await fetchDonorStats(); // waits for the Promise above
      setStats(result);
      setLoading(false);
    }
    loadStats();
  }, []);

  return (
    <div>
      <h2>Welcome, {currentDonor.name}</h2>
      <p>Blood Group: {currentDonor.bloodGroup} | City: {currentDonor.city}</p>

      {/* ---------- Conditional rendering ---------- */}
      {loading ? (
        <p>Loading your stats...</p>
      ) : (
        <div className="stat-grid">
          <StatCard label="Total Donations" value={stats.totalDonations} />
          <StatCard label="Lives Impacted" value={stats.livesImpacted} />
          <StatCard label="Unread Notifications" value={stats.unreadNotifications} />
          <StatCard label="Eligible to Donate" value={currentDonor.eligible ? "Yes" : "No"} />
        </div>
      )}
    </div>
  );
}

export default DonorDashboard;