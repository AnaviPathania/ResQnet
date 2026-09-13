// Mock data only — no components here, just variables/objects/arrays.
// bloodStock is an OBJECT: each key is a blood group, each value is units in stock.

export const bloodBanksData = [
  {
    id: 1,
    name: "City Blood Bank",
    area: "Model Town",
    distance: 2.1,
    bloodStock: { "A+": 8, "B+": 2, "O+": 0, "AB+": 5 },
  },
  {
    id: 2,
    name: "LifeLine Blood Centre",
    area: "Civil Lines",
    distance: 4.6,
    bloodStock: { "A+": 1, "B+": 6, "O+": 10, "AB+": 0 },
  },
  {
    id: 3,
    name: "Hope Blood Bank",
    area: "Guru Nanak Nagar",
    distance: 3.3,
    bloodStock: { "A+": 4, "B+": 4, "O+": 3, "AB+": 2 },
  },
];

// A unit count below this number is treated as "Low Stock".
export const LOW_STOCK_THRESHOLD = 3;

// Mock donor list used by the Donor Recall page.
export const donorsData = [
  { id: 1, name: "Raj Mehta", bloodGroup: "O+", area: "Model Town" },
  { id: 2, name: "Simran Kaur", bloodGroup: "B+", area: "Civil Lines" },
  { id: 3, name: "Aman Sharma", bloodGroup: "AB+", area: "Guru Nanak Nagar" },
  { id: 4, name: "Priya Verma", bloodGroup: "A+", area: "Model Town" },
];
