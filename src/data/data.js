import { FaTwitter, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa"
import {FiGithub} from "react-icons/fi"
import {DiJavascript, DiNodejs} from "react-icons/di"
import {SiTailwindcss, SiHtml5} from "react-icons/si"


export const data = [

    {
        id: 1,
        name: 'Home',
        url: '/',
    },

    {
        id: 2,
        name: 'Experience',
        url: './experience'
    },

    {
        id: 3,
        name: 'Projects',
        url: './project'
    }

]


export const icons = [

    {
        icon: <FaLinkedinIn/>,
        url: "https://www.linkedin.com/in/samuel-ibrahim-84154818b/"
    },

    {
        icon: <FaTwitter/>,
        url: "https://www.twitter.com/Oluwanbowa"
    },

    {
        icon: <FiGithub/>,
        url: "https://github.com/BowaDAO"
    },

 
    {
        icon: <FaInstagram/>,
        url: "https://instagram.com/oluwanbowa_?igshid=YmMyMTA2M2Y="
    }, 

  
]


export const technologies = [

    {
        icon: <DiJavascript/>,
        name: "JavaScript (ES6+)",
        color: 'js-color'
    }, 


    {
        icon: <FaReact/>,
        name: "React",
        color: "react-color"
    },

    {   
        icon: <DiNodejs/>,
        name: "Node.js",
        color: "node-color"
    },

    {
        icon: <SiTailwindcss/>,
        name: "TailWindCss",
        color: "tailwind-color"
    },

    {
        icon: <SiHtml5/>,
        name: "HTML5",
        color: "html-color"
    }

]


export const experiences = [

    {   
        id: 1,
        title: "Lead Software Engineer", 
        company: "Bowal LLC",  
        start: "Jan 2023",
        finish: "Present",
        duties: ["Sed fermentum pellentesque metus, id porta magna varius sed. Nunc nunc est, placerat id sem ac, tincidunt pretium lacus. Integer sodales aliquam velit, eu commodo ipsum. Mauris vitae eleifend orci. Etiam et augue odio.", "Sed fermentum pellentesque metus, id porta magna varius sed. Nunc nunc est, placerat id sem ac, tincidunt pretium lacus. Integer sodales aliquam velit, eu commodo ipsum. Mauris vitae eleifend orci. Etiam et augue odio."
        


        ]  
       
    },



  {
        id: 2,
        title: "Software Developer",
        company: "Bowal",  
        start: "Jan 2021",
        finish: "Present",     
        duties: ["Mauris cursus ut nunc vitae semper. Duis vestibulum dui elit, laoreet volutpat purus gravida nec. Vestibulum eu rhoncus magna. Nulla facilisi. Quisque varius diam sit amet lorem efficitur, sed efficitur nisi lacinia.", "Mauris cursus ut nunc vitae semper. Duis vestibulum dui elit, laoreet volutpat purus gravida nec. Vestibulum eu rhoncus magna. Nulla facilisi. Quisque varius diam sit amet lorem efficitur, sed efficitur nisi lacinia." 
        ]
        
  },


  {
        id: 3,
        title: "Web Developer",
        company: "Logistics",  
        start: "Jan 2022",
        finish: "Present",       
        duties: ["Vivamus quis ultricies eros. Nam vel arcu non eros elementum vulputate in id nunc. Mauris nec metus a neque placerat lobortis a vitae nibh. Mauris vel est sit amet sapien eleifend dictum. Vivamus eget leo nunc. Nulla et imperdiet odio, non ultricies ligula.", "Vivamus quis ultricies eros. Nam vel arcu non eros elementum vulputate in id nunc. Mauris nec metus a neque placerat lobortis a vitae nibh. Mauris vel est sit amet sapien eleifend dictum. Vivamus eget leo nunc. Nulla et imperdiet odio, non ultricies ligula."
        ]      
  }, 


  {     
        id: 4,
        title: "Front-End Engineer",
        company: "Pay",  
        start: "Jan 2020",
        finish: "Present",
        duties: [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod quis mauris ac rhoncus. Phasellus quis dolor ante. Duis sodales metus dui, fermentum pharetra velit congue quis.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod quis mauris ac rhoncus. Phasellus quis dolor ante. Duis sodales metus dui, fermentum pharetra velit congue quis. "
        ]
           
   
  }
    
]



export const projects = [
    { 
        title: 'Bowal Web App',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod quis mauris ac rhoncus. Maecenas euismod quis mauris ac rhoncus. Phasellus quis dolor ante. Duis sodales metus dui, fermentum pharetra velit congue quis.",
        tools: [ {tool: "VS Code"}, {tool: "JavaScript"}, {tool: "TailWind"},{tool: "React"}],
        siteUrl: "https://www.bowal.com",
        gitHubLink: "https://www.github.com",
        image: "https://i.ibb.co/WBbXHXr/project1.jpg",
        style: "flex-row"

    },


    { 
        title: 'Bowal Web App',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod quis mauris ac rhoncus. Phasellus quis dolor ante. Duis sodales metus dui, fermentum pharetra velit congue quis.  ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod quis mauris ac rhoncus. ",
        tools: [ {tool: "VS Code"}, {tool: "JavaScript"}, {tool: "TailWind"},{tool: "React"}],
        siteUrl: "https://www.bowal.com",
        gitHubLink: "https://www.github.com",
        image: "https://i.ibb.co/jJnWjFL/project2.jpg",
        style: "flex-row-reverse"

    },



    { 
        title: 'Bowal Web App',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod quis mauris ac rhoncus. Phasellus quis dolor ante. Duis sodales metus dui, fermentum pharetra velit congue quis.  ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod quis mauris ac rhoncus. ",
        tools: [ {tool: "VS Code"}, {tool: "JavaScript"}, {tool: "TailWind"},{tool: "React"}],
        siteUrl: "https://www.bowal.com",
        gitHubLink: "https://www.github.com",
        image: "https://i.ibb.co/jJnWjFL/project2.jpg",
        style: "flex-row"

    },
]

