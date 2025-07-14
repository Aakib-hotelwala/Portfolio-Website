import React from "react";
import { projects } from "./data/projects";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
          Aakib Hotelwala
        </h1>
        <p className="text-xl text-gray-300 mt-2">
          Full Stack Developer | React | Node.js
        </p>
      </header>

      {/* Self-Made Projects */}
      <SectionTitle emoji="🚀" title="Self-Made Projects" />
      <ProjectGrid projects={projects.selfMade} />

      {/* First Self-Made Project */}
      <SectionTitle emoji="🌱" title="My First Self-Made Project" />
      <ProjectGrid projects={projects.firstSelfMade} />

      {/* With YouTube Help */}
      <SectionTitle emoji="📺" title="With YouTube Help" />
      <ProjectGrid projects={projects.withYouTubeHelp} />
    </div>
  );
};

const SectionTitle = ({ emoji, title }) => (
  <div className="mb-6 text-center">
    <h2 className="text-3xl font-bold text-white">
      {emoji} {title}
    </h2>
    <div className="mx-auto w-24 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 mt-2 rounded" />
  </div>
);

const ProjectGrid = ({ projects }) => (
  <div className="flex flex-wrap justify-center gap-10 mb-20">
    {projects.map((project, index) => (
      <div
        key={index}
        className="w-full sm:w-[80%] md:w-[48%] lg:w-[32%] xl:w-[30%] max-w-[400px]"
      >
        <ProjectCard project={project} />
      </div>
    ))}
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 border border-gray-700">
    {project.image && (
      <div className="w-full aspect-video overflow-hidden rounded-xl mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
    )}
    <h3 className="text-2xl font-bold text-indigo-300">{project.title}</h3>
    <p className="text-gray-300 mt-3 text-base">{project.description}</p>
    {project.inProgress ? (
      <span className="inline-block mt-4 text-yellow-400 italic text-sm">
        🚧 In Progress
      </span>
    ) : (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-pink-400 font-medium hover:underline text-base"
      >
        🔗 View Live
      </a>
    )}
  </div>
);

export default App;
