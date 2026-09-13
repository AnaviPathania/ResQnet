// ---------- Rendering lists + Router Link (setting up a dynamic route) ----------

import { Link } from "react-router-dom";
import { donationHistory } from "../../data/donationHistory.js";

function DonationHistory() {
  return (
    <div className="card">
      <h2>Donation History</h2>

      {/* Conditional rendering: show a message if the list is empty */}
      {donationHistory.length === 0 ? (
        <p>You haven't donated yet.</p>
      ) : (
        <ul>
          {/* .map() loops over the array and renders one row per item.
              "key" must be unique - React uses it to track list items efficiently. */}
          {donationHistory.map((record) => (
            <li key={record.id} style={{ padding: "0.5rem 0", borderBottom: "1px solid #eee" }}>
              {/* Link navigates to a DYNAMIC route: /donor/history/d1, /donor/history/d2, etc. */}
              <Link to={`/donor/history/${record.id}`}>
                {record.date} — {record.location} ({record.unitsGiven} unit)
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DonationHistory;