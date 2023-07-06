import { FaAward, FaUsers, FaLightbulb } from "react-icons/fa";

const WhyZensolutions = () => {
  const cards = [
    {
      title: "Quality",
      description:
        "We deliver high-quality solutions that meet the needs and expectations of our clients.",
      icon: <FaAward size={48} className="text-white" />,
      iconBackground: "#ffcc66",
    },
    {
      title: "Expert Team",
      description:
        "Our team of experienced professionals is dedicated to providing top-notch IT services.",
      icon: <FaUsers size={48} className="text-white" />,
      iconBackground: "#66ccff",
    },
    {
      title: "Innovation",
      description:
        "We constantly strive for innovation, bringing creative ideas to drive business success.",
      icon: <FaLightbulb size={48} className="text-white" />,
      iconBackground: "#ff6699",
    },
  ];

  return (
    <div className="bg-theme_1 py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 style={{fontFamily:'Bebas',letterSpacing:'3px'}} className="text-4xl font-semibold text-center bg-gradient-to-r text-theme_4">
          About Us  
        </h2>
        <p className="text-center text-theme_4 mb-8 mt-4 text-2xl font-light">
        At Rollin, we celebrate individuality while embracing a collective passion for storytelling and a shared vision to construct a powerful platform that fuels creativity and future innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-theme_2 rounded-lg p-8 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: card.iconBackground }}
              >
                {card.icon}
              </div>
              <h3 className="text-xl text-theme_4 font-semibold text-center mb-4">
                {card.title}
              </h3>
              <p className="text-theme_4 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyZensolutions;