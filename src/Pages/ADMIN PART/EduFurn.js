import React, { useEffect, useState } from 'react'
import { Admin } from './Admin'
import { GetAllModulesPhotoHandler } from '../../API/APIS';
import DisplayPart from './DisplayPart';

const EduFurn = () => {
  const [photos,setPhotos] = useState(false);

  useEffect(()=>{
    getallphotos();
   },[])
   const getallphotos = async()=>{
    let AllPhotos = await GetAllModulesPhotoHandler("EduFurn");
    console.log("Allphotos",AllPhotos);
    setPhotos(AllPhotos.data)
   }
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-white z-50 ' >
      <Admin/>
      <DisplayPart isEdu={true} DataHandler={getallphotos} data={photos} />
    </div>
  )
}

export default EduFurn