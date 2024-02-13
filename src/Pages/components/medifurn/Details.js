import { Container } from '@mui/material'
import React, {useEffect, useState} from 'react';
import int from "../../../assets/image/bg/interio.webp"
import { Card, CardBody, CardHeader, Chip, Typography } from '@material-tailwind/react';
import { Card as Cardui , CardActions as CardActionsui, CardContent as CardContentui, CardMedia as CardMediaui, IconButton as IconButtonui, Typography as Typographyui } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import img from "../../../assets/image/bg/homediv.webp";
import { Button } from '@material-tailwind/react'
import Touch from '../commercial/Touch';
import Footer from '../Footer';
import {GrNext, GrPrevious} from "react-icons/gr"
import full from "../../../assets/image/cards/hosp.webp"
import m from "../../../assets/image/cards/m.webp"
import ren from "../../../assets/image/cards/ren.webp"
import fur from "../../../assets/image/cards/fur.webp"
import ad from "../../../assets/image/card/medi/ad.webp"
import adoff from "../../../assets/image/card/medi/adoff.webp"
import cafe from "../../../assets/image/card/medi/cafe.webp"
import conf from "../../../assets/image/card/medi/conf.webp"
import consult from "../../../assets/image/card/medi/consult.webp"
import funcbed from "../../../assets/image/card/medi/funcbed.webp"
import labset from "../../../assets/image/card/medi/labset.webp"
import lob from "../../../assets/image/card/medi/lob.webp"
import medi from "../../../assets/image/card/medi/medi.webp"
import recbed from "../../../assets/image/card/medi/recbed.webp"
import trans from "../../../assets/image/card/medi/trans.webp"
import trol from "../../../assets/image/card/medi/trol.webp";
import medit from "../../../assets/image/bg/med.webp"
import WhyRoyal from "../HSecFour";
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import h1 from "../../../assets/image/icons/h1.webp"
import h2 from "../../../assets/image/icons/h2.webp"
import h3 from "../../../assets/image/icons/h3.webp"
import h4 from "../../../assets/image/icons/h4.webp"
import h5 from "../../../assets/image/icons/h5.webp"
import {MdOutlineClose} from "react-icons/md"


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
import { ClientPrev } from '../ClientPrev';
import Prev from '../Prev';
import { GetAllModulesPhotoHandler } from '../../../API/APIS';

const cardsHow = [
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
    { src: recbed, link: '' ,text: 'Recliner Bed' },//1
    { src: adoff, link: '' ,text: 'Admin Office' },//2
    { src: labset, link: '' ,text: 'Labs' },//3
    { src: lob, link: '' ,text: 'Lobby' },//4
    { src: ad, link: '' ,text: 'Complementary Furnitures' },//5
    { src: medi, link: '' ,text: 'Pharmacy' },//6
    { src: trans, link: '' ,text: 'Transfer' },//7
    { src: conf, link: '' ,text: 'Conference' },//8
    { src: cafe, link: '' ,text: 'Cafeteria' },//9
    { src: consult, link: '' ,text: 'Consulting' },//10
    { src: trol, link: '' ,text: 'Trolley' },//11

  ];

export default function Details() {

    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
    const [photos,setPhotos] = useState(false);

    useEffect(()=>{
      getallphotos();
     },[])

     const getallphotos = async()=>{
      let AllPhotos = await GetAllModulesPhotoHandler("MediFurn");
      // console.log("Allphotos",AllPhotos);
      setPhotos(AllPhotos.data)
     }
    
   
  return (
    <div>
      <Container>
      <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="title gilroyBold text-r-tvoi text-xl md:text-2xl lg:text-4xl  text-justify">   Redesigning healthcare spaces with innovative solutions
            </h1>
            </div>
            <h5 className="mb-8 text-sm sm:text-xl text-justify gilroyMedium">Explore our extensive collection of furniture and decor designed specifically for healthcare settings. We will work with you every step of the way to create a welcoming space.
           </h5>
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
            Full Hospital Interior
        </Typography>
        <Typography variant="p" className="gilroyMedium mt-3 text-center" color="blue-gray">
        We curate every corner and transform every room
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
        Aesthetically redefining the medical spaces with style and comfort
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
            Furniture & Decor
        </Typography>
        <Typography variant="p" className="gilroyMedium mt-3 text-center" color="blue-gray">
          Thoughtful pieces that complete the medical environment
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
        Hospital Cots
        </Typography>
        <Typography variant="p" className="gilroyMedium mt-3 text-center" color="blue-gray">
        Our beds prioritize both comfort and support
        </Typography>
        </CardBody>
       
    </Card>
    
    </div>
      <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="title gilroyBold text-r-tvoi text-xl md:text-2xl lg:text-4xl  text-justify"> Medifurn: Blending comfort and aesthetics into patient care</h1>
            </div>
            <h5 className="mb-8 text-sm sm:text-xl text-justify gilroyMedium">With great pride, Royal Furn introduces 'MediFurn,' our specialized service aimed at improving hospital interiors. Our goal with MediFurn is to create healing environments where staff productivity and patient comfort come first.Our skilled team carefully considers utility, hygienic practices, and aesthetics when designing hospital rooms, waiting areas, and office spaces. We make sure that every element of the interior promotes the health of patients and medical staff because we recognize the vital role that healthcare facilities. Hospitals are transformed into places of care, comfort, and functionality by Royal MediFurn, fostering the best outcomes for both staff and patients.
           </h5>

            <SlideImages images1={photos}  />
     
           
      <StepFive link="medifurn"  title='Revolutionizing the healthcare spaces with Royal aesthetics' subtitle='A 5-Step Interior Design Journey!' />
     
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
    <ClientPrev title="The voice of our clients echoes in their 
     testimonials." />
    <Prev/>
    <div className='px-3'>
    <Touch image={medit}/>
    </div>
    <Footer />
    </div>
  )
}
