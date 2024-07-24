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
      <footer className="bg-blue-900">
        <div className="pt-14 pb-5">
          <div className="container mx-auto px-2 text-white">
            <div className="grid md:grid-cols-4 gap-3">
              <div className=" sm:mt-0 mt-4 sm:ml-0 ml-5 px-5">
                <div className="text-cyan-600 font-semibold text-2xl font-sans tracking-wide">
                  <p>MTA-INDIA</p>
                  <p className="text-white font-normal text-xs font-sans">
                    We Make IT Professional
                  </p>
                </div>

                <p className="mt-4 text-justify">
                  Microdot Tech Aspire Solutions Pvt Ltd. (MTA India) is an
                  ISO-certified IT Training Institute that offers quality IT
                  training all over India through online and classroom training.
                </p>
              </div>

              <div className=" sm:mt-0 mt-10 sm:ml-0 ml-5">
                <h1 className="text-xl font-bold mb-4"> Quick Links </h1>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>

                  <li>
                    <a href="#">Courses</a>
                  </li>

                  <li>
                    <a href="#">Gallery</a>
                  </li>

                  <li>
                    <a href="#">Our Blog</a>
                  </li>

                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className=" sm:mt-0 mt-10 sm:ml-0 ml-5">
                <h1 className="text-xl font-bold mb-4"> Popular Courses </h1>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                  <li>
                    <a href="#">Machine Learning</a>
                  </li>
                  <li>
                    <a href="#">Data Analytics</a>
                  </li>

                  <li>
                    <a href="#">Cloud Computing</a>
                  </li>
                  <li>
                    <a href="#">MERN Stack</a>
                  </li>
                  <li>
                    <a href="#">Java Full Stack</a>
                  </li>
                  <li>
                    <a href="#">.dot Net Full Stack</a>
                  </li>
                  <li>
                    <a href="#">Python Full Satck</a>
                  </li>
                </ul>
              </div>

              <div className="footer-block-four sm:mt-0 mt-10 sm:ml-0 ml-5">
                <h1 className="text-xl font-bold mb-4"> More imformation </h1>
                <ul className="text-slate-300">
                  <li className="flex my-2">
                    <IoIosCall className="text-2xl mr-2 text-red-500" />
                    <a href="#">+91-987543234</a>
                  </li>
                  <li className="flex my-2">
                    <MdOutgoingMail className="text-2xl mr-2 text-red-500" />
                    <a href="#">example@mail.com</a>
                  </li>
                  <li className="flex my-2">
                    <FaGlobeAmericas className="text-xl mr-2 text-red-500" />
                    <a href="#">www.mtaindia.org</a>
                  </li>
                </ul>

                <h1 className="text-xl font-bold mt-8 mb-5"> Follow Us </h1>

                <ul className="flex text-slate-300">
                  <li className="mr-1 rounded-full p-3 bg-slate-300 text-red-500">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>

                  <li className="mr-1 rounded-full p-3 bg-slate-300 text-red-500">
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>

                  <li className="mr-1 rounded-full p-3 bg-slate-300 text-red-500">
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>

                  <li className="mr-1 rounded-full p-3 bg-slate-300 text-red-500">
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>

                  <li className="mr-1 rounded-full p-3 bg-slate-300 text-red-500">
                    <a href="#">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-3">
          <p className="text-center text-white">
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
