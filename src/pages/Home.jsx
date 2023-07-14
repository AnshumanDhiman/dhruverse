/* eslint-disable no-unused-vars */
import Hero from "../components/Hero";
import Container from "../components/CardContainer";
import BrickLayout from "../components/BrickLayout";
import New from "../components/New";
import WhyRollin from '../components/WhyRollin'
import Plus from "../components/Plus";
import Cta from "../components/Cta";
import PartnersSection from "../components/Partner";


export default function Home() {
  return (
   <>
<div className="noise"></div>
<Hero />
<New />
<Container />
<Plus />  
<PartnersSection />
<WhyRollin />
      <Cta />
      {/*
      



     
     

       */}
       </>

  )
}
{/* <BrickLayout /> */}
