import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

import bi1 from "../../../assets/thumbnails/best/1.jpg";
import bi2 from "../../../assets/thumbnails/best/2.jpg";
import bi3 from "../../../assets/thumbnails/best/3.jpg";
import bi4 from "../../../assets/thumbnails/best/6.jpg";
import bi5 from "../../../assets/thumbnails/best/5.jpg";
import bi6 from "../../../assets/thumbnails/best/4.jpg";
import bi7 from "../../../assets/thumbnails/best/7.jpg";
import bi8 from "../../../assets/thumbnails/best/8.jpg";
import bi9 from "../../../assets/thumbnails/best/9.jpg";
import bi10 from "../../../assets/thumbnails/best/10.jpg";
import bi11 from "../../../assets/thumbnails/best/11.jpg";
import bi12 from "../../../assets/thumbnails/best/12.jpg";
import bi13 from "../../../assets/thumbnails/best/13.jpg";
import bi14 from "../../../assets/thumbnails/best/14.jpg";

export default function Index() {
  return (
    <div className="mx-auto">
       <div className="flex lg:items-center justify-center w-full h-full py-8 px-8 lg:py-8 lg:px-4  brightness-110">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={14}
            visibleSlides={5}
            step={1}
            infinite={true}
          >
           <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi1}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi2}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg brightness-125">
                      <img
                        src={bi3}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg  brightness-125">
                      <img
                        src={bi4}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi5}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi6}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi7}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi8}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi9}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={9}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi10}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={10}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi11}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={11}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi12}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={12}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi13}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={13}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={bi14}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={14}
            visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi1}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi2}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi3}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi4}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi5}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi6}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi7}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi8}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi9}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={9}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi10}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={10}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi11}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={11}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi12}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={12}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi13}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={13}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi14}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={14}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi8}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi1}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi2}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi3}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi4}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi5}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi7}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi8}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi9}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={9}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi10}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={10}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi11}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={11}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi12}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={12}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi13}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={13}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={bi14}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

// {/* Carousel for mobile and Small size Devices */}
