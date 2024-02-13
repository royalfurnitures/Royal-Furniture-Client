import React from 'react';
import minilogo from "../../../assets/image/Logo/mini_royal_logo.webp";
import ReactLoading from 'react-loading';

const style={
      position:'fixed',
      top:0,
      bottom:0,
      left:0,
      right:0,
      backgroundColor:"white",
      zIndex:9999
    }

const FrontPage = () => {
  return (
    <div style={style}>
      <div className='flex items-center justify-center  fixed left-0 bottom-0 top-0 flex-col right-0 m-auto z-40 bg-white opacity-60 '></div>
        <div className='flex items-center justify-center  fixed left-0 bottom-0 top-0 flex-col right-0 m-auto z-50 '>
            <img src={minilogo} className='animate-bounce h-[60px] w-[60px]   '/>
            <ReactLoading type="cylon" color={"brown"}  />
        </div>
    </div>
  )
}

export default FrontPage