import React from "react";
import TredingCourse from "../../components/Card/TredingCourse";
import OurPrograms from "../../components/Card/OurPrograms";

import {
  FaFilePowerpoint,
  FaPlayCircle,
  FaUserAstronaut,
  FaLongArrowAltDown,
} from "react-icons/fa";
import CarouselCard from "../../utils/CarouselCard";

import Testimonial from "../../components/Card/Tesimonial";
import StudentPlaced from "../../components/Card/StudentPlaced";

const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-100 via-purple-100 to-purple-200 shadow-2xl shadow-purple-200">
        <div className="flex justify-center items-center flex-col pt-10 text-7xl tracking-wide font-semibold ">
          <h1 className="uppercase pb-5 text-purple-600">
            IT Training Institute
          </h1>
          <p className="uppercase">In Noida</p>
        </div>

        <div className="flex justify-center flex-col lg:flex-row items-center px-4 pb-4 min-h-screen">
          <div className="w-full lg:w-1/2 p-4">
            <h1 className="text-3xl font-bold mb-4">Responsive Content</h1>
            <p className="px-12 text-justify text-lg tracking-wide">
              MTA – Top IT Training Institute in Noida is an ideal place for
              individuals looking to upgrade their skills and advance their
              careers in the fast-growing tech industry. Offering a plethora of
              IT courses, including popular courses such as Web Development
              courses and Software classes in Noida, Institute provides hands-on
              training and practical experience to help students stay ahead of
              the curve.
            </p>
            <a href="">
              <button className="bg-purple-300 py-2 px-5 rounded-lg border-2 border-black text-lg font-semibold ms-12 mt-7">
                Enroll Now
              </button>
            </a>
            <div className="ms-24">
              <FaLongArrowAltDown className="text-4xl  text-black" />
            </div>

            <div className="ps-8">
              <ul>
                <li className="mr-1 rounded-full p-3 list-none flex">
                  <FaPlayCircle className="text-2xl mr-2 text-purple-500" />{" "}
                  <span className="font-semibold text-lg text-purple-900">
                    Live Classes
                  </span>
                </li>
                <li className="mr-1 rounded-full p-3 list-none flex">
                  <FaFilePowerpoint className="text-2xl mr-2 text-purple-500" />{" "}
                  <span className="font-semibold text-lg text-purple-900">
                    Modern Project
                  </span>
                </li>
                <li className="mr-1 rounded-full p-3 list-none flex">
                  <FaUserAstronaut className="text-3xl mr-2 text-purple-500 " />{" "}
                  <span className="font-semibold text-lg text-purple-900">
                    Industry Level Training
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img
              src="images/hero_page.png"
              alt="Placeholder"
              className="w-3/4 h-auto "
            />
          </div>
        </div>
      </section>

      <TredingCourse />
      <OurPrograms />

      <CarouselCard />

      <Testimonial />
      <StudentPlaced />
    </>
  );
};

export default Home;
