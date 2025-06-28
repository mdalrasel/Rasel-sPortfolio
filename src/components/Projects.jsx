import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaFolderOpen } from "react-icons/fa";
import ProjectModal from "./ProjectModal"; // Modal ta alada file e thakbe

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("/public/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-500 inline-flex items-center gap-3 mb-4">
            <FaFolderOpen className="text-purple-400" />
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Real-world projects I've built and deployed.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                } bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover md:h-full"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-purple-200 rounded-full px-3 py-1 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md text-white font-semibold hover:from-teal-600 hover:to-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center gap-2 px-5 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
                  >
                    <FaInfoCircle /> Details
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 border border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          isOpen={modalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
