import { Routes, Route } from 'react-router-dom';

// Member 3 Pages (Facility Dashboards)
import HospitalDashboard from './pages/hospital/HospitalDashboard';
import BloodBankDashboard from './pages/bloodbank/BloodBankDashboard';
import AmbulanceDashboard from './pages/ambulance/AmbulanceDashboard';

// Member 4 Auth & Helper Pages
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Member 4 Donor Module Pages
import DonorLayout from './pages/donor/DonorLayout.jsx';
import DonorDashboard from './pages/donor/DonorDashboard.jsx';
import DonorProfile from './pages/donor/DonorProfile.jsx';
import Eligibility from './pages/donor/Eligibility.jsx';
import DonationHistory from './pages/donor/DonationHistory.jsx';
import DonationDetail from './pages/donor/DonationDetail.jsx';
import Shortages from './pages/donor/Shortages.jsx';
import DonorImpact from './pages/donor/DonorImpact.jsx';
import Notifications from './pages/donor/Notifications.jsx';

// Member 4 Admin Module Pages
import AdminLayout from './pages/admin/AdminLayout.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import ResourceMap from './pages/admin/ResourceMap.jsx';
import ShortagesAlerts from './pages/admin/ShortagesAlerts.jsx';
import Analytics from './pages/admin/Analytics.jsx';

import './App.css';

export default function App() {
  return (
    <Routes>
      {/* ---------- Member 1 Public Routes ---------- */}
      <Route path="/" element={<div style={{ padding: '20px' }}><h2>Landing Page (Member 1)</h2></div>} />

      {/* ---------- Member 2 Emergency Routes ---------- */}
      <Route path="/emergency/sos" element={<div style={{ padding: '20px' }}><h2>Emergency SOS (Member 2)</h2></div>} />

      {/* ---------- Member 3 Facility Routes ---------- */}
      <Route path="/hospital" element={<HospitalDashboard />} />
      <Route path="/bloodbank" element={<BloodBankDashboard />} />
      <Route path="/ambulance" element={<AmbulanceDashboard />} />

      {/* ---------- Member 4 Auth Page ---------- */}
      <Route path="/login" element={<Login />} />

      {/* ---------- Member 4 Donor Module (Nested Routes) ---------- */}
      <Route path="/donor" element={<DonorLayout />}>
        <Route index element={<DonorDashboard />} />
        <Route path="profile" element={<DonorProfile />} />
        <Route path="eligibility" element={<Eligibility />} />
        <Route path="history" element={<DonationHistory />} />
        <Route path="history/:id" element={<DonationDetail />} />
        <Route path="shortages" element={<Shortages />} />
        <Route path="impact" element={<DonorImpact />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>

      {/* ---------- Member 4 Admin Module (Protected Routes) ---------- */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="map" element={<ResourceMap />} />
        <Route path="alerts" element={<ShortagesAlerts />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>

      {/* ---------- 404 Catch-All Route ---------- */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}