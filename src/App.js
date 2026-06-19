import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Testimonials from "./Components/Testimonials";
import AboutAlumni  from "./Components/Alumni_contact";
import Navbar       from "./Components/Navbar";
import Home         from "./Components/Home";
import SarcContact  from "./Components/Sarc_contact";
import Events       from "./Components/Events";
import Auth         from "./Components/Auth";
import Profile      from "./Components/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/events"     element={<Events />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/register"   element={<Auth />} />
          <Route path="/profile"    element={<Profile />} />
          <Route path="/contact"    element={<SarcContact />} />
          <Route path="/alumni"     element={<AboutAlumni />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;