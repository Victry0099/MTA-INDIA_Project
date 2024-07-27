import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <section>
        <div className="registration-main md:flex">
          <div className="registration-left md:w-2/4 w-full pt-6 bg-purple-100 shadow-2xl shadow-purple-300 rounded-md">
            <img src="images/reg_page.png" className="w-2/3 m-auto" />
          </div>

          <div className="registration-right md:w-2/4 w-full px-10 pt-12 pb-16 bg-slate-100">
            <h3 className="text-3xl font-bold my-6 text-center text-black">
              Online Registration
            </h3>

            <form onSubmit={handleSubmit}>
              <input
                className="placeholder placeholder:text-slate-900 placeholder:font-semibold block bg-white w-full border-2 border-slate-300 rounded-lg py-3 pl-4 pr-3 shadow-sm focus:outline-none  sm:text-sm my-3"
                placeholder="Full Name"
                type="text"
                name="fullname"
              />

              <input
                className="placeholder placeholder:text-slate-900 placeholder:font-semibold block bg-white w-full border-2 border-slate-300 rounded-lg py-3 pl-4 pr-3 shadow-sm focus:outline-none  sm:text-sm my-3  "
                placeholder="E-mail"
                type="text"
                name="email"
              />

              <input
                className="placeholder placeholder:text-slate-900 placeholder:font-semibold block bg-white w-full border-2 border-slate-300 rounded-lg py-3 pl-4 pr-3 shadow-sm focus:outline-none  sm:text-sm my-3"
                placeholder="Mobile Number"
                type="number"
                name="number"
              />

              <select className="placeholder text-slate-900 font-semibold block bg-white w-full border-2 border-slate-300 rounded-lg py-3 pl-4 pr-3 shadow-sm focus:outline-none  sm:text-sm my-3">
                <option>Courses</option>

                <option>Full Stack</option>
                <option>Java Training</option>
                <option>Python Training</option>
                <option>Dot Net Training</option>
                <option>Digital Marketing</option>
                <option>PHP Training</option>
                <option>Web Designing</option>
                <option>Cloud Computing</option>
              </select>

              <select className="placeholder text-slate-900 font-semibold block bg-white w-full border-2 border-slate-300 rounded-lg py-3 pl-4 pr-3 shadow-sm focus:outline-none  sm:text-sm my-3">
                <option>Training Mode</option>

                <option>Online Mode</option>
                <option>Offline Mode</option>
              </select>

              <button className="text-white w-full py-3 mt-2 bg-blue-500 font-bold rounded-lg">
                Apply Now
              </button>
            </form>
          </div>
        </div>

        <div className="w-full h-full flex justify-center gap-10">
          <div className="get-in-touch md:flex py-14 w-4/5 justify-center ">
            <div className="md:w-1/3 w-full pb-14 bg-purple-200 text-center m-3 rounded-md shadow-xl shadow-purple-300">
              <div className="touch-block">
                <div className="icon p-5 rounded-full bg-[#FFF] mt-10 mb-3 inline-block">
                  <IoCallSharp className="text-5xl text-purple-900" />
                </div>

                <h3 className="font-bold  text-purple-900 text-xl my-2">
                  CALL US
                </h3>

                <p className=" text-stone-950 text-xl  my-1">+91-8375998840</p>

                <p className=" text-stone-950 text-xl ">+91-9315636357</p>
              </div>
            </div>

            <div className="md:w-1/3 w-full pb-14 bg-purple-200 text-center m-3 rounded-md shadow-xl shadow-purple-300">
              <div className="touch-block">
                <div className="icon p-5 rounded-full bg-white mt-10 mb-3 inline-block">
                  <FaMapLocationDot className="text-5xl text-purple-900" />
                </div>

                <h3 className="font-bold text-xl text-purple-900 my-2">
                  CORPORATE ADDRESS
                </h3>

                <p className=" text-stone-950 text-lg">
                  B-4, First Floor, Sector 63
                </p>
              </div>
            </div>

            <div className="md:w-1/3 w-full pb-14 bg-purple-200 text-center m-3 rounded-md shadow-xl shadow-purple-300">
              <div className="touch-block">
                <div className="icon p-5 rounded-full bg-[#FFF] mt-10 mb-3 inline-block">
                  <MdOutgoingMail className="text-5xl text-purple-900" />
                </div>

                <h3 className="font-bold text-xl text-purple-900 my-1">
                  EMAIL
                </h3>

                <p className=" text-stone-950 text-lg ">info@mtaindia.org</p>
              </div>
            </div>
          </div>
        </div>

        <div className="map w-full h-96 pb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28022.275414119133!2d77.32938675368418!3d28.606243270643148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff90f3a0d8d%3A0xa5f0321e764cbd0e!2sMTAIND%20-%20Microsoft%20Summer%20training%20Internship!5e0!3m2!1sen!2sin!4v1721908875308!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
export default Contact;
