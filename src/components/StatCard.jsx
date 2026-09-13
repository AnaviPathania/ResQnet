// StatCard is a small reusable "number + label" box used on dashboards.
// It reuses the Card component above -> component composition again.
import Card from "./Card.jsx";

function StatCard({ label, value }) {
  return (
    <Card>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>{label}</p>
      <p style={{ fontSize: "1.6rem", fontWeight: "bold" }}>{value}</p>
    </Card>
  );
}

export default StatCard;