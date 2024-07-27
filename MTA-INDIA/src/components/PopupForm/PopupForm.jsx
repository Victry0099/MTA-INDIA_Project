import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
    }, 10000); // Show the popup every 30 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="relative">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8 rounded-lg shadow-lg relative max-w-3xl w-full">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
            >
              <IoClose size={24} />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0 flex justify-center items-center flex-col">
                <h2 className="text-2xl font-semibold mb-4">
                  Course Registration
                </h2>
                <p>
                  Register for our IT-related courses and choose your preferred
                  mode of study.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-4 shadow-2xl shadow-indigo-500  rounded-xl">
                <form className="pe-2 pt-2">
                  <div className="mb-1">
                    <label className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-1 bg-transparent text-black outline-none rounded-lg border-b-2 border-slate-950 focus:outline-none"
                    />
                  </div>
                  <div className="mb-1">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-1 bg-transparent text-black outline-none rounded-lg border-b-2 border-slate-950 focus:outline-none"
                    />
                  </div>
                  <div className="mb-1">
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-1 bg-transparent text-black outline-none rounded-lg border-b-2 border-slate-950 focus:outline-none"
                    />
                  </div>
                  <div className="mb-1">
                    <label className="block text-gray-700 mb-2">Course</label>
                    <select className="w-full px-4 py-1 bg-transparent text-black outline-none rounded-lg border-b-2 border-slate-950 focus:outline-none">
                      <option>Web Development</option>
                      <option>Data Science</option>
                      <option>Machine Learning</option>
                      <option>Cyber Security</option>
                      <option>Cloud Computing</option>
                      <option>Blockchain</option>
                      <option>AI & Robotics</option>
                      <option>Network Administration</option>
                      <option>Software Engineering</option>
                      <option>DevOps</option>
                    </select>
                  </div>
                  <div className="mb-1">
                    <label className="block text-gray-700 mb-2">Mode</label>
                    <select className="w-full px-4 py-1 bg-transparent text-black outline-none rounded-lg border-b-2 border-slate-950 focus:outline-none">
                      <option>Offline</option>
                      <option>Online</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                  <div className="text-center py-2">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white font-semibold px-4 py-1 rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
