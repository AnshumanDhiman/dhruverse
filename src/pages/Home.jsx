/* eslint-disable no-unused-vars */
import Hero from "../components/Hero";
import Container from "../components/CardContainer";
import New from "../components/New";
import WhyThreeCommaStudios from "../components/WhyThreeCommaStudios";
import Plus from "../components/Plus";
import Cta from "../components/Cta";
import PartnersSection from "../components/Partner";

export default function Home() {
  return (
    <>
      <div className="noise"></div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
      <Hero />
      <New />
      <Container />
      <Plus />
      <PartnersSection />
      <WhyThreeCommaStudios />
      <Cta />
    </>
  );
}
