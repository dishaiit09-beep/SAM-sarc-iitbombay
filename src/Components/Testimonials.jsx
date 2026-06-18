import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Aadit Sule",
    city: "Pune",
    mood: "Inspired before campus",
    text: "Student Alumni Meet (SAM), organised in Pune by the Student Alumni Relations Cell (SARC), was truly a memorable experience for me. I got a chance to meet the alumni of IITB even before I stepped on our campus. The alums shared stories from their time at IITB and gave us tips on making friends and balancing studies with fun activities. The event ended with alumni sharing their career journeys, offering us advice, and reminding us of the strong IITB network. It was an inspiring and motivating day, making me feel proud and excited to be part of the IITB community.",
  },
  {
    name: "Amit Bhartiya",
    city: "SAM Meet",
    mood: "First connection to IITB",
    text: "The Student Alumni Meet was my first event connecting me to IIT Bombay and introducing me to SARC. It was an enriching experience interacting with numerous alumni from different batches and branches, who shared their diverse and extensive experiences. Engaging with alumni working in various career fields provided me with valuable insights. Learning about the upcoming campus life and culture was truly exciting. Watching alumni interact like old friends and share their college memories was incredibly inspiring.",
  },
  {
    name: "Krish Gupta",
    city: "Jaipur",
    mood: "Warm and welcoming",
    text: "I had the pleasure of attending a student-alumni meetup in Jaipur a year ago, held at an alumnus's house. The event was a wonderful opportunity for upcoming freshers to meet and interact with the alumni of IIT Bombay. The atmosphere was warm and welcoming, with a cozy setting that made it easy for everyone to mingle and have meaningful conversations. The alumni were approachable and eager to help, making the freshers feel supported and motivated.",
  },
  {
    name: "Darsh Patel",
    city: "Pune",
    mood: "A strong start",
    text: "I arrived at the Ideas to Impact Hub in Pune for the IITB Student Alumni Meet. Surprisingly early, I met alumni from the 1980s. They welcomed me warmly, reminiscing about their IITB days. Over breakfast, we shared stories, alumni pride, hostel memories, and the changing times at IITB. Discussions ranged from campus life to career advice, highlighting IITB's strong alumni network and global reputation. It was an inspiring start to my IITB journey.",
  },
  {
    name: "Aniruddha Sharma",
    city: "SAM 2023",
    mood: "Unexpectedly amazing",
    text: "I attended SAM in mid-August 2023. It was a great experience meeting people even before coming to the institute, and most importantly, meeting the alumni. To my surprise, I found some amazing people there whom I did not expect to meet. Definitely, it was a good experience.",
  },
];

export default function Testimonials() {
  return (
    <main className="testimonials-page">
      <section className="testimonials-hero">
        <p className="testimonials-kicker">TESTIMONIALS</p>
        <h1>Memory Wall</h1>
        <p>
          Stories from students who met the IIT Bombay alumni network even
          before stepping into campus.
        </p>
      </section>

      <section className="scrapbook-wall">
        {testimonials.map((item, index) => (
          <article className={`memory-card memory-${index + 1}`} key={item.name}>
            <div className="paper-tape"></div>

            <div className="stamp-row">
              <span>{item.city}</span>
              <span>SAM</span>
            </div>

            <div className="quote-symbol">“</div>

            <p className="memory-text">{item.text}</p>

            <div className="memory-footer">
              <div>
                <h3>{item.name}</h3>
                <p>{item.mood}</p>
              </div>
              <span className="pin-dot"></span>
            </div>
          </article>
        ))}
      </section>

      <section className="testimonial-end-note">
        <p>
          Before lectures, hostels, and campus walks — SAM becomes the first
          real glimpse of the IIT Bombay family.
        </p>
      </section>
    </main>
  );
}