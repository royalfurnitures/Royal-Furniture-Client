import React, { Fragment } from 'react';
import { Button } from '@material-tailwind/react';
import {BsArrowRight} from "react-icons/bs"
import { Container } from "@mui/material";
import {Link} from "react-router-dom";
import h1 from "../../assets/image/icons/h1.webp"
import h2 from "../../assets/image/icons/h2.webp"
import h3 from "../../assets/image/icons/h3.webp"
import h4 from "../../assets/image/icons/h4.webp"
import h5 from "../../assets/image/icons/h5.webp"

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

export default function StepFive({title , subtitle , link}) {
  return (
    <Fragment>
        <Container>
        <div className=' my-5  md:py-10'>
            <h1 className='text-center gilroyBold text-r-tvoi steps-title text-xl md:text-2xl lg:text-4xl'>{title}</h1>
            <h3 className='text-center gilroyMedium text-r-tvoi steps-sub text-lg md:text-xl lg:text-3xl'>{subtitle}</h3>
            <div className='grid grid-cols-10'>
                {cards.map((step, index) => (
                <div className='flex items-center md:h-[300px] justify-center flex-col gap-2 my-[10px] md:my-[100px] col-span-10 md:col-span-2' key={index}>
                   <img className=' w-[200px] md:w-[80%]  md:h-[200px]  ' src={step.img} />
                    <div className='md:h-[100px]'>
                        <h1 className='text-r-tvoi gilroyBold text-xl md:text-2xl lg:text-4xl  text-center'>{step.text}</h1>
                        <h1 className='text-r-tvoi gilroyMedium text-sm md:text-md lg:text-xl  text-center'>{step.des}</h1>
                    </div>
                </div>
                ))}
            </div>
            <div className="mb-0" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <p className="gilroyBold text-[15px] md:text-xl">Click here to know</p> <BsArrowRight style={{margin: "0 10px"}} />
              <Link to={`/${link}/howitworks`}>
              <Button  className=" bg-r-gold rounded-full gilroyLight text-[8px] sm:text-lg py-2 px-2 md:py-4 md:px-6">
                How it works?
              </Button>
              </Link>
             
            </div>
        </div>
    </Container>
    </Fragment>
  )
}
