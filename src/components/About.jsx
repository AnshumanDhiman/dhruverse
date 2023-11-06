/* eslint-disable react/no-unescaped-entities */

import bgimg from "../assets/bg.png";
import a1 from "../assets/about/a1.png";
import a2 from "../assets/about/a2.png";
import a3 from "../assets/about/a3.png";
import i4 from "../assets/about/4.jpg";

const About1 = () => {
  return (
    <>
      <div className="">
        <div
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
          className="hidden lg:block w-full h-[600px]  opacity-[65%] z-[-999]"
        ></div>

        <div className="hidden  relative lg:flex overflow-x-hidden text-white opacity-70">
          <div className="animate-marquee whitespace-nowrap">
            <img src={a1} alt="" className="w-full inline-block" />
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap tex-white">
            <img src={a2} alt="" className="w-full inline-block" />
          </div>
        </div>

        <div className="2xl:container 2xl:mx-auto lg:pt-16 lg:px-20 md:pt-32 md:px-6 pt-24 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4 lg:text-left text-center">
                Unleashing Artistic Storytelling and Innovation
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600 dark:text-white lg:text-justify text-center">
                Our team believes in 'each to their own' but one thing remains
                unchanged for all of us at dhruVerse, we are storytellers with a
                clear and simple objective of creating art and building a strong
                platform for future creation and innovation in film industry as
                well as digital industry.
              </p>
            </div>
            <div className="lg:ml-0 md:ml-0 lg:w-8/12">
              <img
                className="w-full h-full px-12"
                src={i4}
                alt="dhruverse image"
              />
            </div>
          </div>
          <br />
          <div className="inline-block md:w-[50rem] sm:w-full sm:ml-0  md:ml-[-15px] lg:hidden lg:py-0 py-6">
            <img src={a3} alt="" className=" inline-block" />
          </div>
          <br />
          <br />

          <div className="hidden lg:block text-center absolute top-[50%] left-[43%] z-[999]">
            <h1
              style={{
                fontFamily: "Bebas Neue",
                letterSpacing: "5px",
                fontWeight: "bold",
              }}
              className="text-6xl text-white "
            >
              ABOUT US
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About1;
