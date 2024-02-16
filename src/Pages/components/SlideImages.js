import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const SlidwImages = ({ images1 ,link  }) => {
  // console.log("image1",images1);
  return (
    <Fragment>
         <div className='grid grid-cols-3 gap-4 '>
          {
            images1?.length > 0 && images1.map((item,index)=>          
          <Link to={`/designideas/${index}/${link}`} className='col-span-3 md:col-span-1  '>
             <div className='w-[100%] h-[300px]   bg-[#424242]  relative' >
              <img src={item.Images[0].URL} className='w-[100%]   h-[100%]  object-cover' />
              <div className='absolute w-[100%] z-10 bottom-2 left-2 text-white'>{item.Title}</div>
              <div className="absolute w-[100%] bottom-0 h-50 bg-gradient-to-t from-black to-transparent"></div>
             </div>
          </Link>
            )}   
         </div>


         {/* <div className='grid grid-cols-3 gap-4 '>
          {
            images1?.length > 0 && images1.map(item=>          
          <div className='col-span-3 md:col-span-1  '>
             <div className='w-[100%] h-[300px]   bg-[#424242]  relative' >
              <img src={item.src} className='w-[100%]   h-[100%]  object-cover' />
              <div className='absolute w-[100%] z-10 bottom-2 left-2 text-white'>{item.text}</div>
              <div className="absolute w-[100%] bottom-0 h-50 bg-gradient-to-t from-black to-transparent"></div>
             </div>
          </div>
            )}   
         </div> */}
    </Fragment>
  )
}

export default SlidwImages