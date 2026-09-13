// ---------- React Router: nested routes ----------
// This Layout component renders a small sub-navbar for all /donor/* pages,
// and <Outlet /> is where React Router will plug in whichever donor page
// matches the current URL (Dashboard, Profile, Eligibility, etc).

import { NavLink, Outlet } from "react-router-dom";

function DonorLayout() {
  return (
    <div className="container">
      <h1>Donor Section</h1>

      {/* NavLink automatically adds an "active" class to the current page's link */}
      <nav className="sub-navbar-links" style={{ margin: "1rem 0", flexWrap: "wrap" }}>
        <NavLink to="/donor" end>Dashboard</NavLink>
        <NavLink to="/donor/profile">Profile</NavLink>
        <NavLink to="/donor/eligibility">Eligibility</NavLink>
        <NavLink to="/donor/history">Donation History</NavLink>
        <NavLink to="/donor/shortages">Shortages</NavLink>
        <NavLink to="/donor/impact">My Impact</NavLink>
        <NavLink to="/donor/notifications">Notifications</NavLink>
      </nav>

      {/* Whichever nested route matches gets rendered right here */}
      <Outlet />
    </div>
  );
}

export default DonorLayout;