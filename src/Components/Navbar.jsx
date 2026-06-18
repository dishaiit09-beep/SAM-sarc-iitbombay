import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Gallery", path: "/gallery" },
  { name: "Register/Login", path: "/register" },
  { name: "Contact Us", path: "/contact" },
  { name: "About alumni", path: "/alumni" },
  
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-pill">
        <Link className="nav-logo" to="/">
          <span className="logo-mark">SAM</span>
          <span className="logo-text">SARC IITB</span>
        </Link>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name}>
              <Link className="nav-link" to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}