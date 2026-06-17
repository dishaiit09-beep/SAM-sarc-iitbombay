import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />

      <section id="home" className="hero-section">
        <p className="eyebrow">SARC IIT Bombay presents</p>
        <h1>SAM 2026</h1>
        <h2>Student Alumni Meet</h2>
        <p className="hero-text">
          Where IITB’s legacy meets its future.
        </p>
      </section>
    </div>
  );
}

export default App;