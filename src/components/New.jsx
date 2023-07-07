/* eslint-disable no-unused-vars */
import React from "react";
import { FaCode, FaRobot, FaPalette, FaPen, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import i1 from '../assets/thumbnails/music/1.jpg'
import i2 from '../assets/thumbnails/film/2.jpg'



const OurServices = () => {
  const services = [
    {
        image : i1,
        link: "/services/web-development",
    },
    {
        image : i2,
        link: "/services/automation",
    },
  ];

  return (
    <>
    <div className="bg-theme_1">
    <p className='px-16 pt-8 font-light text-center text-3xl text-theme_4'>We are Rollin Studios, providing the best production, from pre to post. We are the ultimate platform where lies the pioneers of creative storytelling and visual mastery.</p>
        <h2 className="text-2xl pt-4 font-semibold bg-gradient-to-r ml-[20px] text-transparent bg-clip-text from-theme_3 to-theme_4">
          New Arrivals
        </h2>
    <div className="py-4 px-32 ml-[-200px]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 rounded-lg">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-theme_1 rounded-lg shadow-2xl hover:bg-theme_2 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img src={service.image} className="rounded-lg" alt="image"/>
            </div>
          ))}
        </div>
      </div>
    </div>
    <br/>
    </div>
    </>
  );
};

export default OurServices;