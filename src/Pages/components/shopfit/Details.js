import { Container } from '@mui/material'
import React, {useEffect, useState} from 'react';
import int from "../../../assets/image/bg/interio.webp"
import { Chip } from '@material-tailwind/react';
import { Card as CardMui, CardActions, CardContent as CardContentMui, CardMedia as CardMediaMui, IconButton, Typography as TypographyMui } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import Prev from '../Prev';
import {ClientPrev}  from '../ClientPrev';
import img from "../../../assets/image/bg/homediv.webp";
import { Button } from '@material-tailwind/react'
import Touch from '../commercial/Touch';
import Footer from '../Footer';
import {GrNext, GrPrevious} from "react-icons/gr"
import fo from "../../../assets/image/card/mod/fo.webp"
import cafe from "../../../assets/image/card/mod/cafe.webp"
import exdes from "../../../assets/image/card/mod/exdes.webp"
import seat from "../../../assets/image/card/mod/seat.webp"
import conf from "../../../assets/image/card/mod/conf.webp"
import ws from "../../../assets/image/card/mod/ws.webp"
import { Link } from 'react-router-dom';
import h1 from "../../../assets/image/icons/h1.webp"
import h2 from "../../../assets/image/icons/h2.webp"
import h3 from "../../../assets/image/icons/h3.webp"
import h4 from "../../../assets/image/icons/h4.webp"
import h5 from "../../../assets/image/icons/h5.webp"
import { BsArrowRight } from 'react-icons/bs';
import WhyRoyal from "../HSecFour";
import modt from "../../../assets/image/bg/mod.webp"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import full from "../../../assets/image/cards/mod.webp"
import m from "../../../assets/image/cards/moddec.webp"
import ren from "../../../assets/image/cards/ren.webp"
import fur from "../../../assets/image/cards/fur.webp"
import {MdOutlineClose} from "react-icons/md";
import img1 from "../../../assets/image/card/shopfit/1.webp";
import img2 from "../../../assets/image/card/shopfit/2.webp";
import img3 from "../../../assets/image/card/shopfit/3.webp";
import img4 from "../../../assets/image/card/shopfit/4.webp";
import img5 from "../../../assets/image/card/shopfit/5.webp";
import img6 from "../../../assets/image/card/shopfit/6.webp";
import img7 from "../../../assets/image/card/shopfit/7.webp";
import img8 from "../../../assets/image/card/shopfit/8.webp";
import img9 from "../../../assets/image/card/shopfit/9.webp";
import img10 from "../../../assets/image/card/shopfit/10.webp";

import {
 
   
    DialogBody,
   
    DialogFooter,
   
    DialogHeader,
   
    MCard,
    MIconButton,
  } from "@material-tailwind/react";
  import {
    Dialog,
    Input,
    Checkbox,
  } from "@material-tailwind/react";
import SlideImages from '../SlideImages';
import StepFive from '../StepFive';
import { GetAllModulesPhotoHandler } from '../../../API/APIS';


const stepCards = [
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
  


const cards = [
    'Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5',
    'Card 6', 'Card 7', 'Card 8', 'Card 9', 'Card 10'
  ];

  const images1 = [
    { src: img1, link: '' ,text: 'Jewellery Shop ' },//1
    { src: img2, link: '' ,text: 'Mobile Shop' },//2
    { src: img3, link: '' ,text: 'Bike Showroom' },//3
    { src: img4, link: '' ,text: 'Car Showroom' },//4
    { src: img5, link: '' ,text: 'Restaurants' },//5
    { src: img6, link: '' ,text: 'Cafe' },//5
    { src: img7, link: '' ,text: 'Pharmacy or Medical' },//5
    { src: img8, link: '' ,text: 'Super Market' },//5
    { src: img9, link: '' ,text: 'Clothing Stores' },//5
    { src: img10, link: '' ,text: 'Sweet Stall' },//5
    
  ];

export default function Details() {
    
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  const [photos,setPhotos] = useState(false);

  useEffect(()=>{
    getallphotos();
   },[])
   const getallphotos = async()=>{
    let AllPhotos = await GetAllModulesPhotoHandler("Shopfit");
    // console.log("Allphotos",AllPhotos);
    setPhotos(AllPhotos.data)
   }
  
  return (
    <div>
         {/* <Container>
      
      <div className="title-container">
             <div className="gold-line"></div>
             <h1 className="title gilroyBold text-r-tvoi text-2xl md:text-3xl xl:text-4xl">Experience the Journey of Conceptualizing, Creating and Conquering Your Office Interiors!</h1>
             </div>
             <h5 className="mb-8 text-lg md:text-xl xl:text-2xl gilroyMedium">We offer everything you need for your workplace, including complete interiors, renovations, and modular solutions. We provide a large selection of furniture and decor, so we can help you from beginning to end.</h5>
     <div className="grid grid-cols-12 gap-4 py-[30px]">
         <Card className="max-w-[24rem] m-auto col-span-12 md:col-span-6 lg:col-span-3 overflow-hidden in-detcards">
         <CardHeader
         floated={false}
         shadow={false}
         color="transparent"
         className="m-0 rounded-none"
         >
         <img
             src={full}
             alt="ui/ux review check"
         />
         </CardHeader>
         <CardBody>
         <Typography variant="h5" className="gilroyBold text-center" color="blue-gray">
             Full Office Interior
         </Typography>
         <Typography variant="p" className="gilroyMedium mt-3 text-center" color="blue-gray">
         Elevate Every Space with Full-Service Interior Designs
         </Typography>
         
         </CardBody>
        
     </Card>
        
         <Card className="max-w-[24rem] m-auto col-span-12 md:col-span-6 lg:col-span-3 overflow-hidden in-detcards">
         <CardHeader
         floated={false}
         shadow={false}
         color="transparent"
         className="m-0 rounded-none"
         >
         <img
             src={ren}
             alt="ui/ux review check"
         />
         </CardHeader>
         <CardBody>
         <Typography variant="h5" className="gilroyBold text-center" color="blue-gray">
           Renovation
         </Typography>
         <Typography variant="p" className="gilroyMedium mt-3 text-center" color="blue-gray">
          Unleash a Fresh Look and Royal Feel 
         </Typography>
         </CardBody>
        
     </Card>
         <Card className="max-w-[24rem] m-auto col-span-12 md:col-span-6 lg:col-span-3 overflow-hidden in-detcards">
         <CardHeader
         floated={false}
         shadow={false}
         color="transparent"
         className="m-0 rounded-none"
         >
         <img
             src={fur}
             alt="ui/ux review check"
         />
         </CardHeader>
         <CardBody>
         <Typography variant="h5" className="gilroyBold text-center" color="blue-gray">
         Furniture
         </Typography>
         <Typography variant="p" className="gilroyMedium mt-3 text-center" color="blue-gray">
         Creating comfy environment with our furniture
         </Typography>
         
         </CardBody>
        
     </Card>
     <Card className="max-w-[24rem] m-auto col-span-12 md:col-span-6 lg:col-span-3 overflow-hidden in-detcards">
         <CardHeader
         floated={false}
         shadow={false}
         color="transparent"
         className="m-0 rounded-none"
         >
         <img
             src={m}
             alt="ui/ux review check"
         />
         </CardHeader>
         <CardBody>
         <Typography variant="h5" className="gilroyBold text-center" color="blue-gray">
             Decors
         </Typography>
         <Typography variant="p" className="gilroyMedium mt-3 text-center" color="blue-gray">
         Smart modular solutions for smart workspaces
         </Typography>
         </CardBody>
        
     </Card>
     
     </div>
     </Container> */}
      
      <Container>
      <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="title gilroyBold text-r-tvoi text-xl md:text-2xl lg:text-4xl  text-justify"> Modular: Transforming Aspirations into Inspirational Workspaces.</h1>
            </div>
            <h5 className="mb-8 text-sm sm:text-xl text-justify gilroyMedium">Royal Furnitures, with its distinctive service 'Modular,' is your trusted partner in workplace interior design. Our talented team specializes in designing effective and elegant workplace environments that boost productivity and represent professionalism. We 
            prioritize layout optimization, excellent material selection, and design within your budget. Allow Royal Modular to transform your workplace into a smart, efficient, and exciting environment that increases morale and wows clients. Elevate the look of your office with Royal, where utility meets elegance.</h5>


           <SlideImages images1={photos} />
     
   
      
      <StepFive link="modular" title="5-Step Guide to Revitalize Your Office Space
       " subtitle="Here’s how you can get started."  />
 
          <Dialog open={open} handler={handleOpen}size='xl'>
      <DialogFooter className="space-x-2">
          <MdOutlineClose size="40px" style={{cursor: "pointer"}} onClick={handleOpen}/>
        </DialogFooter>
        <DialogBody divider className="h-[40rem] overflow-scroll">
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <img src={img} className='p-2' /> 
            <img src={img} className='p-2' /> 
            <img src={img} className='p-2' /> 
            <img src={img} className='p-2' /> 
            <img src={img} className='p-2' /> 
            <img src={img} className='p-2' /> 
            <img src={img} className='p-2' />
          </div>
        </DialogBody>
        
      </Dialog>
    </Container>
    <WhyRoyal/>
    {/* <ClientPrev title="Let our clients tell their story" /> */}
    <ClientPrev title="The voice of our clients echoes in their 
testimonials." />
    <Prev/>    
    <div className='px-3'>
    <Touch image={modt} />
    </div>
    <Footer />
    </div>
  )
}
