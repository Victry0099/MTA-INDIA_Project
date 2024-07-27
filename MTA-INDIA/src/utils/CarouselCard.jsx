import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { upComingBatches } from "../Data/upComingBatches";

const responsive = {
  superLargeDesktop: {
    // screens greater than 1440px
    breakpoint: { max: 4000, min: 1440 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    // screens between 1024px and 1440px
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    // screens between 640px and 1024px
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    // screens less than 640px
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CarouselCard = () => {
  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-4/5 p-4 bg-purple-100">
        <p className="text-cyan-500 ps-28 pt-4 tracking-widest">
          GROW YOUR CAREER
        </p>
        <h2 className="text-3xl pb-7 ps-28 font-medium">
          Upcoming Batches {""}
          <span className="text-emerald-400">Enrolled Now</span>
        </h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000} // Adjusted for smoother transition
          showDots={false}
          arrows={true}
          keyBoardControl={true}
          customTransition="all 0.5s ease" // Smoother transition
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
          {upComingBatches.map((item, index) => (
            <div key={index} className="px-2">
              <div className="relative flex flex-col items-center bg-blue-100 shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-40 md:h-40 lg:h-32 xl:h-32 2xl:h-32  flex justify-center items-center px-4 bg-green-200">
                  <img
                    src={item.image}
                    alt={`Slide ${index}`}
                    className="rounded-full w-24 h-24 object-cover"
                  />
                </div>
                <div className="w-full px-4 pb-8">
                  <h3 className="text-gray-900 text-xl font-bold py-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-md py-1">{item.startDate}</p>
                  <p className="text-gray-600 text-md py-1">{item.mode}</p>
                  <a href={item.link} className="text-blue-500 underline">
                    <button> Join Batch Now</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselCard;
