import React, { useState } from "react";
import webJavaData from "../Data/webdata";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Webdevelopment() {
  const [openhtml, setOpenHtml] = useState(null);

  const handleToggle = (index) => {
    setOpenHtml(openhtml === index ? null : index);
  };

  return (
    <>
      <div className="web-section-main md:flex py-10 ">
        <div className="web-section-left border-2 w-2/4">
          {webJavaData.map((element) => {
            return (
              <div className="image">
                <img src={element.image} className="w-full p-4" />
              </div>
            );
          })}

          <div className="buttons flex p-4">
            <div className="button-left w-2/4 text-center py-4 bg-[#10a8e2]">
              <p className="text-white">Description</p>
            </div>

            <div className="button-right w-2/4 text-center py-4 bg-[#f1f1f1]">
              <p className="">Course Curriculum</p>
            </div>
          </div>

          <div className="description border-2  mt-3 m-4 pt-2 p-4">
            {webJavaData.map((element) => {
              return (
                <>
                  <h3 className="font-bold my-2">{element.javaheading}</h3>
                  <p className="mb-4 text-slate-700">
                    {element.Descriptionone}
                  </p>

                  <p className="mb-4 text-slate-700">
                    {element.Descriptiontwo}
                  </p>

                  <h3 className="font-bold my-2">{element.programheading}</h3>

                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {element.programpoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  <h3 className="font-bold my-3 mt-4">{element.whychoose}</h3>

                  <p className="mb-4 text-slate-700">{element.whycontent}</p>

                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {element.whychooselist.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  <h3 className="font-bold my-3 mt-4">{element.careerscope}</h3>

                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {element.careerlist.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </>
              );
            })}
          </div>

          <div className="course-curriculum border-2 border-red-500 m-4 pt-2">
            {webJavaData.map((element, index) => {
              return (
                <div key={index}>
                  <h1
                    className="text-lg py-3 pl-4 bg-[#f1f1f1] font-bold"
                    onClick={() => handleToggle(index)}
                  >
                    {element.htmltitle}
                    <span className="float-right mt-1 mr-3">
                      {openhtml === index ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </h1>

                  {openhtml === index && (
                    <div className="border-2 p-4 pb-6">
                      <ul className="list-disc pl-5 space-y-2 text-slate-700">
                        {element.htmlitems.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="web-section-right border-2 w-2/4">2</div>
      </div>
    </>
  );
}

export default Webdevelopment;
