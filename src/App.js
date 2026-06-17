import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import SarcContact from "./Components/Sarc_contact";

function HomePage() {
  return (
    <section id="home" className="hero-section">
      <p className="eyebrow">SARC IIT Bombay presents</p>
      <h1>SAM 2026</h1>
      <h2>Student Alumni Meet</h2>
      <p className="hero-text">
        Where IITB’s legacy meets its future.
      </p>
    </section>
  );
}

function ComingSoon({ title }) {
  return (
    <section className="coming-soon-page">
      <h1>{title}</h1>
      <p>This page is coming soon.</p>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<ComingSoon title="Events" />} />
          <Route path="/testimonials" element={<ComingSoon title="Testimonials" />} />
          <Route path="/gallery" element={<ComingSoon title="Gallery" />} />
          <Route path="/register" element={<ComingSoon title="Register/Login" />} />
          <Route path="/contact" element={<SarcContact />} />
          <Route path="/alumni" element={<ComingSoon title="About Alumni" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;