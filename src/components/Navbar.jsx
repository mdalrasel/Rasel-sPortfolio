
import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { MdMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const navLink = <>
    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-emerald-400 font-semibold" : "hover:text-emerald-300"}>Home</NavLink></li>
    <li><NavLink to="/projects" className={({ isActive }) => isActive ? "text-emerald-400 font-semibold" : "hover:text-emerald-300"}>Projects</NavLink></li>
    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-emerald-400 font-semibold" : "hover:text-emerald-300"}>Contact</NavLink></li>
  </>
  return (

    <div className="navbar bg-base-100 shadow-sm justify-between fixed mx-auto z-10 px-2">
      <div className="flex items-center">
        <Link to='/' className="text-xl font-bold text-emerald-400">Rasel'sPortfolio</Link>
      </div>
      <div className="flex items-center">
        <div className="dropdown md:hidden">
          <div onClick={() => setShowMenu(!showMenu)} tabIndex={0} role="button" className="">
          {showMenu ? (
              <ImCross className="text-2xl text-red-500" />
            ) : (
              <MdMenu className="text-2xl text-green-500" />
            )}
            
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 right-0 p-2 shadow bg-base-100 rounded-box w-20">
            {navLink}
          </ul>
        </div>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;