import React from "react";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../../Data/tesimonial";

const Testimonial = () => {
  return (
    <div className="testimonial-main w-full">
      <div className="testimonial-heading py-8">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold">
            What Says <u className="text-blue-400">Our Students</u>
          </h3>
        </div>
      </div>

      <div className="testimonial-section w-full">
        <div className="container mx-auto w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-block p-4 shadow-lg rounded-lg"
              >
                <div className="testimonial-content">
                  <div className="testimonial-stars flex">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-gray-700">
                    {testimonial.description}
                  </p>
                </div>
                <div
                  className={`testimonial-students ${testimonial.color} p-4 mt-4 rounded-lg`}
                >
                  <div className="flex items-center">
                    <div className="testimonial-students-img w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="testimonial-student-name ml-4">
                      <h5 className="font-semibold">{testimonial.name}</h5>
                      <p className="text-gray-500">{testimonial.course}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
