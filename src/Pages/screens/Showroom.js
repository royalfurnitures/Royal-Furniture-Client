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
import Footer from '../components/Footer';
import Bottom from '../components/Bottom';
import one from "../../assets/image/sr/erode/1.webp"
import two from "../../assets/image/sr/erode/2.webp"
import three from "../../assets/image/sr/erode/3.webp"
import four from "../../assets/image/sr/erode/4.webp"
import five from "../../assets/image/sr/erode/5.webp"
import six from "../../assets/image/sr/erode/6.webp"
import cone from "../../assets/image/cards/kit.webp";
import ctwo from "../../assets/image/cards/bed.webp";
import cthree from "../../assets/image/cards/full.webp";
import cfour from "../../assets/image/cards/liv.webp";
import { useEffect } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { GoLocation } from "react-icons/go";
import Landing from '../components/showroom/Landing';
import Details from '../components/showroom/Details';



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

  

export default function Showroom() {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = erimages.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step: number) => {
      setActiveStep(step);
    };
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      }, []);
  
  return (
    
    <Fragment>
        
    {/* <Landing/> */}
    <div style={{ minHeight: "50vh", background: 'linear-gradient(to bottom, #6C3E2E, #BB996B)',}}>
      <Details/>
    </div>
    {/* <Bottom /> */}
    {/* <Footer /> */}
    {/* <div className='flex flex-col items-center justify-center px-60'> */}
        {/* <div className='py-14 '> */}
            {/* <h1 className='gilroyEBold text-center text-[64px] text-[#6C3E2E]'>Visit Our Showrooms</h1> */}
            {/* <div className='bg-[#D9D9D9] p-4 mt-10 rounded-[37px] w-[100%] min-h-[600px]   '>
                <div className='flex items-center justify-center text-[40px] gilroyBold py-3 gap-2'><GoLocation />Coimbatore</div>
                <div className='grid grid-cols-2'>
                    <div className="col-span-1 p-4">
                     <p className='text-[#2D2D2D] text-[28px] '>Step into our Interior Showroom, a vast experiential center for all your home interior needs. Explore a world of possibilities, from modular kitchens to cozy bedrooms and inviting living rooms. What sets us apart? You can touch, feel, and immerse yourself in real interiors, allowing you to make informed decisions. Our knowledgeable team is here to guide you every step of the way, ensuring your dream home becomes a reality. Visit us today and experience the future of home design.</p>
                    </div>
                    <div className="col-span-1 p-4">
                         <div className='h-[450px] rounded-[30px] w-[450px] bg-[#EFEFEF]' style={{boxShadow: '0px 12px 16.2px -3px rgba(0, 0, 0, 0.3)'}}>
                         <Card style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ width: "450px", height: "450px",borderRadius:"30px" }}
                            
                            title="green iguana"
                        >
                        <YoutubePlayer
                        videoId='Y4C1_yRPhzY'
                        playbackState='unstarted'
                        height='100%'
                        width='100%'
                        configuration={
                            {
                                showinfo: 1,
                                controls: 1
                            }
                        }
                    />
                    </CardMedia>
                    </Card>
                         </div>
                    </div>
                </div>
                <div className='flex items-center justify-center rounded-[30px]'>
                <Box sx={{ width: "100%",minHeight:"500px", flexGrow: 1 ,position:"relative",borderRadius:"30px"}}>
                    <div className='w-[100%] absolute z-50 top-[60%]'>
                     <button className="absolute left-[10px] transform -translate-y-1/2 bg-white text-white rounded-full border-none h-10 w-10 opacity-70 text-xl px-2 cursor-pointer" onClick={handleBack} disabled={activeStep === 0}>
                       <GrPrevious style={{color:"black"}} size={20} />
                     </button>
                    <button className="absolute right-[10px] top-100 transform -translate-y-1/2 bg-white text-white rounded-full border-none h-10 w-10 opacity-70 text-xl pl-3 cursor-pointer" onClick={handleNext}
                    disabled={activeStep === maxSteps - 1} >
                      <GrNext style={{color:"black"}} size={20} />
                    </button>
                   </div>
                   <div style={{borderRadius:"30px"}}>
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
                    sx={{borderRadius:"30px"}}
                    >
                    {cbeimages.map((step, index) => (
                        <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                            component="img"
                            sx={{
                                minHeight:"500px",
                                display: 'block',
                                width: "100%",
                                overflow: 'hidden',
                                width: '100%',

                            }}
                            src={step.imgPath}
                            alt={step.label}
                            />
                        ) : null}
                        </div>
                    ))}
                    </AutoPlaySwipeableViews>
                    </div>
                </Box>
                </div>
            </div>
            <div className='bg-[#D9D9D9] p-4 mt-10 rounded-[37px] w-[100%] min-h-[600px]   '>
                <div className='flex items-center justify-center text-[40px] gilroyBold py-3 gap-2 '><GoLocation />Erode</div>
                <div className='grid grid-cols-2'>
                    <div className="col-span-1 p-4">
                     <p className='text-[#2D2D2D] text-[28px] '>At Royal Furn, we take pride in being your one-stop destination for interior excellence. Our state-of-the-art manufacturing unit ensures the highest quality craftsmanship for all your interior needs. But we don't stop there – our experience center is where your interior dreams come to life. Step inside and explore a world of inspiration, where you can see, touch, and feel the very essence of home transformation. From furniture to decor, we offer a complete sensory experience to help you create the perfect living spaces you've always envisioned. Welcome to a new era of interior possibilities.</p>
                    </div>
                    <div className="col-span-1 p-4">
                         <div className='h-[450px] rounded-[30px] w-[450px] bg-[#EFEFEF]' style={{boxShadow: '0px 12px 16.2px -3px rgba(0, 0, 0, 0.3)'}}>
                         <Card style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} sx={{ maxWidth: 450 }}>
                        <CardMedia
                            sx={{ width: "450px", height: "450px",borderRadius:"30px" }}
                            // image={img}
                            title="green iguana"
                        >
                        <YoutubePlayer
                        videoId='Y4C1_yRPhzY'
                        playbackState='unstarted'
                        height='100%'
                        width='100%'
                        configuration={
                            {
                                showinfo: 1,
                                controls: 1
                            }
                        }
                    />
                    </CardMedia>
                    </Card>
                         </div>
                    </div>
                </div>
                <div className='flex items-center justify-center rounded-[30px]'>
                <Box sx={{ width: "100%",minHeight:"500px", flexGrow: 1 ,position:"relative",borderRadius:"30px"}}>
                    <div className='w-[100%] absolute z-50 top-[60%]'>
                     <button className="absolute left-[10px] transform -translate-y-1/2 bg-white text-white rounded-full border-none h-10 w-10 opacity-70 text-xl px-2 cursor-pointer" onClick={handleBack} disabled={activeStep === 0}>
                       <GrPrevious style={{color:"black"}} size={20} />
                     </button>
                    <button className="absolute right-[10px] top-100 transform -translate-y-1/2 bg-white text-white rounded-full border-none h-10 w-10 opacity-70 text-xl pl-3 cursor-pointer" onClick={handleNext}
                    disabled={activeStep === maxSteps - 1} >
                      <GrNext style={{color:"black"}} size={20} />
                    </button>
                   </div>
                   <div style={{borderRadius:"30px"}}>
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
                    sx={{borderRadius:"30px"}}
                    >
                    {erimages.map((step, index) => (
                        <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                            component="img"
                            sx={{
                                minHeight:"500px",
                                display: 'block',
                                width: "100%",
                                overflow: 'hidden',
                                width: '100%',

                            }}
                            src={step.imgPath}
                            alt={step.label}
                            />
                        ) : null}
                        </div>
                    ))}
                    </AutoPlaySwipeableViews>
                    </div>
                </Box>
                </div>
            </div> */}

            {/* <div className='sr-card'>
                <div className='grid gap-[20px] grid-cols-6 w-[100%]'>
                    <div className='col-span-6 lg:col-span-2'>
                        <div className="title-container">
                        <div className="gold-line"></div>
                        <h1 className="title gilroyBold text-r-tvoi text-2xl md:text-3xl xl:text-4xl">Coimbatore</h1>
                        </div>
                        <h5>
                        Step into our Interior Showroom, a vast experiential center for all your home interior needs. Explore a world of possibilities, from modular kitchens to cozy bedrooms and inviting living rooms. What sets us apart? You can touch, feel, and immerse yourself in real interiors, allowing you to make informed decisions. Our knowledgeable team is here to guide you every step of the way, ensuring your dream home becomes a reality. Visit us today and experience the future of home design.
                        </h5>
                    </div>
                    <div className='col-span-6 lg:col-span-2 sr-ytcont'>
                    <Card style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ width: "100%", height: "240px" }}
                            // image={img}
                            title="green iguana"
                        >
                        <YoutubePlayer
                        videoId='Y4C1_yRPhzY'
                        playbackState='unstarted'
                        height='100%'
                        width='100%'
                        configuration={
                            {
                                showinfo: 1,
                                controls: 1
                            }
                        }
                    />
                    </CardMedia>
                    </Card>
                    </div>
                    <div className='col-span-6 lg:col-span-2 sr-picslide relative'>
                    <Box sx={{ maxWidth: 400, flexGrow: 1 ,position:"relative"}}>
                    <div className='w-[100%] absolute z-50 top-[60%]'>
                     <button className="absolute left-[10px] transform -translate-y-1/2 bg-white text-white rounded-full border-none h-10 w-10 opacity-70 text-xl px-2 cursor-pointer" onClick={handleBack} disabled={activeStep === 0}>
                       <GrPrevious style={{color:"black"}} size={20} />
                     </button>
                    <button className="absolute right-[10px] top-100 transform -translate-y-1/2 bg-white text-white rounded-full border-none h-10 w-10 opacity-70 text-xl pl-3 cursor-pointer" onClick={handleNext}
                    disabled={activeStep === maxSteps - 1} >
                      <GrNext style={{color:"black"}} size={20} />
                    </button>
                   </div>
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
                    {cbeimages.map((step, index) => (
                        <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                            component="img"
                            sx={{
                                height: 255,
                                display: 'block',
                                maxWidth: 400,
                                overflow: 'hidden',
                                width: '100%',
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
            </div> */}
            {/* <div className='sr-card'>
                <div className='grid gap-[20px] grid-cols-6 w-[100%]'>
                    <div className='col-span-6 lg:col-span-2'>
                        <div className="title-container">
                        <div className="gold-line"></div>
                        <h1 className="title gilroyBold text-r-tvoi text-2xl md:text-3xl xl:text-4xl">Erode</h1>
                        </div>
                        <h5>
                        At Royal Furn, we take pride in being your one-stop destination for interior excellence. Our state-of-the-art manufacturing unit ensures the highest quality craftsmanship for all your interior needs. But we don't stop there – our experience center is where your interior dreams come to life. Step inside and explore a world of inspiration, where you can see, touch, and feel the very essence of home transformation. From furniture to decor, we offer a complete sensory experience to help you create the perfect living spaces you've always envisioned. Welcome to a new era of interior possibilities.
                        </h5>
                    </div>
                    <div className='col-span-6 lg:col-span-2 sr-ytcont'>
                    <Card style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ width: "100%", height: "240px" }}
                            title="green iguana"
                        >
                        <YoutubePlayer
                        videoId='Y4C1_yRPhzY'
                        playbackState='unstarted'
                        height='100%'
                        width='100%'
                        configuration={
                            {
                                showinfo: 1,
                                controls: 1
                            }
                        }
                    />
                    </CardMedia>
                    </Card>
                    </div>
                    <div className='col-span-6 lg:col-span-2 sr-picslide relative'>
                    <Box sx={{ maxWidth: 400, flexGrow: 1 ,position:"relative" }}>
                    <div className='w-[100%] absolute z-50 top-[60%]'>
                    <button className="absolute left-[10px] transform -translate-y-1/2 bg-white text-white rounded-full border-none h-10 w-10 opacity-70 text-xl px-2 cursor-pointer" onClick={handleBack} disabled={activeStep === 0}>
                    <GrPrevious style={{color:"black"}} size={20} />
                    </button>
                   <button className="absolute right-[10px] top-100 transform -translate-y-1/2 bg-white text-white rounded-full border-none h-10 w-10 opacity-70 text-xl pl-3 cursor-pointer" onClick={handleNext}
                   disabled={activeStep === maxSteps - 1} >
                   <GrNext style={{color:"black"}} size={20} />
                   </button>
                   </div>
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
                        <p className='gilroyBold'>{erimages[activeStep].label}</p>
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
                                    height: 255,
                                    display: 'block',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
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
            </div> */}
        {/* </div> */}
        
    {/* </div> */}
    <Bottom />
    <Footer />
    </Fragment>
  )
}
