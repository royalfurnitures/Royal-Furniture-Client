import React, { useEffect } from 'react';
import pic from "../../assets/image/bg/homediv.webp"
import { Container } from '@mui/material';
import Touch from '../components/commercial/Touch';
import Footer from '../components/Footer';
import subs from "../../assets/image/bg/living.webp";
import { BlogData } from "../screens/BlogData";
import { useParams } from "react-router-dom"


export default function MagDetails() {
  let { blogmetadata } = useParams();
  function getElementByName(array, name) {
    return array.find(element => element.name === name);
  }
  
  const data = getElementByName(BlogData, blogmetadata);
  
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  },[])

  return (
    <>
      <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 items-start py-[20px]' >
            <img src={data.image1}  className="max-h-70vh md:order-1 m-auto" />
            <div>
            <div className="title-container" >
                <div className="gold-line"></div>
                <h1 className="title text-xl md:text-2xl lg:text-4xl  text-justify gilroyBold text-r-tvoi">{data.title1}</h1>
            </div>
            <div style={{marginTop: "0px"}}>
                <h1 className='gilroyMedium text-sm sm:text-xl text-justify pr-4' style={{lineHeight: "30px"}}>{data.desPreview1}</h1>
            </div>
            </div>
        </div>
        {
          data.tandc1.map(blog=>
         <div className='mb-10'>
          <h1 className="title text-xl md:text-2xl lg:text-4xl  text-justify gilroyBold text-r-tvoi">{blog.title}</h1>
          <div className='gilroyMedium text-sm sm:text-xl text-justify' style={{marginTop: "30px", lineHeight: "30px"}}>
          {blog.content}
         </div>
         </div>)
        }
        
       
        <div className='grid grid-cols-1  md:grid-cols-2 items-start mb-6 '>
            <img src={data.image2} className="max-h-70vh md:order-0 m-auto " />
         <div>
         <h1 className="title text-xl md:text-2xl mt-3 lg:text-4xl  text-justify gilroyBold text-r-tvoi">{data.title2}</h1>
         <div className='gilroyMedium text-sm sm:text-xl text-justify' style={{marginTop: "30px", lineHeight: "30px"}}>
          {data.desPreview2}
         </div>
         </div>
        </div>
        {
          data.tandc2.map(blog=>
         <div className='mb-10'>
          <h1 className="title text-xl md:text-2xl lg:text-4xl  text-justify gilroyBold text-r-tvoi">{blog.title}</h1>
          <div className='gilroyMedium text-sm sm:text-xl text-justify' style={{marginTop: "30px", lineHeight: "30px"}}>
          {blog.content}
         </div>
         </div>)
        }
        <Touch image={subs} />
        
      </Container>
      <Footer />        
    </>
  )
}
