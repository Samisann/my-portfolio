import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { FaBars, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function NavBar() {
  return (
    <header className="bg-black py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg poppins">
          <NavLink
            activeClassName=" hover:no-underline"
            className="text-white text-4xl font-bold poppins tracking-widest hover:no-underline"
            to="/"
            exact
          >
            StudentDev
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-12 items-center poppins">
          <NavLink
            activeClassName="text-purple-700 bg-gray-900"
            className="rounded text-red-100 hover:text-purple-800 hover:no-underline"
            to="/post"
          >
            Illustrations
          </NavLink>

          <NavLink
            activeClassName="text-purple-700 bg-gray-900"
            className="rounded text-red-100 hover:text-purple-800 hover:no-underline"
            to="/project"
          >
            Projects
          </NavLink>
          <NavLink
            activeClassName="text-purple-700 bg-gray-900"
            className="rounded text-red-100 hover:text-purple-800 hover:no-underline"
            to="/about"
          >
            About Me!
          </NavLink>
        </div>
        
        
        <div className="md:hidden">
          <FaBars className="h-12 hamburger-menu" />
        </div>

        <div className="inline-flex py-3 px-3 my-6 social-icon">
          <a href="https://www.linkedin.com/in/sami-lamtioui/">
            <FaLinkedin
              className="mr-4"
              style={{ color: "white", height: 35, width: 35 }}
            />
          </a>
          <a href="https://www.instagram.com/student__dev/">
            <FaInstagram
              className="mr-4"
              style={{ color: "white", height: 35, width: 35 }}
            />
          </a>
          <a href="https://github.com/Samisann">
            <FaGithub
              className="mr-4"
              style={{ color: "white", height: 35, width: 35 }}
            />
          </a>
        </div>
      </div>
    </header>

    
    /*    <header className="bg-black py-6">
      <div className="container flex justify-between items-center mx-auto">
        <nav className="flex">
          <NavLink
            activeClassName="text-white"
            to="/"
            className="text-lg inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-purple-800 text-4xl font-bold poppins tracking-widest hover:no-underline"
            exact
          >
            StudentDev
          </NavLink>
          <NavLink
            activeClassName="text-purple-700 bg-gray-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-purple-800 hover:no-underline"
            to="/post"
          >
            Illustrations
          </NavLink>

          <NavLink
            activeClassName="text-purple-700 bg-gray-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-purple-800 hover:no-underline"
            to="/project"
          >
            Projects
          </NavLink>
          <NavLink
            activeClassName="text-purple-700 bg-gray-900"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-purple-800 hover:no-underline"
            to="/about"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/Samisann"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/student__dev/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/sami-lamtioui/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>*/
  );
}
