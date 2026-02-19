export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Software Engineer", icon: "/backend.webp" },
  { title: "Full Stack Developer", icon: "/web.webp" },
  { title: "Backend Engineer", icon: "/mobile.webp" },
  { title: "UI/UX Developer", icon: "/creator.webp" },
];

const technologies = [
  { name: "HTML 5", icon: "/tech/html.webp" },
  { name: "CSS 3", icon: "/tech/css.webp" },
  { name: "JavaScript", icon: "/tech/javascript.webp" },
  { name: "React JS", icon: "/tech/reactjs.webp" },
  { name: "Redux Toolkit", icon: "/tech/redux.webp" },
  { name: "Tailwind CSS", icon: "/tech/tailwind.webp" },
  { name: "Git", icon: "/tech/git.webp" },
  { name: "WordPress", icon: "/tech/wordpress.webp" },
  { name: "Bootstrap", icon: "/tech/bootstrap.webp" },
];

const experiences = [
  {
    title: "Data Structures & Algorithms Certification",
    company_name: "Apna College (SIGMA Batch)",
    icon: "/projectimg/DSA_Logo.jpg",
    iconBg: "#E6DEDD",
    date: "June 2024 - January 2025",
    points: [
      "Built a strong foundation in Data Structures and Algorithms through structured learning and hands-on coding practice.",
      "Improved logical thinking and problem-solving abilities.",
      "Learned optimization techniques to enhance performance.",
      "Developed systematic approaches to real-world problems.",
    ],
  },
  {
    title: "Full Stack Web Development Certification",
    company_name: "Apna College (SIGMA Batch)",
    icon: "/projectimg/Development_Logo.png",
    iconBg: "#E6DEDD",
    date: "August 2024 - June 2025",
    points: [
      "Built responsive and interactive web applications.",
      "Worked on frontend & backend technologies.",
      "Created real-world projects.",
      "Improved clean and scalable coding practices.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "Explore my LinkedIn profile to learn more about my professional journey, skills, certifications, and experiences.",
    name: "Saniya Singhal",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/saniya-singhal-2aa120283/",
  },
  {
    id: 2,
    testimonial:
      "Visit my GitHub to discover my projects and continuous learning.",
    name: "Saniya Singhal",
    image: "/github.webp", // ✅ FIXED PATH
    link: "https://github.com/saniya100305",
  },
  {
    id: 3,
    testimonial:
      "Check out my LeetCode profile to see my problem-solving journey.",
    name: "Saniya Singhal",
    image: "/leetcode.png", // ✅ FIXED PATH
    link: "https://leetcode.com/u/Saniya_Singhal/",
  },
];

const projects = [
  {
    name: "ChatFlow",
    description:
      "A desktop chat application with real-time group messaging.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "swing", color: "orange-text-gradient" },
      { name: "socket-programming", color: "green-text-gradient" },
    ],
    image: "/projectimg/Chatflow.jpg",
    source_code_link: "https://github.com/saniya100305/ChatFlow",
  },
  {
    name: "MyBlog",
    description:
      "A blogging platform for creating and sharing articles.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "express", color: "pink-text-gradient" },
      { name: "nodejs", color: "orange-text-gradient" },
    ],
    image: "/projectimg/MyBlog.jpg",
    source_code_link: "https://github.com/saniya100305/MyBlog",
  },
  {
    name: "JetSetGo",
    description:
      "A travel booking platform for trip planning.",
    tags: [
      { name: "html", color: "orange-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
    ],
    image: "/projectimg/JetSetGo.jpg",
    source_code_link: "https://github.com/saniya100305",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
