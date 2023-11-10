
import ReactPlayer from 'react-player'
const HeroSection = () => {
  return (
    <>
      <div className="relative lg:h-[35rem] md:h-[25rem] top-12 lg:top-0 lg:mb-0 mb-12">
      <ReactPlayer url="/video2.mp4"   muted={true} playing={true} width='100%'
          height='100%'/>
        {/* <video
          className="lg:w-full md:w-full lg:h-full md:h-full object-cover"
          src={vid}
          autoPlay
          loop
          muted
          playsInline
          style={{ objectPosition: "center 20%" }}
        /> */}
      </div>
    </>
  );
};

export default HeroSection;
