import React from "react";
import { internshipProgram } from "../../Data/progam";

const OurPrograms = () => {
  return (
    <>
      <section className="my-10">
        <h2 className="text-2xl font-medium uppercase text-center underline">
          Our Programs
        </h2>

        <div className="flex justify-center w-full h-full p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
            {internshipProgram?.map((progam) => (
              <div
                className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4"
                key={progam.id}
              >
                <img
                  src={`/${progam.image}`}
                  className="w-full h-48 object-cover rounded-lg"
                  alt={progam.program_title}
                />
                <div className="mt-4 text-center">
                  <a href={progam.link} className="text-2xl font-bold">
                    {progam.program_title}
                  </a>
                </div>
                <div>
                  <p>{progam.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPrograms;
