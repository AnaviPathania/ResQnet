// ---------- React Router: dynamic routes & route params ----------
// This page is rendered at the path /donor/history/:id
// useParams() reads the ":id" part straight out of the current URL.

import { useParams, Link } from "react-router-dom";
import { donationHistory } from "../../data/donationHistory.js";

function DonationDetail() {
  const { id } = useParams(); // e.g. id = "d2" when the URL is /donor/history/d2

  // JS basics: array.find() loops through the array and returns the first match.
  const record = donationHistory.find((item) => item.id === id);

  // Conditional rendering: handle the case where the id in the URL doesn't exist.
  if (!record) {
    return (
      <div className="card">
        <p>No donation record found for id "{id}".</p>
        <Link to="/donor/history">Back to history</Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Donation Detail</h2>
      <p><strong>Date:</strong> {record.date}</p>
      <p><strong>Location:</strong> {record.location}</p>
      <p><strong>Units Given:</strong> {record.unitsGiven}</p>
      <p><strong>Notes:</strong> {record.notes}</p>
      <Link to="/donor/history">Back to history</Link>
    </div>
  );
}

export default DonationDetail;