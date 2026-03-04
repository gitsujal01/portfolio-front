import { useState } from "react";
import { FaJava, FaReact, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiHibernate } from "react-icons/si";

export default function About() {
  // ===== Static About Cards =====
  const [cards] = useState([
    {
      id: 1,
      title: "Backend Developer",
      description: "I build scalable backend APIs using Java, Spring Boot, and SQL."
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      description: "I develop full-stack apps with React, Spring Boot, and REST APIs."
    },
    {
      id: 3,
      title: "Problem Solver",
      description: "I enjoy solving system design and algorithmic problems with practical constraints."
    }
  ]);

  // ===== Static Tools =====
  const [tools] = useState([
    { id: 1, name: "Java" },
    { id: 2, name: "Spring Boot" },
    { id: 3, name: "MySQL" },
    { id: 4, name: "Hibernate" },
    { id: 5, name: "React" },
    { id: 6, name: "Database" }
  ]);

  // ===== Icon Mapper =====
  const getIcon = (name) => {
    switch (name) {
      case "Java":
        return <FaJava />;
      case "Spring Boot":
        return <SiSpringboot />;
      case "MySQL":
        return <SiMysql />;
      case "Hibernate":
        return <SiHibernate />;
      case "React":
        return <FaReact />;
      case "Database":
        return <FaDatabase />;
      default:
        return <FaDatabase />;
    }
  };

  return (
    <section
      id="about"
      className="w-full px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-[#140021] to-[#1a0033] text-white"
    >
      {/* Heading */}
      <h4 className="text-center mb-2 text-lg tracking-widest text-purple-300">
        INTRODUCTION
      </h4>

      <h2 className="text-center text-5xl font-bold mb-6">
        About Me
      </h2>

      {/* About Paragraph */}
      <p className="max-w-3xl mx-auto text-center text-gray-300 leading-relaxed mb-12">
        MCA student at Pimpri Chinchwad University, Pune, focused on building scalable and
        reliable software systems through hands-on projects. I work mainly on backend and
        full-stack development using Java, SQL, and RESTful APIs, and explore how Generative
        AI technologies (LLMs and RAG) can be integrated into real-world applications. I enjoy
        solving problems related to system design, performance optimization, and practical
        constraints.
      </p>

      {/* About Cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {cards.map((item) => (
          <li
            key={item.id}
            className="bg-white/5 backdrop-blur-md border border-purple-400/40 rounded-2xl p-8 
                       hover:scale-105 transition duration-300 hover:border-purple-400"
          >
            <h3 className="mb-4 text-xl font-semibold text-purple-300">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-200">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      {/* Tools */}
      <h3 className="mt-16 mb-6 text-center text-2xl font-semibold text-purple-300">
        Tools I Use
      </h3>

      <ul className="flex flex-wrap justify-center gap-5">
        {tools.map((tool) => (
          <li
            key={tool.id}
            className="flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-xl
                       bg-white/10 backdrop-blur border border-purple-400/40
                       hover:bg-purple-500/20 hover:scale-110 transition"
          >
            <span className="text-2xl text-purple-300">
              {getIcon(tool.name)}
            </span>
            <span className="text-sm font-medium">
              {tool.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}