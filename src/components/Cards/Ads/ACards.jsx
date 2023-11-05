import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
  } from "pure-react-carousel";
  import "./car.css";
  /* Install pure-react-carousel using -> npm i pure-react-carousel */
  

  import ai1 from "../../../assets/thumbnails/ads/1.jpg";
  import ai2 from "../../../assets/thumbnails/ads/2.jpeg";
  import ai3 from "../../../assets/thumbnails/ads/3.png";
  import ai4 from "../../../assets/thumbnails/ads/8.png";
  import ai5 from "../../../assets/thumbnails/ads/5.png";
  import ai6 from "../../../assets/thumbnails/ads/6.png";
  import ai7 from "../../../assets/thumbnails/ads/7.png";
  import ai8 from "../../../assets/thumbnails/ads/4.png";


  export default function Index() {
    return (
      <div className="mx-auto">
        <div className="flex lg:items-center justify-center w-full h-full py-8 px-8 lg:py-8 lg:px-4">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={7}
            visibleSlides={4}
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
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai1}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={1}>
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai2}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={2}>
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai3}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={3}>
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai4}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={4}>
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai5}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={5}>
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai6}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={6}>
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai7}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={7}>
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai8}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
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
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai1}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={1}>
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai2}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
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
            totalSlides={9}
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
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai1}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
                    </Slide>
                    <Slide index={1}>
                      <a
                        href="https://youtu.be/wsFwnZ5OxNM?si=q5gJC0BIQMk6jb71"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg">
                          <img
                            src={ai2}
                            alt="sitting area"
                            className="object-cover object-center w-full  rounded-lg border-lg"
                          />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                        </div>
                      </a>
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
  