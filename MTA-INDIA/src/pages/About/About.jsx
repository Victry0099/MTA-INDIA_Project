import React from "react";

import { GoGoal } from "react-icons/go";
import { IoArrowRedoCircle } from "react-icons/io5";
import Button from "../../utils/Button";

const About = () => {
  return (
    <>
      {/* about-section */}
      <div className="about-section md:flex ">
        <div className="about-left md:w-2/4 w-full">
          <img src="images/about-img.png" className="w-auto p-10" />
        </div>

        <div className="about-right md:w-2/4 w-full pt-6 md:pl-0 pl-10">
          <p className="text-red-500 font-bold mt-8 mb-2">About Us</p>

          <h2 className="md:text-4xl text-2xl font-bold text-[#001A36]">
            Welcome To MTA India
          </h2>

          <p className="flex mt-3 mb-3">
            <GoGoal className="text-3xl mr-2 text-red-500" />
            <span className="font-semibold text-[#001A36] md:text-lg text-md">
              {" "}
              MTA Is The Right Place Where You Can Achieved{" "}
            </span>
          </p>

          <p className="text-slate-600 lg:tracking-wide tracking-normal lg:leading-loose leading-normal pr-10">
            Microdot Tech Aspire Solutions Pvt Ltd. (MTA India) is an
            ISO-certified IT Training Institute that offers quality IT training
            all over India through online and classroom training. For 13 years,
            this training institute is providing career-making training and
            guiding thousands of students every year in building their careers.
            In this competitive era, every technology has its demand, its trend.
            Here, we keep those demands and mind and help the trainees to be the
            master of the trending technologies. No matter what's your age,
            learning has no limits. MTA India is always there to help you in
            making your career in the IT sector.
          </p>

          <div className="w-full lg:flex">
            <div className="lg:w-2/5 w-full">
              <div className="flex my-4">
                <IoArrowRedoCircle className="text-2xl text-red-500 mr-2" />
                <span className="text-slate-600">
                  ISO Certified IT Training
                </span>
              </div>
              <div className="flex">
                <IoArrowRedoCircle className="text-2xl text-red-500 mr-2" />
                <span className="text-slate-600">Working on live Projects</span>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <div className="flex my-4">
                <IoArrowRedoCircle className="text-2xl text-red-500 mr-2" />
                <span className="text-slate-600">24X7 Course Support</span>
              </div>
              <div className="flex">
                <IoArrowRedoCircle className="text-2xl text-red-500 mr-2" />
                <span className="text-slate-600">
                  100% Placement Assistance
                </span>
              </div>
            </div>
          </div>

          <Button />
        </div>

        {/* about-section closed */}
      </div>

      <div className="why-mta bg-[#001A36] pt-10 pb-14 m-10 rounded-lg md:px-32 px-10">
        <h3 className="text-3xl font-bold text-center text-[#fff]">
          Why MTA INDIA
        </h3>

        <p className="md:pr-24 pr-8 text-white mt-8 mb-6">
          For 13 glorious years, MTA India is providing the best quality IT
          training with the help of its experienced students. There are so many
          reasons to choose MTA India to build up your career in the IT sector,
          but some of the most genuine reasons are listed below. Check these
          out.
        </p>

        <ul className="list-disc pl-5 space-y-2 md:w-2/5 w-full text-white">
          <li>ISO Certified IT Training Center in Noida</li>

          <li>Both Online & Offline Courses are Available</li>

          <li>
            11+ Years of Experience as trainers from IITs and the corporate
            world
          </li>

          <li>Global Certification after completion of the course</li>

          <li>24X7 course support</li>

          <li>Work on live projects</li>

          <li>Prosonality Development Sessions</li>

          <li>Internship Facility for successful trainees</li>

          <li>100% Placement assistance</li>
        </ul>

        <p className="md:pr-24 pr-8  text-white mt-4">
          As the leading IT training center in Noida, MTA India offers a
          platform where the students implement their academic knowledge to
          solve real-life client issues. Our expert professionals help them to
          achieve the goals in their training and life as well.
        </p>
      </div>

      {/* about mis vis section */}
      <div className="about-mis-vis-section w-full md:flex pt-4 pb-10">
        <div className="md:w-2/4 w-full p-10">
          <div className="our-mission rounded-lg pt-10 pb-20 bg-[#001A36]">
            <h2 className="text-3xl text-center font-bold my-4 text-white">
              Our Mission
            </h2>

            <p className="text-justify lg:tracking-wide tracking-normal lg:leading-loose leading-normal px-10 text-white">
              Everyone loves technology. But think about it. If you are the
              developer of some applications that people are using, how cool is
              it? MTA India has only one mission to give a platform to students
              or any individual who want to build their career in the IT sector.
              It might be a developer, a designer, or a database admin. Every
              single profile is important in every IT company. Keeping this
              mission in mind, MTA India is offering the best IT training
              through online and offline classes from expert professionals. This
              IT training institute is the one-stop solution for every IT course
              you are seeking.
            </p>
          </div>
        </div>

        <div className="md:w-2/4 w-full p-10">
          <div className="our-mission rounded-lg pt-10 pb-24 border-4 border-[#001A36]">
            <h2 className="text-3xl text-center font-bold my-4 text-[#001A36]">
              Our Vision
            </h2>

            <p className="text-justify lg:tracking-wide tracking-normal lg:leading-loose leading-normal px-10 text-[#001A36]">
              MTA India has one clear vision. To provide quality IT Training
              that can be used in making a successful IT career. Here at MTA
              India, trainees come up with thousand of doubts about their
              careers. But leave with confidence about their career. Here, we
              not only help them to get complete knowledge in the respective
              course, but we also offer confidence about the respective course.
              Despite different ups and downs in MTA India's career, it is still
              standing tall as one of the leading IT training centers in India.
            </p>
          </div>
        </div>

        {/* about mis vis section closed */}
      </div>
    </>
  );
};

export default About;
