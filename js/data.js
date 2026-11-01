/**
 * js/data.js
 * Single source of truth for all content across Ayushi Sawant's Portfolio.
 * Edit any text, link, score, or project detail right here!
 *
 * NOTE ON WORDING RULE:
 * Ayushi is referred to as "Chess Player" or "chess player" (never "champion").
 * Full name "Ayushi Sawant" is used consistently everywhere.
 */

const portfolioData = {
  // Personal Info
  personal: {
    fullName: "Ayushi Sawant",
    firstName: "Ayushi",
    lastName: "Sawant",
    monogram: "AS",
    location: "Mumbai, India",
    college: "SIES Graduate School of Technology, Nerul, Navi Mumbai",
    branch: "Electronics and Computer Science (ECS)",
    year: "2nd Year",
    title: "Aspiring Developer | Engineering student | Student leader",
    tagline: "I love to learn and discover new things.",
    email: "ayushisawant19@gmail.com",
    github: "https://github.com/ayushisawant19",
    linkedin: "https://www.linkedin.com/in/ayuushii-sawant-415931394",
    // Resume URL: Left empty as requested. When you have a resume PDF, paste the link or relative path here.
    resumeUrl: "", // e.g. "assets/Ayushi_Sawant_Resume.pdf"
    formspreeUrl: "https://formspree.io/f/[ADD FORMSPREE URL]" // Replace [ADD FORMSPREE URL] with your actual Formspree endpoint
  },

  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    name: "Ayushi Sawant",
    typedTitles: [
      "Aspiring Developer",
      "AI + Web Builder",
      "Engineering Student",
      "Student Leader",
      "Chess Player"
    ],
    heroPitch: "I build web and AI projects that look as good as they work. Open to internships.",
    chips: [
      "2nd-year ECS Engineering",
      "AI + Web",
      "Chess Player",
      "Student Leader"
    ],
    stickers: [
      { text: "99.9% accurate crack-detection AI", rotation: "-4deg" },
      { text: "3rd place: Mumbai University Chess", rotation: "3deg" },
      { text: "Chess player", rotation: "-2deg" }
    ],
    stats: [
      { number: "4", label: "Projects Built" },
      { number: "40,000", label: "Dataset Images Trained" },
      { number: "2x", label: "Univ. Chess Representative" },
      { number: "3", label: "Leadership Roles" }
    ]
  },

  // About Me Section
  about: {
    aboutBio: "Hi, I'm Ayushi! I'm a 2nd-year Electronics and Computer Science student from Mumbai. I build web and AI projects, lead on campus, and play competitive chess.",
    imageCaption: "just me :)",
    imageAlt: "Illustration of Ayushi smiling and hugging her knees, surrounded by cute stickers like a teddy bear, a camera, hearts and a strawberry",
    languages: [
      { name: "English", level: "Professional working proficiency" },
      { name: "Marathi", level: "Professional working proficiency" },
      { name: "Hindi", level: null },
      { name: "Japanese", level: null },
      { name: "Sanskrit", level: null }
    ]
  },

  // Meet Me Poster Section
  meetMe: {
    heading: "A little more about me",
    points: [
      "2nd-year ECS student.",
      "I trained an AI that spots cracks (99.9% validation accuracy).",
      "I represented my university in chess."
    ],
    pills: ["Creative", "Chess player", "Curious", "Woman in STEM"],
    posterAlt: "Ayushi smiling with arms crossed in a pink top, with the greeting 'Hi, I'm Ayushi' and captions about learning, tech and building the future"
  },

  // Education Timeline
  education: [
    {
      degree: "B.Tech, Electronics and Computer Science",
      institution: "SIES Graduate School of Technology, Nerul, Navi Mumbai",
      period: "Sep 2025 to Mar 2029",
      status: "Currently 2nd year",
      score: null,
      notes: "Focusing on AI/ML foundations, embedded systems, and core computer science."
    },
    {
      degree: "Royal Junior College: HSC, Computer Science",
      institution: "Royal Junior College",
      period: "Jun 2023 to Feb 2025",
      status: "Completed",
      score: "78%",
      notes: "Rigorous coursework in CS foundations, mathematics, and physics."
    },
    {
      degree: "Sister Nivedita School: SSC",
      institution: "Sister Nivedita School",
      period: "Jun 2010 to Feb 2023",
      status: "Completed",
      score: "94%",
      notes: "Active participant in school competitions, arts, and academics."
    },
    {
      degree: "Entrance exams",
      institution: "National & State Entrance Tests",
      period: "2025",
      status: "Qualified",
      score: "JEE Mains 90.86 percentile | MHT-CET 94 percentile | IAT (IISER Aptitude Test) AIR 3500",
      notes: "Demonstrated strong analytical, problem-solving, and scientific aptitude."
    }
  ],

  // Skills (grouped honestly, no fake percentages)
  skills: {
    core: {
      category: "Core Skills (Can build & explain end-to-end)",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "SQL (SQLite, MySQL)",
        "MongoDB",
        "Figma (UI design)",
        "Git and GitHub"
      ]
    },
    appliedAi: {
      category: "Applied AI/ML and embedded",
      items: [
        "training an image classifier (YOLOv8) on a 40,000-image dataset using Google Colab",
        "ESP32 firmware (Arduino C/C++)"
      ]
    },
    exposure: {
      category: "Exposure through team and AI-assisted projects",
      badge: "still learning",
      items: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "REST APIs",
        "JWT authentication",
        "React"
      ]
    },
    soft: {
      category: "Soft skills",
      items: [
        "Leadership",
        "Outreach",
        "Team coordination",
        "Strategic thinking"
      ]
    }
  },

  // Projects (4 total)
  projects: [
    {
      id: "rover-crack-inspector",
      title: "Rover Crack Inspector",
      flagship: true,
      category: "ai-embedded",
      categoryLabel: "AI & Embedded",
      sticker: "Key achievement",
      teamSize: "Team of 4 (Flagship)",
      summary: "An AI-powered pipeline inspection rover. An ESP32-CAM streams live video over WiFi, a Python backend runs a crack-detection model, and a web dashboard shows the live camera feed and detected cracks.",
      repoUrl: "https://github.com/ayushisawant19/Underground-Pipeline-Inspection-Robot99",
      liveUrl: null,
      isPrivate: false,
      myRole: "I owned the software side. My 3 teammates built the rover hardware.",
      detailedContributions: [
        "I trained the crack-detection AI: a YOLOv8 image classifier trained in Python on Google Colab using 40,000 Kaggle images (20,000 crack, 20,000 no crack), 50 epochs, 99.9% validation accuracy on that dataset. Real pipes look different, so retraining on rover photos is planned.",
        "I developed the backend and the frontend dashboard using HTML, CSS, JavaScript and Python.",
        "The dashboard displays the camera feed and flags detected cracks. Frames with detected cracks are saved automatically as snapshots.",
        "I built a SQL (SQLite) database that stores each detected crack image with its date and time.",
        "I wrote the ESP32 firmware file and tested whether the camera could detect cracks.",
        "Do NOT claim any hardware design or assembly as mine: My 3 teammates designed and assembled the physical rover chassis, motors, and wiring."
      ],
      techStack: [
        "Python",
        "FastAPI",
        "SQLite",
        "WebSocket",
        "HTML",
        "CSS",
        "JavaScript",
        "YOLOv8",
        "PyTorch",
        "Google Colab",
        "Arduino C/C++"
      ],
      honestStatus: "Live video, snapshots, brightness control, AI detection and dashboard work; wireless driving, extra sensors (gas, IMU, LoRa) and autonomous navigation are planned, not finished."
    },
    {
      id: "the-pinboard",
      title: "The Pinboard: Campus Lost & Found",
      flagship: false,
      category: "web",
      categoryLabel: "Web & Full-Stack",
      sticker: "Team project",
      teamSize: "Team project",
      summary: "Full-stack lost-and-found platform for college campuses: student registration and login, live feed with Lost/Found/Claimed filters, search and sort, personal profile, responsive glassmorphism-style UI.",
      repoUrl: "https://github.com/ayushisawant19/Lost-and-Found-Portal",
      liveUrl: "https://lost-and-found-portal-53zp.onrender.com",
      isPrivate: false,
      myRole: "I designed the UI and wrote the HTML and CSS. The backend and application logic were built by my teammates.",
      detailedContributions: [
        "I designed the UI and wrote the HTML and CSS. The backend and application logic were built by my teammates.",
        "Created responsive layouts, student portal views, search and filter bars, and card components.",
        "Designed the status pill indicators ('Lost', 'Found', 'Claimed') with accessible contrast.",
        "Strict boundary: Do NOT list backend, authentication or database work as mine."
      ],
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "PostgreSQL"
      ],
      honestStatus: "Live on Render with active user authentication, item posting, search filters, and status updates."
    },
    {
      id: "mini-crm",
      title: "Mini CRM: Client Lead Management System",
      flagship: false,
      category: "web",
      categoryLabel: "Web & Full-Stack",
      sticker: "AI-assisted",
      teamSize: "AI-assisted task (Future Interns)",
      summary: "Captures leads from website contact forms and tracks follow-ups to conversion: lead pipeline (new, contacted, converted, lost), notes timeline, admin login, analytics dashboard with charts, search and filters, CSV export, public contact form.",
      repoUrl: "https://github.com/ayushisawant19/mini-crm-lead-manager",
      liveUrl: null,
      isPrivate: false,
      myRole: "I built this using AI tools, as the task encourages. I chose the tech stack and the UI direction, and I'm learning how the code works.",
      detailedContributions: [
        "I chose the tech stack and the UI direction, and I'm learning how the code works.",
        "Configured lead pipeline flow (new, contacted, converted, lost) and notes chronological timeline.",
        "Set up the public contact form and lead ingestion flow.",
        "Strict honesty: Do NOT claim I hand-wrote the backend. Never show default credentials."
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "JWT",
        "JSON store",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      honestStatus: "Captures leads, stores follow-up notes, visualizes conversion stages, and exports CSV."
    },
    {
      id: "viraasat",
      title: "Viraasat (Team MINDMESH)",
      flagship: false,
      category: "hackathon",
      categoryLabel: "Hackathon & Research",
      sticker: "Private repo",
      teamSize: "Team of 6 (SIH 2026 Internal Hackathon)",
      summary: "Internal Hackathon for SIH 2026, Heritage and Culture. A prototype AI-powered heritage platform for discovering India's culture, crafts, cuisine and lesser-known destinations.",
      repoUrl: null,
      liveUrl: null,
      isPrivate: true,
      myRole: "Cultural researcher and content contributor in a team of 6.",
      detailedContributions: [
        "Team of 6 built a prototype, Figma design and project document.",
        "My contribution: I researched the segments of Indian culture that shaped the platform's content.",
        "Outcome: Participated, not shortlisted; frame honestly as a learning experience in teamwork, research and product thinking.",
        "Note: The repo is private, so a 'Private repo' sticker is shown. No screenshots exist; styled as a clean text card."
      ],
      techStack: [
        "Cultural Domain Research",
        "Content Strategy",
        "Figma Prototyping",
        "Team Collaboration",
        "Product Thinking"
      ],
      honestStatus: "Internal hackathon prototype, Figma design and project document completed. The repository is private."
    }
  ],

  // Experience and Leadership
  experience: [
    {
      role: "Technical Team Volunteer",
      organization: "OWASP SIES GST",
      period: "Jul 2026 to Present",
      location: "Navi Mumbai, on-site",
      type: "Student Chapter Technical Team",
      description: "I work with a technical team of 5 members and update the OWASP SIES GST college website with the details of the chapter's volunteers and coordinators."
    },
    {
      role: "Outreach Coordinator",
      organization: "E-Cell SIES GST",
      period: "Jul 2026 to Present",
      location: "Navi Mumbai, on-site",
      type: "Student Committee Leadership",
      description: "I handle the overall coordination of the outreach team alongside the other outreach coordinators."
    },
    {
      role: "Class Representative",
      organization: "SIES GST (ECS Department)",
      period: "2025 to 2027",
      location: "Navi Mumbai, on-site",
      type: "Elected Student Representation",
      description: "Elected liaison between students and faculty; leads class administration, organizes academic logistics and represents peer interests."
    }
  ],

  // Achievements
  achievements: [
    {
      title: "2-Time University Chess Representative",
      year: "2025 and 2026",
      badge: "University Level",
      description: "Represented SIES GST at the Mumbai University Chess Competition in two consecutive years, securing 3rd place overall against collegiate teams from across Mumbai."
    },
    {
      title: "Chess player",
      year: "2025",
      badge: "Campus Level",
      description: "1st place in Chess at Lakshya, SIES GST's annual flagship sports festival."
    },
    {
      title: "Technical and design workshops",
      year: "2025 - 2026",
      badge: "Skill Development",
      description: "Attended technical and design workshops covering UI/UX design and web development."
    }
  ]
};

// Expose on window for vanilla browser script access
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}
