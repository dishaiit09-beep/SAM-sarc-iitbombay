import React, { useEffect, useState } from "react";
import "./Events.css";

const qaItems = [
  {
    question: "How tough is the first year really?",
    answer:
      "It can feel overwhelming in the beginning, but most students adjust once they find friends, routines, and seniors to guide them. The key is not trying to figure everything out alone.",
  },
  {
    question: "How do I find my people at IITB?",
    answer:
      "Talk to people in your hostel, classes, clubs, and events. Friendships usually happen naturally when you start showing up, exploring, and being open to conversations.",
  },
  {
    question: "Which branches have the best opportunities?",
    answer:
      "Every branch has opportunities at IITB. What matters more is how you explore skills, projects, clubs, internships, and networks beyond just your department.",
  },
  {
    question: "How are internships here?",
    answer:
      "Internships can come through departments, professors, clubs, seniors, alumni, personal projects, and company processes. Starting early with skill-building makes a big difference.",
  },
  {
    question: "What do you wish you knew before coming to IITB?",
    answer:
      "That IITB is much more than academics. The people, clubs, failures, late-night discussions, and alumni network shape your journey as much as courses do.",
  },
];

const campusHotspots = [
  {
    title: "Hostels",
    text: "Roommates, wing culture, late-night talks, and your first IITB family.",
    className: "hotspot-hostels",
  },
  {
    title: "Lecture Halls",
    text: "Where academics begins — from first quizzes to core memories.",
    className: "hotspot-lectures",
  },
  {
    title: "Clubs",
    text: "Explore design, tech, cult, sports, entrepreneurship, media, and more.",
    className: "hotspot-clubs",
  },
  {
    title: "Library",
    text: "Study sessions, deadlines, peaceful corners, and exam-season energy.",
    className: "hotspot-library",
  },
  {
    title: "Alumni Network",
    text: "A lifelong network of guidance, mentorship, stories, and opportunities.",
    className: "hotspot-alumni",
  },
];

const compassPaths = [
  "Research",
  "Startups",
  "Tech",
  "Finance",
  "Higher Studies",
  "Consulting",
  "Core",
];

const memoryPhotos = [
  {
    image: "/events/memory1.jpg",
    caption: "Real talks, real impact.",
    city: "Pune",
  },
  {
    image: "/events/memory2.jpg",
    caption: "Stories that inspire.",
    city: "Jaipur",
  },
  {
    image: "/events/memory3.jpg",
    caption: "Different cities, same bond.",
    city: "Mumbai",
  },
  {
    image: "/events/memory4.jpg",
    caption: "Connections that turn into family.",
    city: "Delhi",
  },
];

export default function Events() {
  const [activeQuestion, setActiveQuestion] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".event-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("event-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="events-page">
      <section className="events-hero event-reveal">
        <div className="events-hero-content">
          <p className="events-kicker">EVENTS AT SAM</p>

          <h1>Your IITB journey begins before you reach campus.</h1>

          <p className="events-hero-text">
            SAM is not just a meet. It is your first arrival, first guidance,
            first questions, first alumni interaction, and first memory of the
            IIT Bombay family.
          </p>

          <div className="events-hero-actions">
            <a href="#event-flow" className="events-btn primary">
              Explore the Journey
            </a>

            <a href="#memories" className="events-btn secondary">
              See Memories
            </a>
          </div>
        </div>

        <div className="golden-pass-wrap">
          <div className="golden-pass">
            <div className="pass-top">ALL ACCESS PASS</div>
            <h2>SAM</h2>
            <h3>2026</h3>
            <p>Student Alumni Meet</p>
            <span>IIT Bombay</span>
            <div className="barcode"></div>
          </div>

          <div className="orbit-icon icon-one">Talks</div>
          <div className="orbit-icon icon-two">Campus</div>
          <div className="orbit-icon icon-three">Q&amp;A</div>
          <div className="orbit-icon icon-four">Alumni</div>
          <div className="orbit-icon icon-five">Memories</div>
        </div>
      </section>

      <section className="campus-decode event-reveal" id="event-flow">
        <div className="section-copy">
          <span className="section-number">01</span>
          <p className="events-kicker">CAMPUS DECODE</p>
          <h2>We decode IITB life for you.</h2>
          <p>
            Current students and alumni explain the real campus experience —
            academics, hostels, clubs, pressure, internships, friendships, and
            how to explore beyond branch.
          </p>
        </div>

        <div className="campus-map">
          <div className="map-grid"></div>
          <div className="campus-title-chip">IITB Life Map</div>

          <div className="map-road road-one"></div>
          <div className="map-road road-two"></div>
          <div className="map-road road-three"></div>

          <div className="map-lake"></div>

          <div className="map-building building-one"></div>
          <div className="map-building building-two"></div>
          <div className="map-building building-three"></div>
          <div className="map-building building-four"></div>
          <div className="map-building building-five"></div>
          <div className="map-building building-six"></div>
          <div className="map-building building-seven"></div>
          <div className="map-building building-eight"></div>

          <div className="map-tree tree-one"></div>
          <div className="map-tree tree-two"></div>
          <div className="map-tree tree-three"></div>
          <div className="map-tree tree-four"></div>
          <div className="map-tree tree-five"></div>
          <div className="map-tree tree-six"></div>

          {campusHotspots.map((item) => (
            <div className={`map-hotspot ${item.className}`} key={item.title}>
              <button type="button">{item.title}</button>

              <div className="hotspot-info">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}

          <div className="map-compass-small">N</div>
        </div>
      </section>

      <section className="qa-section event-reveal">
        <div className="section-copy">
          <span className="section-number">02</span>
          <p className="events-kicker">NO-FILTER Q&amp;A</p>
          <h2>Ask anything. Get real answers.</h2>
          <p>
            From academics to friendships, branch doubts to internships —
            students can ask what they actually want to know.
          </p>
        </div>

        <div className="qa-board">
          <div className="qa-bubbles">
            {qaItems.map((item, index) => (
              <button
                type="button"
                key={item.question}
                className={`qa-bubble ${
                  activeQuestion === index ? "active" : ""
                }`}
                onClick={() => setActiveQuestion(index)}
              >
                {item.question}
              </button>
            ))}
          </div>

          <div className="answer-card">
            <p className="answer-label">Dummy Answer</p>
            <h3>{qaItems[activeQuestion].question}</h3>
            <p>{qaItems[activeQuestion].answer}</p>
          </div>
        </div>
      </section>

      <section className="career-compass-section event-reveal">
        <div className="section-copy">
          <span className="section-number">03</span>
          <p className="events-kicker">CAREER COMPASS</p>
          <h2>Map your future. Find your direction.</h2>
          <p>
            Alumni show that life after IITB has many directions — research,
            startups, core, consulting, finance, tech, higher studies, and more.
          </p>
        </div>

        <div className="compass-area">
          <div className="compass-ring">
            <div className="compass-needle"></div>
            <div className="compass-center"></div>
          </div>

          <div className="path-labels">
            {compassPaths.map((path, index) => (
              <span className={`path path-${index + 1}`} key={path}>
                {path}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="memory-section event-reveal" id="memories">
        <div className="memory-copy">
          <span className="section-number">04</span>
          <p className="events-kicker">MEMORIES THAT STAY</p>
          <h2>From one event to a lifelong network.</h2>
          <p>
            Every SAM creates warm first memories — real conversations, alumni
            stories, city meetups, and people you may remember long after the
            event ends.
          </p>
        </div>

        <div className="polaroid-wall">
          {memoryPhotos.map((photo, index) => (
            <article
              className={`polaroid polaroid-${index + 1}`}
              key={photo.caption}
            >
              <div className="tape"></div>

              <div
                className="polaroid-photo"
                style={{ backgroundImage: `url(${photo.image})` }}
                aria-label={`${photo.city} SAM memory`}
              ></div>

              <p>{photo.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="events-final-cta event-reveal">
        <div>
          <p>SAM 2026</p>
          <h2>One weekend can change the way you enter IIT Bombay.</h2>
        </div>

        <a href="#event-flow" className="events-btn primary">
          Start the Journey
        </a>
      </section>
    </main>
  );
}