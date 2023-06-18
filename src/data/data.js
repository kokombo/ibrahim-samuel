import { FaTwitter, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { DiJavascript, DiNodejs } from "react-icons/di";
import { SiTailwindcss, SiHtml5, SiFirebase } from "react-icons/si";

export const data = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },

  {
    id: 2,
    name: "Experience",
    url: "./experience",
  },

  {
    id: 3,
    name: "Projects",
    url: "./project",
  },
];

export const icons = [
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/samuel-ibrahim-84154818b/",
  },

  {
    icon: <FaTwitter />,
    url: "https://www.twitter.com/Oluwanbowa",
  },

  {
    icon: <FiGithub />,
    url: "https://github.com/BowaDAO",
  },

  {
    icon: <FaInstagram />,
    url: "https://instagram.com/oluwanbowa_?igshid=YmMyMTA2M2Y=",
  },
];

export const technologies = [
  {
    icon: <DiJavascript />,
    name: "JavaScript (ES6+)",
    color: "js-color",
  },

  {
    icon: <FaReact />,
    name: "React",
    color: "react-color",
  },

  {
    icon: <DiNodejs />,
    name: "Node.js",
    color: "node-color",
  },

  {
    icon: <SiTailwindcss />,
    name: "TailWindCss",
    color: "tailwind-color",
  },

  {
    icon: <SiHtml5 />,
    name: "HTML5",
    color: "html-color",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    color: "firebase-color",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Web Developer ",
    company: "Care Connectors",
    location: "Washington, USA",
    start: "May 2023",
    finish: "present",
    duties: [
      "Working extensively on boosting online visibility by building a simple clean, and attractive website with HTML, CSS, and JavaScript.",
      "Modelled strategies to increase customer base by 72% through SEO best practices in coding  and continuous update of the website to meet users' needs.",
      "Implementing enhancements that will significantly improve web functionality and speed. ",
    ],
  },

  {
    id: 2,
    title: "Technical Writer",
    company: "Zipscore ",
    location: "Berlin, Germany",
    start: "Dec 2022",
    finish: "Mar 2023",
    duties: [
      "Grew customer base by developing easy-to-digest, informative user guides for targeted ads on popular social platforms through Zip code (company’s primary product) usage.",
      "Enhanced customers’ user experience by building detailed documentation that serves as a guide to using an AI tool. ",
    ],
  },

  {
    id: 3,
    title: "Content Developer ",
    company: "Mango Capital, Inc. ",
    location: "Minnesota, USA",
    start: "Feb 2021",
    finish: "Dec 2021",
    duties: [
      "Improved technical team’s productivity and project completion rate by 20% through strategic milestones allocation. ",
      "Managed 3-member team to roll out over 20 high-performance static websites for trucking and staffing companies.  ",
    ],
  },
];

export const projects = [
  {
    title: "Bowal (Ongoing Project)",
    description:
      "Bowal is a social E-commerce marketplace that leverages geo-location technology to connect online vendors and buyers within every locality in Africa. The platform’s front end is being built on ReactJS and powered by Firebase as a backend service. In this project, I used the react router 6’s loader data API to interact with the backend. This allows the provision of data to each route element before rendering. However, it makes dynamic routing relatively complicated.",
    tools: ["JavaScript", "TailWind", "React", "Firebase"],
    siteUrl: "https://www.bowal.com",
    gitHubLink: "https://github.com/BowaDAO/Bowal-Web-Application",
    image: "https://i.ibb.co/vzR345v/bowal-web-app.png",
    style: "flex-row",
  },

  {
    title: "Samuel's Personal Website",
    description:
      "This is my website. The same site you are interacting with at the moment. I built it on ReactJS, using react router v6 to navigate pages and Tailwind CSS to style them. There was no interaction with API as I prepared all the data internally.",
    tools: ["JavaScript", "TailWind", "React"],
    siteUrl: "https://samuelibrahim.netlify.app",
    gitHubLink: "https://www.github.com/BowaDAO/ibrahim-samuel",
    image: "https://i.ibb.co/gzb36v3/samuel-s-personal-website.png",
    style: "flex-row-reverse",
  },

  {
    title: "Landing Page Template",
    description:
      "This is a fully-responsive landing page template I built with React, CSS, and JavaScript. It is a simple one-pager with no routing.",
    tools: ["React", "Javascript", "CSS"],
    siteUrl: "https://xamai.netlify.app/",
    gitHubLink: "https://github.com/BowaDAO/ailandingpage",
    image: "https://i.ibb.co/zXpG9W9/ailandingpage.png",
    style: "flex-row",
  },
];
