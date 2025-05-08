import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-4 py-4 bg-gray-800 shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold text-emerald-400">Rasel'sPortfolio</h1>
      <div className="space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-emerald-400 font-semibold" : "hover:text-emerald-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-emerald-400 font-semibold" : "hover:text-emerald-300"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-emerald-400 font-semibold" : "hover:text-emerald-300"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
    );
};

export default Navbar;