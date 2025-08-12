import React from "react";
import { ImCross } from "react-icons/im";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-[90%] md:w-[600px] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-400"
        >
          <ImCross />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          {project.title}
        </h2>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
           className="w-full h-auto max-h-[500px] object-contain rounded-lg"
        />

        {/* Full Details */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.details}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-purple-200 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-2">
          <a
            href={project.live}
            target="_blank"
            className="py-3 px-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md text-white font-semibold hover:from-teal-600 hover:to-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <FaExternalLinkAlt className="inline mr-1" /> Live
          </a>
          <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 border border-gray-500 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FaGithub className="inline mr-1" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
