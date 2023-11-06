/* eslint-disable react/prop-types */

import y1 from "../assets/youtubers/1.jpg";
import y2 from "../assets/youtubers/2.jpg";
import y4 from "../assets/youtubers/4.jpg";
import y6 from "../assets/youtubers/6.jpg";
import y8 from "../assets/youtubers/8.jpg";
import y10 from "../assets/youtubers/10.jpg";
import y11 from "../assets/youtubers/11.jpg";
import y12 from "../assets/youtubers/12.jpg";
import y13 from "../assets/youtubers/13.jpg";

import y15 from "../assets/youtubers/15.jpg";

import o1 from "../assets/ott/1.png";
import o2 from "../assets/ott/2.png";
import o3 from "../assets/ott/3.png";
import o4 from "../assets/ott/4.png";
import o5 from "../assets/ott/5.png";
import o6 from "../assets/ott/6.png";
import o7 from "../assets/ott/7.png";
import o8 from "../assets/ott/8.png";


import a2 from "../assets/ads/2.png";
import a3 from "../assets/ads/3.png";
import a4 from "../assets/ads/4.png";
import a5 from "../assets/ads/5.png";

const Brand = () => {
  return (
    <>
      <section className="p-4">
      <br/><br/>
        <p className="text-theme_4 text-md lg:text-2xl text-center font-light lg:px-16 lg:py-8">
          At dhruVerse, we value the power of partnerships. We are proud to
          collaborate with like-minded individuals and organizations who share
          our passion for creating exceptional media content.
        </p>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full py-0 lg:px-40 lg:py-8">
              <div className="flex flex-wrap items-center justify-center rounded-full ">
              
                <SingleImage href="#" Alt="Brand Image" imgSrc={o4} />
                <SingleImage href="#" Alt="Brand Image" imgSrc={o5} />
                <SingleImage href="#" Alt="Brand Image" imgSrc={o6} />
                <SingleImage href="#" Alt="Brand Image" imgSrc={o7} />
                <SingleImage href="#" Alt="Brand Image" imgSrc={o8} />
                <SingleImage href="#" Alt="Brand Image" imgSrc={o1} />
                <SingleImage href="#" Alt="Brand Image" imgSrc={o2} />
                <SingleImage href="#" Alt="Brand Image" imgSrc={o3} />
                
              </div>
            </div>
          </div>
        </div>
       
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap -mx-4 mb-[-32px]">
            <div className="w-full lg:px-64">
              <div className="flex flex-wrap items-center justify-center  rounded-full ">
              <div className="hidden lg:block">
                <img
                  className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={y10}
                  alt=""
                />
                <p className="text-theme_4 text-center">Gaurav Arora</p>
                </div>
              <div>
                <img
                  className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={y2}
                  alt=""
                />
                <p className="text-theme_4 text-center">Harsh Beniwal</p>
                </div>
                <div>
                <img
                  className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={y1}
                  alt=""
                />
                <p className="text-theme_4 text-center">Amit Bhadana</p>
                </div>
        
                <div>
                <img
                  className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={y4}
                  alt=""
                />
                <p className="text-theme_4 text-center">Hasley India</p>
                </div>
                
                <div>
                <img
                  className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={y6}
                  alt=""
                />
                <p className="text-theme_4 text-center">Fukra Insaan</p>
                </div>
               
                <div>
                <img
                  className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-4 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={y8}
                  alt=""
                />
                <p className="text-theme_4 text-center">Tanmay Bhat</p>
                </div>
               
                  <div className="hidden lg:block">
                <img
                  className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={y11}
                  alt=""
                />
                  <p className="text-theme_4 text-center">Payal Jain</p>
                  </div>
                  <div className="hidden lg:block">
                <img
                  className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={y12}
                  alt=""
                />
                  <p className="text-theme_4 text-center">Mayank Mishra</p>
                  </div>
                  <div className="hidden lg:block">
                <img
                  className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={y13}
                  alt=""
                />
                  <p className="text-theme_4 text-center">Purav Jha</p>
                  </div>
                
                  <div className="hidden lg:block">
                <img
                  className="w-[75px] p-1 lg:w-[100px] m-4 lg:mx-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={y15}
                  alt=""
                />
                  <p className="text-theme_4 text-center">Bali</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative  text-center">
          <div className="py-2 pt-8 lg:pt-12">
       
            <img
              className="w-20 lg:w-32 p-1 m-4 lg:m-12 inline"
              src={a2}
              alt=""
            />
            <img
              className="w-20 lg:w-32 p-1 m-4 lg:m-12 inline"
              src={a3}
              alt=""
            />
            <img
              className="w-20 lg:w-32 p-1 m-4 lg:m-12 inline"
              src={a4}
              alt=""
            />
            <img
              className="w-20 lg:w-32 p-1 m-4 lg:m-12 inline"
              src={a5}
              alt=""
            />
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
