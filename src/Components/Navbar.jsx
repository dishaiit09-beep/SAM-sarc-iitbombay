import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { getUser } from "../api";

const StudentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const ParentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="2.5"/>
    <path d="M4 21v-2a4 4 0 0 1 4-4h2"/>
    <circle cx="17" cy="11" r="2"/>
    <path d="M13 21v-1.5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3V21"/>
  </svg>
);

const AlumniIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.09 6.26L20 9.27l-4.73 4.6L16.18 20 12 17.27 7.82 20l1.91-6.13L5 9.27l5.91-.01z"/>
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ROLE_ICONS = {
  student: <StudentIcon />,
  parent: <ParentIcon />,
  alumni: <AlumniIcon />,
  admin: <UserIcon />,
};

const navLinks = [
  { name: "Home",        path: "/" },
  { name: "Events",      path: "/events" },
  { name: "Testimonials",path: "/testimonials" },
  { name: "Contact Us",  path: "/contact" },
  { name: "About Alumni",path: "/alumni" },
];

export default function Navbar() {
  const [user, setUser] = useState(getUser);
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Re-read user from storage when tab regains focus or auth state changes
  useEffect(() => {
    const sync = () => setUser(getUser());
    window.addEventListener("focus", sync);
    window.addEventListener("storage", sync);
    window.addEventListener("sam_auth_change", sync);
    return () => {
      window.removeEventListener("focus", sync);
      window.removeEventListener("storage", sync);
      window.removeEventListener("sam_auth_change", sync);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className={`nav-pill ${isOpen ? "is-open" : ""}`}>
        <div className="nav-header">
          <Link className="nav-logo" to="/" onClick={handleLinkClick}>
            <span className="logo-mark">SAM</span>
            <span className="logo-text">SARC IITB</span>
          </Link>
          
          <button 
            className={`nav-toggle-btn ${isOpen ? "active" : ""}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        <div className={`nav-menu ${isOpen ? "show" : ""}`}>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link className="nav-link" to={link.path} onClick={handleLinkClick}>{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* Auth slot */}
          <div className="nav-auth">
            {user ? (
              <div className="nav-user">
                <Link to="/profile" className="nav-user-chip" onClick={handleLinkClick}>
                  <span className="nav-role-icon">
                    {user.avatar ? (
                      <img src={user.avatar} alt="Avatar" className="nav-avatar-img" />
                    ) : (
                      ROLE_ICONS[user.role] || <UserIcon />
                    )}
                  </span>
                  <span className="nav-username">{user.first_name || user.username}</span>
                </Link>
              </div>
            ) : (
              <Link to="/register" className="nav-register-btn" onClick={handleLinkClick}>Register / Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}