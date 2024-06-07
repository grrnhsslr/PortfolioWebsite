import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Coding Temple",
    date: "2024 - Present",
    details: [
      "Implemented server-side logic and <span style='color: white;'>APIs using Python and Flask</span> facilitating seamless communication between client and server components.",
      "Utilized<span style='color: white;'> SQL and PostgreSQL</span> for efficient data storage and retrieval, ensuring robust database management for web applications.",
      " Demonstrated <span style='color: white;'>strong problem-solving</span> abilities and <span style='color: white;'>adaptability</span> through the successful resolution of <span style='color: white;'>technical challenges</span> and rapid acquisition of new technologies.",
    ],
  },
  {
    title: "Instrument Technician",
    company_name: "Pinnacle Consulting Management Group",
    date: "2022 - 2023",
    details: [
      "Fostered <span style='color: white;'>effective communication</span> with clients and team members to understand project requirements, provide updates on project progress, and address any concerns or challenges encountered during the surveying process.",
      "Managed project <span style='color: white;'>timelines, resources, and deliverables</span> from inception to completion, ensuring projects were <span style='color: white;'>completed on schedule</span>."
    ],
  },
  {
    title: "Rodman",
    company_name: "Topographic Co.",
    date: "2021 - 2022",
    details: [
      "Applied analytical prowess and <span style='color: white;'>critical thinking</span> to navigate intricate spatial challenges, such as land boundary discrepancies or irregular terrain features, finding <span style='color: white;'>innovative solutions</span> to ensure project <span style='color: white;'>accuracy</span> and completeness",
      "Orchestrated smooth project execution from initiation through completion, meeting project <span style='color: white;'>milestones</span> and deliverables with <span style='color: white;'>precision</span>.",
    ],
  },
];

const portfolio = [
  {
    name: "Chat Application",
    description:
      "Led the development of a feature-rich chat application using Node.js, React, HTML5, and CSS to facilitate real-time communication and collaboration among users. The project aimed to deliver a modern and intuitive chat platform with a focus on user experience, and performance",
    image: oscs,
    link: "https://garrenschatapp.netlify.app/"
  },
  {
    name: "CRUD Blog",
    description:
      "Developed a CRUD blog application using Flask, PostgreSQL, React, TypeScript, and JavaScript to provide users with a seamless content creation and management experience. The project aimed to deliver a modern, responsive, and user-friendly platform, emphasizing efficient data handling and performance",
    image: devnotes,
    link: "https://kekambasblog.netlify.app/"
  },
  {
    name: "BlackJack Simulator",
    description:
      "Developed a comprehensive Blackjack simulator using Object-Oriented Programming (OOP) principles to replicate the popular casino card game. The simulator provides an interactive and realistic gaming experience, allowing users to play against the computer dealer.",
    image: algorithms,
    link: "https://github.com/grrnhsslr/Py_BlackJack"
  },
];

export { experiences, portfolio };

