// ---------- Forms, controlled components, browser storage ----------
// A mock login form just for demonstrating the Protected Route concept.
// IMPORTANT: no real password checking or security here - it's a UI demo only.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // lets us redirect the user after "login"

  function handleSubmit(event) {
    event.preventDefault();

    if (username.trim() === "") {
      alert("Please enter a username.");
      return;
    }

    // Save a simple flag in localStorage - this is what ProtectedRoute checks.
    window.localStorage.setItem("isAdminLoggedIn", "true");
    navigate("/admin"); // redirect to the admin section after "logging in"
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Admin Login (Demo)</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter any username"
            />
          </div>
          <button className="login-button" type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;