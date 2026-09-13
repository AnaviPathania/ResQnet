import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Quick links pulled out into data so we can .map() over them — the same
// pattern as Navbar, applied to a different link set (footer links skew
// toward "about the site" rather than day-to-day navigation).
const QUICK_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/emergency/sos', label: 'Emergency SOS' },
];

// Helpline numbers as data too. If these ever change, we edit one array
// instead of hunting through JSX markup.
const HELPLINES = [
  { service: 'Ambulance', number: '102' },
  { service: 'Police', number: '100' },
  { service: 'Fire', number: '101' },
  { service: 'National Emergency', number: '112' },
];

export default function Footer() {
  // useState holds a small object: whether the helpline "system" is online,
  // and when we last checked. Grouping related values in one object keeps
  // them in sync with a single setState call.
  const [status, setStatus] = useState({ online: true, checkedAt: new Date() });

  // useEffect #2 — a TIMER / COUNTER SIMULATION, the other classic useEffect
  // pattern from the syllabus (the first one lives in Navbar.jsx, reacting
  // to route changes instead of time). setInterval schedules a repeating
  // "heartbeat" check. The function we RETURN from useEffect is the
  // CLEANUP — React calls it automatically when Footer unmounts, so the
  // interval doesn't keep running (and leaking memory) after the component
  // is gone.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setStatus({ online: true, checkedAt: new Date() });
    }, 30000); // mock re-check every 30 seconds

    return () => clearInterval(intervalId); // cleanup function
  }, []); // empty dependency array = run once on mount, clean up on unmount

  // Object destructuring pulls both fields out of `status` in one line.
  const { online, checkedAt } = status;

  // Template literals format the check-in time as HH:MM, zero-padded.
  const lastChecked = `${checkedAt.getHours().toString().padStart(2, '0')}:${checkedAt
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  return (
    // <footer> is the semantic landmark for the page's closing/contact info.
    <footer className="footer">
      <div className="footer__grid">
        <section className="footer__col" aria-labelledby="footer-brand-heading">
          <h2 id="footer-brand-heading" className="footer__brand">
            <span className="footer__brand-mark" aria-hidden="true">+</span> ResQnet
          </h2>
          <p className="footer__blurb">
            A coordination platform connecting people in medical emergencies with
            nearby hospitals, blood banks and ambulances — built as a student
            evaluation project.
          </p>
        </section>

        <section className="footer__col" aria-labelledby="footer-links-heading">
          <h3 id="footer-links-heading" className="footer__heading">Quick links</h3>
          <ul className="footer__list">
            {QUICK_LINKS.map(({ path, label }) => (
              <li key={path}>
                {/* Link, not NavLink — footer links don't need active-page
                    styling, so we reach for the simpler component here on
                    purpose, as a contrast with Navbar's NavLink usage. */}
                <Link to={path} className="footer__link">{label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer__col" aria-labelledby="footer-helpline-heading">
          <h3 id="footer-helpline-heading" className="footer__heading">Helpline numbers</h3>
          {/* <address> is the semantic tag reserved for contact information. */}
          <address className="footer__helpline">
            {HELPLINES.map(({ service, number }) => (
              <p key={service}>
                <span className="footer__service">{service}</span>
                <a href={`tel:${number}`} className="footer__number">{number}</a>
              </p>
            ))}
          </address>

          {/* Conditional rendering with a ternary: the status dot's colour
              and label both depend directly on the `online` boolean. */}
          <p className="footer__status">
            <span
              className={`footer__status-dot ${online ? 'footer__status-dot--online' : ''}`}
              aria-hidden="true"
            />
            {online ? 'Helpline systems online' : 'Checking status…'}
            <span className="footer__status-time"> · last checked {lastChecked}</span>
          </p>
        </section>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} ResQnet. Built for academic evaluation.</p>
        <p className="footer__credit">Not a substitute for calling emergency services directly.</p>
      </div>
    </footer>
  );
}