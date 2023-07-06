/* eslint-disable react/prop-types */
import p1 from "../assets/partners/1.png";
import p2 from "../assets/partners/2.png";
import p3 from "../assets/partners/3.png";
import p4 from "../assets/partners/4.png";

import c1 from '../assets/clients/1.jpg'
import c2 from '../assets/clients/2.jpg'
import c3 from '../assets/clients/3.jpg'
import c4 from '../assets/clients/4.jpg'
import c5 from '../assets/clients/5.jpg'
// import c6 from '../assets/clients/6.jpg'
// import c7 from '../assets/clients/7.jpg'



const Brand = () => {
  return (
    <>

      <section className="bg-theme_1 p-4">
      
      <h2 style={{fontFamily:'Bebas',letterSpacing:'3px'}} className="text-4xl text-theme_4 font-extrabold text-center mt-32">Our Happy Clients</h2>
      <p className="text-theme_4 text-2xl text-center font-light p-16">At Rollin Studios, we value the power of partnerships. We are proud to collaborate with like-minded individuals and organizations who share our passion for creating exceptional media content.</p>
        <div className="container flex justify-center items-center">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center  rounded-full ">
              <img className="w-40 p-1 m-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={c1} alt=""/>
              <img className="w-40 p-1 m-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={c2} alt=""/>
              <img className="w-40 p-1 m-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={c3} alt=""/>
              <img className="w-40 p-1 m-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={c4} alt=""/>
              <img className="w-40 p-1 m-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={c5} alt=""/>
                {/* <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={c2}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={c3}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={c4}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={c5}
                />
               
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={c6}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={c7}
                /> */}
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p3}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p4}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p1}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p2}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p3}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p4}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p1}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p2}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p3}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p4}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p1}
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc={p2}
                />
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} className="w-full p-8" />
      </a>
    </>
  );
};
