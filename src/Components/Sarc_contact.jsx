import React from "react";
import "./Sarc_contact.css";

const coordinators = [
  {
    name: "Kabeer Pawar",
    role: "Overall Coordinator",
    image: "/team/kabeer.png",
    whatsapp: "https://wa.me/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
];

const teams = [
  {
    portfolio: "ASMP",
    members: [
      {
        name: "Bhavya Upadhyay",
        image: "/team/BhavyaUpadhyay.jpg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Kartavya Gupta",
        image: "/team/Kartavya.jpeg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    portfolio: "DESIGN",
    members: [
      {
        name: "Shreyansh Singh",
        image: "/team/Shreyansh_Singh.jpg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Shravanee",
        image: "/team/Shravanee_Design.jpeg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    portfolio: "EVENTS",
    members: [
      {
        name: "Naitik Agarwal",
        image: "/team/Naitik_Agarwal_Events.jpg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Neeraj Wankhede",
        image: "/team/Neeraj_events.jpg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    portfolio: "HOSTEL & DEPARTMENT AFFAIRS",
    members: [
      {
        name: "Kartikey Mittal",
        image: "/team/Kartikey_Mittal_HDA.jpg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Utkarsh Bansal",
        image: "/team/UtkarshBansal.jpeg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    portfolio: "MARKETING",
    members: [
      {
        name: "Siya Sarda",
        image: "/team/Siya.jpg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Seshvar",
        image: "/team/Seshvar.jpg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    portfolio: "MEDIA & PR",
    members: [
      {
        name: "Sumit Jeengar",
        image: "/team/Sumit_MPR_CTM.jpg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Disha Agarwal",
        image: "/team/DishaMPR.jpeg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    portfolio: "OPERATIONS",
    members: [
      {
        name: "Atharva Ballal",
        image: "/team/AtharvaBallal.jpg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
      {
        name: "Alok Raj",
        image: "/team/Alok.JPG",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
  {
    portfolio: "WEB",
    members: [
      {
        name: "Indrani Sahu",
        image: "/team/Indrani.jpeg",
        whatsapp: "https://wa.me/",
        instagram: "https://instagram.com/",
        linkedin: "https://linkedin.com/",
      },
    ],
  },
];

function SocialLinks({ member }) {
  return (
    <div className="social-links">
      <a
        href={member.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label={`${member.name} WhatsApp`}
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      <a
        href={member.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label={`${member.name} Instagram`}
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label={`${member.name} LinkedIn`}
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
    </div>
  );
}

export default function SarcContact() {
  return (
    <section className="sarc-contact" id="contact">
      <div className="contact-title">
        <h1>SARC 2026-27 TEAM</h1>
      </div>

      <div className="contact-divider"></div>

      <div className="overall-section">
        <h2>OVERALL COORDINATOR</h2>

        {coordinators.map((member) => (
          <div className="overall-card" key={member.name}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <SocialLinks member={member} />
          </div>
        ))}
      </div>

      <div className="team-sections">
        {teams.map((team) => (
          <div className="portfolio-block" key={team.portfolio}>
            <h2>{team.portfolio}</h2>

            <div
              className={`members-grid ${
                team.members.length === 1 ? "single-member-grid" : ""
              }`}
            >
              {team.members.map((member) => (
                <div className="member-card" key={member.name}>
                  <img src={member.image} alt={member.name} />
                  <h3>{member.name}</h3>
                  <SocialLinks member={member} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}