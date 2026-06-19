import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Testimonials from "./Components/Testimonials";
import AboutAlumni from "./Components/Alumni_contact";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SarcContact from "./Components/Sarc_contact";
import Events from "./Components/Events";

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
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/register" element={<ComingSoon title="Register/Login" />} />
          <Route path="/contact" element={<SarcContact />} />
          <Route path="/alumni" element={<AboutAlumni />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;