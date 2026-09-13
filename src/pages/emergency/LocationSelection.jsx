// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function LocationSelection() {
//     const navigate = useNavigate();

//   const [city, setCity] = useState("");
//   const [area, setArea] = useState("");
//   const [error, setError] = useState("");

//   const areas = {
//     Chandigarh: [
//       "Sector 17",
//       "Sector 22",
//       "Sector 35",
//       "Manimajra",
//       "Industrial Area",
//     ],
//     Mohali: [
//       "Sector 67",
//       "Sector 68",
//       "Sector 70",
//       "Phase 3B2",
//       "Industrial Area",
//     ],
//     Patiala: [
//       "Model Town",
//       "Urban Estate",
//       "Leela Bhawan",
//       "Tripuri",
//       "Rajpura Road",
//     ],
//     Delhi: [
//       "Connaught Place",
//       "Dwarka",
//       "Rohini",
//       "Saket",
//       "Lajpat Nagar",
//     ],
//   };

// //   const handleContinue = () => {
// //     if (!city || !area) {
// //       setError("Please select both your city and area.");
// //       return;
// //     }

// //     localStorage.setItem(
// //       "emergencyLocation",
// //       JSON.stringify({
// //         city,
// //         area,
// //       })
// //     );

// //     //alert(`Emergency location set to ${area}, ${city}`);
// //   };
// const handleContinue = () => {
//   if (!city || !area) {
//     setError("Please select both your city and area.");
//     return;
//   }

//   localStorage.setItem(
//     "emergencyLocation",
//     JSON.stringify({
//       city,
//       area,
//     })
//   );

//   navigate("/emergency/dashboard");
// };

//   return (
//     <div className="location-page">

//       {/* Background decoration */}
//       <div className="glow glow-one"></div>
//       <div className="glow glow-two"></div>

//       {/* Top navigation */}
//       <header className="location-header">
//         <div className="brand">
//           <div className="brand-icon">✚</div>
//           <div>
//             <h2>ResQ<span>Net</span></h2>
//             <p>Emergency Response Network</p>
//           </div>
//         </div>

//         <div className="emergency-badge">
//           <span className="pulse-dot"></span>
//           EMERGENCY MODE
//         </div>
//       </header>

//       {/* Main content */}
//       <main className="location-content">

//         <section className="intro">
//           <div className="step-indicator">
//             <span className="active-step">01</span>
//             <span className="line"></span>
//             <span>02</span>
//             <span className="line"></span>
//             <span>03</span>
//           </div>

//           <p className="eyebrow">LOCATION REQUIRED</p>

//           <h1>
//             Where do you
//             <br />
//             <span>need help?</span>
//           </h1>

//           <p className="intro-text">
//             Select your current location so ResQNet can find the
//             nearest available emergency resources.
//           </p>
//         </section>

//         {/* Location card */}
//         <section className="location-card">

//           <div className="card-top">
//             <div className="location-symbol">⌖</div>

//             <div>
//               <h3>Your emergency location</h3>
//               <p>We'll use this to prioritize nearby resources.</p>
//             </div>
//           </div>

//           {/* City */}
//           <div className="field-group">
//             <label htmlFor="city">CITY</label>

//             <div className="select-wrapper">
//               <span className="field-icon">⌂</span>

//               <select
//                 id="city"
//                 value={city}
//                 onChange={(e) => {
//                   setCity(e.target.value);
//                   setArea("");
//                   setError("");
//                 }}
//               >
//                 <option value="">Select your city</option>
//                 {Object.keys(areas).map((cityName) => (
//                   <option key={cityName} value={cityName}>
//                     {cityName}
//                   </option>
//                 ))}
//               </select>

//               <span className="arrow">⌄</span>
//             </div>
//           </div>

//           {/* Area */}
//           <div className="field-group">
//             <label htmlFor="area">AREA / LOCALITY</label>

//             <div className="select-wrapper">
//               <span className="field-icon">⌖</span>

//               <select
//                 id="area"
//                 value={area}
//                 disabled={!city}
//                 onChange={(e) => {
//                   setArea(e.target.value);
//                   setError("");
//                 }}
//               >
//                 <option value="">
//                   {city ? "Select your area" : "Select city first"}
//                 </option>

//                 {city &&
//                   areas[city].map((areaName) => (
//                     <option key={areaName} value={areaName}>
//                       {areaName}
//                     </option>
//                   ))}
//               </select>

//               <span className="arrow">⌄</span>
//             </div>
//           </div>

//           {error && (
//             <div className="error-message">
//               <span>!</span>
//               {error}
//             </div>
//           )}

//           <button
//             className="continue-button"
//             onClick={handleContinue}
//           >
//             <span>Continue to Emergency Dashboard</span>
//             <span className="button-arrow">→</span>
//           </button>

//           <div className="privacy-note">
//             <span>⌾</span>
//             Your location is used only to find nearby emergency resources.
//           </div>
//         </section>

//         {/* Resource preview */}
//         <section className="resource-preview">

//           <p className="preview-title">
//             RESQNET WILL HELP YOU FIND
//           </p>

//           <div className="resource-items">

//             <div className="resource-item">
//               <div className="resource-icon hospital">✚</div>
//               <div>
//                 <strong>Hospital Beds</strong>
//                 <span>Real-time availability</span>
//               </div>
//             </div>

//             <div className="resource-item">
//               <div className="resource-icon blood">♥</div>
//               <div>
//                 <strong>Blood Banks</strong>
//                 <span>Blood group matching</span>
//               </div>
//             </div>

//             <div className="resource-item">
//               <div className="resource-icon ambulance">▰</div>
//               <div>
//                 <strong>Ambulances</strong>
//                 <span>Nearby response units</span>
//               </div>
//             </div>

//           </div>
//         </section>

//       </main>

//       <footer className="location-footer">
//         <span>RESQNET</span>
//         <span>•</span>
//         <span>Emergency assistance when every second matters.</span>
//       </footer>

//     </div>
//   );
// }

// export default LocationSelection;












































import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LocationSelection.css";

function LocationSelection() {
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  const navigate = useNavigate();

  const handleContinue = () => {
    if (city === "" || area === "") {
      alert("Please select both your city and area.");
      return;
    }

    localStorage.setItem(
      "emergencyLocation",
      JSON.stringify({
        city: city,
        area: area
      })
    );

    navigate("/emergency/dashboard");
  };

  return (
    <div className="location-page">

      <div className="location-card">

        <p className="small-heading">
          RESQNET • EMERGENCY MODE
        </p>

        <h1>Where do you need help?</h1>

        <p className="description">
          Select your city and nearby area so we can find
          emergency resources around you.
        </p>

        <div className="form-section">

          <label>City</label>

          <select
            value={city}
            onChange={(event) => setCity(event.target.value)}
          >
            <option value="">Select your city</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Delhi">Delhi</option>
            <option value="Mohali">Mohali</option>
            <option value="Ludhiana">Ludhiana</option>
          </select>


          <label>Area</label>

          <select
            value={area}
            onChange={(event) => setArea(event.target.value)}
          >
            <option value="">Select your area</option>
            <option value="Sector 17">Sector 17</option>
            <option value="Sector 22">Sector 22</option>
            <option value="Industrial Area">Industrial Area</option>
            <option value="City Centre">City Centre</option>
          </select>

        </div>


        <button
          className="continue-button"
          onClick={handleContinue}
        >
          Continue to Emergency Dashboard →
        </button>

      </div>

    </div>
  );
}

export default LocationSelection;