import { Carousel } from "@material-tailwind/react";
import {Typography, Button} from "@material-tailwind/react";
import homebg from "../../assets/image/bg/living.webp"
import ed from "../../assets/image/bg/ed.webp";
import medi from "../../assets/image/bg/medi.webp";
import sho from "../../assets/image/bg/shopfit.webp";
import office from "../../assets/image/bg/modu.webp"
import { Link } from "react-router-dom";
 
export default function Home() {
  return (
    <Carousel
      className="landing-cr overflow-hidden"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-9 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-r-gold w-8" : "bg-r-gold/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      loop="true"
      autoplay
      autoplayDelay={3000}
      
    >
     <div className="relative h-full w-full">
        <img
          src={homebg}
          alt="image 3"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 grid h-full w-full items-end justify-center bg-gradient-to-t from-r-voi to-transparent to-50%">
          <div className="justify-center align-center">
          <h1 className="montserratEBold text-5xl lg:text-9xl  text-r-gold" style={{textAlign: "center"}}>INTERIO</h1>
            <Typography
              variant="h1"
              color="white"
              className="m-2 sm:mb-8 text-sm md:text-xl lg:text-3xl text-center gilroyBold"
            >
              Home Interior - Bringing Your Home's Story to Life Through Design
            </Typography>
           
            <div className="flex gap-2 mb-24 justify-center">
              <Link to="/interio">
              <Button   className="cor-btn px-3 py-2 sm:mt-6  bg-r-gold rounded-full gilroyLight text-xs xl:text-sm ">
              View More
              </Button>
              </Link>
             
            </div>
          </div>
        </div>
        </div>
    
     <div className="relative h-full w-full">
        <img
          src={office}
          alt="image 3"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 grid h-full w-full items-end justify-center bg-gradient-to-t from-r-voi to-transparent to-50%">
          <div className="justify-center align-center">
          <h1 className="montserratEBold text-5xl lg:text-9xl  text-r-gold" style={{textAlign: "center"}}>MODULAR</h1>
            <Typography
              variant="h1"
              color="white"
              className="m-2 sm:mb-8 text-sm md:text-xl lg:text-3xl text-center gilroyBold"
            >
              Workspace (Office) Interior - Designing Spaces that Energize Workflows
            </Typography>
           
            <div className="flex gap-2 mb-24 justify-center">
            <Link to="/modular">
              <Button className="cor-btn px-3 py-2 sm:mt-6 bg-r-gold rounded-full gilroyLight text-xs xl:text-sm ">
              View More
              </Button>
              </Link>
             
            </div>
          </div>
        </div>
        </div>
    
     <div className="relative h-full w-full">
        <img
          src={ed}
          alt="image 3"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 grid h-full w-full items-end justify-center bg-gradient-to-t from-r-voi to-transparent to-50%">
          <div className="justify-center align-center">
          <h1 className="montserratEBold text-5xl lg:text-9xl  text-r-gold" style={{textAlign: "center"}}>EDUFURN</h1>
            <Typography
              variant="h1"
              color="white"
              className="m-2 sm:mb-8 text-sm md:text-xl lg:text-3xl text-center gilroyBold"
            >
              Interior for Educational Institution - Crafting Inspirational Interiors for Education
            </Typography>
           
            <div className="flex gap-2 mb-24 justify-center">
            <Link to="/edufurn">
              <Button className="cor-btn px-3 py-2 sm:mt-6 bg-r-gold rounded-full gilroyLight text-xs xl:text-sm ">
              View More
              </Button>
             </Link>
            </div>
          </div>
        </div>
        </div>
    
     <div className="relative h-full w-full">
        <img
          src={medi}
          alt="image 3"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 grid h-full w-full items-end justify-center bg-gradient-to-t from-r-voi to-transparent to-50%">
          <div className="justify-center align-center">
          <h1 className="montserratEBold text-5xl lg:text-9xl  text-r-gold" style={{textAlign: "center"}}>MEDIFURN</h1>
            <Typography
              variant="h1"
              color="white"
              className="m-2 sm:mb-8 text-sm md:text-xl lg:text-3xl text-center gilroyBold"
            >
              Interior for Healthcare - Bringing Comfort and Efficiency to Medical Spaces
            </Typography>
           
            <div className="flex gap-2 mb-24 justify-center">
              <Button  className="cor-btn px-3 py-2 sm:mt-6 bg-r-gold rounded-full gilroyLight text-xs xl:text-sm  ">
              View More
              </Button>
             
            </div>
          </div>
        </div>
        </div>
    
     <div className="relative h-full w-full">
        <img
          src={sho}
          alt="image 3"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 grid h-full w-full items-end justify-center bg-gradient-to-t from-r-voi to-transparent to-50%">
          <div className="justify-center align-center">
          <h1 className="montserratEBold text-5xl lg:text-9xl  text-r-gold" style={{textAlign: "center"}}>SHOPFIT</h1>
            <Typography
              variant="h1"
              color="white"
              className="mb-2 sm:mb-8 text-sm md:text-xl lg:text-3xl text-center gilroyBold"
            >
              Shop Interior - Designing Stores that Reflect Your Brand's Essence
            </Typography>
           
            <div className="flex gap-2 mb-24 sm:mt-6 justify-center">
              <Button  className="cor-btn px-3 py-2 bg-r-gold rounded-full gilroyLight text-xs xl:text-sm ">
              View More
              </Button>
             
            </div>
          </div>
        </div>
        </div>
    

      
    </Carousel>
  );
}

