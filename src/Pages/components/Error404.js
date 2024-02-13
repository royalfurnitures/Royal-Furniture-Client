import React, { Fragment } from 'react'

const Error404 = () => {
  return (
    <Fragment>
    <div className='fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 z-40 bg-white opacity-100'></div>
    <div className='fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 z-40 '>
         <div className='flex flex-col items-center justify-center font-bold text-[#52D22E]'>
            <div className='text-3xl text-r-tvoi gilroyBold'> 404 Error Found </div>
         </div>
    </div>
    </Fragment>
  )
}

export default Error404