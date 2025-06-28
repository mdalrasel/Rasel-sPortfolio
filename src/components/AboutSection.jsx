// components/AboutSection.jsx

import { FaUserTie } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 inline-flex items-center gap-2">
            <FaUserTie className="text-purple-400" /> About Me
          </h2>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            A brief introduction about who I am and what I do.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              I'm Rasel — A Passionate Frontend Developer from Bangladesh
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I specialize in building responsive, user-friendly web applications using modern tools like React, Tailwind CSS, and Firebase.
              My focus is always on clean code, intuitive UI, and mobile-first design. Although I’m a fresher, I’m committed to continuous learning and staying up-to-date with industry standards.
            </p>
            <p className="text-gray-400 mb-4">
              I'm enthusiastic about collaborating on real-world projects, solving frontend challenges, and turning ideas into reality through interactive and efficient interfaces.
            </p>
            <p className="text-sm text-gray-500 italic">Let's build something awesome together!</p>
          </div>

          {/* Optional Image or Skill Badges (optional part) */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            {/* Existing */}
            <span className="bg-purple-700/20 border border-purple-500 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">React</span>
            <span className="bg-indigo-700/20 border border-indigo-500 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium">Tailwind CSS</span>
            <span className="bg-blue-700/20 border border-blue-500 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">Firebase</span>
            <span className="bg-green-700/20 border border-green-500 text-green-300 px-4 py-2 rounded-full text-sm font-medium">MongoDB</span>
            <span className="bg-gray-700/20 border border-gray-500 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>

            {/* Additions */}
            <span className="bg-yellow-700/20 border border-yellow-500 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium">Express.js</span>
            <span className="bg-pink-700/20 border border-pink-500 text-pink-300 px-4 py-2 rounded-full text-sm font-medium">DaisyUI</span>
            <span className="bg-red-700/20 border border-red-500 text-red-300 px-4 py-2 rounded-full text-sm font-medium">HTML5</span>
            <span className="bg-orange-700/20 border border-orange-500 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">CSS3</span>
            <span className="bg-cyan-700/20 border border-cyan-500 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium">REST API</span>
            <span className="bg-teal-700/20 border border-teal-500 text-teal-300 px-4 py-2 rounded-full text-sm font-medium">Vercel</span>
            <span className="bg-slate-700/20 border border-slate-500 text-slate-300 px-4 py-2 rounded-full text-sm font-medium">Netlify</span>
            <span className="bg-amber-700/20 border border-amber-500 text-amber-300 px-4 py-2 rounded-full text-sm font-medium">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
