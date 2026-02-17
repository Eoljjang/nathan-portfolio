import resumeBuilderImg from "../images/resume_builder.png"
import qrHunterImg from "../images/qr_hunter.png"
import klWebsiteImg from "../images/KL_website.png"
import fileExplorerImg from "../images/file_explorer.png"
import pokemonImg from "../images/pokemon_memory_game.png"

export const projects = [
  {
    id: 1,
    title: "Resume Builder",
    description: "A resume builder app that allows you to create a resume by simply filling out a form.",
    technologies: ["React", "Vite", "Node.js"],
    githubUrl: "https://github.com/Eoljjang/resume-builder-app",
    liveUrl: "https://resume-builder-eoljjang.netlify.app/z",
    imageUrl: resumeBuilderImg
  },
  {
    id: 2,
    title: "QR Hunter",
    description: "A android app that allows users to scan QR codes to collect points and compete with friends.",
    technologies: ["Android Development", "Team Software Engineering", "Multiuser"],
    githubUrl: "https://github.com/Eoljjang/projects/tree/main/QRHunter",
    liveUrl: "https://github.com/Eoljjang/projects/tree/main/QRHunter",
    imageUrl: qrHunterImg
  },
  {
    id: 3,
    title: "Client Website Redesign",
    description: "Freelance project for a local professor to modernize his existing website.",
    technologies: ["Web Development", "Freelance"],
    githubUrl: "https://github.com/Eoljjang/projects/tree/main/KL_ProfWebsite",
    liveUrl: "https://htmlpreview.github.io/?https://github.com/Eoljjang/projects/blob/main/KL_ProfWebsite/index.html",
    imageUrl: klWebsiteImg
  },
  {
    id: 4,
    title: "File Manager Automation",
    description: "A script that manages one's downloads folder by automatically sorting files into different categories.",
    technologies: ["Python", "Automation"],
    githubUrl: "https://github.com/Eoljjang/projects/tree/main/fileOrganizer",
    liveUrl: "https://github.com/Eoljjang/projects/tree/main/fileOrganizer",
    imageUrl: fileExplorerImg
  },
  {
    id: 5,
    title: "Pokemon Memory Game",
    description: "A simple game that tests your memory! Built to learn how to interact with external APIs.",
    technologies: ["REST APIs", "React"],
    githubUrl: "https://github.com/Eoljjang/pokemon-memory-game",
    liveUrl: "https://pokemon-mem-game.netlify.app/",
    imageUrl: pokemonImg
  },
]

