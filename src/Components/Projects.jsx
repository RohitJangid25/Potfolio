import React from "react";
import { projects } from "../utils/constants";
import { ArrowRight } from "lucide-react"; // Ensure you have installed lucide-react

const Projects = () => {
  return (
    <section className="bg-black text-white py-10">
      <h2 className="text-center text-purple-500 text-4xl font-bold mb-8">
        Projects
      </h2>
      
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 sm:px-10 md:px-20 py-10">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white/10 backdrop-blur-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-64 md:h-[27rem] object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-3">{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="flex justify-center md:justify-end px-6 sm:px-10 md:px-20">
        <a
          href="https://www.behance.net/rohitjangid25"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white bg-transparent border-none cursor-pointer hover:underline"
        >
          More Projects
          <ArrowRight size={20} className="text-purple-500" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
