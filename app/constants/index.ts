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
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Data Structures & Algorithms Certification",
		company_name: "Apna College (SIGMA Batch)",
		icon: "/company/avm.webp",
		iconBg: "#383E56",
		date: "June 2024 - January 2025",
		points: [
			"Built a strong foundation in Data Structures and Algorithms through structured learning and hands-on coding practice.",
			"Improved logical thinking and problem-solving abilities by solving diverse algorithmic challenges.",
			"Learned optimization techniques to enhance code performance and efficiency.",
			"Developed systematic approaches to solve real-world computational problems."
		],
	},
	{
		title: "Full Stack Web Development Certification",
		company_name: "Apna College (SIGMA Batch)",
		icon: "/company/sparkbright.webp",
		iconBg: "#E6DEDD",
		date: "August 2024 - June 2025",
		points: [
			"Gained practical experience in building responsive and interactive web applications using modern technologies.",
			"Learned both frontend and backend development including UI design, API integration, and database management.",
			"Developed real-world projects to understand the complete web development lifecycle.",
			"Strengthened skills in writing clean, scalable, and maintainable web application code."
		],
	},
];



const testimonials = [
  {
    id: 2,
    testimonial:
      "Explore my LinkedIn profile to learn more about my professional journey, skills, certifications, and experiences that reflect my growth as a developer.",
    name: "Saniya Singhal",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/saniya-singhal-2aa120283/",
  },
  {
    id: 5,
    testimonial:
      "Visit my GitHub to discover the projects I've built, the technologies I've worked with, and my continuous learning through real-world coding practice.",
    name: "Saniya Singhal",
    image: "/tech/github.webp",
    link: "https://github.com/saniya100305",
  },
  {
    id: 3,
    testimonial:
      "Check out my LeetCode profile to see my problem-solving skills, coding challenges I've completed, and my journey in mastering data structures and algorithms.",
    name: "Saniya Singhal",
    image: "/tech/leetcode.png",
    link: "https://leetcode.com/u/Saniya_Singhal/",
  },
];

const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link?: string;
}[] = [
	{
		name: "ChatFlow",
		description:
			"A multi-user desktop chat application built with Java Swing, featuring real-time group communication through socket programming and multi-threaded architecture for seamless concurrent client handling and message broadcasting.",
		tags: [
			{
				name: "java",
				color: "blue-text-gradient",
			},
			{
				name: "swing",
				color: "orange-text-gradient",
			},
			{
				name: "socket-programming",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/Chatflow.jpg",
		source_code_link: "https://github.com/saniya100305",
	},
	{
		name: "MyBlog",
		description:
			"A full-stack MERN blogging platform with JWT authentication and role-based access control. Features RESTful API integration, optimized MongoDB performance, and an intuitive CMS for creating and managing content.",
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
				name: "express",
				color: "pink-text-gradient",
			},
			{
				name: "nodejs",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/sparkbright.png",
		source_code_link: "https://github.com/saniya100305",
	},
	{
		name: "JetSetGo",
		description:
			"A responsive travel booking platform offering comprehensive flight, hotel, and vacation package reservations. Leverages JSON-based data management for dynamic travel listings, real-time pricing, and streamlined user bookings.",
		tags: [
			{
				name: "html",
				color: "orange-text-gradient",
			},
			{
				name: "css",
				color: "blue-text-gradient",
			},
			{
				name: "javascript",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/hoobank.webp",
		source_code_link: "https://github.com/saniya100305",
	},
];

export { services, technologies, experiences, testimonials, projects };