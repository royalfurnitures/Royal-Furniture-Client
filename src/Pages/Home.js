import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import NewLanding from './components/NewLanding'
import manlap from "../assets/image/bg/footer.webp";
import Touch from './components/commercial/Touch';
import {
  Card,
  Typography,
} from "@material-tailwind/react";
import FrontPage from './components/commercial/FrontPage';

export default function Home() {
  const [isloading,setIsloading] = useState(true);

  useEffect(() => {
       window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, []);

  
  return (
    <>
   
      <NewLanding />
      <div className='px-3'>
          <hr className='style14' />
          <div className='py-12 career-card'>
          
          <Card color="transparent" shadow={false}>
          <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="text-lg md:text-2xl lg:text-4xl gilroyBold text-r-tvoi"> Start your career with Royal Furn!
            </h1>
            </div>
            <h5 className="mb-0 md:mb-8 text-sm sm:text-xl gilroyMedium">Enter your details to register.
            </h5>

             <Touch image={manlap} />

            </Card>

            </div>
            </div>
      <Footer />
      </>
      


  )
}
