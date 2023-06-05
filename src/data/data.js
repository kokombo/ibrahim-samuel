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
    title: "Technical Writer & Researcher",
    company: "ZipScore",
    start: "Dec 2022",
    finish: "Feb 2023",
    duties: [
      "Handled several zip code usage guildes.",
      "Researched and wrote how-to technical content to help startups make data-driven marketing decisions.",
    ],
  },

  {
    id: 2,
    title: "Senior Technical Writer",
    company: "DLTify",
    start: "May 2022",
    finish: "Dec 2022",
    duties: [
      "Handled technical writing projects including, whitepapers, litepapers, scripts, decks, and landing page copy.",
      "Worked with the managing director to foster token creation.",
    ],
  },

  {
    id: 3,
    title: "Senior Content Developer",
    company: "Mango Capital, Inc. ",
    start: "Feb 2021",
    finish: "Dec 2021",
    duties: [
      "Managed a team of 4 to build over 20 websites for businesses in the United States trucking industry.",
      "Researched and wrote website copy, technical content, and press releases for the organizations.",
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
