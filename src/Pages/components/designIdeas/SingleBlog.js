import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Touch from '../../components/commercial/Touch';
import Footer from '../../components/Footer';
import subs from "../../../assets/image/bg/living.webp";
import { useParams } from "react-router-dom"
import { GetBlogByIDAPIHandler } from '../../../API/APIS';


export default function SingleBlog() {
    const [blogData,setBlogData] = useState('')
  let { blogmetadata } = useParams();
  const GetBlogData = async (blogmetadata)=>{
      let response =  await GetBlogByIDAPIHandler (blogmetadata);
    //   console.log("response",response);
      setBlogData(response.data[0]);
  }
  useEffect(()=>{
      GetBlogData(blogmetadata)
  },[])
  
//   const data = GetBlogData( blogmetadata);
  
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  },[])
//   console.log("blogdata",blogData);

  return (
    <>
    {
       blogData ?
    
      <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5  items-start py-[20px]' >
            <img src={blogData.mainContent1.imageurl[0].URL}  className=" md:order-1 m-auto" />
            <div>
            <div className="title-container" >
                <div className="gold-line"></div>
                <h1 className="title text-xl md:text-2xl lg:text-4xl  text-justify gilroyBold text-r-tvoi">{blogData.mainContent1.title}</h1>
            </div>
            <div style={{marginTop: "0px"}}>
                <h1 className='gilroyMedium text-sm sm:text-xl text-justify pr-4' style={{lineHeight: "30px"}}>{blogData.mainContent1.paragraph}</h1>
            </div>
            </div>
        </div>
        {
          blogData?.SubSectionData?.slice(0,2)?.map(blog=>
         <div className='mb-10'>
          <h1 className="title text-xl md:text-2xl lg:text-4xl  text-justify gilroyBold text-r-tvoi">{blog.title}</h1>
          <div className='gilroyMedium text-sm sm:text-xl text-justify' style={{marginTop: "30px", lineHeight: "30px"}}>
          {blog.paragraph}
         </div>
         </div>)
        }
        
       
        <div className='grid grid-cols-1  md:grid-cols-2 gap-5 items-start mb-6 '>
            <img src={blogData.mainContent2.imageurl[0].URL} className="max-h-70vh md:order-0 m-auto " />
         <div>
         <h1 className="title text-xl md:text-2xl mt-3 lg:text-4xl  text-justify gilroyBold text-r-tvoi">{blogData.mainContent2.title}</h1>
         <div className='gilroyMedium text-sm sm:text-xl text-justify' style={{marginTop: "30px", lineHeight: "30px"}}>
          {blogData.mainContent2.paragraph}
         </div>
         </div>
        </div>
        {
          blogData?.SubSectionData.slice(2,)?.map(blog=>
         <div className='mb-10'>
          <h1 className="title text-xl md:text-2xl lg:text-4xl  text-justify gilroyBold text-r-tvoi">{blog.title}</h1>
          <div className='gilroyMedium text-sm sm:text-xl text-justify' style={{marginTop: "30px", lineHeight: "30px"}}>
          {blog.paragraph}
         </div>
         </div>)
        }
        {/* <Touch image={subs} /> */}
        
      </Container>
      :
      <Container style={{width:"100%"}}>
         <div className="flex w-[100%]  items-center justify-center h-[40vh] lg:text-[50px] text-[30px] font-bold ">Blog Data Not Found</div>
        {/* <Touch image={subs} />           */}
      </Container>
     }
      <Footer />        
    </>
  )
}
