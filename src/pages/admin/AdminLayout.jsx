// Nested routes layout for everything under /admin/*
import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="container">
      <h1>Admin Command Center</h1>
<nav className="sub-navbar-links" style={{ margin: "1rem 0", flexWrap: "wrap" }}>
        <NavLink to="/admin" end>Overview</NavLink>
        <NavLink to="/admin/map">Resource Map</NavLink>
        <NavLink to="/admin/alerts">Shortages & Alerts</NavLink>
        <NavLink to="/admin/analytics">Analytics</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default AdminLayout;