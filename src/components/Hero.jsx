import vid from "../assets/video/video1.mp4";
const HeroSection = () => {
  return (
    <>
      <div className="relative  lg:h-[35rem] md:h-[25rem] top-4 lg:top-0">
      <video
  className="lg:w-full md:w-full lg:h-full md:h-full h-[16.5rem] object-cover"
  src={vid}
  autoPlay
  loop
  muted
  playsInline
  style={{ objectPosition: 'center 20%' }}
/>
</div>

    </>
  );
};

export default HeroSection;
