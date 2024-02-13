import { Container } from '@mui/material'
import React, {useState} from 'react'
import pic from "../../assets/image/bg/homediv.webp"
import { Chip } from '@material-tailwind/react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import int from "../../assets/image/bg/interio.webp"
import Bottom from '../components/Bottom'
import Touch from '../components/commercial/Touch'
import Footer from '../components/Footer'
import SlideImages from '../components/SlideImages';
import subs from "../../assets/image/bg/living.webp";

const images1 = [
  { src: int, link: null,text: 'Conference hall' },//1
  { src: int, link: null ,text: 'Canteen' },//2
  { src: int, link: null ,text: 'Cabin' },//3
  { src: int, link: null ,text: 'Front office' },//4
  { src: int, link: null ,text: 'Waiting area' },//5
  { src: int, link: null ,text: 'Work area' },//6
]


const point = [
    {
        title: "Layout",
        des: "The L-shaped kitchen features countertops and cabinetry along two adjoining walls, forming an 'L' shape. This design maximizes corner space, making it efficient for cooking and storage."
    },
    {
        title: "Color Palette",
        des: "Modern L-shaped kitchens often feature a clean and minimalist color palette. Neutral tones such as white, gray, and black are popular choices. These colors create a sense of openness and cleanliness."
    },
    {
        title: "Appliances",
        des: "Stainless steel appliances are often incorporated for their modern and timeless appeal. Built-in or integrated appliances help maintain a streamlined appearance."
    },
    {
        title: "Storage",
        des: "Modern kitchens prioritize storage solutions. In an L-shaped design, you'll find deep drawers, pull-out pantry shelves, and well-organized cabinets to maximize space efficiency."
    }
]


export default function Detaileddesignid() {
    
  return (
    <>
    <div>
      <Container>
        <div className='grid grid-cols-6 gap-[10px] pt-[20px] items-start' >
            <div className='col-span-6 lg:col-span-3'>
            <div className="title-container" >
                <div className="gold-line"></div>
                <h1 className="title text-2xl md:text-3xl lg:text-4xl gilroyBold text-r-tvoi">Modern L Shaped Kitchen</h1>
            </div>
            <div style={{marginTop: "30px"}}>
                <h1 className='gilroyMedium text-lg md:text-2xl' style={{lineHeight: "38px"}} >A modern L-shaped kitchen interior is characterized by its clean lines, functional layout, efficient use of space, and a focus on minimalist design elements. It creates a welcoming and aesthetically pleasing space for cooking, dining, and socializing.</h1>
            </div>
            </div>
            <div className='col-span-6 lg:col-span-3 mt-[10px]'>
            <img src={pic} style={{maxHeight: "70vh", order: "1"}} />
            </div>
        </div>
        {point.map((points, index) => (
            <div style={{marginTop: "50px"}} key={index}>
            <h1 className='gilroyMedium text-xl pr-4' style={{lineHeight: "38px"}} ><b>{points.title}:</b>{points.des}</h1>
            </div>
        ))}

    <SlideImages images1={images1}/>
    
      <div>
        <h1 className='gilroyMedium text-lg md:text-xl mt-10' style={{lineHeight: "38px"}}>Designing a modern L-shaped kitchen involves a fusion of clean lines, functionality, and a sleek, minimalist aesthetic. Start with streamlined cabinetry in a two-tone scheme for a contemporary contrast, and complement it with quartz countertops, opting for a waterfall edge if you seek a striking focal point. Install under-cabinet LED lighting to add both functionality and ambiance. Incorporate stainless steel appliances and matte black accents for a trendy and cohesive look. Embrace open shelving for decorative displays, and consider a spacious kitchen island with pendant lighting as the heart of the space. Create an open concept layout for a spacious and inviting atmosphere, and add smart kitchen technology for convenience. Incorporate subtle textures, such as a textured backsplash or geometric patterns, to infuse character into the design. Finally, balance the modern aesthetic with natural elements like wood flooring and potted plants, achieving a harmonious blend of style and functionality in your modern L-shaped kitchen</h1>
    </div>
      </Container>
    </div>
    
   
    <Touch image={subs} />
    <Footer />
    </>
  )
}
