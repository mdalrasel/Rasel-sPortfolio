// components/AboutSection.jsx

const AboutSection = () => {
    return (
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white text-center px-4 md:px-12 lg:px-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          About Me
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Hello! I'm Russel, a passionate Frontend Developer. I love crafting clean and modern UI with 1+ years of experience building responsive web applications.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Development Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Development</h3>
            <ul className="text-gray-300 space-y-2 text-left">
              <li>React</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Firebase</li>
              <li>MongoDB</li>
            </ul>
          </div>
  
          {/* Design & Tools Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Design & Tools</h3>
            <ul className="text-gray-300 space-y-2 text-left">
              <li>Figma</li>
              <li>Postman</li>
              <li>Framer Motion</li>
              <li>VS Code</li>
              <li>GitHub</li>
              <li>Docker</li>
            </ul>
          </div>
  
          {/* Experience Card */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-pink-400">Experience</h3>
            <div className="text-left text-gray-300 space-y-4">
              <div>
                <h4 className="font-bold">Frontend Developer</h4>
                <p className="text-sm">
                  Building modern UIs, working with APIs, maintaining codebase using Git.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Internship Projects</h4>
                <p className="text-sm">
                  Built and deployed several mini-projects using React, Firebase, and Tailwind.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="mt-12">
          <a
            
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
          >
            View Full Resume
          </a>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  