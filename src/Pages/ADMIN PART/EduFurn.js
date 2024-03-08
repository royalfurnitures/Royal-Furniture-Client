import React, { useEffect, useState } from 'react'
import { Admin } from './Admin'
import { GetAllModulesPhotoHandler } from '../../API/APIS';
import DisplayPart from './DisplayPart';
import FrontPage from '../components/commercial/FrontPage';

const EduFurn = () => {
  const [photos,setPhotos] = useState(false);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    getallphotos();
   },[])
   const getallphotos = async()=>{
    setLoading(true);
    let AllPhotos = await GetAllModulesPhotoHandler("EduFurn",null);
    // console.log("Allphotos",AllPhotos);
    setLoading(false);
    setPhotos(AllPhotos.data)
   }
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-white z-50 ' >
      <Admin/>
      {
        loading ?
        <FrontPage/>:
        null
       }
      <DisplayPart isEdu={true} DataHandler={getallphotos} data={photos} />
    </div>
  )
}

export default EduFurn