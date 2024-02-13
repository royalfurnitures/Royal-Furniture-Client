import React , { useEffect, useState } from 'react';
import { Admin } from './Admin';
import img1 from "../.././assets/image/card/edu/chairs.webp";
import img2 from "../.././assets/image/card/edu/class.webp";
import img3 from "../.././assets/image/card/edu/comp.webp";
import img4 from "../.././assets/image/card/edu/hos.webp";
import PhotoCreate from "./PhotoCreator";
import { DeleteGalleryAPIHandler, GetAllPhotoHandler, ModulesDeleteGalleryAPIHandler } from '../../API/APIS';
import CreateEditPhoto from './CreateEditPhoto';

let data = [      
           {
            src:img1,
            title:"jfjjbf fjnfvn fjgnenreg rgnerjnej"
           },
           {
            src:img2,
            title:"jfjjbf fjnfvn fjgnenreg rgnerjnej"
           },
           {
            src:img3,
            title:"jfjjbf fjnfvn fjgnenreg rgnerjnej"
           },
           {
            src:img4,
            title:"jfjjbf fjnfvn fjgnenreg rgnerjnej"
           },
           {
            src:img1,
            title:"jfjjbf fjnfvn fjgnenreg rgnerjnej"
           },
]

const DisplayPart = ({ isEdu , isInterio , isMedi , isModu , isShop , data ,DataHandler}) => {
   const [isCreate,setIsCreate] = useState(false);
   const [isEdit,setIsEdit] = useState(false);
   const [editData,setEditData] = useState(false);
   const [photos,setPhotos] = useState(false);

   let type = "";

     if(isEdu)
     type="EduFurn";
     if(isInterio)
     type="Interio";
     if(isMedi)
     type="MediFurn";
     if(isModu)
     type="Modular";
     if(isShop)
     type="Shopfit";

   const DeleteHandler = async (id) => {    
    let data = { id:id };
  
    const response = await ModulesDeleteGalleryAPIHandler(data , type);
    DataHandler()
       
    console.log("response", response);
  }

   const handler = ()=>{
    setIsCreate(!isCreate);
   }

   const Edithandler = ()=>{
    setIsEdit(!isEdit);
   }

  return (
    <div className='lg:flex'>
        <Admin/>
        {
          isCreate ? 
          <CreateEditPhoto type={type}  Datahandler={DataHandler} iscreate={true} openHandler={handler} />
          :
          null
        }
         {
          isEdit ? 
          <CreateEditPhoto type={type} Datahandler={DataHandler} isedit={true} editdata={editData} openHandler={Edithandler} />
          :
          null
        }
        <div className='lg:ml-[300px] p-8'>
        <div className='relative h-[20px] mb-20'>
             <button className='fixed right-[20px] text-5xl text-white bg-orange-500 px-2  font-bold rounded-lg ' onClick={()=>{setIsCreate(true)}} > + </button>
          </div>
          <div className='grid grid-cols-12 overflow-y-scroll h-[80vh] gap-[10px]'>
             {data?.length > 0 && data?.map(item=>
              <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                 <div className='border p-4 rounded-lg'>

                    <img src={item?.Images[0].URL}/> 
                    <div className='mt-3 font-semibold'>{item.Title}</div>
                    
                        <div className='grid grid-cols-12 pt-4 gap-[10px]'>
                             <div className='col-span-6 text-end'><button className='bg-red-500 px-2 py-1 rounded text-white' onClick={()=>{DeleteHandler(item._id)}}>Delete</button></div>
                             <div className='col-span-6 text-start'><button className='bg-green-500 px-2 py-1 rounded text-white' onClick={()=>{setEditData(item);Edithandler()}}>Edit</button></div>                            
                        </div>
                      
                 </div>
             </div>)}
          </div>
        </div>
    </div>
  )
}

export default DisplayPart