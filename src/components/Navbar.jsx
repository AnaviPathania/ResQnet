import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { path: '/', label: 'Home', restricted: false },
  { path: '/about', label: 'About', restricted: false },
  { path: '/contact', label: 'Contact', restricted: false },
  { path: '/hospital', label: 'Hospital', restricted: false },
  { path: '/ambulance', label: 'Ambulance', restricted: false },
  { path: '/bloodbank', label: 'Blood Bank', restricted: false },
  { path: '/admin', label: 'Admin', restricted: false },
  { path: '/donor', label: 'Donor', restricted: false },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Primary">
        <NavLink to="/" className="navbar__brand" aria-label="ResQnet home">
          <span className="navbar__brand-mark" aria-hidden="true">+</span>
          <span className="navbar__brand-text">ResQnet</span>
        </NavLink>

        <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <NavLink to="/login" className="navbar__text-btn">
            Login
          </NavLink>

          <NavLink to="/emergency-access" className="navbar__sos-btn">
            <span className="navbar__sos-dot" aria-hidden="true" />
            SOS
          </NavLink>

          <button
            className="navbar__toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}