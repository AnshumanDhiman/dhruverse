import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

// import r1 from "../../../assets/thumbnails/reels/7.jpg";
import r2 from "../../../assets/thumbnails/reels/3.png";
import r3 from "../../../assets/thumbnails/reels/2.jpg";
import r4 from "../../../assets/thumbnails/reels/11.png";
import r5 from "../../../assets/thumbnails/reels/10.png";
import r6 from "../../../assets/thumbnails/reels/1.jpg";
import r7 from "../../../assets/thumbnails/reels/5.png";
import r8 from "../../../assets/thumbnails/reels/8.jpg";
import r9 from "../../../assets/thumbnails/reels/4.png";
import r10 from "../../../assets/thumbnails/reels/9.jpg";
// import r11 from "../../../assets/thumbnails/reels/6.png";


export default function Index() {
  return (
    <div className="mx-auto">
      <div className="flex lg:items-center justify-center w-full h-full py-8 px-2 md:px-8 lg:py-8 lg:px-4  brightness-110">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={9}
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
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg contrast-[106%]">
                      <img
                        src={r2}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>

                  <Slide index={1}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg contrast-[106%]">
                      <img
                        src={r3}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>

                  <Slide index={2}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg contrast-[106%]">
                      <img
                        src={r4}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>

                  <Slide index={3}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg contrast-[106%]">
                      <img
                        src={r5}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={r6}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
               
                  <Slide index={5}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                      <img
                        src={r7}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg contrast-[109%]">
                      <img
                        src={r8}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg contrast-[109%]">
                      <img
                        src={r9}
                        alt="sitting area"
                        className="object-cover object-center w-full  rounded-lg border-lg"
                      />
                      <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg contrast-[109%]">
                      <img
                        src={r10}
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
          totalSlides={9}
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
                        src={r2}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r3}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r4}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r5}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r6}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r7}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r8}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r9}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r10}
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

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={9}
          visibleSlides={2}
          step={2}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center ">
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
                  className="h-full w-full flex lg:gap-8 md:gap-6 gap-2 items-center justify-start transition ease-out duration-700"
                >
           
                  <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r2}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r3}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r4}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r5}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r6}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r7}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                 
                  <Slide index={6}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r8}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={7}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r9}
                        alt="sitting area"
                        className="object-cover object-center w-full rounded-lg"
                      />
                    </div>
                  </Slide>
                  <Slide index={8}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={r10}
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
