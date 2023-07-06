
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import './car.css'
/* Install pure-react-carousel using -> npm i pure-react-carousel */

import ai1 from '../../../assets/thumbnails/film/18.jpg'
import ai2 from '../../../assets/thumbnails/film/17.jpg'
import ai3 from '../../../assets/thumbnails/film/16.jpg'
import ai4 from '../../../assets/thumbnails/film/15.jpg'
import ai5 from '../../../assets/thumbnails/film/14.jpg'
import ai6 from '../../../assets/thumbnails/film/13.jpg'
import ai7 from '../../../assets/thumbnails/film/12.jpg'
import ai8 from '../../../assets/thumbnails/film/11.jpg'
import ai9 from '../../../assets/thumbnails/film/12.jpg'
import ai10 from '../../../assets/thumbnails/film/11.jpg'
import ai11 from '../../../assets/thumbnails/film/10.jpg'
import ai12 from '../../../assets/thumbnails/film/9.jpg'
import ai13 from '../../../assets/thumbnails/film/8.jpg'
import ai14 from '../../../assets/thumbnails/film/7.jpg'
import ai15 from '../../../assets/thumbnails/film/6.jpg'
import ai16 from '../../../assets/thumbnails/film/5.jpg'
import ai17 from '../../../assets/thumbnails/film/4.jpg'
import ai18 from '../../../assets/thumbnails/film/3.jpg'


export default function Index() {
    return (
        <div className="mx-auto">
        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
            {/* Carousel for desktop and large size devices */}
            <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={18} visibleSlides={4} step={1} infinite={true}>
                <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>
                            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai1} alt="sitting area" className="object-cover object-center w-full rounded-lg" />
                                 
                                </div>
                                </Slide>
                                <Slide index={1}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai2} alt="sitting area" className="object-cover object-center w-full  rounded-lg" />
                                    
                                </div>
                                </Slide>
                                <Slide index={2}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai3} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={3}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai4} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={4}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai5} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={5}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai6} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={6}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai7} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={7}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai8} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={8}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai9} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={9}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai10} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={10}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai11} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={11}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai12} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={12}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai13} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={13}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai14} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={14}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai15} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={15}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai16} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={16}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai17} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                                <Slide index={17}>
                                <div className="flex overflow-x-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-lg" >
                                    <img src={ai18} alt="sitting area" className="object-cover object-center w-full  rounded-lg border-lg" />
                                    <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                  
                                    </div>
                                </div>
                                </Slide>
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>

           
        </div>
    </div>
    );
}


{/* <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
<div className="w-full relative flex items-center justify-center">
    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </ButtonBack>
    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
        <Slider>
            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={1}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={2}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={3}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={4}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={5}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={6}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={7}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={8}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={9}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={10}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={11}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
            </div>
        </Slider>
    </div>
    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </ButtonNext>
</div>
</CarouselProvider>
<CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
<div className="w-full relative flex items-center justify-center">
    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </ButtonBack>
    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
        <Slider>
            <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                <Slide index={0}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={1}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={2}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={3}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={4}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={5}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={6}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={7}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={8}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={9}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={10}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
                <Slide index={11}>
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img src="./assets/images/2.jpg" alt="black chair and white table" className="object-cover object-center w-full  rounded-lg border-lg" />
                      
                    </div>
                </Slide>
            </div>
        </Slider>
    </div>
    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </ButtonNext>
</div>
</CarouselProvider> */}
