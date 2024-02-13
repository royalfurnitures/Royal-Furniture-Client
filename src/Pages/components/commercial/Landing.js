import React from 'react';
import { Carousel } from "@material-tailwind/react";
import {Typography, Button} from "@material-tailwind/react";
import homebg from "../../../assets/image/bg/com.webp"

export default function Landing() {
  return (
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
           
            <Typography
              variant="h1"
              color="white"
              className="mb-8 text-3xl md:text-4xl lg:text-4xl gilroyBold"
            >
              Your Business, Our Canvas: Royal Furn's Exceptional Interior Artistry
            </Typography>
           
            <div className="flex gap-2 mb-24 justify-center">
              <Button size="lg" color="brown" className="cor-btn bg-r-gold rounded-full gilroyLight text-lg">
                Get Free Consultation
              </Button>
             
            </div>
          </div>
        </div>
        </div>
    </Carousel>
  )
}
