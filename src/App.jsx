// ---------- App.jsx: central routing setup ----------
// Routes and Route come from react-router-dom. Each <Route> maps a URL path
// to a component. Nested <Route>s (inside DonorLayout/AdminLayout) render
// into that layout's <Outlet />.

import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Donor pages
import DonorLayout from "./pages/donor/DonorLayout.jsx";
import DonorDashboard from "./pages/donor/DonorDashboard.jsx";
import DonorProfile from "./pages/donor/DonorProfile.jsx";
import Eligibility from "./pages/donor/Eligibility.jsx";
import DonationHistory from "./pages/donor/DonationHistory.jsx";
import DonationDetail from "./pages/donor/DonationDetail.jsx";
import Shortages from "./pages/donor/Shortages.jsx";
import DonorImpact from "./pages/donor/DonorImpact.jsx";
import Notifications from "./pages/donor/Notifications.jsx";

// Admin pages
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import ResourceMap from "./pages/admin/ResourceMap.jsx";
import ShortagesAlerts from "./pages/admin/ShortagesAlerts.jsx";
import Analytics from "./pages/admin/Analytics.jsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* ---------- Nested routes: everything under /donor/* shares DonorLayout ---------- */}
      <Route path="/donor" element={<DonorLayout />}>
        <Route index element={<DonorDashboard />} />             {/* /donor */}
        <Route path="profile" element={<DonorProfile />} />       {/* /donor/profile */}
        <Route path="eligibility" element={<Eligibility />} />    {/* /donor/eligibility */}
        <Route path="history" element={<DonationHistory />} />    {/* /donor/history */}
        <Route path="history/:id" element={<DonationDetail />} /> {/* dynamic route + param */}
        <Route path="shortages" element={<Shortages />} />
        <Route path="impact" element={<DonorImpact />} />
        <Route path="notifications" element={<Notifications />} />
      </Route>

      {/* ---------- Protected nested routes: /admin/* requires "login" first ---------- */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />          {/* /admin */}
        <Route path="map" element={<ResourceMap />} />          {/* /admin/map */}
        <Route path="alerts" element={<ShortagesAlerts />} />   {/* /admin/alerts */}
        <Route path="analytics" element={<Analytics />} />      {/* /admin/analytics */}
      </Route>

      {/* ---------- 404: matches any URL not matched above ---------- */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;