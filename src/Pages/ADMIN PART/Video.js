import React, { useEffect, useState } from 'react';
import { Admin } from './Admin';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import YoutubePlayer from 'react-youtube-player';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid';
import VideoCreator from "./VideoCreator";
import { GetVideoURL, createVideo , GetallYoutubeVideos, deleteVideo } from "../../API/APIS";

const Video = () => {
  const [isCreate,setIsCreate] = useState(false);
   const [isEdit,setIsEdit] = useState(false);
   const [editData,setEditData] = useState(false);
  const [Videos, setVideos] = useState([]);
  const GetAllVideos = async ()=>{
    let data = await GetallYoutubeVideos();
    setVideos(data.data);
} 

useEffect(()=>{
          GetAllVideos();
},[])

  console.log("data",Videos);

  const DeleteHandler = async (id) => {
    
    let data = { id:id };

  
    const response = await deleteVideo(data);
    GetAllVideos();
    
       
    console.log("response", response);
  }

   const handler = ()=>{
    setIsCreate(!isCreate);
   }
   const Edithandler = ()=>{
    setIsEdit(!isEdit);
   }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-white z-50'>
      
      <Admin/>
      {
          isCreate ? 
          <VideoCreator Datahandler={GetAllVideos} iscreate={true} openHandler={handler} />
          :
          null
        }
         {
          isEdit ? 
          <VideoCreator Datahandler={GetAllVideos} isedit={true} editdata={editData} openHandler={Edithandler} />
          :
          null
        }
          
         
     <div className='lg:ml-[300px]'>
     <div className='relative h-[20px] mt-20 mb-20'>
             <button className='absolute right-[10px] text-5xl text-white bg-orange-500 px-2  font-bold rounded-lg ' onClick={()=>{setIsCreate(true)}} > + </button>
          </div>
     <div className='grid grid-cols-12 gap-[10px] overflow-y-scroll h-[80vh] p-10'> 
        {
            Videos.length > 0 && Videos.map(item=>
            <div key={item._id} className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 '>
              <Card style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} className='m-auto' sx={{ maxWidth: 345 }}>
                  <CardMedia
                      sx={{ height: 240 }}
                      // image={img}
                      title="green iguana"
                  >
                    <YoutubePlayer
                     videoId={item.YoutubeVideoID}
                     playbackState='unstarted'
                     height='100%'
                     width='100%'
                     configuration={
                      {
                          showinfo: 1,
                          controls: 1
                      }
                  }
              />
                  </CardMedia>
                  <CardContent >
                      <Typography gutterBottom variant="h7"  component="div"  >
                      <span className='text-r-tvoi gilroyBold'>{item.YoutubeVideoTitle}</span>
                      </Typography>
                      <Typography>
                        <div className='grid grid-cols-12 pt-4 gap-[10px]'>
                             <div className='col-span-6 text-end'><button className='bg-red-500 px-2 py-1 rounded text-white' onClick={()=>{DeleteHandler(item._id)}}>Delete</button></div>
                             <div className='col-span-6 text-start'><button className='bg-green-500 px-2 py-1 rounded text-white' onClick={()=>{setEditData(item);Edithandler()}}>Edit</button></div>                            
                        </div>
                      </Typography>
                  </CardContent>
                  
              </Card>
              </div>)
        }
     </div>
     </div>
    </div>
  )
}

export default Video