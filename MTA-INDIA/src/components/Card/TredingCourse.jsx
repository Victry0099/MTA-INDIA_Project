import React from "react";
import { topCourses } from "../../Data/topCourse";

const TredingCourse = () => {
  return (
    <section className="my-10 bg-slate-50">
      <p className="text-cyan-500 ps-28 pt-4 tracking-widest">START LEARNING</p>
      <h2 className="text-3xl pb-3 ps-28 font-medium">
        Tranding Course {""}
        <span className="text-emerald-400">Learn Start From Today</span>
      </h2>

      <div className="flex justify-center w-full h-full p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
          {topCourses?.map((course) => (
            <div
              className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-4"
              key={course.id}
            >
              <img
                src={`/${course.image}`}
                className="w-full h-48 object-cover rounded-lg"
                alt={course.course_name}
              />
              <div className="mt-4 text-center">
                <h1 className="text-2xl font-bold">{course.course_name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TredingCourse;
