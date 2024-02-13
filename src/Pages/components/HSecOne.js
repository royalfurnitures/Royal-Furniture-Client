import React from 'react'
import img1 from '../../assets/image/bg/homediv.webp';
import { Container } from '@mui/material';
import YouTube, { YouTubeProps } from 'react-youtube';



export default function HSecOne() {
  const opts = {
    position: "absolute",
    top:0,
    width:"100%",
    height:"300px",
    
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };


     
  return (
    <div className='bg-r-bggray mt-16 '>
    <Container>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 py-[100px]  lg:py-[150px]'>
  <div className='col-span-1 sm:col-span-2 lg:col-span-4'>
    <h1 className='hsec-three-title gilroyBold text-r-brown'>A <span className='leaf'>sneak peak</span> inside our <br /> Royal’s design spaces </h1>
    <h4 className='hsec-three-sub gilroyLight text-xl'>Experience our clients' dream homes with Royal’s virtual tours.</h4>
    <div className='line-large' />
  </div>
  <div className='col-span-1 sm:col-span-2 lg:col-span-4 w-full'>
    <div className="relative" style={{width: "100%" }}>
      {/* 16:9 aspect ratio for responsive YouTube video */}
      <YouTube videoId="Y4C1_yRPhzY"  opts={opts} />
    </div>
  </div>
</div>


    </Container>
    </div>
  )
}
