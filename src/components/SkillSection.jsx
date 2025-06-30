import React from "react";
import { FaTools } from "react-icons/fa";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Firebase", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Express.js", level: 70 },
  { name: "JavaScript (ES6+)", level: 88 },
];

const SkillSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="mb-10 text-center" data-aos="fade-up" data-aos-duration="800">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-500 inline-flex items-center gap-2">
          <FaTools className="text-purple-400" /> Skills & Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Technologies I love working with, and improving every day.
        </p>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-right"
              data-aos-delay={i * 100}
              data-aos-duration="1000"
            >
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div
          className="mt-14 flex flex-wrap justify-center gap-3"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          {["DaisyUI", "JWT", "Axios", "Vercel", "Netlify", "Git"].map((tech, idx) => (
            <span
              key={idx}
              className="bg-white/20 backdrop-blur border border-purple-300 dark:border-purple-500 text-purple-700 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
