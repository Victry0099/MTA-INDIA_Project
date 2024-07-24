import React from "react";
import "./UpComingBatches.css";
import { upComingBatches } from "../../../Data/upComingBatches";
import Carousel from "../../../utils/Carousel";

const UpComingBatches = () => {
  return (
    <>
      <div className="grid">
        {upComingBatches?.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.startDate}</p>
            <p>{card.mode}</p>
            <a href={card.link}>Learn More</a>
          </div>
        ))}
        {/* <Carousel /> */}
      </div>
    </>
  );
};

export default UpComingBatches;
