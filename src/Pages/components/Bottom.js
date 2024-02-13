import { Container } from '@mui/material'
import React from 'react';
import five from "../../assets/image/icons/5.webp"
import six from "../../assets/image/icons/6.webp"
import { Button } from '@material-tailwind/react';

export default function Bottom() {
  return (
    <>
    <div className='bot-main mt-[10px] md:mt-[100px]'>      
      <div style={{display: "flex", justifyContent: "center", alignItems: "end"}}><img src={six} className='' style={{width: "72%"}}/></div>
      <Container style={{margin: "0 auto"}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column"}}>
            <div className='bot-title pt-[0px] md:pt-[70px] text-center text-sm md:text-lg lg:text-2xl  xl:text-3xl  gilroyBold text-r-tvoi'>
              Your dream home is just a clicks away
            </div>
            <div style={{margin: "0 auto"}}>
            <Button className="bg-r-gold rounded-full gilroyLight text-[8px] py-2 px-3 sm:text-[16px] mt-6 mb-6  " >
              Get Free Consultation
            </Button>
            </div>
        </div>
      </Container>
      <div style={{display: "flex", justifyContent: "center", alignItems: "end"}}><img src={five} className='' style={{width: "50%"}}/></div>
    </div>
    </>
  )
}
