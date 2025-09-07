// Events data for the IEEE Committee
export const EVENTS = [
  {
    id: 1,
    title: "IEEE Tech Symposium 2024",
    description: "Join us for our annual technical symposium featuring cutting-edge research presentations, industry talks, and networking opportunities.",
    date: "2024-03-15",
    time: "09:00 AM - 05:00 PM",
    location: "AISSMS COE Auditorium",
    type: "conference",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop&auto=format",
    speakers: [
      { name: "Dr. Sarah Johnson", title: "AI Research Lead, Tech Corp" },
      { name: "Prof. Michael Chen", title: "Professor, MIT" }
    ],
    tags: ["AI", "Machine Learning", "Research"],
    registrationLink: "https://forms.gle/example1",
    maxAttendees: 200,
    currentAttendees: 150
  },
  {
    id: 2,
    title: "IoT Workshop Series",
    description: "Hands-on workshop series covering Internet of Things fundamentals, Arduino programming, and sensor integration.",
    date: "2024-02-20",
    time: "02:00 PM - 06:00 PM",
    location: "Computer Lab 3",
    type: "workshop",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&auto=format",
    speakers: [
      { name: "Yashovardhan Padthare", title: "Technical Head, IEEE" }
    ],
    tags: ["IoT", "Arduino", "Sensors", "Programming"],
    registrationLink: "https://forms.gle/example2",
    maxAttendees: 30,
    currentAttendees: 25
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    description: "Intensive 3-day bootcamp covering modern web development technologies including React, Node.js, and MongoDB.",
    date: "2024-01-25",
    time: "10:00 AM - 04:00 PM",
    location: "Online - Zoom",
    type: "bootcamp",
    status: "completed",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&auto=format",
    speakers: [
      { name: "Sharvil Nikam", title: "Technical Secretary, IEEE" },
      { name: "Alex Johnson", title: "Senior Developer, Google" }
    ],
    tags: ["Web Development", "React", "Node.js", "MongoDB"],
    registrationLink: null,
    maxAttendees: 50,
    currentAttendees: 50
  },
  {
    id: 4,
    title: "IEEE Student Branch Meeting",
    description: "Monthly committee meeting to discuss upcoming events, project updates, and member activities.",
    date: "2024-02-10",
    time: "03:00 PM - 04:30 PM",
    location: "IEEE Office",
    type: "meeting",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&auto=format",
    speakers: [
      { name: "Mrunal Thakre", title: "Vice-Chair, IEEE" }
    ],
    tags: ["Meeting", "Committee", "Planning"],
    registrationLink: null,
    maxAttendees: 20,
    currentAttendees: 15
  },
  {
    id: 5,
    title: "Hackathon 2024",
    description: "48-hour coding competition with exciting prizes. Build innovative solutions to real-world problems.",
    date: "2024-04-05",
    time: "06:00 PM - 06:00 PM (48 hours)",
    location: "Computer Labs 1-4",
    type: "hackathon",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&auto=format",
    speakers: [
      { name: "Mukti Pawar", title: "Event Management Head, IEEE" }
    ],
    tags: ["Hackathon", "Coding", "Competition", "Innovation"],
    registrationLink: "https://forms.gle/example3",
    maxAttendees: 100,
    currentAttendees: 75
  },
  {
    id: 6,
    title: "Industry Expert Talk: Future of AI",
    description: "Interactive session with industry experts discussing the future of artificial intelligence and career opportunities.",
    date: "2024-01-15",
    time: "11:00 AM - 12:30 PM",
    location: "Seminar Hall",
    type: "talk",
    status: "completed",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&auto=format",
    speakers: [
      { name: "Dr. Priya Sharma", title: "AI Research Scientist, Microsoft" },
      { name: "Rajesh Kumar", title: "Tech Lead, Amazon" }
    ],
    tags: ["AI", "Career", "Industry", "Expert Talk"],
    registrationLink: null,
    maxAttendees: 150,
    currentAttendees: 120
  }
];

export const EVENT_TYPES = {
  conference: { label: 'Conference', color: 'bg-blue-100 text-blue-800' },
  workshop: { label: 'Workshop', color: 'bg-green-100 text-green-800' },
  bootcamp: { label: 'Bootcamp', color: 'bg-purple-100 text-purple-800' },
  meeting: { label: 'Meeting', color: 'bg-gray-100 text-gray-800' },
  hackathon: { label: 'Hackathon', color: 'bg-red-100 text-red-800' },
  talk: { label: 'Expert Talk', color: 'bg-yellow-100 text-yellow-800' }
};

export const EVENT_STATUS = {
  upcoming: { label: 'Upcoming', color: 'bg-green-100 text-green-800' },
  ongoing: { label: 'Ongoing', color: 'bg-blue-100 text-blue-800' },
  completed: { label: 'Completed', color: 'bg-gray-100 text-gray-800' },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-800' }
};
