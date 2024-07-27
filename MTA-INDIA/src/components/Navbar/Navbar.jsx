import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-orange-500 hover:text-green-500"
      : "text-black hover:text-green-500";

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-blue-100 p-4">
        <div className="container mx-auto flex justify-between items-center lg:justify-around md:justify-between">
          <div className="text-cyan-600 font-semibold text-2xl font-sans tracking-wide">
            <p>MTA-INDIA</p>
            <p className="text-black font-normal text-xs font-sans">
              We Make IT Professional
            </p>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-xl`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-xl`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/certificate"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-xl`
              }
            >
              Certificate
            </NavLink>
            <div className="relative group">
              <button className="text-black text-xl focus:outline-none">
                Courses
              </button>
              <div className="absolute bg-gray-100 shadow-lg rounded z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                <ul className="py-2 lg:w-60">
                  <li>
                    <NavLink
                      to="/courses/web-development"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses/data-science"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Data Science
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses/machine-learning"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Machine Learning
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses/cyber-security"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Cyber Security
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses/cloud-computing"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Cloud Computing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses/blockchain"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Blockchain
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses/ai-robotics"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      AI & Robotics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses/network-administration"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Network Administration
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses/software-engineering"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Software Engineering
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses/devops"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      DevOps
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-xl`
              }
            >
              Online Registration
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-xl`
              }
            >
              Gallery
            </NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/certificate"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              Certificate
            </NavLink>
            <div className="relative">
              <button className="text-black text-lg focus:outline-none">
                Courses
              </button>
              {isOpen && (
                <div className="absolute bg-gray-100 shadow-lg rounded mt-2 z-50 w-full">
                  <ul className="py-2">
                    <li>
                      <NavLink
                        to="/courses/web-development"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        Web Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/data-science"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        Data Science
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/machine-learning"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        Machine Learning
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/cyber-security"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        Cyber Security
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/cloud-computing"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        Cloud Computing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/blockchain"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        Blockchain
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/ai-robotics"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        AI & Robotics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/network-administration"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        Network Administration
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/software-engineering"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        Software Engineering
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/courses/devops"
                        className="block px-4 py-2 text-black hover:bg-gray-200"
                      >
                        DevOps
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              Online Registration
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              Gallery
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
