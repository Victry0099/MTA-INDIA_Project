import React, { useState } from "react";
import {
  GalleryOffice,
  GalleryWinter,
  GallerySummer,
} from "../../Data/gallery";

function Gallery() {
  const [popupImage, setPopupImage] = useState(null);

  const handleImageClick = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <>
      <div className="gallery-heading pt-10 pb-1">
        <h1 className="text-center font-bold text-3xl my-6 text-[#001A36]">
          Our Office
        </h1>
      </div>

      <div className="gallery flex flex-wrap bg-green-50">
        {GalleryOffice.map((element, index) => {
          return (
            <div key={index} className="md:w-1/4 sm:w-2/4 w-full px-2 py-4">
              <img
                src={element.image}
                className="border-4 border-[#001A36] rounded-lg"
                onClick={() => handleImageClick(element.image)}
              />
            </div>
          );
        })}
      </div>

      <div className="gallery-heading pt-10 pb-6">
        <h1 className="text-center font-bold text-3xl my-6 text-[#001A36]">
          Summer Training
          <hr className="w-24 m-auto mt-2 border-2 border-[#001A36]" />
        </h1>
      </div>

      <div className="gallery flex flex-wrap bg-purple-50">
        {GallerySummer.map((element, index) => {
          return (
            <div key={index} className="md:w-1/4 sm:w-2/4 w-full  px-2 py-4">
              <img
                src={element.image}
                className="border-4 border-[#001A36]"
                onClick={() => handleImageClick(element.image)}
              />
            </div>
          );
        })}
      </div>

      <div className="gallery-heading pt-10 pb-6">
        <h1 className="text-center font-bold text-3xl my-6 text-[#001A36]">
          Winter Training
          <hr className="w-24 m-auto mt-2 border-2 border-[#001A36]" />
        </h1>
      </div>

      <div className="gallery flex flex-wrap mb-10 bg-pink-50">
        {GalleryWinter.map((element, index) => {
          return (
            <div key={index} className="md:w-1/4 sm:w-2/4 w-full  px-2 py-4">
              <img
                src={element.image}
                className="border-4 border-[#001A36]"
                onClick={() => handleImageClick(element.image)}
              />
            </div>
          );
        })}
      </div>

      {popupImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closePopup}
        >
          <img
            src={popupImage}
            className="w-1/2 h-1/1 border-4 border-[#001A36]"
            alt="Popup"
          />
        </div>
      )}
    </>
  );
}
export default Gallery;
