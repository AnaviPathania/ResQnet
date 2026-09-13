// Blood-group shortage data, used by BOTH the Donor "Shortages" page
// and the Admin "Shortages & Alerts" page (this is intentional reuse of data).
export const shortages = [
  { bloodGroup: "O-", unitsAvailable: 3, unitsNeeded: 20, status: "critical" },
  { bloodGroup: "A+", unitsAvailable: 15, unitsNeeded: 20, status: "low" },
  { bloodGroup: "B+", unitsAvailable: 30, unitsNeeded: 20, status: "available" },
  { bloodGroup: "AB-", unitsAvailable: 2, unitsNeeded: 10, status: "critical" },
  { bloodGroup: "O+", unitsAvailable: 25, unitsNeeded: 25, status: "low" },
];