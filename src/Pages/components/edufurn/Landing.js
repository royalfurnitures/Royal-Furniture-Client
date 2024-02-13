import React from 'react';
import { Carousel } from "@material-tailwind/react";
import {Typography, Button} from "@material-tailwind/react";
import homebg from "../../../assets/image/bg/ed.webp"


export default function Landing() {
  return (
    <div>
      <Carousel
      className="landing-cr overflow-hidden"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-9 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "hidden" : "hidden"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      loop="true"
      prevArrow={false}
      nextArrow={false}
      
    >
     <div className="relative h-full w-full">
        <img
          src={homebg}
          alt="image 3"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 grid h-full w-full items-end justify-center bg-gradient-to-t from-r-voi to-transparent to-50%">
        <div className="justify-center align-center">
          <h1 className="montserratEBold text-r-gold mt-[20%] sm:mt-[25%] md:mt-[30checkout%] lg:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-9xl" style={{textAlign: "center"}}>EDUFURN</h1>
            <Typography
              variant="h1"
              color="white"
              className="mb-24 text-sm px-3 sm:text-xl md:text-2xl lg:text-3xl text-center gilroyBold"
            >
              Interior for Educational Institution - "Elevating Learning Spaces, Shaping Bright Futures
            </Typography>
           
           
          </div>
        </div>
        </div>
    
      
    </Carousel>
    </div>
  )
}
