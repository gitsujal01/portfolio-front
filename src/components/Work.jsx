import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

export default function Work() {
  // Static projects data
  const [projects] = useState([
    {
      id: 1,
      title: "Chat Application Backend",
      description: "Chat application backend with REST APIs and database integration.",
      techStack: "Java, Spring Boot, WebSocket, MySQL",
      githubLink: "https://github.com/yourname/chatapp-backend",
      livelink: "https://chathiveapp.netlify.app/",
      image: "./assets/work-1.png",
    },
    {
      id: 2,
      title: "Library Management System",
      description: "Built REST APIs for managing books, users and issue/return system.",
      techStack: "Java, Spring Boot, Hibernate, MySQL",
      githubLink: "https://github.com/yourname/library-project",
      livelink: null,
      image: "./assets/work-2.png",
    },
    {
      id: 3,
      title: "Frontend Project",
      description: "Web Design project showcasing front-end skills.",
      techStack: "React, Tailwind, JavaScript",
      githubLink: "https://github.com/gitsujal01/frontend",
      livelink: "https://frontend.example.com",
      image: "./assets/work-3.png",
    },
  ]);

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of projects
        showcasing my expertise in front-end and full-stack development.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.livelink || project.githubLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
                <p className="text-xs text-gray-500 mt-1">{project.techStack}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                {project.livelink ? (
                  <FaExternalLinkAlt className="w-5 h-5" />
                ) : (
                  <FaGithub className="w-5 h-5" />
                )}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      <a
        href="#!"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white"
      >
        Show more
        <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
        <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
      </a>
    </div>
  );
}