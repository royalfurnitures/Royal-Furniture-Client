import { Container } from '@mui/material'
import React from 'react';
import { useEffect } from 'react';
import {FiMail} from "react-icons/fi";
import { GoLocation } from 'react-icons/go';
import {MdCall} from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

export default function Contact() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, []);

  return (
    <div className='con-main '>
      <div className='  lg:px-10 py-10  flex-col w-[100%] ' style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "85vh"}}>
      <div className='flex   w-[90%] rounded-xl pt-10 flex-col items-center justify-center bg-white' >
      <div>
            <h1 className='gilroyEBold text-4xl text-center text-r-tvoi'>Contact Us</h1>
            <div className='flex mt-3 flex-col items-center justify-center w-[300px] lg:w-[400px]'>
                <div className='flex  items-center justify-center px-4 py-1 gap-[20px] w-[100%]  rounded-[20px]' >
                    <FiMail className='text-[25px] lg:text-[30px]' />
                    <p className='gilroyMedium text-xl lg:text-3xl'>info@royalfurn.in</p>
                </div>
                
                <div className='flex items-center justify-center  px-4 py-1 gap-[20px] w-[100%]  rounded-[20px]'  >
                    <MdCall className='text-[25px] lg:text-[30px]' />
                    <p className='gilroyMedium text-xl lg:text-3xl'>93131 63131</p>
                </div>
            </div>
            </div>
        <div className='w-[100%] flex lg:flex-row flex-col items-center justify-center gap-10  bg-white my-10'>
          

                <div className='p-1 md:p-4 mt-4 flex items-center flex-col justify-center  min-w-[300px] rounded-[20px] ' style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} >
                    <p className='gilroyBold text-2xl my-2 text-center m-auto'>
                    <p className='gilroyBold text-2xl flex items-center justify-center gap-3 mb-2 lg:mb-5  '> <GoLocation /> Coimbatore </p>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3001581983276!2d76.95022949999999!3d11.0160914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a20d48272b%3A0xc459423e58beb697!2sROYAL%20FURNITURES!5e0!3m2!1sen!2sin!4v1706267956804!5m2!1sen!2sin" className=' w-[100%] lg:w-[400px] h-[300px] ' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </p>
                    
                </div>
                <div className='p-1 mb:p-4 mt-4 flex items-center flex-col justify-center  min-w-[300px] rounded-[20px] ' style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} >
               
                <p className='gilroyBold text-2xl my-2 text-center m-auto'>
                    <p className='gilroyBold text-2xl flex items-center justify-center gap-3 mb-2 lg:mb-5 '><GoLocation /> Erode </p>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.250012254635!2d77.58292349999999!3d11.316428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96b73b1761a9d%3A0x218c51c575f8c8ae!2sROYAL%20FURNITURES%20-%20Erode!5e0!3m2!1sen!2sin!4v1706272993149!5m2!1sen!2sin"  className=' w-[100%] lg:w-[400px] h-[300px] ' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </p>
                </div>
                
                


            </div>

            <div>
            <div>
            <div className='p-4 mt-4 flex items-center justify-center h-[100px]  rounded-[20px] '  >
                    <p className='gilroyBold text-2xl text-center m-auto flex items-center justify-center gap-5'> 
                    <a href='https://www.facebook.com/RoyalFurn.in/' target='_blank'><FaFacebook className='text-[#1877F2]' /></a>
                    <a href='https://twitter.com/royalfurn1' target='_blank'><BsTwitterX className='text-[#1DA1F2]' /> </a>
                    <a href='https://www.youtube.com/channel/UCOYKEWcJcF7_43a3y8o2yDA' target='_blank'><FaYoutube className='text-[#FF0000]' /></a>
                     </p>
                </div>
            </div>
        </div>

      </div>
      </div>
    </div>
  )
}
