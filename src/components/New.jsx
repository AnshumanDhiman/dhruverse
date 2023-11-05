/* eslint-disable no-unused-vars */
import React from "react";
import i1 from "../assets/thumbnails/film/3.jpg";
import i2 from "../assets/thumbnails/ads/2.jpeg";

const OurServices = () => {
  const services = [
    {
      image: i1,

    },
    {
      image: i2,

    },
  ];

  return (
    <>
      <div className="">
        <p className="text-md lg:text-2xl p-4 lg:p-8 md:text-xl md:p-8 sm:text-sm sm:p-8 font-light text-justify lg:text-center text-theme_4">
          We are dhruVerse, providing the best production, from pre to
          post.
          <span className="inline lg:block">
            {" "}
            We are the ultimate platform where lies the pioneers of creative
            storytelling and visual mastery.
          </span>
        </p>

        <h2 className="text-center lg:text-left  text-2xl pt-0 lg:pt-4 md:pt-16 font-semibold bg-gradient-to-r ml-[20px] text-transparent bg-clip-text from-theme_3 to-theme_4">
          New Arrivals
        </h2>
        <div className="lg:py-4 lg:px-32 lg:ml-[-200px] ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 rounded-lg">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-theme_1 rounded-lg shadow-2xl transition duration-300 ease-in-out transform cursor-pointer hover:animate-pulse "
                >
                 
                    <img
                      src={service.image}
                      className="rounded-lg "
                      alt="image"
                    />
                  
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default OurServices;
