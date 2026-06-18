import React, { useState } from "react";
import "./Home.css";
import CityGlobe from "./CityGlobe";

const cities = [
  {
    city: "Mumbai",
    address: "IIT Bombay Alumni Centre, Powai, Mumbai",
    date: "12 July 2026",
    day: "Sunday",
    time: "10:00 AM - 1:00 PM",
    image: "/cities/mumbai.jpg",
  },
  {
    city: "Pune",
    address: "IITB Alumni Chapter Hall, Shivajinagar, Pune",
    date: "14 July 2026",
    day: "Tuesday",
    time: "11:00 AM - 2:00 PM",
    image: "/cities/pune.jpg",
  },
  {
    city: "Jaipur",
    address: "Rajasthan International Centre, Jaipur",
    date: "16 July 2026",
    day: "Thursday",
    time: "10:30 AM - 1:30 PM",
    image: "/cities/jaipur.jpg",
  },
  {
    city: "Delhi",
    address: "India Habitat Centre, New Delhi",
    date: "18 July 2026",
    day: "Saturday",
    time: "11:00 AM - 2:00 PM",
    image: "/cities/delhi.jpg",
  },
  {
    city: "Indore",
    address: "Brilliant Convention Centre, Indore",
    date: "20 July 2026",
    day: "Monday",
    time: "10:00 AM - 1:00 PM",
    image: "/cities/indore.jpg",
  },
];

const structure = [
  {
    number: "01",
    title: "Alumni Address",
    text: "An alumnus shares a broader perspective on life after graduating from IIT Bombay.",
  },
  {
    number: "02",
    title: "Chapter Presentation",
    text: "The city alumni chapter presents its year-round activities and alumni initiatives.",
  },
  {
    number: "03",
    title: "Common Q&A",
    text: "Students and parents ask doubts about academics, campus life, opportunities, and life at IITB.",
  },
];

export default function Home() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);

    setTimeout(() => {
      document.getElementById("city-chapters")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-left">
          <p className="eyebrow">SARC IIT Bombay presents</p>

          <h1 className="hero-title-3d" aria-label="SAM 2026">
  <span>S</span>
  <span>A</span>
  <span>M</span>
  <br />
  <span>2</span>
  <span>0</span>
  <span>2</span>
  <span>6</span>
</h1>

          <h2>Student Alumni Meet</h2>

          <p className="hero-text">
            A city-wise welcome event where incoming IITB students and parents
            meet alumni, understand life at IIT Bombay, and get guidance for the
            journey ahead.
          </p>

          <div className="hero-actions">
            <a href="#city-chapters" className="hero-btn primary">
              Choose Your City
            </a>

            <a href="#about-sam" className="hero-btn secondary">
              Know About SAM
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <CityGlobe cities={cities} onCitySelect={handleCitySelect} />
        </div>
      </section>

      <section className="about-sam" id="about-sam">
        <div className="section-heading">
          <p>ABOUT SAM</p>
          <h2>From Campus Dreams to Alumni Guidance</h2>
        </div>

        <div className="about-layout">
          <div className="about-main-card">
            <h3>What is Student Alumni Meet?</h3>

            <p>
              The Student Alumni Meet is a city-wise welcome event for IIT
              Bombay students. It gives incoming students and their parents an
              opportunity to interact with IITB alumni and understand what life
              looks like after graduating from the institute.
            </p>

            <p>
              Through alumni experiences and inputs from current students, SAM
              helps attendees understand both sides of the journey — the current
              scenario inside the institute and the broader life that awaits
              after IIT Bombay.
            </p>
          </div>

          <div className="about-mini-grid">
            <div className="mini-card">
              <h4>For Students</h4>
              <p>Get guidance, clarity, and confidence before entering IITB.</p>
            </div>

            <div className="mini-card">
              <h4>For Parents</h4>
              <p>Understand campus life, opportunities, and student support.</p>
            </div>

            <div className="mini-card">
              <h4>For Alumni</h4>
              <p>Reconnect with the institute and guide the next generation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="structure-section">
        <div className="section-heading">
          <p>EVENT FLOW</p>
          <h2>How SAM Will Unfold</h2>
        </div>

        <div className="structure-grid">
          {structure.map((item) => (
            <div className="structure-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cities-section" id="city-chapters">
        <div className="section-heading">
          <p>CITY CHAPTERS</p>
          <h2>Choose Your SAM City</h2>
        </div>

        <div className="cities-layout">
          <div className="city-list">
            {cities.map((city) => (
              <button
  key={city.city}
  className={`city-button ${
    selectedCity.city === city.city ? "active" : ""
  }`}
  style={{
    backgroundImage: `linear-gradient(
      135deg,
      rgba(5, 12, 155, 0.74),
      rgba(47, 48, 75, 0.68)
    ), url(${city.image})`,
  }}
  onClick={() => setSelectedCity(city)}
>
  <span>{city.city}</span>
</button>
            ))}
          </div>

         <div
  className="city-detail-card"
  style={{
    backgroundImage: `linear-gradient(
      135deg,
      rgba(5, 12, 155, 0.82),
      rgba(47, 48, 75, 0.72)
    ), url(${selectedCity.image})`,
  }}
>
>
            <p className="city-label">Selected City</p>

            <h3>{selectedCity.city}</h3>

            <div className="detail-row">
              <span>Venue</span>
              <p>{selectedCity.address}</p>
            </div>

            <div className="detail-row">
              <span>Date</span>
              <p>
                {selectedCity.date}, {selectedCity.day}
              </p>
            </div>

            <div className="detail-row">
              <span>Time</span>
              <p>{selectedCity.time}</p>
            </div>

            <button className="register-city-btn">
              Register for {selectedCity.city}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}