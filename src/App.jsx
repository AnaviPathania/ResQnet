import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HospitalDashboard from './pages/hospital/HospitalDashboard';
import BloodBankDashboard from './pages/bloodbank/BloodBankDashboard';
import AmbulanceDashboard from './pages/ambulance/AmbulanceDashboard';

export default function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>ResQnet Emergency Platform</h1>
        <Routes>
          {/* Member 1 Public Routes */}
          <Route path="/" element={<h2>Landing Page (Member 1)</h2>} />
          
          {/* Member 2 Emergency Routes */}
          <Route path="/emergency/sos" element={<h2>Emergency SOS (Member 2)</h2>} />

          {/* Member 3 Facility Routes (Your Workspace) */}
          <Route path="/hospital" element={<HospitalDashboard />} />
          <Route path="/bloodbank" element={<BloodBankDashboard />} />
          <Route path="/ambulance" element={<AmbulanceDashboard />} />

          {/* Member 4 Admin & Donor Routes */}
          <Route path="/donor" element={<h2>Donor Dashboard (Member 4)</h2>} />
          <Route path="/admin" element={<h2>Admin Center (Member 4)</h2>} />
        </Routes>
      </div>
    </Router>
  );
}