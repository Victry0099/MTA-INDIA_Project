import React from "react";
import TredingCourse from "../../components/Card/TredingCourse";
import OurPrograms from "../../components/Card/OurPrograms";
import Carousel from "../../utils/Carousel";
import UpComingBatches from "../../components/AnimationCard/UpComingBatches/UpComingBatches";

const Home = () => {
  return (
    <>
      <section>
        <div className="flex justify-center flex-col lg:flex-row items-center p-4 min-h-screen">
          <div className="w-full lg:w-1/2 p-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Responsive Content</h1>
            <p className="text-lg mb-4 ">
              This is a responsive layout example. On larger screens, the
              content and image are displayed side by side. On smaller screens,
              the content and image stack vertically.
            </p>
            <p className="text-lg">
              Tailwind CSS makes it easy to create responsive layouts with its
              utility-first approach. Adjust the screen size to see the layout
              change.
            </p>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img
              src="images/hero_img.png"
              alt="Placeholder"
              className="w-3/4 h-auto "
            />
          </div>
        </div>
      </section>

      <TredingCourse />

      <OurPrograms />
      <UpComingBatches />
    </>
  );
};

export default Home;
