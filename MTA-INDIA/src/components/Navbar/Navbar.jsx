import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-orange-500 hover:text-green-500"
      : "text-black hover:text-green-500";

  return (
    <header>
      <nav className="bg-gray-200 p-4">
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
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black hover:text-green-500 text-xl"
              >
                Courses
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-gray-100 shadow-lg rounded mt-2">
                  <NavLink
                    to="/courses/course1"
                    className={({ isActive }) =>
                      `${linkClasses({ isActive })} text-xl`
                    }
                  >
                    Course 1
                  </NavLink>
                  <NavLink
                    to="/courses/course2"
                    className={({ isActive }) =>
                      `${linkClasses({ isActive })} text-xl`
                    }
                  >
                    Course 2
                  </NavLink>
                  <NavLink
                    to="/courses/course3"
                    className={({ isActive }) =>
                      `${linkClasses({ isActive })} text-xl`
                    }
                  >
                    Course 3
                  </NavLink>
                </div>
              )}
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
          <div className="md:hidden flex flex-col">
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
              to="/programs"
              className={({ isActive }) =>
                `${linkClasses({ isActive })} text-lg`
              }
            >
              Programs
            </NavLink>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black py-2 text-lg"
              >
                Courses
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-gray-200 shadow-lg rounded mt-2">
                  <NavLink
                    to="/courses/course1"
                    className={({ isActive }) =>
                      `${linkClasses({ isActive })} `
                    }
                  >
                    Course 1
                  </NavLink>
                  <NavLink
                    to="/courses/course2"
                    className={({ isActive }) =>
                      `${linkClasses({ isActive })} `
                    }
                  >
                    Course 2
                  </NavLink>
                  <NavLink
                    to="/courses/course3"
                    className={({ isActive }) =>
                      `${linkClasses({ isActive })} `
                    }
                  >
                    Course 3
                  </NavLink>
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
