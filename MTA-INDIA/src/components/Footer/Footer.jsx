import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaGlobeAmericas,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-100">
        <div className="pt-8 pb-5">
          <div className="container mx-auto px-2 text-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="px-5 sm:mt-0 mt-4">
                <div className="text-cyan-600 font-semibold text-2xl font-sans tracking-wide">
                  <p>MTA-INDIA</p>
                  <p className="text-black font-normal text-xs font-sans">
                    We Make IT Professional
                  </p>
                </div>

                <p className="mt-4 text-justify">
                  Microdot Tech Aspire Solutions Pvt Ltd. (MTA India) is an
                  ISO-certified IT Training Institute that offers quality IT
                  training all over India through online and classroom training.
                </p>
              </div>

              <div className="sm:ml-0 ml-5">
                <h1 className="text-xl font-bold mb-4">Quick Links</h1>
                <ul className="list-disc pl-5 space-y-2 text-slate-950">
                  <li>
                    <a href="#" className="hover:text-green-400">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      Our Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sm:ml-0 ml-5">
                <h1 className="text-xl font-bold mb-4">Popular Courses</h1>
                <ul className="list-disc pl-5 space-y-2 text-slate-950">
                  <li>
                    <a href="#" className="hover:text-green-400">
                      Machine Learning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      Data Analytics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      MERN Stack
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      Java Full Stack
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      .dot Net Full Stack
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-green-400">
                      Python Full Stack
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sm:ml-0 ml-5">
                <h1 className="text-xl font-bold mb-4">More Information</h1>
                <ul className="text-slate-950">
                  <li className="flex my-2">
                    <IoIosCall className="text-2xl mr-2 text-green-500" />
                    <p>+91-987543234</p>
                  </li>
                  <li className="flex my-2">
                    <MdOutgoingMail className="text-2xl mr-2 text-green-500" />
                    <a href="#">example@mail.com</a>
                  </li>
                  <li className="flex my-2">
                    <FaGlobeAmericas className="text-xl mr-2 text-green-500" />
                    <a href="#">www.mtaindia.org</a>
                  </li>
                </ul>

                <h1 className="text-xl font-bold mt-8 mb-5">Follow Us</h1>

                <ul className="flex space-x-2 text-slate-300">
                  <li className="rounded-full p-3 bg-slate-300 text-red-500 hover:bg-cyan-300">
                    <a href="#" target="_blank">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="rounded-full p-3 bg-slate-300 text-red-500 hover:bg-cyan-300">
                    <a href="#" target="_blank">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="rounded-full p-3 bg-slate-300 text-red-500 hover:bg-cyan-300">
                    <a href="#" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="rounded-full p-3 bg-slate-300 text-red-500 hover:bg-cyan-300">
                    <a href="#" target="_blank">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="rounded-full p-3 bg-slate-300 text-red-500 hover:bg-cyan-300">
                    <a href="#" target="_blank">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-3">
          <p className="text-center text-black">
            Copyright &copy; 2024. All Rights Reserved By{" "}
            <a href="#" className="text-red-500 font-semibold">
              www.mtaindia.org
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
