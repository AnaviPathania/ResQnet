// ---------- React Router: 404 page ----------
// This component is rendered when the URL doesn't match ANY defined route
// (see the path="*" route in App.jsx).

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container" style={{ textAlign: "center", paddingTop: "3rem" }}>
      <h1>404</h1>
      <p>Sorry, this page doesn't exist.</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NotFound;