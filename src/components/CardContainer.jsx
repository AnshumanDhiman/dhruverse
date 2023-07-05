import ACard from './Cards/Ads/ACards.jsx'
import FCard from './Cards/Films/FCards.jsx'
import MCard from './Cards/Music/MCards.jsx'

export default function Container() {
  return (
    <>
    <div className="container mx-auto bg-theme_1"> 

        <h2 className="text-2xl font-semibold ml-4 mb-[-25px] bg-gradient-to-r text-transparent bg-clip-text from-theme_3 to-theme_4">
          Branding your digital Presence
        
        </h2>
        <ACard />
      
        <h2 className="text-2xl font-semibold ml-4 mb-[-55px] bg-gradient-to-r text-transparent bg-clip-text from-theme_3 to-theme_4">
          Your Music, Our Visuals
        
        </h2>
        <MCard />
        <h2 className="text-2xl font-semibold ml-4 mb-[-25px] bg-gradient-to-r text-transparent bg-clip-text from-theme_3 to-theme_4">
         Experience Cinematic Brilliance 

        </h2>
        <FCard />
  
     
   
    </div>
    </>

  )
}

{/* <hr className="w-20 border-t-2 border-theme_2 mt-4" />  */}
