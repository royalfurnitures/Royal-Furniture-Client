import React from 'react';
import actiontesa from "../../../assets/image/Partners/action tesa.webp";
import { Card, CardMedia, Container } from '@mui/material'
import { PartnerLogos1 ,PartnerLogos2 ,PartnerLogos3 ,Associatewith } from './Logos';
import Footer from '../Footer';

const PartnerLogo = ({ img, index }) => (
  <img
    key={index}
    src={img}
    alt={`Partner Logo ${index}`}
    className="w-[50px] mr-[20px] md:w-[100px] my-auto"
  />
);

const Partner = () => {

  return (
    <div>
        <Container>
        <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="title gilroyBold text-r-tvoi text-2xl md:text-3xl xl:text-4xl">OUR PARTNERS</h1>
            </div>
    <div className='partner-slider'>
      <div className='partner-slide-track '>
      {PartnerLogos1.map((logo, index) => (
       <div className='partner-slide my-auto'>
       <img
         key={index}
         src={logo.img}
         alt={`Partner Logo ${index}`}
         className="w-[80px]"
       />
        </div>))}
     {PartnerLogos1.map((logo, index) => (
       <div className='partner-slide my-auto'>
       <img
         key={index}
         src={logo.img}
         alt={`Partner Logo ${index}`}
         className="w-[80px]"
       />
      </div>))}
     
     </div>
     <div className='partner-slide-track '>
      {PartnerLogos2.map((logo, index) => (
       <div className='partner-slide my-auto'>
       <img
         key={index}
         src={logo.img}
         alt={`Partner Logo ${index}`}
         className="w-[80px]"
       />
      </div>))}
     {PartnerLogos2.map((logo, index) => (
       <div className='partner-slide my-auto'>
        <img
         key={index}
         src={logo.img}
         alt={`Partner Logo ${index}`}
         className="w-[80px]"
         />
        </div>))}
     </div>
     <div className='partner-slide-track '>
       {PartnerLogos3.map((logo, index) => (
       <div className='partner-slide my-auto'>
       <img
         key={index}
         src={logo.img}
         alt={`Partner Logo ${index}`}
         className="w-[80px]"
       />
       </div>))}
     {PartnerLogos3.map((logo, index) => (
       <div className='partner-slide my-auto'>
       <img
         key={index}
         src={logo.img}
         alt={`Partner Logo ${index}`}
         className="w-[80px]"
       />
        </div>))}
     </div>
    </div>
   
     <div className='mb-20 mt-10'>
     <div className="title-container">
            <div className="gold-line"></div>
            <h1 className="title gilroyBold text-r-tvoi text-2xl md:text-3xl xl:text-4xl">ASSOCIATION WITH</h1>
            </div>
         <div className='grid grid-cols-12 mt-10'>
           <div className='col-span-6 lg:col-span-3'><img src={Associatewith[0].img}/></div>
           <div className='col-span-6 lg:col-span-3'><img src={Associatewith[1].img}/></div>
           <div className='col-span-6 lg:col-span-3'><img src={Associatewith[2].img}/></div>
           <div className='col-span-6 lg:col-span-3'><img src={Associatewith[3].img}/></div>
           <div className='col-span-6 lg:col-span-3'><img src={Associatewith[4].img}/></div>
           <div className='col-span-6 lg:col-span-3'><img src={Associatewith[5].img}/></div>
           <div className='col-span-12 lg:col-span-3 mx-auto'><img src={Associatewith[6].img}/></div>
         </div>
     </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Partner