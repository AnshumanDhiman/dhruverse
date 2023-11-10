

const HeroSection = () => {
  return (
    <>
      <div className="relative lg:h-[35rem] md:h-[25rem] top-12 lg:top-0 lg:mb-0 mb-12">

        <video
          className="lg:w-full md:w-full lg:h-full md:h-full object-cover"
          src="/video2.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ objectPosition: "center 20%" }}
        />
      </div>
    </>
  );
};

export default HeroSection;
