    // ---------- useEffect + Promise/async-await (mocked fetch), StatCard reuse ----------

import { useState, useEffect } from "react";
import StatCard from "../../components/StatCard.jsx";
import { donors } from "../../data/donors.js";
import { shortages } from "../../data/shortages.js";

// Another mock "API call" - same pattern as DonorDashboard's fetchDonorStats.
function fetchAdminOverview() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalDonors: donors.length,
        eligibleDonors: donors.filter((d) => d.eligible).length,
        criticalShortages: shortages.filter((s) => s.status === "critical").length,
      });
    }, 600);
  });
}

function AdminDashboard() {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOverview() {
      const data = await fetchAdminOverview();
      setOverview(data);
      setLoading(false);
    }
    loadOverview();
  }, []);

  return (
    <div>
      <h2>System Overview</h2>

      {loading ? (
        <p>Loading dashboard...</p>
      ) : (
        <div className="stat-grid">
          <StatCard label="Total Donors" value={overview.totalDonors} />
          <StatCard label="Eligible Donors" value={overview.eligibleDonors} />
          <StatCard label="Critical Shortages" value={overview.criticalShortages} />
          <StatCard label="Blood Groups Tracked" value={shortages.length} />
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;  