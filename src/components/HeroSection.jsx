import { useState } from "react";
import Typewriter from "typewriter-effect";
import { RiDownload2Fill } from "react-icons/ri";
import { BiSolidShoppingBags } from "react-icons/bi";
import HireForm from "./HireForm";
import profilePic from "../assets/RaselProfile.png";
import { ImCross } from "react-icons/im";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex flex-col gap-5 md:flex-row items-center justify-center bg-[#0f172a] py-12">
      {/* LEFT CONTENT */}
      <div className="flex-1" data-aos="fade-right">
        <h2 className="text-sm text-purple-300 mb-2">
          Frontend Developer & UI/UX Learner
        </h2>
        <h1 className="text-3xl font-bold text-white leading-tight mb-4">
          Hi, I'm <span className="text-purple-500">MD. AL RASEL</span>
        </h1>

        {/* Typewriter */}
        <div
          className="text-xl text-gray-300 h-15"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Typewriter
            options={{
              strings: [
                "React & React Router Developer",
                "Tailwind CSS & DaisyUI Expert",
                "Clean and Responsive UI Design",
                "JavaScript (ES6+) Developer",
                "MERN Stack Developer (MongoDB, Express, React, Node)",
                "Firebase Authentication Integration",
                "RESTful API Consumer",
                "Frontend Data Fetching with Axios",
                "Git Version Control User",
                "Mobile First Responsive UI",
                "Deployed Projects on Vercel & Netlify",
                "Focused on Clean & Maintainable Code",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p
          className="text-gray-400 mb-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          A dedicated web developer focused on creating modern, responsive, and
          efficient web solutions.
        </p>

        {/* Buttons */}
        <div
          className="mt-6 flex flex-wrap gap-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md text-white font-semibold hover:from-teal-600 hover:to-blue-600 transition-colors flex items-center justify-center gap-2 transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <BiSolidShoppingBags /> Hire Me
          </button>

          <a
            href="/public/Rasel_Frontend_Developer_Resume.pdf"
            download="Rasel_Resume.pdf"
            className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-md transition flex items-center gap-2 hover:bg-gray-600 transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <RiDownload2Fill /> Download Resume
          </a>
        </div>

        <p
          className="mt-4 text-gray-500 text-sm"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Available for freelance and full-time opportunities
        </p>
      </div>

      {/* PROFILE IMAGE */}
      <div className="flex-1 flex justify-end sm:mt-5" data-aos="fade-left">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-3 border-purple-600">
          <img
            src={profilePic}
            alt="Rasel"
            className="w-[350px] h-[400px] object-cover"
          />
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition duration-300 ease-in-out"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-[length:200%_200%] animate-gradient rounded-xl shadow-xl w-full max-w-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute  top-5 right-5 text-gray-500 hover:text-white text-xl font-bold transition"
              onClick={() => setIsModalOpen(false)}
            >
              <ImCross className="w-6 h-6 " />
            </button>

            {/* Modal Header */}
            <h2 className="text-4xl  font-bold text-white mb-4 text-center">
              Hire Me
            </h2>

            {/* Modal Form */}
            <HireForm onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
