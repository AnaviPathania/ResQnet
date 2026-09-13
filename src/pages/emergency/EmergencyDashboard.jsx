// import { useEffect, useState } from "react";
// import "./EmergencyDashboard.css";

// function EmergencyDashboard() {
//   const [location, setLocation] = useState({
//     city: "Chandigarh",
//     area: "Sector 17",
//   });

//   useEffect(() => {
//     const savedLocation = localStorage.getItem("emergencyLocation");

//     if (savedLocation) {
//       setLocation(JSON.parse(savedLocation));
//     }
//   }, []);

//   const resources = [
//     {
//       title: "Find Hospital Bed",
//       description: "Locate nearby hospitals with available beds.",
//       icon: "✚",
//       status: "LIVE AVAILABILITY",
//       className: "bed",
//     },
//     {
//       title: "Find Blood",
//       description: "Search nearby blood banks by blood group.",
//       icon: "♥",
//       status: "BLOOD MATCHING",
//       className: "blood",
//     },
//     {
//       title: "Find Ambulance",
//       description: "Locate the nearest available ambulance.",
//       icon: "▰",
//       status: "LIVE RESPONSE",
//       className: "ambulance",
//     },
//   ];

//   return (
//     <div className="emergency-dashboard">

//       {/* HEADER */}
//       <header className="dashboard-header">
//         <div className="brand">
//           <div className="brand-icon">✚</div>

//           <div>
//             <h2>
//               ResQ<span>Net</span>
//             </h2>
//             <p>Emergency Response Network</p>
//           </div>
//         </div>

//         <div className="header-right">
//           <div className="location-pill">
//             <span>⌖</span>
//             <div>
//               <small>YOUR LOCATION</small>
//               <strong>
//                 {location.area}, {location.city}
//               </strong>
//             </div>
//           </div>

//           <div className="live-status">
//             <span className="live-dot"></span>
//             LIVE
//           </div>
//         </div>
//       </header>

//       {/* MAIN */}
//       <main className="dashboard-main">

//         {/* HERO */}
//         <section className="dashboard-hero">

//           <div>
//             <p className="hero-eyebrow">
//               EMERGENCY DASHBOARD
//             </p>

//             <h1>
//               What do you
//               <br />
//               <span>need right now?</span>
//             </h1>

//             <p className="hero-description">
//               We've prioritized emergency resources near{" "}
//               <strong>{location.area}</strong>.
//               Choose what you need and we'll help you find the
//               fastest available option.
//             </p>
//           </div>

//           <div className="response-card">
//             <div className="response-icon">⚡</div>

//             <div>
//               <span>RESQNET RESPONSE</span>
//               <strong>Resources prioritized by proximity</strong>
//             </div>
//           </div>

//         </section>

//         {/* SOS */}
//         <section className="sos-section">

//           <div className="sos-content">

//             <div className="sos-icon">
//               !
//             </div>

//             <div>
//               <p>CRITICAL EMERGENCY</p>

//               <h2>
//                 Need immediate coordinated help?
//               </h2>

//               <span>
//                 SOS can coordinate multiple emergency resources
//                 for you at once.
//               </span>
//             </div>

//           </div>

//           <button className="sos-button">
//             <span>ACTIVATE SOS</span>
//             <span>→</span>
//           </button>

//         </section>

//         {/* RESOURCES */}
//         <section className="resources-section">

//           <div className="section-heading">
//             <div>
//               <p>EMERGENCY RESOURCES</p>
//               <h2>Find what you need</h2>
//             </div>

//             <span className="nearby-label">
//               ● Nearby resources
//             </span>
//           </div>

//           <div className="resource-grid">

//             {resources.map((resource) => (
//               <div
//                 className={`dashboard-resource ${resource.className}`}
//                 key={resource.title}
//               >

//                 <div className="resource-top">
//                   <div className="dashboard-resource-icon">
//                     {resource.icon}
//                   </div>

//                   <span className="resource-status">
//                     {resource.status}
//                   </span>
//                 </div>

//                 <h3>{resource.title}</h3>

//                 <p>{resource.description}</p>

//                 <button>
//                   Find Resources
//                   <span>→</span>
//                 </button>

//               </div>
//             ))}

//           </div>

//         </section>

//         {/* FOOTER INFO */}
//         <section className="dashboard-info">

//           <div>
//             <span className="info-icon">⌖</span>

//             <div>
//               <strong>Location-based matching</strong>
//               <p>
//                 Results are prioritized based on your selected
//                 area and resource availability.
//               </p>
//             </div>
//           </div>

//           <div>
//             <span className="info-icon">◉</span>

//             <div>
//               <strong>Real-time coordination</strong>
//               <p>
//                 ResQNet connects emergency requests with
//                 available resources.
//               </p>
//             </div>
//           </div>

//           <div>
//             <span className="info-icon">✓</span>

//             <div>
//               <strong>Request tracking</strong>
//               <p>
//                 Every emergency request receives a trackable ID.
//               </p>
//             </div>
//           </div>

//         </section>

//       </main>

//       <footer className="dashboard-footer">
//         <span>RESQNET</span>
//         <span>•</span>
//         Emergency assistance when every second matters.
//       </footer>

//     </div>
//   );
// }

// export default EmergencyDashboard;

















// import { useEffect, useState } from "react";
// import "./EmergencyDashboard.css";

// function EmergencyDashboard() {
//   const [location, setLocation] = useState({
//     city: "",
//     area: ""
//   });

//   useEffect(() => {
//     const savedLocation = localStorage.getItem("emergencyLocation");

//     if (savedLocation) {
//       const locationData = JSON.parse(savedLocation);
//       setLocation(locationData);
//     }
//   }, []);

//   return (
//     <div className="dashboard-page">

//       <header className="dashboard-header">
//         <div className="logo">
//           ResQ<span>Net</span>
//         </div>

//         <div className="location-display">
//           📍 {location.area || "Your Area"}, {location.city || "Your City"}
//         </div>
//       </header>


//       <main className="dashboard-content">

//         <section className="dashboard-hero">
//           <p className="dashboard-label">
//             EMERGENCY MODE
//           </p>

//           <h1>
//             What do you need help with?
//           </h1>

//           <p>
//             Find nearby emergency resources quickly.
//           </p>
//         </section>


//         <section className="sos-section">

//           <div>
//             <h2>Need immediate help?</h2>

//             <p>
//               Send an emergency SOS and coordinate multiple resources.
//             </p>
//           </div>

//           <button className="sos-button">
//             Emergency SOS
//           </button>

//         </section>


//         <section className="resources-section">

//           <h2>Find a Resource</h2>

//           <div className="resource-grid">

//             <div className="resource-card">
//               <div className="resource-icon">🏥</div>

//               <h3>Find a Bed</h3>

//               <p>
//                 Find hospitals with available beds nearby.
//               </p>

//               <button>
//                 Find Beds
//               </button>
//             </div>


//             <div className="resource-card">
//               <div className="resource-icon">🩸</div>

//               <h3>Find Blood</h3>

//               <p>
//                 Search nearby blood banks for the required blood group.
//               </p>

//               <button>
//                 Find Blood
//               </button>
//             </div>


//             <div className="resource-card">
//               <div className="resource-icon">🚑</div>

//               <h3>Find Ambulance</h3>

//               <p>
//                 Find available ambulances in your area.
//               </p>

//               <button>
//                 Find Ambulance
//               </button>
//             </div>

//           </div>

//         </section>


//         <section className="dashboard-info">

//           <h2>How ResQNet helps</h2>

//           <p>
//             ResQNet connects you with nearby hospitals, blood banks
//             and ambulances so you can find the right emergency
//             resource faster.
//           </p>

//         </section>

//       </main>

//     </div>
//   );
// }

// export default EmergencyDashboard;





















import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmergencyDashboard.css";

function EmergencyDashboard() {
  const [location, setLocation] = useState({
    city: "",
    area: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedLocation = localStorage.getItem("emergencyLocation");

    if (savedLocation) {
      const locationData = JSON.parse(savedLocation);
      setLocation(locationData);
    }
  }, []);

  return (
    <div className="dashboard-page">

      <header className="dashboard-header">
        <div className="logo">
          ResQ<span>Net</span>
        </div>

        <div className="location-display">
          📍 {location.area || "Your Area"}, {location.city || "Your City"}
        </div>
      </header>

      <main className="dashboard-content">

        <section className="dashboard-hero">
          <p className="dashboard-label">
            EMERGENCY MODE
          </p>

          <h1>What do you need help with?</h1>

          <p>
            Find nearby emergency resources quickly.
          </p>
        </section>


        <section className="sos-section">

          <div>
            <h2>Need immediate help?</h2>

            <p>
              Send an emergency SOS and coordinate multiple resources.
            </p>
          </div>

          <button
            className="sos-button"
            onClick={() => navigate("/emergency/sos")}
          >
            Emergency SOS
          </button>

        </section>


        <section className="resources-section">

          <h2>Find a Resource</h2>

          <div className="resource-grid">


            <div className="resource-card">

              <div className="resource-icon">
                🏥
              </div>

              <h3>Find a Bed</h3>

              <p>
                Find hospitals with available beds nearby.
              </p>

              <button
                onClick={() => navigate("/emergency/bed")}
              >
                Find Beds
              </button>

            </div>


            <div className="resource-card">

              <div className="resource-icon">
                🩸
              </div>

              <h3>Find Blood</h3>

              <p>
                Search nearby blood banks for the required blood group.
              </p>

              <button
                onClick={() => navigate("/emergency/blood")}
              >
                Find Blood
              </button>

            </div>


            <div className="resource-card">

              <div className="resource-icon">
                🚑
              </div>

              <h3>Find Ambulance</h3>

              <p>
                Find available ambulances in your area.
              </p>

              <button
                onClick={() => navigate("/emergency/ambulance")}
              >
                Find Ambulance
              </button>

            </div>

          </div>

        </section>


        <section className="dashboard-info">

          <h2>How ResQNet helps</h2>

          <p>
            ResQNet connects you with nearby hospitals,
            blood banks and ambulances so you can find
            the right emergency resource faster.
          </p>

        </section>

      </main>

    </div>
  );
}

export default EmergencyDashboard;