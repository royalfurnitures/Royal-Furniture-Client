import { Container } from '@mui/material'
import React, {useEffect, useState} from 'react';
import { Card, CardBody, CardHeader, Chip, Typography } from '@material-tailwind/react';
import img from "../../../assets/image/bg/homediv.webp";
import Touch from '../commercial/Touch';
import Footer from '../Footer';
import full from "../../../assets/image/cards/ed.webp"
import WhyRoyal from "../HSecFour";
import m from "../../../assets/image/cards/labs.webp"
import ren from "../../../assets/image/cards/ren.webp"
import fur from "../../../assets/image/cards/fur.webp"
import clas from "../../../assets/image/card/edu/class.webp"
import management from "../../../assets/image/card/edu/management.webp"
import comp from "../../../assets/image/card/edu/comp.webp"
import hos from "../../../assets/image/card/edu/hos.webp"
import kind from "../../../assets/image/card/edu/kind.webp"
import lab from "../../../assets/image/card/edu/lab.webp"
import lib from "../../../assets/image/card/edu/lib.webp"
import off from "../../../assets/image/card/edu/off.webp"
import chair from "../../../assets/image/card/edu/chair.webp"
import auditorium from "../../../assets/image/card/edu/auditorium.webp"
import h1 from "../../../assets/image/icons/h1.webp"
import h2 from "../../../assets/image/icons/h2.webp"
import h3 from "../../../assets/image/icons/h3.webp"
import h4 from "../../../assets/image/icons/h4.webp"
import h5 from "../../../assets/image/icons/h5.webp"
import {BsArrowRight} from "react-icons/bs"
import { Link } from 'react-router-dom';
import edu from "../../../assets/image/bg/edu.webp"
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
import Prev from '../Prev';
import { ClientPrev } from '../ClientPrev';
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

  const images1 = [
    { src: clas, link: '' ,text: 'Class Room' },//1
    { src: comp, link: '' ,text: 'Computer Lab' },//1
    { src: kind, link: '' ,text: 'Kindergarden' },//2
    { src: lab, link: '' ,text: 'Labs' },//3
    { src: lib, link: '' ,text: 'Library' },//4
    { src: hos, link: '' ,text: ' Hostel' },//5
    { src: chair, link: '' ,text: ' Chairs' },//6
    { src: auditorium, link: '' ,text: ' Auditorium' },//6
    { src: management, link: '' ,text: ' Management Space' },//6
  ];
  

const cards = [
    'Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5',
    'Card 6', 'Card 7', 'Card 8', 'Card 9', 'Card 10'
  ];

export default function Details() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);
    const [photos,setPhotos] = useState(false);

  useEffect(()=>{
    getallphotos();
   },[])
   const getallphotos = async()=>{
    let AllPhotos = await GetAllModulesPhotoHandler("EduFurn");
    // console.log("Allphotos",AllPhotos);
    setPhotos(AllPhotos.data)
   }
 
  return (
    <div>
      <Container>
      <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="title gilroyBold text-r-tvoi  text-xl md:text-2xl lg:text-4xl  text-justify"> Crafting Learning Experiences through Design </h1>
            </div>
            <h5 className="mb-8 text-sm sm:text-xl text-justify gilroyMedium">We provide complete interior design, refurbishment, and modular solutions for your schools. We have you covered from start to finish with a vast selection of furniture and decor.
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
            FULL SCHOOL INTERIOR
        </Typography>
        <Typography variant="p" className="gilroyMedium mt-3 text-center" color="blue-gray">
        Full School Interiors Interiors for every nook and corner.
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
            RENNOVATION
        </Typography>
        <Typography variant="p" className="gilroyMedium mt-3 text-center" color="blue-gray">
        Give your School a brand new look and feel
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
            FURNITURE
        </Typography>
        <Typography variant="p" className="gilroyMedium mt-3 text-center" color="blue-gray">
        Complete your space with products
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
            Labs
        </Typography>
        <Typography variant="p" className="gilroyMedium mt-3 text-center" color="blue-gray">
            Complete Lab setup for your school
        </Typography>
        </CardBody>
       
    </Card>
    
    </div>

      <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="title gilroyBold text-r-tvoi text-xl md:text-2xl lg:text-4xl  text-justify"> Edufurn - Shaping the Future of Learning Spaces</h1>
            </div>
            <h5 className="mb-8 text-sm sm:text-xl text-justify gilroyMedium">Royal Furniture is pleased to announce 'EduFurn,' our specialised service for schools and colleges. We build fascinating learning environments that inspire creativity, engagement, and academic achievement using EduFurn. 
            Our skilled staff creates ergonomic classrooms, bright common areas, and effective administrative spaces to meet the specific requirements of educational institutions. Royal EduFurn transforms schools and institutions into environments that encourage learning, cooperation, and progress, assuring a bright future for students and educators alike.
            </h5>
     
     
         <SlideImages images1={photos}/>

           

      <StepFive  link="edufurn" title='Streamline the education space with our 5-step process' subtitle='Here’s how you can get started.' />
      
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
    </Container >
    <WhyRoyal/>
    <ClientPrev title="The voice of our clients echoes in their 
     testimonials." />
    <Prev />
    <div className='px-3'>
    <Touch image={edu} />
       
    </div>
    <Footer />
    </div>
  )
}
