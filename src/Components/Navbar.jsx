import React from "react";
import "./Navbar.css";

const links = [
  { name: "Home", href: "#home" },
  { name: "Events", href: "#events" },
  { name: "Testimonials", href: "#insights" },
  { name: "Gallery", href: "#gallery" },
  { name: "Register/Login", href: "#register" },
  { name: "Contact Us", href: "#contact" },
  { name: "About alumni", href: "#alumni" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-pill">
        <a className="nav-logo" href="#home">
          <span className="logo-mark">SAM</span>
          <span className="logo-text">SARC IITB</span>
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name}>
              <a className="nav-link" href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}