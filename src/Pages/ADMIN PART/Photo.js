import React , { useEffect, useState } from 'react';
import { Admin } from './Admin';
import img1 from "../.././assets/image/card/edu/chairs.webp";
import img2 from "../.././assets/image/card/edu/class.webp";
import img3 from "../.././assets/image/card/edu/comp.webp";
import img4 from "../.././assets/image/card/edu/hos.webp";
import PhotoCreate from "./PhotoCreator";
import { DeleteGalleryAPIHandler, GetAllPhotoHandler } from '../../API/APIS';
import FrontPage from '../components/commercial/FrontPage';
import { LiaCertificateSolid } from 'react-icons/lia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Popup from './Popup';
import { IoMdAdd } from 'react-icons/io';

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

const Photo = () => {
   const [isCreate,setIsCreate] = useState(false);
   const [isEdit,setIsEdit] = useState(false);
   const [editData,setEditData] = useState(false);
   const [photos,setPhotos] = useState(false);
   const [loading,setLoading] = useState(false);
   const [deletedata,setDeleteData] = useState('');
   const [isDeletePopup,setIsDeletePopup] = useState(false);
   


   useEffect(()=>{
    getallphotos();
   },[])
   const getallphotos = async()=>{
    setLoading(true);
    let AllPhotos = await GetAllPhotoHandler(null);
    // console.log("Allphotos",AllPhotos);
    setLoading(false);
    setPhotos(AllPhotos.data)
   }

   const DeleteHandler = async (id) => {
    
    let data = { id:id };

  
    const response = await DeleteGalleryAPIHandler(data);
    getallphotos();
       
    console.log("response", response);
  }

   const handler = ()=>{
    setIsCreate(!isCreate);
   }
   const Edithandler = ()=>{
    setIsEdit(!isEdit);
   }
   const handleDeletemodel = (action)=>{
    if(action === true){
     DeleteHandler(deletedata);
    }
    setIsDeletePopup(false);
  }

   
 
   

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-white z-50'>
        <Admin/>
        {
        isDeletePopup ?
        <Popup handleModel={handleDeletemodel} isDelete={true} />
        :
        null
      }
        {
        loading ?
        <FrontPage/>:
        null
       }
        {
          isCreate ? 
          <PhotoCreate Datahandler={getallphotos} iscreate={true} openHandler={handler} />
          :
          null
        }
         {
          isEdit ? 
          <PhotoCreate Datahandler={getallphotos} isedit={true} editdata={editData} openHandler={Edithandler} />
          :
          null
        }
       
        <div className='lg:ml-[300px] py-8 px-2'>
          <div className='relative h-[20px] mb-20'>
        
          <button className='fixed bottom-14  right-10  text-2xl  text-[white]  font-bold rounded-lg flex items-center gap-1 ' onClick={()=>{setIsCreate(true)}} > <Button variant="contained"><IoMdAdd/>&nbsp; create </Button> </button>
          </div>
          {/* <div className='grid grid-cols-12 overflow-y-scroll h-[80vh] gap-[10px]'>
             {photos?.length > 0 && photos?.map(item=>
              <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                 <div className='border p-4 rounded-lg'>
                    <img src={item.Images[0].URL}/>
                    <div className='mt-3 font-semibold'>{item.Title}</div>
                    <div className='mt-3 font-semibold '><span className='flex items-center gap-2'><LiaCertificateSolid />{item.Category}</span></div>
                    
                        <div className='grid grid-cols-12 pt-4 gap-[10px]'>
                             <div className='col-span-6 text-end'><button className='bg-red-500 px-2 py-1 rounded text-white' onClick={()=>{DeleteHandler(item._id)}}>Delete</button></div>
                             <div className='col-span-6 text-start'><button className='bg-green-500 px-2 py-1 rounded text-white' onClick={()=>{setEditData(item);Edithandler()}}>Edit</button></div>                            
                        </div>
                      
                 </div>
             </div>)}
          </div> */}
          <div className='grid grid-cols-12 overflow-y-scroll px-4 h-[80vh] gap-[10px]'>
             {photos?.length > 0 && photos?.map(item=>
              <div className='col-span-12 md:col-span-6 lg:col-span-3'>
                 <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.Images[0].URL}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span className='flex items-center gap-2'>
          <LiaCertificateSolid />{item.Category}
          </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {item.Title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="warning" onClick={()=>{setIsDeletePopup(true) ;setDeleteData(item._id)}}>
          Delete
        </Button>
        <Button size="small" color="primary" onClick={()=>{setEditData(item);Edithandler()}}>
          Edit
        </Button>
        
      </CardActions>
    </Card>
             </div>)}
          </div>
        </div>
    </div>
  )
}

export default Photo