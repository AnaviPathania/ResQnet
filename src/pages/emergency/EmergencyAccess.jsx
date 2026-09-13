// function EmergencyAccess() {
//   return (
//     <div>
//       <h1>Emergency Access</h1>

//       <p>
//         Get immediate access to nearby emergency resources.
//       </p>

//       <button onClick={() => (window.location.href = "/emergency/location")}>
//   Continue
// </button>
//     </div>
//   );
// }

// export default EmergencyAccess;







import { useNavigate } from "react-router-dom";
import "./EmergencyAccess.css";

function EmergencyAccess() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/emergency/location");
  };

  return (
    <div className="emergency-access">
      <h1>Emergency Access</h1>

      <p>
        Get quick access to nearby emergency resources.
      </p>

      <button onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default EmergencyAccess;