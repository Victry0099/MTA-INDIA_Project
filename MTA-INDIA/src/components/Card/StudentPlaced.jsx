import React from "react";
import { studentPlaced } from "../../Data/studentPlaced";
const StudentPlaced = () => {
  return (
    <>
      <section className="my-10 bg-slate-50">
        {/* <p className="text-cyan-500 ps-28 pt-4 tracking-widest">
          START LEARNING
        </p> */}
        <h2 className="text-3xl py-5 ps-32 font-medium">
          Our Student Are {""}
          <span className="text-emerald-400">Placed In</span>
        </h2>

        <div className="flex justify-center w-full h-full p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
            {studentPlaced?.map((item) => (
              <div
                className="flex flex-col justify-center items-center   p-4"
                key={item.id}
              >
                <img
                  src={`/${item.image}`}
                  className="w-full h-50 object-cover mix-blend-multiply"
                  alt="No imges"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentPlaced;
