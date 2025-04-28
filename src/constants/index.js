
import { useHref } from "react-router-dom";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  // gfg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Complete Interview Preparation",
    company_name: "Geeks for Geeks",
    iconBg: "#383E56",
    date: "July 2024",
    points: [
      "Strong Foundation in DSA",
      "Improved Problem-Solving Skills.",
      "Increased Coding Speed & Accuracy.",
      "Increased Coding Speed & Accuracy.",
    ],
    certificate_link: "https://media.geeksforgeeks.org/courses/certificates/c12e4ca90f2a9ffb05e8db35c6c6511b.pdf", 
  },
  {
    title: "Server side JavaScript with Node.js",
    company_name: "Coursera",
    iconBg: "#383E56",
    date: "April 2024",
    points: [
      "Gained hands-on experience in building server-side applications using Node.js.",
      "Learned to create and manage RESTful APIs and handle HTTP requests/responses.",
      "Developed skills in using Express.js for setting up routes and middleware.",
      "Worked with MongoDB and Mongoose for database integration and data modeling.",
    ],
    certificate_link: "https://www.coursera.org/account/accomplishments/verify/RLPDM9Z6PYA7",
  },
  {
    title: "React Basics",
    company_name: "Coursera",
    iconBg: "#383E56",
    date: "April 2025",
    points: [
      "Practiced DevOps mindset, Agile, and Scrum.",
      "Developed microservices-based apps.",
      "Deployed using Docker, Kubernetes, OpenShift.",
      "Automated CI/CD pipelines.",
    ],
    certificate_link: "https://www.coursera.org/account/accomplishments/verify/5VR9RPQSKV6L",
  },
  {
    title: "Cloud Computing",
    company_name: "NPTEL",
    iconBg: "#383E56",
    date: "October 2024",
    points: [
      "Learned cloud service and deployment models (IaaS, PaaS, SaaS).",
      "Understood virtualization and cloud infrastructure.",
      "Understood architecture of cloud platforms and data centers.",
    ],
    certificate_link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S167020201804432022.pdf",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Malicious link Checker",
    description:
      "Developed a website to check if a link is malicious Implemented VirusTotal API for real-time phishing and malware detection.Ensured secure frontend-backend communication using CORS policies",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/PriyanshuMohapatra/Maliciousfrontend",
  },
  {
    name: "Medical Delivery Website",
    description:
      "Developed a website to check if a link is maliciousImplemented VirusTotal API for real-time phishing and malware detectionEnsured secure frontend-backend communication using CORS policies",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/PriyanshuMohapatra/react.io",
  },
  {
    name: "BookReviewPlatForm",
    description:
      "A BookReview Platform where users can add a review of their own choice and connect with each other",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/PriyanshuMohapatra/Bookrev",
  },
];


export { services, technologies, experiences, testimonials, projects };
