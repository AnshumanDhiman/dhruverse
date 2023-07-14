/* eslint-disable react/prop-types */
import React from "react";

import y1 from "../assets/youtubers/1.jpg";
import y2 from "../assets/youtubers/2.jpg";
import y3 from "../assets/youtubers/3.jpg";
import y4 from "../assets/youtubers/4.jpg";
import y5 from "../assets/youtubers/5.jpg";
import y6 from "../assets/youtubers/6.jpg";
import y7 from "../assets/youtubers/7.jpg";
import y8 from "../assets/youtubers/8.jpg";

import o1 from "../assets/ott/1.png";
import o2 from "../assets/ott/2.png";
import o3 from "../assets/ott/3.png";
import o4 from "../assets/ott/4.png";
import o5 from "../assets/ott/5.png";

import m1 from "../assets/music/1.jpg";
import m2 from "../assets/music/2.png";
import m3 from "../assets/music/3.png";
import m4 from "../assets/music/4.png";
import m5 from "../assets/music/5.png";
import m6 from "../assets/music/6.png";


import a1 from "../assets/ads/1.png";
import a2 from "../assets/ads/2.png";
import a3 from "../assets/ads/3.png";
import a4 from "../assets/ads/4.png";
import a5 from "../assets/ads/5.png";





const Brand = () => {
  return (
    <>

      <section className="p-4">
      
      <h2 style={{fontFamily:'Bebas Neue',letterSpacing:'3px'}} className="text-2xl lg:text-4xl text-theme_4 font-extrabold text-center mt-8 lg:mt-32">Allies & Associates</h2>
      <div className="flex justify-center items-center">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-0 py-0 lg:px-16 lg:py-8">
              <div className="flex flex-wrap items-center justify-center rounded-full ">
              <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={o4}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={o1}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={o2}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={o3}
                />
                 <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={o5}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-0 lg:px-16">
              <div className="flex flex-wrap items-center justify-center  rounded-full ">
              <img className="w-[45px] lg:w-16 p-1 m-4 lg:m-12 mt-0 inline" src={m1} alt="" />
              <img className="w-[95px] lg:w-32 p-1 m-4 lg:m-12 mt-0  inline" src={m2} alt="" />
              <img className="w-[105px] lg:w-32 p-1 m-4 lg:m-12 mt-0  inline" src={m3} alt="" />
              <img className="w-[95px] lg:w-32 p-1 m-4 lg:m-12 mt-0  inline" src={m4} alt="" />
              <img className="w-[95px] lg:w-32 p-1 m-4 lg:m-12 mt-0  inline" src={m5} alt="" />
              <img className="w-[75px] lg:w-24 p-1 m-4 lg:m-12 mt-0  inline" src={m6} alt="" />
              </div>
            </div>
          </div>
        </div>
      <p className="text-theme_4 text-md lg:text-2xl text-center font-light lg:px-16 lg:py-8">At Rollin Studios, we value the power of partnerships. We are proud to collaborate with like-minded individuals and organizations who share our passion for creating exceptional media content.</p>
      <div className="flex justify-center items-center">
          <div className="flex flex-wrap -mx-4 mb-[-32px]">
            <div className="w-full lg:px-64">
              <div className="flex flex-wrap items-center justify-center  rounded-full ">
              <img className="w-[75px] p-1 lg:w-[100px] m-4 lg:m-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={y2} alt=""/>
              <img className="w-[75px] p-1 lg:w-[100px] m-4 lg:m-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={y1} alt=""/>
              <img className="w-[75px] p-1 lg:w-[100px] m-4 lg:m-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={y3} alt=""/>
              <img className="w-[75px] p-1 lg:w-[100px] m-4 lg:m-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={y4} alt=""/>
              <img className="w-[75px] p-1 lg:w-[100px] m-4 lg:m-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={y5} alt=""/>
              <img className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={y6} alt=""/>
              <img className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={y7} alt=""/>
              <img className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-4 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={y8} alt=""/>      
              <img className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={y8} alt=""/>       
              </div>
            </div>
          </div>
        </div>
        <div className="relative  text-center">
        <div className="py-2 pt-0 lg:pt-12 p">
        <img className="w-16 p-1 m-12 inline" src={a1} alt="" />
        <img className="w-32 p-1 m-12 inline" src={a2} alt="" />
        <img className="w-32 p-1 m-12 inline" src={a3} alt="" />
        <img className="w-32 p-1 m-12 inline" src={a4} alt="" />
        <img className="w-32 p-1 m-12 inline" src={a5} alt="" />
 

  </div>

</div>
</section>
    </>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[95px] lg:w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className="w-full p-4" />
      </a>
    </>
  );
};