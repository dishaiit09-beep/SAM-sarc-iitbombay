import React from 'react';
import profileImage from '../images/profile.png';

function AboutAlumni(){

  const alumniData = [
    {
    id: 1,
    name: "Rahul Verma",
    city: "Mumbai",
    background: "B.Tech Computer Science, Class of 2014",
    experience: "VP of Engineering at a FinTech firm. Leads a team of 50+ developers building scalable payment gateways.",
    imageUrl: profileImage
  },
  {
    id: 2,
    name: "Anjali Desai",
    city: "Mumbai",
    background: "Dual Degree Electrical Engineering, Class of 2018",
    experience: "Machine Learning Engineer at a top tech giant. Specializes in predictive algorithms and data modeling.",
    imageUrl: profileImage
  },
  {
    id: 3,
    name: "Vikram Singh",
    city: "Mumbai",
    background: "B.Tech Mechanical Engineering, Class of 2010",
    experience: "Founder of a robotics startup optimizing warehouse logistics and automated supply chains.",
    imageUrl: profileImage
  },

  // --- PUNE ---
  {
    id: 4,
    name: "Siddharth Patil",
    city: "Pune",
    background: "B.Tech Computer Science, Class of 2016",
    experience: "Technical Director at a gaming studio. Specializes in 3D rendering pipelines and real-time physics engines.",
    imageUrl: profileImage
  },
  {
    id: 5,
    name: "Neha Joshi",
    city: "Pune",
    background: "B.Tech Civil Engineering, Class of 2019",
    experience: "Smart City Consultant. Works with local governments to design sustainable urban infrastructure.",
    imageUrl: profileImage
  },
  {
    id: 6,
    name: "Amit Desai",
    city: "Pune",
    background: "M.Tech Chemical Engineering, Class of 2010",
    experience: "Director of Research at GreenEnergy Labs. 10+ years in sustainable energy and battery solutions.",
    imageUrl: profileImage
  },

  // --- JAIPUR ---
  {
    id: 7,
    name: "Aditya Sharma",
    city: "Jaipur",
    background: "B.Tech Metallurgical Engineering, Class of 2016",
    experience: "Supply Chain Manager for a global manufacturing brand, focusing on raw material procurement.",
    imageUrl: profileImage
  },
  {
    id: 8,
    name: "Pooja Agarwal",
    city: "Jaipur",
    background: "M.Sc Chemistry, Class of 2017",
    experience: "Research Scientist focusing on developing eco-friendly and biodegradable packaging materials.",
    imageUrl: profileImage
  },
  {
    id: 9,
    name: "Karan Mehra",
    city: "Jaipur",
    background: "B.Tech Electrical Engineering, Class of 2017",
    experience: "Founder of an audio tech startup developing advanced sound engineering software and VST plugins.",
    imageUrl: profileImage
  },

  // --- DELHI ---
  {
    id: 10,
    name: "Sanya Kapoor",
    city: "Delhi",
    background: "B.Des, Class of 2018",
    experience: "Lead UI/UX Designer at a top product agency, crafting mobile experiences and social profile platforms.",
    imageUrl: profileImage
  },
  {
    id: 11,
    name: "Rohan Bhatia",
    city: "Delhi",
    background: "B.Tech Aerospace Engineering, Class of 2013",
    experience: "Partner at a prominent Venture Capital firm investing in early-stage DeepTech and SaaS startups.",
    imageUrl: profileImage
  },
  {
    id: 12,
    name: "Kiran Rao",
    city: "Delhi",
    background: "M.Tech Energy Systems, Class of 2016",
    experience: "Policy Advisor working closely with governmental bodies on renewable energy implementation.",
    imageUrl: profileImage
  },

  // --- INDORE ---
  {
    id: 13,
    name: "Amit Jain",
    city: "Indore",
    background: "B.Tech Mechanical Engineering, Class of 2015",
    experience: "Operations Head at a major automotive manufacturing plant, overseeing quality control and automation.",
    imageUrl: profileImage
  },
  {
    id: 14,
    name: "Shruti Tiwari",
    city: "Indore",
    background: "B.Tech Computer Science, Class of 2021",
    experience: "Software Development Engineer at a major e-commerce platform. Active contributor to open-source projects.",
    imageUrl: profileImage
  },
  {
    id: 15,
    name: "Prakash Choudhary",
    city: "Indore",
    background: "Dual Degree Civil Engineering, Class of 2014",
    experience: "Director of a prominent infrastructure and construction firm managing highway development projects.",
    imageUrl: profileImage
  }
];

  const eventCities = ["Mumbai", "Pune", "Jaipur", "Delhi", "Indore"];

  return (
    <div style={{ padding: '40px', color: '#fff', backgroundColor: '#2f304b', minHeight: '100vh' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '30px' }}>
        <h1 style={{ fontSize: '3rem', textTransform: 'uppercase', marginBottom: '10px' }}>Meet Our Alumni</h1>
        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Get guidance from the esteemed alumni of IIT Bombay. Learn about life after graduation 
          and gain insights into various career paths directly from those who have walked the same halls.
        </p>
      </div>


      <div className="alumni-roster">
        {eventCities.map(city => {
          
          const cityAlumni = alumniData.filter(alum => alum.city === city);

          if (cityAlumni.length === 0) return null;

          return (
            <div key={city} style={{ marginBottom: '50px' }}>
              
              <h2 style={{ borderBottom: '4px solid #00ff2a', paddingBottom: '10px', display: 'inline-block' }}>
                {city} 
              </h2>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                {cityAlumni.map(alum => (
                  
              
                  <div key={alum.id} style={{ 
                    backgroundColor: '#3572EF', 
                    borderRadius: '10px', 
                    padding: '20px', 
                    width: '100%', 
                    maxWidth: '350px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                      <img 
                        src={alum.imageUrl} 
                        alt={alum.name} 
                        style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <h3 style={{ margin: '0 0 5px 0', fontSize: '1.3rem' }}>{alum.name}</h3>
                        <span style={{ fontSize: '0.85rem', color: '#F1FF5E', fontWeight: 'bold' }}>{alum.background}</span>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#fff', margin: 0 }}>
                      <strong>Experience:</strong> {alum.experience}
                    </p>
                  </div>

                ))}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default AboutAlumni;