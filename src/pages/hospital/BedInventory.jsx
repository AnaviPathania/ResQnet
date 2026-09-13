function BedInventory({ hospital }) {
  // Destructuring (ES6+): pulling fields straight out of the object
  const { name, icuBeds, generalBeds, ventilators } = hospital;

  const bedTypes = [
    { label: "ICU Beds", count: icuBeds },
    { label: "General Beds", count: generalBeds },
    { label: "Ventilators", count: ventilators },
  ];

  return (
    <section className="bed-inventory">
      <h3>Bed Inventory — {name}</h3>
      <ul>
        {bedTypes.map((bed) => (
          <li key={bed.label}>
            {bed.label}: <strong>{bed.count}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BedInventory;
