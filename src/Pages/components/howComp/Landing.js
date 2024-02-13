import React from 'react';
import how from "../../../assets/image/bg/how.webp";
import { Button, Typography } from '@material-tailwind/react';
import { Container } from '@mui/material';
import h1 from "../../../assets/image/icons/h1.webp"
import h2 from "../../../assets/image/icons/h2.webp"
import h3 from "../../../assets/image/icons/h3.webp"
import h4 from "../../../assets/image/icons/h4.webp"
import h5 from "../../../assets/image/icons/h5.webp"
import t1 from "../../../assets/image/icons/t1.webp"
import t2 from "../../../assets/image/icons/t2.webp"
import t3 from "../../../assets/image/icons/t3.webp"
import l from "../../../assets/image/icons/l.webp"
import r from "../../../assets/image/icons/r.webp"
import tick from "../../../assets/image/icons/tick.webp"
import Subscribe from '../subscribe/Subscribe';
import Touch from '../commercial/Touch';

const cards = [
    {
        img: h1,
        text: "O1"
    },
    {
        img: h2,
        text: "O2"
    },
    {
        img: h3,
        text: "O3"
    },
    {
        img: h4,
        text: "O4"
    },
    {
        img: h5,
        text: "O5"
    }
]
const team = [
    {
        img: t1,
        title: "The Design Lead (DL)",
        sub: "The Design Lead gets to know your requirements and your lifestyle intimately to ensure your home is a reflection of who you are."
    },
    {
        img: t2,
        title: "The Business Manager (BM)",
        sub: "To ensure your home journey is smooth sailing, your Business Manager oversees the entire design process and ensures there are no hiccups."
    },
    {
        img: t3,
        title: "The Project Manager (PM)",
        sub: "Your Project Manager steers the on-site execution. They make it their life’s mission to get your home ready in time."
    },
    
]

export default function Landing() {
  return (
    <>
    <div className="relative h-full w-full" style={{height: "80vh"}}>
        <img
          src={how}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end justify-center bg-gradient-to-t from-r-tvoi to-transparent to-50%">
          <div className="justify-center align-center">
            <Typography
              variant="h1"
              color="white"
              className="mb-8 text-3xl md:text-4xl lg:text-5xl gilroyEBold text-center"
              style={{lineHeight: "65px"}}
            >
              A SEAMLESS INTERIOR JOURNEY  <br />GURANTEED
            </Typography>
          </div>
        </div>
    </div>
    <Container>
        <div className='pt-24 pb-24'>
            <h1 className='text-center gilroyBold text-r-tvoi steps-title text-3xl md:text-4xl lg:text-5xl'>Five steps to your dream home!</h1>
            <h3 className='text-center gilroyMedium text-r-tvoi steps-sub text-2xl md:text-3xl lg:text-3xl'>Looking to design your home interiors? Here’s how you can get started.</h3>
            <div className='step-grid'>
                {cards.map((step, index) => (
                <div className='step-griditem' key={index}>
                <img className='step-img' src={step.img} />
                <div>
                        <h1 className='text-r-tvoi gilroyBold text-4xl mt-4'>{step.text}</h1>
                    </div>
                </div>
                ))}
            </div>
            <div className="flex gap-2 mb-0 justify-center">
              <Button size="lg" color="brown" className="cor-btn bg-r-gold rounded-full gilroyLight text-lg">
                Start Your Project
              </Button>
             
            </div>
        </div>
    </Container>
    <Container>
        <div className='steps-sec'>
            <div className='flex justify-center items-center ' >
                <img style={{width: "70%"}} src={h1} />
            </div>
            <div className='flex justify-center items-start flex-col'>
                <h1 className='step-cardtitle gilroyBold text-r-tvoi'>
                Get Free Consultation
                </h1>
                <p className='gilroyMedium step-cardsub text-r-tvoi'>
                Get a quote and a personalised design from your designer.
                </p>
            </div>
        </div>
        </Container>
        <Container>
        <div className='steps-sec'>
            <div className='flex justify-center items-center ' >
                <img style={{width: "70%"}} src={h2} />
            </div>
            <div className='flex justify-center items-start flex-col'>
                <h1 className='step-cardtitle gilroyBold text-r-tvoi'>
                Book Your Slot
                </h1>
                <h2 className='step-cardt gilroyBold text-r-tvoi'>
                Pay the booking amount to seal the deal
                </h2>
                <p className='gilroyMedium step-cardsub text-r-tvoi'>
                It’s time to deep dive into the nitty-gritties. Pick your favorite materials and finishes.
                </p>
            </div>
        </div>
        </Container>
        <Container>
        <div className='steps-sec'>
            <div className='flex justify-center items-center ' >
                <img style={{width: "70%"}} src={h3} />
            </div>
            <div className='flex justify-center items-start flex-col'>
                <h1 className='step-cardtitle gilroyBold text-r-tvoi'>
                Place the order
                </h1>
                <h2 className='step-cardt gilroyBold text-r-tvoi'>
                Start the order process with 50% payment
                </h2>
                <p className='gilroyMedium step-cardsub text-r-tvoi'>
                Finalise the design, and your project is now off to a good start.
                </p>
            </div>
        </div>
        </Container>
        <div className='bg-r-voi2 flex justify-center items-center text-white' style={{minHeight: "100px"}}>
           <div><img src={l} className='quote' /></div>  <h1 className='gilroyBold quote-txt'>It is half way there. Orders have been raised for your review!</h1> <div><img src={r} className='quote' /></div>
        </div>
        <Container>
        <div className='steps-sec'>
            <div className='flex justify-center items-center ' >
                <img style={{width: "70%"}} src={h4} />
            </div>
            <div className='flex justify-center items-start flex-col'>
                <h1 className='step-cardtitle gilroyBold text-r-tvoi'>
                Execution and installation
                </h1>
                <h2 className='step-cardt gilroyBold text-r-tvoi'>
                Pay 100% at execution milestone
                </h2>
                <p className='gilroyMedium step-cardsub text-r-tvoi'>
                Manufacturing of orders in process and you’re mid-way through your project.
                </p>
            </div>
        </div>
        </Container>
        <div className='bg-r-voi2 flex justify-center items-center text-white' style={{minHeight: "100px"}}>
           <div><img src={l} className='quote' /></div><div><img src={tick} className='tick'  /></div>  <h1 className='gilroyBold quote-txt'>Hooray! We’ve got it all paid for!</h1> <div><img src={r} className='quote' /></div>
        </div>
        <Container>
        <div className='steps-sec'>
            <div className='flex justify-center items-center ' >
                <img style={{width: "70%"}} src={h5} />
            </div>
            <div className='flex justify-center items-start flex-col'>
                <h1 className='step-cardtitle gilroyBold text-r-tvoi'>
                Move in!
                </h1>
                
                <p className='gilroyMedium step-cardsub text-r-tvoi'>
                Your dream home is now a reality! 
                It’s time to make new memories!
                Do avail the free professional photoshoot 
                session of your #Royalfurniturecbe.
                </p>
            </div>
        </div>
        </Container>
        <Container>
        <div className='pb-24'>
            <h1 className='text-center gilroyBold text-r-tvoi steps-title'>The Royal Team</h1>
            <h3 className='text-center gilroyMedium text-r-tvoi steps-sub'>Get to know the team that’ll be with you every step of the way.</h3>
            <div className='team-grid'>
                {team.map((team, index) => (
                <div className='team-griditem' key={index}>
                <img className='team-img' src={team.img} />
                <div>
                        <h1 className='text-r-tvoi gilroyBold text-4xl mt-4 team-title'>{team.title}</h1>
                    </div>
                <div>
                        <h1 className='tgilroyMedium team-des text-r-tvoi'>{team.sub}</h1>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    </Container>
    <Container>
    <Touch />
    <div style={{marginBottom: "100px"}} />
    </Container>
    </>
  )
}
