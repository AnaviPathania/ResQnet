import { LOW_STOCK_THRESHOLD } from "./bloodBankData.jsx";

function BloodInventory({ bank }) {
  // Destructuring (ES6+): pull fields straight out of the "bank" object
  const { name, bloodStock } = bank;

  // Object.entries turns { "A+": 8, "B+": 2 } into [["A+", 8], ["B+", 2]]
  // so we can .map() over it like a normal array.
  const stockList = Object.entries(bloodStock);

  return (
    <section className="blood-inventory">
      <h3>Blood Inventory — {name}</h3>
      <ul>
        {stockList.map(([group, units]) => (
          <li key={group}>
            {group}: <strong>{units} units</strong>{" "}
            {/* Conditional rendering: only show the warning when stock is low */}
            {units < LOW_STOCK_THRESHOLD && (
              <span className="low-stock-tag">Low Stock</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BloodInventory;
