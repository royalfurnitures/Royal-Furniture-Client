import { Card, CardMedia, Container } from '@mui/material'
import React, { Fragment } from 'react';
import YoutubePlayer from 'react-youtube-player';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import one from "../../../assets/image/sr/erode/1.webp"
import two from "../../../assets/image/sr/erode/2.webp"
import three from "../../../assets/image/sr/erode/3.webp"
import four from "../../../assets/image/sr/erode/4.webp"
import five from "../../../assets/image/sr/erode/5.webp"
import six from "../../../assets/image/sr/erode/6.webp"
import cone from "../../../assets/image/cards/kit.webp";
import ctwo from "../../../assets/image/cards/bed.webp";
import cthree from "../../../assets/image/cards/full.webp";
import cfour from "../../../assets/image/cards/liv.webp";
// import cfour from "../../../";
import { useEffect } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { GoLocation } from "react-icons/go";
import logo from "../../../assets/image/Logo/showroom_logo.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const cbeimages = [
  {
    label: 'Largest Experience center',
    imgPath:
      cone,
  },
  {
    label: 'Step into a world of design',
    imgPath:
      ctwo,
  },
  {
    label: 'See, touch, and feel luxury interiors',
    imgPath:
      cthree,
  },
  {
    label: 'Where spaces come to life beautifully',
    imgPath:
      cfour,
  },
];
const erimages = [
  {
    label: 'Largest Experience center',
    imgPath:
      one,
  },
  {
    label: 'Step into a world of design',
    imgPath:
      two,
  },
  {
    label: 'See, touch, and feel luxury interiors',
    imgPath:
      three,
  },
  {
    label: 'Where spaces come to life beautifully',
    imgPath:
      six,
  },
];

const Details = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleStepChange = (step: number) => {
      setActiveStep(step);
    };
  return (
    <Fragment>
        <div className=' mx-3 md:mx-10   py-10' >
          <div className='flex items-center justify-center text-[30px] md:text-[40px] lg:text-[50px] xl:text-[64px] text-[#FFF]'>Visit Our Showrooms</div>
             <div className='w-[100%] relative mt-10  py-[50px]  md:px-10 lg:px-40  md:p-10 flex gap-20 flex-col bg-white rounded-[57px]' style={{boxShadow: '0px 16px 27.299999237060547px 5px rgba(0, 0, 0, 0.29)'}}>
                       <div className='mx-3'>
                       <div className='block md:hidden'>
                        <div className='flex items-center justify-center'>
                         <img src={logo} className='w-[50%]' />
                        </div>
                       </div>
                       <div className='absolute hidden md:block'>
                       <img src={logo}  />
                       </div>
                      <div className='flex flex-col gap-4'>
                      <div className='flex items-center justify-center gap-3 bg-[white]  py-2 px-3 gilroyMedium'> 
                            <GoLocation className='text-[28px] text-[#000000]'/> 
                            <span className='text-[32px] font-bold text-[#000]'>Coimbatore</span> 
                      </div>
                       

                            <div className='flex items-center justify-start text-md md:text-xl lg:text-2xl  text-justify gilroyMedium text-[#000000]'>
                            Step into our Interior Showroom, a vast experiential center for all your home interior needs. Explore a world of possibilities, from modular kitchens to cozy bedrooms and inviting living rooms. What sets us apart? You can touch, feel, and immerse yourself in real interiors, allowing you to make informed decisions. Our knowledgeable team is here to guide you every step of the way, ensuring your dream home becomes a reality. 
                            Visit us today and experience the future of home design.
                            </div>
                           

                      </div>
                   
                   <div className='flex items-center mt-5 justify-center md:justify-center relative'>
                   <div className="bg-[#FFF7EB] px-2 py-5 md:py-5 md:px-5 w-[100%] rounded-[12px] ">
                      <div className='grid grid-cols-2 gap-5'>
                        <div className='col-span-2 md:col-span-1 flex flex-col items-center justify-center '>
                          <div className='max-w-[300px] flex items-center justify-center flex-col gap-2'>
                           <div className='flex items-center justify-center text-center text-[#323232] text-[12px] md:text-[18px] lg:text-[18px]'>New Door No.188/189, (Old Door No.56), Ward No.29, Diwan Bahadur Road, R S Puram, Coimbatore - 641 002.</div>
                           <div className='flex items-center justify-center text-center text-[#404040] text-[12px] md:text-[18px] lg:text-[18px] font-bold'> Vishnu ( +91-9942535863 ) </div>
                           </div>
                        </div>
                        <div className='col-span-2 md:col-span-1'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3001581983276!2d76.95022949999999!3d11.0160914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a20d48272b%3A0xc459423e58beb697!2sROYAL%20FURNITURES!5e0!3m2!1sen!2sin!4v1706267956804!5m2!1sen!2sin" className=' w-[100%] lg:w-[400px] h-[300px] ' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                      </div>
                        
                    </div>
                    </div>
                    </div>
              
             </div>
             <div className='w-[100%] relative mt-10  py-[50px] md:px-10 lg:px-40  md:p-10 flex gap-20 flex-col  bg-white rounded-[57px]' style={{boxShadow: '0px 16px 27.299999237060547px 5px rgba(0, 0, 0, 0.29)'}}>
             <div className='mx-3'>
             <div className='block md:hidden'>
                        <div className='flex items-center justify-center'>
                         <img src={logo} className='w-[50%]' />
                        </div>
                       </div>
                       <div className='absolute hidden md:block'>
                       <img src={logo}  />
                       </div>
                      <div className='flex flex-col gap-4'>
                      <div className='flex items-center justify-center gap-3 bg-[white]  py-2 px-3 gilroyMedium'> 
                            <GoLocation className='text-[28px] text-[#000000]'/> 
                            <span className='text-[32px] font-bold text-[#000]'>Erode</span> 
                      </div>
                       

                            <div className='flex items-center justify-start text-md md:text-xl lg:text-2xl  text-justify gilroyMedium text-[#000000]'>
                            At Royal Furn, we take pride in being your one-stop destination for interior excellence. Our state-of-the-art manufacturing unit ensures the highest quality craftsmanship for all your interior needs. But we don't stop there – our experience center is where your interior dreams come to life. Step inside and explore a world of inspiration, where you can see, touch, and feel the very essence of home transformation. From furniture to decor, we offer a complete sensory experience to help you create the perfect living spaces you've always envisioned. Welcome to a new era of interior possibilities.
                            </div>
                           

                      </div>
                   
                   <div className='flex items-center justify-center mt-5 md:justify-center relative'>
                    <div className="bg-[#FFF7EB] px-2 py-5 md:py-5 md:px-5 w-[100%] rounded-[12px] ">
                      <div className='grid grid-cols-2 gap-5'>
                        <div className='col-span-2 md:col-span-1 flex flex-col items-center justify-center '>
                          <div className='max-w-[400px] flex items-center justify-center flex-col gap-2'>
                           <div className='flex items-center justify-center text-center text-[#323232] text-[12px] md:text-[18px] lg:text-[18px]'>3-3, Kanjikovil Main Road, Thiththampalayam Pirivu,Perundurai, Erode - 638 052</div>
                           <div className='flex items-center justify-center text-center text-[#404040] text-[12px] md:text-[18px] lg:text-[18px] font-bold'> Hemachandhran (+91-9842935863)</div>
                           </div>
                        </div>
                        <div className='col-span-2 md:col-span-1'>
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.250012254635!2d77.58292349999999!3d11.316428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96b73b1761a9d%3A0x218c51c575f8c8ae!2sROYAL%20FURNITURES%20-%20Erode!5e0!3m2!1sen!2sin!4v1706272993149!5m2!1sen!2sin"  className=' w-[100%] lg:w-[400px] h-[300px] ' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                      </div>
                        
                    </div>
                    {/* <div className='w-[300px] md:w-[500px]  lg:w-[600px] xl:w-[800px]' sx={{  flexGrow: 1 ,position:"relative"}}>
                    
                    <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                    >
   
        <p className='gilroyBold'>{cbeimages[activeStep].label}</p>
                    </Paper>
                    <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    >
                    {erimages.map((step, index) => (
                        <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                            component="img"
                            className='w-[300px] md:w-[500px]  lg:w-[600px] xl:w-[800px]'
                            sx={{
                                maxHeight: 500,
                                display: 'block',
                                overflow: 'hidden',
                            }}
                            src={step.imgPath}
                            alt={step.label}
                            />
                        ) : null}
                        </div>
                    ))}
                    </AutoPlaySwipeableViews>
                    
                </div> */}
                    </div>
              
             </div>
             </div>
             {/* <div className='w-[100%] mt-10 mb-20   p-10 flex gap-20 flex-col bg-white rounded-[57px]' style={{boxShadow: '0px 16px 27.299999237060547px 5px rgba(0, 0, 0, 0.29)'}}>
             
               <div className='grid grid-cols-2 gap-10'>
                   
                   <div className='col-span-2 lg:col-span-1'>
                   <div className='flex items-center justify-center relative'>
                    <Box sx={{ maxWidth: 800, flexGrow: 1 ,position:"relative"}}>
                    <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                    >
   
        <p className='gilroyBold'>{cbeimages[activeStep].label}</p>
                    </Paper>
                    <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    >
                    {erimages.map((step, index) => (
                        <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                            component="img"
                            sx={{
                                maxHeight: 500,
                                display: 'block',
                                width: 800,
                                overflow: 'hidden',
                            }}
                            src={step.imgPath}
                            alt={step.label}
                            />
                        ) : null}
                        </div>
                    ))}
                    </AutoPlaySwipeableViews>
                    
                </Box>
                    </div>

                   </div>

                   <div className='col-span-2 lg:col-span-1'>
                      <div className='flex flex-col gap-4'>
                        <div className='flex items-center justify-start'>
                            <div className='flex items-center gap-3 bg-[#F7AE45] rounded-[37px] py-2 px-3 gilroyMedium'> 
                            <GoLocation className='text-[28px] text-[#000000]'/> 
                            <span className='text-[28px] text-[#222222]'>Erode</span> 
                            </div>
                            </div>

                            <div className='flex items-center justify-start text-[24px] gilroyMedium text-[#000000]'>At Royal Furn, we take pride in being your one-stop destination for interior excellence. Our state-of-the-art manufacturing unit ensures the highest quality craftsmanship for all your interior needs. But we don't stop there – our experience center is where your interior dreams come to life. Step inside and explore a world of inspiration, where you can see, touch, and feel the very essence of home transformation. From furniture to decor, we offer a complete sensory experience to help you create the perfect living spaces you've always envisioned. Welcome to a new era of interior possibilities.
                            </div>
                           

                      </div>
                   </div>
               </div>
             </div> */}
        </div>
    </Fragment>
  )
}

export default Details