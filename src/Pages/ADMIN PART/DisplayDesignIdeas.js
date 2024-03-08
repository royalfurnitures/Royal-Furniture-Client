import React , { Fragment, useEffect, useState } from 'react';
import { Admin } from './Admin';
import img1 from "../.././assets/image/card/edu/chairs.webp";
import img2 from "../.././assets/image/card/edu/class.webp";
import img3 from "../.././assets/image/card/edu/comp.webp";
import img4 from "../.././assets/image/card/edu/hos.webp";
import PhotoCreate from "./PhotoCreator";
import { BlogDeleteAPIHandler, DeleteGalleryAPIHandler, GetAllModulesPhotoHandler, GetAllPhotoHandler, GetBlogByModuleAPIHandler, ModulesDeleteGalleryAPIHandler } from '../../API/APIS';
import CreateEditPhoto from './CreateEditPhoto';
import CreateEditBlog from './CreateEditBlog';
import { LiaCertificateSolid } from "react-icons/lia";
import { FaCertificate } from 'react-icons/fa';
import FrontPage from '../components/commercial/FrontPage';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';




const DisplayDesignIdeas = () => {
   const [isCreate,setIsCreate] = useState(false);
   const [isEdit,setIsEdit] = useState(false);
   const [editData,setEditData] = useState(false);
   const [loading,setLoading] = useState(false);
   const [Tab,setTab]=useState('Interio');
   const [blogs,setBlogs] = useState([]);
   const [categorylists , setCategoryLists] = useState([]);

   let type = "";
     if(Tab === "EduFurn")
     type="EduFurn";
     else if(Tab === "Interio")
     type="Interio";
     else if(Tab === "MediFurn")
     type="MediFurn";
     else if(Tab === "Modular")
     type="Modular";
     else if(Tab === "Shopfit")
     type="Shopfit";

     useEffect(()=>{
      GetBlogsByModule(Tab)
    },[Tab])
    
    useEffect(()=>{
      getallphotos();
     },[Tab])

     const getallphotos = async()=>{      
      let AllPhotos = await GetAllModulesPhotoHandler(Tab,null);
      setCategoryLists(AllPhotos.data)
     }
    
console.log("categorylists",categorylists);

  const GetBlogsByModule = async (tab)=>{
      setLoading(true);
      const response = await  GetBlogByModuleAPIHandler(tab)
      console.log("response",response);
      setLoading(false);
      setBlogs(response.data)
    }

   const DeleteHandler = async (id) => {    
    let data = { id:id };
  
    const response = await BlogDeleteAPIHandler(data);
    GetBlogsByModule(Tab) 
       
    console.log("response", response);
  }

   const handler = ()=>{
    setIsCreate(!isCreate);
   }

   const Edithandler = ()=>{
    setIsEdit(!isEdit);
   }

   let data = [{Images:["https://firebasestorage.googleapis.com/v0/b/royalfurnitures-ba1c7.appspot.com/o/ff5751b2-954f-4047-980a-1e51e64d6910_blob?alt=media&token=1dd9c17c-f245-4103-917"],Title:"Write short paragraphs and cover one topic per paragraph. Long paragraphs discourage users from even trying to understand your material. Short paragraphs are easier to read and understand."},{Images:["https://firebasestorage.googleapis.com/v0/b/royalfurnitures-ba1c7.appspot.com/o/ff5751b2-954f-4047-980a-1e51e64d6910_blob?alt=media&token=1dd9c17c-f245-4103-917"],Title:"Write short paragraphs and cover one topic per paragraph. Long paragraphs discourage users from even trying to understand your material. Short paragraphs are easier to read and understand."},{Images:["https://firebasestorage.googleapis.com/v0/b/royalfurnitures-ba1c7.appspot.com/o/ff5751b2-954f-4047-980a-1e51e64d6910_blob?alt=media&token=1dd9c17c-f245-4103-917"],Title:"Write short paragraphs and cover one topic per paragraph. Long paragraphs discourage users from even trying to understand your material. Short paragraphs are easier to read and understand."},{Images:["https://firebasestorage.googleapis.com/v0/b/royalfurnitures-ba1c7.appspot.com/o/ff5751b2-954f-4047-980a-1e51e64d6910_blob?alt=media&token=1dd9c17c-f245-4103-917"],Title:"Write short paragraphs and cover one topic per paragraph. Long paragraphs discourage users from even trying to understand your material. Short paragraphs are easier to read and understand."}]

   const Displaydata = (data)=>{
      return <div className='grid grid-cols-12 overflow-y-scroll h-[80vh] gap-[10px]'>
      {data?.length > 0 && data?.map(item=>
       <div className='col-span-12 md:col-span-6 lg:col-span-3'>
          {/* <div className='border p-4 rounded-lg'>

             <img src={item.mainContent1?.imageurl[0].URL}/> 
             <div className='mt-3 font-semibold'>{item.mainContent1?.title.substring(0,50)}</div>
             <div className='mt-3 font-semibold '><span className='flex items-center gap-2'><LiaCertificateSolid />{item.subType}</span></div>
            {item.EdufurnDivision ? <div className='mt-3 font-semibold '><span className='flex items-center gap-2'><FaCertificate/>{item.EdufurnDivision}</span></div> : null }
             
                 <div className='grid grid-cols-12 pt-4 gap-[10px]'>
                      <div className='col-span-6 text-end'><button className='bg-red-500 px-2 py-1 rounded text-white' onClick={()=>{DeleteHandler(item._id)}}>Delete</button></div>
                      <div className='col-span-6 text-start'><button className='bg-green-500 px-2 py-1 rounded text-white' onClick={()=>{setEditData(item);Edithandler()}}>Edit</button></div>                            
                 </div>
               
          </div> */}
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.mainContent1?.imageurl[0].URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <span className='flex items-center gap-2'>
          <LiaCertificateSolid />{item.subType}
          </span>
          </Typography>
          {
            item.EdufurnDivision ? 
            <Typography gutterBottom variant="h6" component="div">
            <span className='flex items-center gap-2'>
            <FaCertificate/>{item.EdufurnDivision}
            </span>
            </Typography>
            :
            null
          }
          <Typography variant="body2" color="text.secondary">
           {item.mainContent1?.title.substring(0,33)}{item.mainContent1?.title.length > 33 ?"...":null}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="warning" onClick={()=>{DeleteHandler(item._id)}}>
          Delete
        </Button>
        <Button size="small" color="primary" onClick={()=>{setEditData(item);Edithandler()}}>
          Edit
        </Button>
        
      </CardActions>
    </Card>
      </div>)}
   </div>
   }
   const HandleTabs = (name)=>{
        setTab(name);
   }

  return (
    <div className='lg:flex'>
        <Admin/>
        {
          isCreate ? 
          <CreateEditBlog tab={type} categorylists={categorylists}  Datahandler={()=>{GetBlogsByModule(Tab)}} iscreate={true} openHandler={handler} />
          :
          null
        }
         {
          isEdit ? 
          <CreateEditBlog tab={type} categorylists={categorylists} Datahandler={()=>{GetBlogsByModule(Tab)}} isedit={true} editdata={editData} openHandler={Edithandler} />
          :
          null
        }
        {
        loading ?
        <FrontPage/>:
        null
      }
        <div className='lg:ml-[300px] p-8 w-[100%]'>
        <div className='relative h-[20px] mb-20'>
             <button className='fixed right-[20px] text-5xl text-white bg-orange-500 px-2  font-bold rounded-lg ' onClick={()=>{setIsCreate(true)}} > + </button>
          </div>
          <div className='w-[100%] flex items-center justify-center gap-3'>
              <div onClick={()=>HandleTabs('Interio')} className={`${Tab === "Interio" ? "bg-[#df950b] rounded-[10px] text-[white]" : ""} uppercase p-2 cursor-pointer`}>Interio</div>
              <div onClick={()=>HandleTabs('Modular')} className={`${Tab === "Modular" ? "bg-[#df950b] rounded-[10px] text-[white]" : ""} uppercase p-2 cursor-pointer`}>Modular</div>
              <div onClick={()=>HandleTabs('EduFurn')} className={`${Tab === "EduFurn" ? "bg-[#df950b] rounded-[10px] text-[white]" : ""} uppercase p-2 cursor-pointer`}>Edufurn</div>
              <div onClick={()=>HandleTabs('MediFurn')} className={`${Tab === "MediFurn" ? "bg-[#df950b] rounded-[10px] text-[white]" : ""} uppercase p-2 cursor-pointer`}>Medifurn</div>
              <div onClick={()=>HandleTabs('Shopfit')} className={`${Tab === "Shopfit" ? "bg-[#df950b] rounded-[10px] text-[white]" : ""} uppercase p-2 cursor-pointer`}>Shopfit</div>
          </div>
          
         {Tab === "Interio" ? <div className='mt-5'>{Displaydata(blogs)}</div> : null}
         {Tab === "EduFurn"? <div className='mt-5'>{Displaydata(blogs)}</div> : null}
         {Tab === "MediFurn"? <div className='mt-5'>{Displaydata(blogs)}</div> : null}
         {Tab === "Modular"? <div className='mt-5'>{Displaydata(blogs)}</div> : null}
         {Tab === "Shopfit"? <div className='mt-5'>{Displaydata(blogs)}</div> : null}
        </div>
    </div>
  )
}

export default DisplayDesignIdeas