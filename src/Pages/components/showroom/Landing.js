import React from 'react';
import { Carousel } from "@material-tailwind/react";
import {Typography, Button} from "@material-tailwind/react";
import homebg from "../../../assets/image/sr/erode/1.webp"



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
          className="max-h-[95vh] w-full object-cover "
        />
        <div className="absolute inset-0 grid h-full w-full items-end justify-center bg-gradient-to-t from-r-voi to-transparent to-50%">
         <div className="justify-center align-center ">
          <h1 className="montserratEBold text-r-gold mb-[10%] sm:mb-[10%] md:mb-[10%] lg:mt-0 text-3xl sm:text-3xl md:text-5xl lg:text-8xl " style={{textAlign: "center"}}>Visit Our Showrooms</h1>
            
           
          </div>
        </div>
        </div>
    
      
    </Carousel>
    </div>
  )
}
