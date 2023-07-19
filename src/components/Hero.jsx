import vid from '../assets/video/video.mp4'
const HeroSection = () => {
  return (
    <>
    <div className="relative ">
    <div className="relative lg:h-[30rem] md:h-[25rem] sm:h-[10rem] ">
      <video
        className="lg:w-full md:w-full sm:w-1/2 lg:h-full md:h-full sm:h-1/2 object-cover"
        src={vid}
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 opacity-50"></div>

    </div>
  </div>
  </>
  );
}

export default HeroSection;
