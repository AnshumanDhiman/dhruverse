/* eslint-disable react/no-unescaped-entities */

const Cta = () => {
  return (
    <>
    <div className="hidden sm:block">
      <div className="lg:relative z-10 overflow-hidden bg-theme_2 py-8 px-4 md:p-10 lg:py-12 lg:px-8 xl:p-[70px]">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 lg:w-1/2">
            <span className="mb-2 text-base font-semibold text-white ">
              Find out What's Next ?
            </span>
            <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl lg:w-[70%] font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0">
              Explore the services we offer
            </h2>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="flex flex-wrap space-x-4 lg:justify-end">
              <a
                href="/contact"
                className={`my-2 sm:my-1 cursor-pointer inline-block rounded bg-info py-4 px-6 sm:px-8 text-base sm:text-lg md:text-xl font-medium border hover:bg-theme_4 hover:text-theme_2 border-theme_4 text-white transition hover:bg-opacity-90`}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <span className="absolute top-0 left-0 z-[-1]">
            <svg
              width={189}
              height={162}
              viewBox="0 0 189 162"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your SVG ellipse */}
            </svg>
          </span>
          <span className="absolute bottom-0 right-0 z-[-1]">
            <svg
              width={191}
              height={208}
              viewBox="0 0 191 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your SVG ellipse */}
            </svg>
          </span>
        </div>
      </div>
    </div>
  </>
  
  );
};

export default Cta;
