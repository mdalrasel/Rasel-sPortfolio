import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaBlog, FaEnvelope } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";
import CustomLogo from "./CustomLogo";
import { Link } from "react-router"; // updated to react-router-dom
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/#home", icon: <FaHome /> },
    { name: "About", to: "/#about", icon: <FaUser /> },
    { name: "Skills", to: "/#skills", icon: <FaCode /> },
    { name: "Projects", to: "/#projects", icon: <FaProjectDiagram /> },
    { name: "Articles", to: "/articles", icon: <FaBlog /> },
    { name: "Contact", to: "/#contact", icon: <FaEnvelope /> },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <CustomLogo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const LinkComponent = item.to.includes("#") ? HashLink : Link;
              return (
                <LinkComponent
                  key={item.name}
                  smooth
                  to={item.to}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition"
                >
                  {item.name}
                </LinkComponent>
              );
            })}

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="Rasel_Resume.pdf"
              className="px-4 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md text-white font-semibold hover:from-teal-600 hover:to-blue-600 transition-colors flex items-center justify-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiDownload2Fill className="text-lg" />
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <>
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 top-0"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* drawer */}
          <div className="fixed top-0 right-0 w-11/12 max-w-xs h-full bg-gray-900 text-white z-50 p-6 shadow-lg rounded-l-lg">

            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-lg font-bold text-purple-400">MD. AL RASEL</p>
                <p className="text-sm text-gray-400">Front-End Developer</p>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes size={22} />
              </button>
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const LinkComponent = item.to.includes("#") ? HashLink : Link;
                return (
                  <LinkComponent
                    key={item.name}
                    smooth
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                  >
                    <span className="text-purple-400">{item.icon}</span>
                    <span>{item.name}</span>
                  </LinkComponent>
                );
              })}

              {/* Resume in drawer */}
              <a
                href="/resume.pdf"
                download="Rasel_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-md text-white font-semibold hover:from-teal-600 hover:to-blue-600 transition-colors flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiDownload2Fill />
                Resume
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
