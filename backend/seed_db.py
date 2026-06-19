import os
import django
from datetime import datetime

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sam_backend.settings')
django.setup()

from apps.users.models import User
from apps.events.models import CityEvent
from apps.alumni.models import AlumniProfile
from apps.core.models import SarcTeamMember, Testimonial, MemoryPhoto, FAQ

def seed_data():
    print("Seeding database...")

    # 1. Superuser
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser('admin', 'admin@sarc-iitb.org', 'admin123', role='admin')
        print("Superuser created: admin/admin123")

    # 2. City Events
    cities_data = [
        {
            "city": "Mumbai",
            "address": "IIT Bombay Alumni Centre, Powai, Mumbai",
            "event_date": datetime.strptime("2026-07-12", "%Y-%m-%d").date(),
            "day_of_week": "Sunday",
            "time_slot": "10:00 AM - 1:00 PM"
        },
        {
            "city": "Pune",
            "address": "IITB Alumni Chapter Hall, Shivajinagar, Pune",
            "event_date": datetime.strptime("2026-07-14", "%Y-%m-%d").date(),
            "day_of_week": "Tuesday",
            "time_slot": "11:00 AM - 2:00 PM"
        },
        {
            "city": "Jaipur",
            "address": "Rajasthan International Centre, Jaipur",
            "event_date": datetime.strptime("2026-07-16", "%Y-%m-%d").date(),
            "day_of_week": "Thursday",
            "time_slot": "10:30 AM - 1:30 PM"
        },
        {
            "city": "Delhi",
            "address": "India Habitat Centre, New Delhi",
            "event_date": datetime.strptime("2026-07-18", "%Y-%m-%d").date(),
            "day_of_week": "Saturday",
            "time_slot": "11:00 AM - 2:00 PM"
        },
        {
            "city": "Indore",
            "address": "Brilliant Convention Centre, Indore",
            "event_date": datetime.strptime("2026-07-20", "%Y-%m-%d").date(),
            "day_of_week": "Monday",
            "time_slot": "10:00 AM - 1:00 PM"
        }
    ]

    for city in cities_data:
        obj, created = CityEvent.objects.get_or_create(city=city["city"], defaults=city)
        if created:
            print(f"Created Event: {obj}")

    # 3. FAQs
    faqs_data = [
        {
            "question": "How tough is the first year really?",
            "answer": "It can feel overwhelming in the beginning, but most students adjust once they find friends, routines, and seniors to guide them. The key is not trying to figure everything out alone.",
            "order": 1
        },
        {
            "question": "How do I find my people at IITB?",
            "answer": "Talk to people in your hostel, classes, clubs, and events. Friendships usually happen naturally when you start showing up, exploring, and being open to conversations.",
            "order": 2
        },
        {
            "question": "Which branches have the best opportunities?",
            "answer": "Every branch has opportunities at IITB. What matters more is how you explore skills, projects, clubs, internships, and networks beyond just your department.",
            "order": 3
        },
        {
            "question": "How are internships here?",
            "answer": "Internships can come through departments, professors, clubs, seniors, alumni, personal projects, and company processes. Starting early with skill-building makes a big difference.",
            "order": 4
        },
        {
            "question": "What do you wish you knew before coming to IITB?",
            "answer": "That IITB is much more than academics. The people, clubs, failures, late-night discussions, and alumni network shape your journey as much as courses do.",
            "order": 5
        }
    ]

    for faq in faqs_data:
        obj, created = FAQ.objects.get_or_create(question=faq["question"], defaults=faq)
        if created:
            print(f"Created FAQ: {obj}")

    # 4. Memory Photos
    memories_data = [
        {"caption": "Real talks, real impact.", "city": "Pune"},
        {"caption": "Stories that inspire.", "city": "Jaipur"},
        {"caption": "Different cities, same bond.", "city": "Mumbai"},
        {"caption": "Connections that turn into family.", "city": "Delhi"}
    ]

    for mem in memories_data:
        obj, created = MemoryPhoto.objects.get_or_create(caption=mem["caption"], city=mem["city"])
        if created:
            print(f"Created Memory: {obj}")

    # 5. Testimonials
    testimonials_data = [
        {
            "name": "Aadit Sule",
            "city": "Pune",
            "mood": "Inspired before campus",
            "text": "Student Alumni Meet (SAM), organised in Pune by the Student Alumni Relations Cell (SARC), was truly a memorable experience for me. I got a chance to meet the alumni of IITB even before I stepped on our campus. The alums shared stories from their time at IITB and gave us tips on making friends and balancing studies with fun activities. The event ended with alumni sharing their career journeys, offering us advice, and reminding us of the strong IITB network. It was an inspiring and motivating day, making me feel proud and excited to be part of the IITB community."
        },
        {
            "name": "Amit Bhartiya",
            "city": "SAM Meet",
            "mood": "First connection to IITB",
            "text": "The Student Alumni Meet was my first event connecting me to IIT Bombay and introducing me to SARC. It was an enriching experience interacting with numerous alumni from different batches and branches, who shared their diverse and extensive experiences. Engaging with alumni working in various career fields provided me with valuable insights. Learning about the upcoming campus life and culture was truly exciting. Watching alumni interact like old friends and share their college memories was incredibly inspiring."
        },
        {
            "name": "Krish Gupta",
            "city": "Jaipur",
            "mood": "Warm and welcoming",
            "text": "I had the pleasure of attending a student-alumni meetup in Jaipur a year ago, held at an alumnus's house. The event was a wonderful opportunity for upcoming freshers to meet and interact with the alumni of IIT Bombay. The atmosphere was warm and welcoming, with a cozy setting that made it easy for everyone to mingle and have meaningful conversations. The alumni were approachable and eager to help, making the freshers feel supported and motivated."
        },
        {
            "name": "Darsh Patel",
            "city": "Pune",
            "mood": "A strong start",
            "text": "I arrived at the Ideas to Impact Hub in Pune for the IITB Student Alumni Meet. Surprisingly early, I met alumni from the 1980s. They welcomed me warmly, reminiscing about their IITB days. Over breakfast, we shared stories, alumni pride, hostel memories, and the changing times at IITB. Discussions ranged from campus life to career advice, highlighting IITB's strong alumni network and global reputation. It was an inspiring start to my IITB journey."
        },
        {
            "name": "Aniruddha Sharma",
            "city": "SAM 2023",
            "mood": "Unexpectedly amazing",
            "text": "I attended SAM in mid-August 2023. It was a great experience meeting people even before coming to the institute, and most importantly, meeting the alumni. To my surprise, I found some amazing people there whom I did not expect to meet. Definitely, it was a good experience."
        }
    ]

    for test in testimonials_data:
        obj, created = Testimonial.objects.get_or_create(name=test["name"], defaults=test)
        if created:
            print(f"Created Testimonial: {obj}")

    # 6. Alumni Profiles
    alumni_data = [
        {
            "name": "Rahul Verma",
            "city": "Mumbai",
            "background": "B.Tech Computer Science, Class of 2014",
            "experience": "VP of Engineering at a FinTech firm. Leads a team of 50+ developers building scalable payment gateways."
        },
        {
            "name": "Anjali Desai",
            "city": "Mumbai",
            "background": "Dual Degree Electrical Engineering, Class of 2018",
            "experience": "Machine Learning Engineer at a top tech giant. Specializes in predictive algorithms and data modeling."
        },
        {
            "name": "Vikram Singh",
            "city": "Mumbai",
            "background": "B.Tech Mechanical Engineering, Class of 2010",
            "experience": "Founder of a robotics startup optimizing warehouse logistics and automated supply chains."
        },
        {
            "name": "Siddharth Patil",
            "city": "Pune",
            "background": "B.Tech Computer Science, Class of 2016",
            "experience": "Technical Director at a gaming studio. Specializes in 3D rendering pipelines and real-time physics engines."
        },
        {
            "name": "Neha Joshi",
            "city": "Pune",
            "background": "B.Tech Civil Engineering, Class of 2019",
            "experience": "Smart City Consultant. Works with local governments to design sustainable urban infrastructure."
        },
        {
            "name": "Amit Desai",
            "city": "Pune",
            "background": "M.Tech Chemical Engineering, Class of 2010",
            "experience": "Director of Research at GreenEnergy Labs. 10+ years in sustainable energy and battery solutions."
        },
        {
            "name": "Aditya Sharma",
            "city": "Jaipur",
            "background": "B.Tech Metallurgical Engineering, Class of 2016",
            "experience": "Supply Chain Manager for a global manufacturing brand, focusing on raw material procurement."
        },
        {
            "name": "Pooja Agarwal",
            "city": "Jaipur",
            "background": "M.Sc Chemistry, Class of 2017",
            "experience": "Research Scientist focusing on developing eco-friendly and biodegradable packaging materials."
        },
        {
            "name": "Karan Mehra",
            "city": "Jaipur",
            "background": "B.Tech Electrical Engineering, Class of 2017",
            "experience": "Founder of an audio tech startup developing advanced sound engineering software and VST plugins."
        },
        {
            "name": "Sanya Kapoor",
            "city": "Delhi",
            "background": "B.Des, Class of 2018",
            "experience": "Lead UI/UX Designer at a top product agency, crafting mobile experiences and social profile platforms."
        },
        {
            "name": "Rohan Bhatia",
            "city": "Delhi",
            "background": "B.Tech Aerospace Engineering, Class of 2013",
            "experience": "Partner at a prominent Venture Capital firm investing in early-stage DeepTech and SaaS startups."
        },
        {
            "name": "Kiran Rao",
            "city": "Delhi",
            "background": "M.Tech Energy Systems, Class of 2016",
            "experience": "Policy Advisor working closely with governmental bodies on renewable energy implementation."
        },
        {
            "name": "Amit Jain",
            "city": "Indore",
            "background": "B.Tech Mechanical Engineering, Class of 2015",
            "experience": "Operations Head at a major automotive manufacturing plant, overseeing quality control and automation."
        },
        {
            "name": "Shruti Tiwari",
            "city": "Indore",
            "background": "B.Tech Computer Science, Class of 2021",
            "experience": "Software Development Engineer at a major e-commerce platform. Active contributor to open-source projects."
        },
        {
            "name": "Prakash Choudhary",
            "city": "Indore",
            "background": "Dual Degree Civil Engineering, Class of 2014",
            "experience": "Director of a prominent infrastructure and construction firm managing highway development projects."
        }
    ]

    for alum in alumni_data:
        obj, created = AlumniProfile.objects.get_or_create(name=alum["name"], defaults=alum)
        if created:
            print(f"Created Alumni Profile: {obj}")

    # 7. SARC Team Members
    team_data = [
        # Overall Coordinator
        {"name": "Kabeer Pawar", "role": "Overall Coordinator", "portfolio": "EVENTS"},
        # ASMP
        {"name": "Bhavya Upadhyay", "role": "Manager", "portfolio": "ASMP"},
        {"name": "Kartavya Gupta", "role": "Manager", "portfolio": "ASMP"},
        # DESIGN
        {"name": "Shreyansh Singh", "role": "Manager", "portfolio": "DESIGN"},
        {"name": "Shravanee", "role": "Manager", "portfolio": "DESIGN"},
        # EVENTS
        {"name": "Naitik Agarwal", "role": "Manager", "portfolio": "EVENTS"},
        {"name": "Neeraj Wankhede", "role": "Manager", "portfolio": "EVENTS"},
        # HDA
        {"name": "Kartikey Mittal", "role": "Manager", "portfolio": "HDA"},
        {"name": "Utkarsh Bansal", "role": "Manager", "portfolio": "HDA"},
        # MARKETING
        {"name": "Siya Sarda", "role": "Manager", "portfolio": "MARKETING"},
        {"name": "Seshvar", "role": "Manager", "portfolio": "MARKETING"},
        # MPR
        {"name": "Sumit Jeengar", "role": "Manager", "portfolio": "MPR"},
        {"name": "Disha Agarwal", "role": "Manager", "portfolio": "MPR"},
        # OPERATIONS
        {"name": "Atharva Ballal", "role": "Manager", "portfolio": "OPERATIONS"},
        {"name": "Alok Raj", "role": "Manager", "portfolio": "OPERATIONS"},
        # WEB
        {"name": "Indrani Sahu", "role": "Manager", "portfolio": "WEB"}
    ]

    for tm in team_data:
        obj, created = SarcTeamMember.objects.get_or_create(name=tm["name"], portfolio=tm["portfolio"], defaults=tm)
        if created:
            print(f"Created Team Member: {obj}")

    print("Seeding finished successfully!")

if __name__ == '__main__':
    seed_data()
