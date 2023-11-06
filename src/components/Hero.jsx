import vid from "../assets/video/video1.mp4";
const HeroSection = () => {
  return (
    <>
      <div className="relative lg:h-[35rem] md:h-[25rem] sm:h-[10rem]">
  <video
    className="lg:w-full md:w-full sm:w-1/2 lg:h-full md:h-full sm:h-1/2 object-cover"
    src={vid}
    autoPlay
    loop
    muted
    style={{ objectPosition: 'center 20%' }}
  />
  <div className="absolute inset-0 opacity-50"></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="max-w-2xl text-center">
      {/* Content */}
    </div>
  </div>
</div>

    </>
  );
};

export default HeroSection;
