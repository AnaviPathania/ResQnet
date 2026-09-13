// ---------- React Router: protected route demonstration ----------
// This is NOT real authentication - it's a simple demo using a flag saved
// in localStorage. If the flag isn't there, we redirect to /login instead
// of showing the protected page.

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = window.localStorage.getItem("isAdminLoggedIn") === "true";

  if (!isLoggedIn) {
    // <Navigate> redirects the browser to another route, like router.push in other frameworks.
    return <Navigate to="/login" replace />;
  }

  // If logged in, just render whatever page was passed in as "children".
  return children;
}

export default ProtectedRoute;