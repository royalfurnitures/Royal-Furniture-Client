import React, {useEffect, useState} from "react"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Chip,
} from "@material-tailwind/react";
import WhyRoyal from "../HSecFour";
import liv from "../../../assets/image/cards/liv.webp"
import int from "../../../assets/image/bg/interio.webp" 
import kit from "../../../assets/image/cards/kit.webp"
import bed from "../../../assets/image/cards/bed.webp"
import poo from "../../../assets/image/cards/poo.webp"
import din from "../../../assets/image/cards/din.webp"
import h1 from "../../../assets/image/icons/h1.webp"
import h2 from "../../../assets/image/icons/h2.webp"
import h3 from "../../../assets/image/icons/h3.webp"
import h4 from "../../../assets/image/icons/h4.webp"
import h5 from "../../../assets/image/icons/h5.webp"
import { Button } from '@material-tailwind/react';
import {BsArrowRight} from "react-icons/bs"
import { Container } from "@mui/material";
import { ClientPrev } from "../ClientPrev";
import Prev from "../Prev";
import Bottom from "../Bottom";
import Footer from "../Footer";
import full from "../../../assets/image/cards/liv.webp"
import m from "../../../assets/image/cards/m.webp"
import ren from "../../../assets/image/cards/ren.webp"
import fur from "../../../assets/image/cards/fur.webp"
import {GrNext, GrPrevious} from "react-icons/gr"
import {FcNext} from "react-icons/fc"
import { Link } from "react-router-dom";
import SlideImages from "../SlideImages";
import StepFive from "../StepFive";
import { GetAllModulesPhotoHandler } from "../../../API/APIS";


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

const images1 = [
  { src: liv, link: '/designideas' ,text: 'Living room' },//1
  { src: kit, link: '/designideas' ,text: 'Kitchen' },//2
  { src: poo, link: '/designideas' ,text: 'Pooja room' },//3
  { src: bed, link: '/designideas' ,text: 'Bed room' },//4
  { src: din, link: '/designideas' ,text: 'Dinning area' },//5
 
];


  
  
  
  




export default function Details() {
const [photos,setPhotos] = useState(false);

  useEffect(()=>{
    getallphotos();
   },[])
   const getallphotos = async()=>{
    let AllPhotos = await GetAllModulesPhotoHandler("Interio");
    // console.log("Allphotos",AllPhotos);
    setPhotos(AllPhotos.data)
   }
  

return (
    <>
    <Container>
      
     <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="text-xl md:text-2xl lg:text-4xl gilroyBold text-justify text-r-tvoi"> Your  ultimate Royal destination for all things interior!
            </h1>
            </div>
            <h5 className="mb-8 text-sm sm:text-xl gilroyMedium text-justify">We provide a full range of services for your home or office, from design to completion. We can handle a full-scale interior transformation, a renovation project, or modular solutions.
            </h5>
    <div className="grid grid-cols-8 gap-4 ">
 
        <Card className=" max-w-[24rem] col-span-8 md:col-span-4 xl:col-span-2 mx-auto md:mx-3 my-3 overflow-hidden in-detcards">
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
            Full-Home Interior
        </Typography>
        <Typography variant="p" className="gilroyMedium mt-2  text-center" color="blue-gray">
        We bring your dreams to life in every room with our complete home interior solutions.
        </Typography>
        
        </CardBody>
       
    </Card>
        <Card className="max-w-[24rem] col-span-8 md:col-span-4 xl:col-span-2 mx-auto md:mx-3 my-3 overflow-hidden in-detcards">
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
        Modular Interior
        </Typography>
        <Typography variant="p" className="gilroyMedium mt-2 text-center" color="blue-gray">
        Functional modular solutions for kitchen & wardrobes
        </Typography>
        </CardBody>
       
    </Card>
        <Card className="max-w-[24rem] col-span-8 md:col-span-4 xl:col-span-2 mx-auto md:mx-3 my-3 overflow-hidden in-detcards">
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
        <Typography variant="p" className="gilroyMedium mt-2 text-center" color="blue-gray">
        With our expertise, we can breathe new life into your home.
        </Typography>
        </CardBody>
       
    </Card>
        <Card className="max-w-[24rem] col-span-8 md:col-span-4 xl:col-span-2 mx-auto md:mx-3 my-3 overflow-hidden in-detcards">
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
        <Typography variant="p" className="gilroyMedium mt-2 text-center" color="blue-gray">
        Fill your home with our Royal and elegant furniture 
        </Typography>
        
        </CardBody>
       
    </Card>
    
    </div>
    <div className="title-container" style={{marginTop: "30px"}}>
            <div className="gold-line"></div>
            <h1 className="text-xl md:text-2xl lg:text-4xl text-justify gilroyBold  text-r-tvoi"> Get started on your design journey, with selected inspiration.</h1>
            </div>        
    <SlideImages images1={photos} link="interio" />    
    {/* <SlideImages images1={images1} />     */}
    </Container>
    <WhyRoyal/>
    <ClientPrev title="The voice of our clients echoes in their 
     testimonials." />
    <StepFive  link="interio" title="Five steps to your dream home!" subtitle="Looking to design your home interiors? Here’s how you can get started." />
    <Prev />
    <Bottom />
    <Footer />
    </>
);
}