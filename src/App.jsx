import React from 'react';
import { Routes, Route } from 'react-router-dom';

// --- MEMBER 1 (Your Work - Public & Shared Components) ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/public/LandingPage';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import EmergencyAccess from './pages/public/EmergencyAccess';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

// --- MEMBER 3 (Facility Dashboards & Sub-pages) ---
import HospitalDashboard from './pages/hospital/HospitalDashboard';
import BedInventory from './pages/hospital/BedInventory';
import HospitalRequests from './pages/hospital/Requests';

import AmbulanceDashboard from './pages/ambulance/AmbulanceDashboard';
import ActiveTrip from './pages/ambulance/ActiveTrip';
import Dispatch from './pages/ambulance/Dispatch';
import Fleet from './pages/ambulance/Fleet';
import AmbulanceHistory from './pages/ambulance/History';

import BloodBankDashboard from './pages/bloodbank/BloodBankDashboard';
import BloodInventory from './pages/bloodbank/BloodInventory';
import BloodRequests from './pages/bloodbank/BloodRequests';
import DonorRecall from './pages/bloodbank/DonorRecall';

// --- MEMBER 4 (Admin & Donor Modules) ---
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import Analytics from './pages/admin/Analytics';
import ResourceMap from './pages/admin/ResourceMap';
import ShortagesAlerts from './pages/admin/ShortagesAlerts';

import DonorLayout from './pages/donor/DonorLayout';
import DonorDashboard from './pages/donor/DonorDashboard';
import DonorProfile from './pages/donor/DonorProfile';
import DonorImpact from './pages/donor/DonorImpact';
import DonationHistory from './pages/donor/DonationHistory';
import Eligibility from './pages/donor/Eligibility';
import DonorShortages from './pages/donor/Shortages';
import DonorNotifications from './pages/donor/Notifications';
import DonationDetail from './pages/donor/DonationDetail';

// --- Protected Route (guards /admin/*) ---
import ProtectedRoute from './components/ProtectedRoute';

// --- MEMBER 2 PLACEHOLDER (Pending Branch Fix) ---
const EmergencyPlaceholder = () => (
  <div style={{ padding: '3rem', textAlign: 'center' }}>
    <h2>🚑 Emergency Module</h2>
    <p>Member 2 work pending Git merge.</p>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          {/* Member 1 Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emergency-access" element={<EmergencyAccess />} />
          <Route path="/login" element={<Login />} />

          {/* Member 3 Routes */}
          <Route path="/hospital" element={<HospitalDashboard />} />
          <Route path="/hospital/beds" element={<BedInventory />} />
          <Route path="/hospital/requests" element={<HospitalRequests />} />

          <Route path="/ambulance" element={<AmbulanceDashboard />} />
          <Route path="/ambulance/active-trip" element={<ActiveTrip />} />
          <Route path="/ambulance/dispatch" element={<Dispatch />} />
          <Route path="/ambulance/fleet" element={<Fleet />} />
          <Route path="/ambulance/history" element={<AmbulanceHistory />} />

          <Route path="/bloodbank" element={<BloodBankDashboard />} />
          <Route path="/bloodbank/inventory" element={<BloodInventory />} />
          <Route path="/bloodbank/requests" element={<BloodRequests />} />
          <Route path="/bloodbank/donor-recall" element={<DonorRecall />} />

          {/* Member 4 Admin Routes (nested under AdminLayout, protected) */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="map" element={<ResourceMap />} />
            <Route path="alerts" element={<ShortagesAlerts />} />
          </Route>

          {/* Member 4 Donor Routes (nested under DonorLayout) */}
          <Route path="/donor" element={<DonorLayout />}>
            <Route index element={<DonorDashboard />} />
            <Route path="profile" element={<DonorProfile />} />
            <Route path="impact" element={<DonorImpact />} />
            <Route path="history" element={<DonationHistory />} />
            <Route path="history/:id" element={<DonationDetail />} />
            <Route path="eligibility" element={<Eligibility />} />
            <Route path="shortages" element={<DonorShortages />} />
            <Route path="notifications" element={<DonorNotifications />} />
          </Route>

          {/* Member 2 Temporary Route */}
          <Route path="/emergency/*" element={<EmergencyPlaceholder />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;