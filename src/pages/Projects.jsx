const Projects = () => {
    return (
      <section>
        <h2 className="text-3xl font-bold mb-4 text-emerald-400">Projects</h2>
        <p className="text-gray-400 mb-6">Some of the projects I've worked on recently:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-4 rounded shadow" data-aos="zoom-in">
            <h4 className="text-xl font-semibold mb-2 text-white">Utility Bill Manager</h4>
            <p className="text-gray-400 text-sm">
              A full-featured bill management system with Firebase Auth, balance tracking, and responsive UI.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded shadow" data-aos="zoom-in">
            <h4 className="text-xl font-semibold mb-2 text-white">React Portfolio</h4>
            <p className="text-gray-400 text-sm">
              My own portfolio built with React, Tailwind, and Framer Motion for animations.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;