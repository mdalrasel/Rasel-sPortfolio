import { useState } from "react";
import Typewriter from "typewriter-effect";
import { RiDownload2Fill } from "react-icons/ri";
import { BiSolidShoppingBags } from "react-icons/bi";
import HireForm from "./HireForm";
import profilePic from '../assets/RaselProfile.png'

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <section className=" flex flex-col gap-5 md:flex-row items-center justify-center bg-[#0f172a] py-12">
            <div className="flex-1">
                <h2 className="text-sm text-purple-300 mb-2">
                    Frontend Developer & UI/UX Learner
                </h2>
                <h1 className="text-3xl  font-bold text-white leading-tight mb-4">
                    Hi, I'm <span className="text-purple-500">MD. AL RASEL</span>

                </h1>
                <div className="text-xl text-gray-300 h-15">
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
                                "Focused on Clean & Maintainable Code"
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <p className="text-gray-400 mb-6">A dedicated web developer focused on creating modern, responsive, and efficient web solutions.</p>
                <div className="mt-6 flex flex-wrap gap-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md text-white font-semibold hover:from-teal-600 hover:to-blue-600 transition-colors flex items-center justify-center gap-2"
                    >
                        <BiSolidShoppingBags /> Hire Me
                    </button>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <HireForm onClose={() => setIsModalOpen(false)} />
                        </div>
                    )}
                    <a
                        href="/resume.pdf"
                        download="Rasel_Resume.pdf"
                        className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-2xl transition flex items-center gap-2 hover:bg-gray-600"
                    >
                        <RiDownload2Fill /> Download Resume
                    </a>
                </div>
                <p className="mt-4 text-gray-500 text-sm">
                    Available for freelance and full-time opportunities
                </p>
            </div>

            <div className="flex-1 flex justify-end sm:mt-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-3 border-purple-600">
                    <img
                        src={profilePic}
                        alt="Rasel"
                        className="w-[350px] h-[400px] object-cover"
                    />
                    {/* <div className="absolute bottom-2 left-2 bg-purple-700 text-white text-xs px-3 py-1 rounded-full">
                        1+ Year Experience
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;