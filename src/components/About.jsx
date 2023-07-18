/* eslint-disable react/no-unescaped-entities */

import bgimg from "../assets/bg.png";
import a1 from "../assets/about/a1.png";
import a2 from "../assets/about/a2.png";
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
          className="w-full h-[500px] p-50  opacity-60 "
        >


        </div>
        <div className="text-center top-[15rem] left-[45rem] absolute ">
        <h1 style={{fontFamily:'Bebas Neue',letterSpacing:'5px',fontWeight:'bold'}} className="text-6xl text-white ">ABOUT US</h1>
        </div>
        <div className="relative flex overflow-x-hidden text-white opacity-60">
          <div className="animate-marquee whitespace-nowrap">
            <img src={a1} alt="" className="w-full inline-block" />
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap tex-white">
            <img src={a2} alt="" className="w-full inline-block" />
          </div>
        </div>

        
      
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
            Unleashing Artistic Storytelling and Innovation
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
              Our team believes in 'each to their own' but one thing remains unchanged for all of us at Rollin, we are storytellers with a clear and simple objective of creating art and building a strong platform for future creation and innovation in film industry as well as digital industry.
              </p>
            </div>
            <div className="w-full lg:w-8/12">
              <img
                className="w-full h-full grayscale px-12"
                src={i4}    
                alt="A group of People"
              />
            </div>
          </div>

          {/* <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Alexa featured Image" />
                            <img className="md:hidden block" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Alexa featured Image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Dhruv</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Olivia featured Image" />
                            <img className="md:hidden block" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Olivia featured Image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Nitin</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                            <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Anshuman</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Elijah featured image" />
                            <img className="md:hidden block" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Elijah featured image" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Animesh</p>
                        </div>
                        
                    </div>
                </div>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default About1;
