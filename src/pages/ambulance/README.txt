HOW TO USE THESE FILES
=======================

1. Copy all files in this zip into:
   src/pages/ambulance/

   Your folder should end up looking like:

   src/pages/ambulance/
   ├── AmbulanceDashboard.jsx
   ├── Fleet.jsx
   ├── Dispatch.jsx
   ├── ActiveTrip.jsx
   ├── History.jsx
   ├── ambulanceData.jsx
   ├── useLocalStorage.jsx
   └── AmbulanceDashboard.css

2. To preview locally before Member 1's App.jsx routing is ready, temporarily
   edit src/main.jsx:

   import AmbulanceDashboard from "./pages/ambulance/AmbulanceDashboard.jsx";
   // render <AmbulanceDashboard /> instead of <App />
   // (don't push this temporary change)

3. Once routing is set up, the real route will look like:

   <Route path="/ambulance" element={<AmbulanceDashboard />} />

HOW THE FLOW WORKS
===================
- Select any ambulance in the Fleet list.
- If it's "Available" -> a Dispatch form appears. Fill it in and submit to
  start a trip (the ambulance status flips to "On Trip").
- If it's "On Trip" -> an Active Trip card appears instead, with a
  "Complete Trip" button that finishes the trip, saves it to History, and
  frees the ambulance up again ("Available").
- History always shows past completed trips for whichever ambulance is
  selected.

NOTE: useLocalStorage.jsx here is the same custom hook used in your other two
modules. Once the team agrees on a shared version in src/utils/, all three
copies can be replaced with one shared import.
