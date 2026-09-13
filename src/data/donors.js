// ---------- JavaScript basics: arrays & objects ----------
// Each donor is an OBJECT with several properties (key: value pairs).
// All donors together are stored in an ARRAY.

// ---------- ES6+ Modules ----------
// "export" makes this array available to any other file that "imports" it.
export const donors = [
  {
    id: 1,
    name: "Rohan Mehta",
    bloodGroup: "O+",
    age: 27,
    city: "Chandigarh",
    lastDonationDate: "2026-06-12",
    totalDonations: 5,
    eligible: true,
  },
  {
    id: 2,
    name: "Simran Kaur",
    bloodGroup: "A-",
    age: 31,
    city: "Mohali",
    lastDonationDate: "2026-08-01",
    totalDonations: 2,
    eligible: false, // donated too recently to donate again
  },
  {
    id: 3,
    name: "Aditya Sharma",
    bloodGroup: "B+",
    age: 24,
    city: "Panchkula",
    lastDonationDate: "2026-01-20",
    totalDonations: 8,
    eligible: true,
  },
  {
    id: 4,
    name: "Neha Verma",
    bloodGroup: "AB+",
    age: 29,
    city: "Chandigarh",
    lastDonationDate: "2025-11-05",
    totalDonations: 3,
    eligible: true,
  },
];

// A single "logged in" donor used by DonorDashboard/DonorProfile.
// In a real app this would come from a login system; here it's just mock data.
export const currentDonor = donors[0];