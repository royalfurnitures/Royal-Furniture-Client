import React, {useEffect} from 'react';
import how from "../../assets/image/bg/how.webp";
import { Button, Typography } from '@material-tailwind/react';
import { Container } from '@mui/material';
import h1 from "../../assets/image/icons/h1.webp"
import h2 from "../../assets/image/icons/h2.webp"
import h3 from "../../assets/image/icons/h3.webp"
import h4 from "../../assets/image/icons/h4.webp"
import h5 from "../../assets/image/icons/h5.webp"
import t1 from "../../assets/image/icons/t1.webp"
import t2 from "../../assets/image/icons/t2.webp"
import t3 from "../../assets/image/icons/t3.webp"
import l from "../../assets/image/icons/l.webp"
import r from "../../assets/image/icons/r.webp"
import tick from "../../assets/image/icons/tick.webp"
import Touch from '../components/commercial/Touch';
import Footer from '../components/Footer';
import subs from "../../assets/image/bg/living.webp";
import { useParams } from 'react-router-dom';

const FiveStepsTiles = [
    {
    PageName:"interio",
    Title:"Five steps to your dream home!",
    SubTitle:"Looking to design your home interiors? Here’s how you can get started."
   },
    {
     PageName:"modular",
     Title:"5-Step Guide to Revitalize Your Office Space",
     SubTitle:"Here’s how you can get started."
    },
    {
    PageName:"medifurn",
    Title:"Revolutionizing the healthcare spaces with Royal aesthetics",
    SubTitle:"A 5-Step Interior Design Journey!"
    },
    {
    PageName:"edufurn",
    Title:"Streamline the education space with our 5-step process",
    SubTitle:"Here’s how you can get started."  
    }
]

const cards = [
    {
        img: h1,
        text: "O1",
        des: "Discovery & Consultation"
    },
    {
        img: h2,
        text: "O2",
        des: "Design & Planning"
    },
    {
        img: h3,
        text: "O3",
        des: "Craftsmanship & Manufacturing"
    },
    {
        img: h4,
        text: "O4",
        des: "Installation & Quality Assurance"
    },
    {
        img: h5,
        text: "O5",
        des: "Handover & Post-Support"
    }
  ]
  
const team = [
    {
        img: t1,
        title: "The Design Lead (DL)",
        sub: "The Design Lead gets to know your requirements and your lifestyle intimately to ensure your home is a reflection of who you are."
    },
    {
        img: t2,
        title: "The Business Manager (BM)",
        sub: "To ensure your home journey is smooth sailing, your Business Manager oversees the entire design process and ensures there are no hiccups."
    },
    {
        img: t3,
        title: "The Project Manager (PM)",
        sub: "Your Project Manager steers the on-site execution. They make it their life’s mission to get your home ready in time."
    },
    
]

export default function IntHow() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      }, []);

   const { PageName } = useParams();

  const matchingTile = FiveStepsTiles.find(tile => tile.PageName === PageName);

  if (!matchingTile) {
    return <div>Page not found</div>;
  }


  return (
    <>
    <div className="relative h-full w-full" style={{height: "80vh"}}>
        <img
          src={how}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end justify-center bg-gradient-to-t from-r-tvoi to-transparent to-50%">
          <div className="justify-center align-center">
            <Typography
              variant="h1"
              color="white"
              className="mb-8 text-xl md:text-4xl lg:text-5xl gilroyEBold text-center"
              style={{lineHeight: "40px"}}
            >
              Unlock the Potential of Stunning Environments
            </Typography>
          </div>
        </div>
    </div>
    <Container>
        <div className='my-5  md:py-10'>
            <h1 className='text-center gilroyBold text-r-tvoi steps-title text-lg md:text-2xl lg:text-3xl'>{matchingTile.Title}</h1>
            <h3 className='text-center gilroyMedium text-r-tvoi steps-sub text-md md:text-xl lg:text-2xl'>{matchingTile.SubTitle}</h3>
            <div className='grid grid-cols-10'>
                {cards.map((step, index) => (
                <div className='flex items-center justify-center flex-col gap-2 my-[10px] md:my-[100px] col-span-10 md:col-span-2' key={index}>
                   <img className='w-[200px] md:w-[80%]' src={step.img} />
                    <div>
                        <h1 className='text-r-tvoi gilroyBold text-xl md:text-2xl lg:text-4xl  text-center'>{step.text}</h1>
                        <h1 className='text-r-tvoi gilroyMedium text-sm md:text-md lg:text-xl  text-center'>{step.des}</h1>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    </Container>
    <Container>
        <div className='steps-sec grid grid-cols-10'>
            <div className='col-span-10 md:col-span-5'>
            <div className='flex justify-center items-center ' >
                <img className=" w-[200px] md:w-[70%]" src={h1} />
            </div>
            </div>
            <div className='col-span-10 md:col-span-5 px-2'>
            <div className='flex justify-center items-center  md:items-start flex-col'>
                <h1 className='step-cardtitle gilroyBold text-r-tvoi flex justify-center  items-center md:items-start text-xl md:text-2xl lg:text-3xl'>
                Unveil Your Vision & Consult Our Expertise
                </h1>
                <p className='gilroyMedium step-cardsub text-r-tvoi text-sm md:text-xl text-justify md:text-start'>
                Engage on your design journey by expressing your ideas and needs in a 
                preliminary inquiry. Our professionals provide a free consultation, digging into your ideas and finances to ensure a harmonic balance of your ambitions and practicalities.
                </p>
            </div>
            </div>
        </div>
        </Container>
        <Container>
        <div className='steps-sec grid grid-cols-10'>
            <div className='col-span-10 md:col-span-5'>
            <div className='flex justify-center items-center ' >
                <img style={{width: "70%"}} src={h2} />
            </div>
            </div>
            <div className='col-span-10 md:col-span-5 px-2'>
            <div className='flex justify-center items-center  md:items-start flex-col'>
                <h1 className='step-cardtitle gilroyBold text-r-tvoi flex justify-center  items-center md:items-start text-xl md:text-2xl lg:text-3xl'>
                Strategic Design & Meticulous Planning
                </h1>
                
                <p className='gilroyMedium step-cardsub text-r-tvoi text-sm md:text-xl text-justify md:text-start'>
                Beyond the consultation, we take precise site measurements and create a detailed 3D design customised for your space. This step entails customising components to fit your style and preferences.
                </p>
            </div>
            </div>
        </div>
        </Container>
        <Container>
        <div className='steps-sec grid grid-cols-10'>
            <div className='col-span-10 md:col-span-5'>
            <div className='flex justify-center items-center ' >
                <img style={{width: "70%"}} src={h3} />
            </div>
            </div>
            <div className='col-span-10 md:col-span-5 px-2'>
            <div className='flex justify-center  items-center md:items-start flex-col'>
                <h1 className='step-cardtitle gilroyBold text-r-tvoi flex justify-center  items-center md:items-start text-xl md:text-2xl lg:text-3xl'>
                Precision Crafted & Expert Manufacturing
                </h1>
               
                <p className='gilroyMedium step-cardsub text-r-tvoi text-sm md:text-xl text-justify md:text-start'>
                After you accept the design, we begin the production process, handcrafting high-quality, and customised components with precision and 
                care to ensure each item meets our exacting standards.
                </p>
            </div>
            </div>
        </div>
        </Container>
        <div className='bg-r-voi2 flex justify-center items-center text-white' style={{minHeight: "100px"}}>
           <div><img src={l} className='quote' /></div> <div> <h1 className='gilroyBold quote-txt  text-center text-xs sm:text-md md:text-xl lg:text-2xl'>It is half way there. Orders have been raised for your review!</h1></div> <div><img src={r} className='quote' /></div>
        </div>
        <Container>
        <div className='steps-sec grid grid-cols-10'>
            <div className='col-span-10 md:col-span-5'>
            <div className='flex justify-center items-center ' >
                <img style={{width: "70%"}} src={h4} />
            </div>
            </div>
            <div className='col-span-10 md:col-span-5'>
            <div className='flex justify-center items-center  md:items-start flex-col'>
                <h1 className='step-cardtitle gilroyBold text-r-tvoi flex justify-center  items-center md:items-start text-xl md:text-2xl lg:text-3xl '>
                Beyond Installation & Quality Assurance
                </h1>
                
                <p className='gilroyMedium step-cardsub text-r-tvoi text-sm md:text-xl text-justify md:text-start'>
                Our experienced team installs the components in a timely and professional manner. We do stringent quality tests to ensure that everything is right before the final handover.
                </p>
            </div>
            </div>
        </div>
        </Container>
        <div className='bg-r-voi2 flex justify-center items-center text-white' style={{minHeight: "100px"}}>
           <div><img src={l} className='quote' /></div><div><img src={tick} className='tick'  /></div>  <h1 className='gilroyBold quote-txt text-center text-xs sm:text-md md:text-xl lg:text-2xl '>Hooray! We’ve got it all paid for!</h1> <div><img src={r} className='quote' /></div>
        </div>
        <Container>
        <div className='steps-sec grid grid-cols-10'>
            <div className='col-span-10 md:col-span-5'>
            <div className='flex justify-center items-center ' >
                <img style={{width: "70%"}} src={h5} />
            </div>
            </div>
            <div className='col-span-10 md:col-span-5'>
            <div className='flex justify-center items-center  md:items-start flex-col'>
                <h1 className='step-cardtitle gilroyBold text-r-tvoi flex justify-center  items-center md:items-start text-xl md:text-2xl lg:text-3xl'>
                Seamless Handover & Enduring Support.
                </h1>
                
                <p className='gilroyMedium step-cardsub text-r-tvoi text-sm md:text-xl text-justify md:text-start'>
                We are committed to your complete pleasure. We give a complete handover of your new interior after a successful installation. Furthermore, we provide continuing post handover assistance to resolve any issues or problems you may have, assuring your ultimate satisfaction.
                </p>
            </div>
            </div>
        </div>
        </Container>
        <Container>
        <div className='pb-24'>
            <h1 className='text-center gilroyBold text-r-tvoi steps-title text-xl md:text-2xl lg:text-3xl'>The Royal Team</h1>
            <h3 className='text-center gilroyMedium text-r-tvoi steps-sub text-sm  md:text-lg lg:text-xl'>Get to know the team that’ll be with you every step of the way.</h3>
            <div className='grid grid-cols-6 gap-5'>
                {team.map((team, index) => (
                   <div className='col-span-6 md:col-span-2'>
                <div className='flex flex-col gap-3 items-center justify-center my-[10px] md:my-[50px]  ' key={index}>
                <img className='w-[200px] md:w-[80%]' src={team.img} />
                <div>
                        <h1 className='text-r-tvoi gilroyBold mb-2  mt-4 text-xl md:text-lg lg:text-2xl'>{team.title}</h1>
                    </div>
                <div>
                        <h1 className='tgilroyMedium text-sm  md:text-md lg:text-xl  text-r-tvoi text-justify'>{team.sub}</h1>
                    </div>
                </div>
                </div>
                ))}
            </div>
            
        </div>
    </Container>
    <Container>
    <Touch image={subs} />
    <div style={{marginBottom: "100px"}} />
    </Container>
    <Footer />
    </>
  )
}
