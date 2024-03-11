// Importing necessary modules from React, Material-UI, axios, and custom API functions
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { BlogPublishAPIHandler, BlogUpdateAPIHandler, DeleteGalleryAPIHandler, GetAllModulesPhotoHandler, GetBlogByModuleAPIHandler, handleUpload, ModulesPublishAPIHandler, ModulesUpdateGalleryAPIHandler, PublishAPIHandler , RemoveImageHandler, UpdateGalleryAPIHandler } from '../../API/APIS';
import CircularProgress from '@mui/material/CircularProgress';
import { Card, Container } from '@mui/material';
import CropSection from './CropSection';
import { BsTrashFill } from 'react-icons/bs';
import { edufurn, interior, medifurn, modular, shopfit } from "../components/designIdeas/data";
import { IoMdClose } from 'react-icons/io';
import FrontPage from '../components/commercial/FrontPage';
import Popup from './Popup';
import { FaRegImage } from 'react-icons/fa6';

// Functional component for image upload functionality
const CreateEditBlog = ({ categorylists ,isEdu , isInterio , isMedi , isModu , isShop ,openHandler , editdata ,iscreate ,isedit, Datahandler ,tab}) => {
  // State variables for managing selected files, upload errors, uploaded images, title, blob URLs, and loading state
  const [selectFiles1, setSelectFiles1] = useState([]);
  const [selectFiles2, setSelectFiles2] = useState([]);
  const [bloburls1, setBlobUrls1] = useState([]);
  const [bloburls2, setBlobUrls2] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [Photo1,setPhoto1] = useState('');
  const [Photo2,setPhoto2] = useState('');
  const [category,setCategory] = useState(tab);
  const [ subType , setSubType ]= useState(editdata ? editdata.subType :'');
  const [croppingModel1Open,setCroppingModel1Open] = useState(false);
  const [croppingModel2Open,setCroppingModel2Open] = useState(false);
  const [SubSectionData,setSubSectionData] = useState(editdata ? editdata.SubSectionData :[]);
  const [edufurnDivision,setEdufurnDivision] = useState(editdata ? editdata.EdufurnDivision : 'Steel')
  const [SubContent,setSubContent] = useState({
                                           title:"",
                                           paragraph:""
                                       })
  const [mainContent1,setMainContent1] = useState(editdata ? {
                                  title:editdata.mainContent1.title,
                                  paragraph:editdata.mainContent1.paragraph,
                                  imageurl:editdata.mainContent1.imageurl
                                  }:{
                                        title:"",
                                        paragraph:"",
                                        imageurl:[]
                                    })
const [mainContent2,setMainContent2] = useState(editdata ? {
                                          title:editdata.mainContent2.title,
                                          paragraph:editdata.mainContent2.paragraph,
                                          imageurl:editdata.mainContent2.imageurl
                                          }:{
                                                title:"",
                                                paragraph:"",
                                                imageurl:[]
                                            })

const [isCreatePopup,setIsCreatePopup] = useState(false);
const [isEditPopup,setIsEditPopup] = useState(false);

let type = "";
  let subTYPE = [];
  let EdufurnDivisionType=[];

 
if(tab === "EduFurn"){
subTYPE = edufurn.Tabs ;
EdufurnDivisionType = edufurn.Tabs[0].SubCategory
}
else if(tab === "Interio")
subTYPE = interior.Tabs ;
else if(tab === "MediFurn")
subTYPE = medifurn.Tabs ;
else if(tab === "Modular")
subTYPE = modular.Tabs ;
else if(tab === "Shopfit")
subTYPE = shopfit.Tabs ;





  // Event handler for file input change
  const handleFileChange1 = async (event) => {
    const files = event.target.files;
    if(files){
    const blobUrls =  URL.createObjectURL(files[0]);
    let newarray = [...bloburls1];
       newarray.push(blobUrls)
    setPhoto1(blobUrls); 
    setCroppingModel1Open(true);
    setBlobUrls1(newarray);
    }
    
  };

  const handleFileChange2 = async (event) => {
    console.log("call")
    const files = event.target.files;
    if(files){
    const blobUrls =  URL.createObjectURL(files[0]);
    let newarray = [...bloburls2];
       newarray.push(blobUrls)
    setPhoto2(blobUrls); 
    setCroppingModel2Open(true);
    setBlobUrls2(newarray);
    }
  };

  const handleFilechangeChange1 = async (cropimg) => {
    const files = cropimg;
    // const blobUrls = await Array.from(files).map((file) => URL.createObjectURL(file));
    // setBlobUrls([...blobUrls]);
    setCroppingModel1Open(false);

    let newarray =[...selectFiles1];
        newarray.push(files)
    console.log("handle change",files);
    setSelectFiles1(newarray);
  };

  const handleFilechangeChange2 = async (cropimg) => {
    const files = cropimg;
    // const blobUrls = await Array.from(files).map((file) => URL.createObjectURL(file));
    // setBlobUrls([...blobUrls]);
    setCroppingModel2Open(false);

    let newarray =[...selectFiles2];
        newarray.push(files)
    console.log("handle change",files);
    setSelectFiles2(newarray);
  };
  // Effect hook to trigger photo upload when selected files change
  useEffect(() => {
    if (selectFiles1.length > 0)
      UploadPhotosHandler1();
  }, [selectFiles1]);

  useEffect(() => {
    if (selectFiles2.length > 0)
      UploadPhotosHandler2();
  }, [selectFiles2]);

  // Event handler for title text change
  const handleTextChange1 = (event) =>{
   setMainContent1(prev=>({...prev,title:event.target.value}));
  };
  const handleTextChange2 = (event) =>{
    setMainContent2(prev=>({...prev,title:event.target.value}));
  }; 

  const handleParaChange1 = (event) =>{
    setMainContent1(prev=>({...prev,paragraph:event.target.value}));
   };
   const handleParaChange2 = (event) =>{
     setMainContent2(prev=>({...prev,paragraph:event.target.value}));
   }; 

  // Function to handle the upload of photos
  const UploadPhotosHandler1 = async () => {
    setLoading(true);    
    console.log("cropped imjage")

    // Call the handleUpload function to upload selected files
    let response = await handleUpload(selectFiles1);
    console.log('response', response);
         
    // Check the response status and update state accordingly
    if (response.status === 200) {
      setMainContent1(prev=>({...prev,imageurl:response.data.imageUrls}))
      setSelectFiles1([]); 
      setLoading(false);
    } else {
      setLoading(false);
      // console.error('Failed to upload files');
    }
  };

  console.log("main content",mainContent1);

  const UploadPhotosHandler2 = async () => {
    setLoading2(true);    
     console.log("Upload Phto handler 2")
    // Call the handleUpload function to upload selected files
    let response = await handleUpload(selectFiles2);
    console.log('response', response);
         
    // Check the response status and update state accordingly
    if (response.status === 200) {
      setMainContent2(prev=>({...prev,imageurl:response.data.imageUrls}))
      setSelectFiles2([]); 
      setLoading2(false);
    } else {
      setLoading2(false);
      // console.error('Failed to upload files');
    }
  };

  

  // Function to handle the publishing of images
  const PublishHandler = async () => {
    // Create data object with uploaded images and title
    let data = {
      SubSectionData,
      mainContent1,
      mainContent2 ,
      category,
      subType,
      EdufurnDivision:edufurnDivision
    };
    console.log("data",data);

    // Call the PublishAPIHandler function to publish data
    const response = await BlogPublishAPIHandler(data);
    console.log("response", response);

    if(response.isSuccess){
  setSubSectionData([]);
  setEdufurnDivision('')
   setSubContent({
                title:"",
                paragraph:""
            })
  setMainContent1({title:"",
                    paragraph:"",
                    imageurl:[]
                })
   setMainContent2({ title:"",
                      paragraph:"",
                      imageurl:[]
                     })
   setCategory(tab);
   setSubType ('')
       openHandler();
       Datahandler();
                    }
  }

  const UpdateHandler = async () => {
    // Create data object with uploaded images and title
    let data = {
      id:editdata._id,
      SubSectionData,
      mainContent1,
      mainContent2 ,
      category,
      subType,
      EdufurnDivision:edufurnDivision
    };

    // Call the PublishAPIHandler function to publish data
    const response = await BlogUpdateAPIHandler(data);
       openHandler();
       Datahandler()
    console.log("response", response);
  }

  const handleprofilecancel = ()=>{
    setCroppingModel1Open(false);
   }

  const SubdataAddHandler = () =>{
       if(SubContent.title && SubContent.paragraph){
          let newarray = [...SubSectionData];
              newarray.push(SubContent);
              setSubSectionData(newarray);
              setSubContent({title:"",paragraph:""});
       }
   }

const RemovePointsFromSubSection = (data)=>{
     let findindex = SubSectionData.findIndex(value=> value === data);
     console.log("findindex",findindex);
     let newarray = [...SubSectionData];
     if(findindex !== -1)
     newarray.splice(findindex,1);

     setSubSectionData(newarray);

}

console.log("main content2",mainContent2);
console.log("Categories list",categorylists);
  // JSX for rendering the image upload form


  const handleCreatemodel = (action)=>{
    if(action === true){
      PublishHandler();
    }
    setIsCreatePopup(false);
}

const handleEditmodel = (action)=>{
  if(action === true){
    UpdateHandler();
   }
  setIsEditPopup(false);
}

// console.log("!SubSectionData.length >= 3",!(mainContent1.imageurl.length > 0),!mainContent1.imageurl.length > 0);

  return (
    <Fragment>
       {
        isCreatePopup ?
        <Popup handleModel={handleCreatemodel} isCreate={true} />
        :
        null
      }
      {
        isEditPopup ?
        <Popup handleModel={handleEditmodel} isEdit={true} />
        :
       null
      }
       {
        croppingModel1Open ? 
        <CropSection imageSetHandler={handleFilechangeChange1} image={Photo1} cancelhandler={handleprofilecancel} aspect={2}/>
        :
        null
      }
      {
        croppingModel2Open ? 
        <CropSection imageSetHandler={handleFilechangeChange2} image={Photo2} cancelhandler={handleprofilecancel} aspect={2}/>
        :
        null
      }
      
    <div className='bg-black opacity-30 z-30 fixed w-full top-0 bottom-0 left-0 right-0'></div>

    <div className='bg-white h-[90vh] overflow-y-scroll rounded-[20px] top-10 z-30 fixed   bottom-10 left-10 right-10' style={{backgroundColor:"white"}}>
      <Container >
        {/* Title Input */}
        <div className='relative py-5 '>
        <button className='absolute right-[20px] font-bold text-[30px]  text-gray-500' onClick={openHandler}><IoMdClose/></button>

          <div className='flex items-center justify-center text-[20px] font-bold'>
          {isedit ? "Update" : "Upload"} Blog 
          </div>
        </div>
        <div>
          <div className='mb-10'>
        <div className='text-[25px] font-bold mt-2  ml-1'>Section - 1</div>
       <div className='text-[18px] font-bold mt-2  ml-1'>Category <sup className='text-[#ff1b1b]'>*</sup></div>

          <select className='w-[100%] border h-[60px] mt-3 p-2' value={subType} onChange={(e)=>setSubType(e.target.value)}>
            <option >--Select a Category--</option>
            {
            categorylists.length> 0 && categorylists.map(item=><option value={item.Title} >{item.Title}</option>)
            }
            
          </select>

           { tab === "EduFurn" && 
           <>
          <div className='text-[18px] font-bold mt-2   ml-1'>Sub Category <sup className='text-[#ff1b1b]'>*</sup></div>
          <select className='w-[100%] border h-[60px] mt-3 p-2' value={edufurnDivision} onChange={(e)=>setEdufurnDivision(e.target.value)}>
         <option>--Select a Sub Category--</option>
         {
         EdufurnDivisionType.length> 0 && EdufurnDivisionType.map(item=><option value={item} >{item}</option>)
         }
         
          </select>
          </>
            }
       <div className='text-[18px] font-bold mt-2 mb-2  ml-1'>Title 1 <sup className='text-[#ff1b1b]'>*</sup></div>

        <TextField
          label="Title 1"
          variant="outlined"
          value={mainContent1.title}
          onChange={handleTextChange1}
          fullWidth
          margin="normal"
          inputProps={{ maxLength: 70 }}
        />
         <div className='text-[18px] font-bold mt-2 mb-2  ml-1'>  Descripition 1 <sup className='text-[#ff1b1b]'>*</sup></div>
        <textarea
          rows={5}
          value={mainContent1.paragraph}
          onChange={handleParaChange1}
          className='border w-[100%] p-4 '
          placeholder='Description 1'
        />
        <div className='text-[18px] font-bold mt-2 mb-2  ml-1'>Cover Image 1 <sup className='text-[#ff1b1b]'>*</sup></div>
        {/* File Upload Input */}
        <input
          type="file"
          onChange={handleFileChange1}
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput" className='w-[250px] h-[200px] border flex items-center flex-col justify-center'>
          {/* <Button component="span" variant="contained" color="primary">
            Upload Image
          </Button> */}
        

        {/* Display Selected Images with Loading Spinner */}
        {loading ?
                <div style={{ position: "relative" ,width: '150px', height: '150px'}}>
                  <div style={{ position: 'absolute', top: "40%", left: "40%" }} className='m-auto'><CircularProgress /></div>
                  
                </div>
                :   
                <div className=' flex items-center justify-center h-[150px]'>
                 {mainContent1?.imageurl[0]?.URL  ? <img src={mainContent1?.imageurl[0]?.URL} /> : <FaRegImage className='text-[30px]' /> }
                </div>
              }
        </label>

        </div>
        <div className='mb-10'>
        <div className='text-[25px] font-bold mt-2  ml-1'>Section - 2</div>
        <div className='text-[18px] font-bold mt-2 mb-2  ml-1'>Title 3 <sup className='text-[#ff1b1b]'>*</sup></div>
        
        <TextField
          label="Title 3"
          variant="outlined"
          value={mainContent2.title}
          onChange={handleTextChange2}
          fullWidth
          margin="normal"
          inputProps={{ maxLength: 70 }}
        />
        <div className='text-[18px] font-bold mt-2 mb-2  ml-1'>Description 3 <sup className='text-[#ff1b1b]'>*</sup></div>

        <textarea
          rows={5}
          value={mainContent2.paragraph}
          onChange={handleParaChange2}
          className='border w-[100%] p-4 '
          placeholder='Description 3' 
        />
        <div className='text-[18px] font-bold mt-2 mb-2  ml-1'>Cover image 2 <sup className='text-[#ff1b1b]'>*</sup></div>

        <input
          type="file"
          onChange={handleFileChange2}
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          id="fileInput2"
        />
        <label htmlFor="fileInput2" className='w-[250px] h-[250px] border flex items-center flex-col justify-center'>
          {/* <Button component="span" variant="contained" color="primary">
            Upload Image
          </Button> */}

        {loading2 ?
                <div style={{ position: "relative" ,width: '150px', height: '150px'}}>
                  <div style={{ position: 'absolute', top: "40%", left: "40%" }} className='m-auto'><CircularProgress /></div>
                  
                </div>
                :   
                <div className=' flex items-center justify-center h-[150px]'>
                 {mainContent2?.imageurl[0]?.URL  ? <img src={mainContent2?.imageurl[0]?.URL} /> : <FaRegImage className='text-[30px]' /> }
                </div>
              }
        </label>
        </div>
        <div>
        <div className='text-[25px] font-bold mt-2 mb-2  ml-1'>Section - 3 </div>
        <div className='my-3 text-[20px] font-bold'>
           Sub Title and Description <span className="text-[18px] font-normal">( Note: Minimum 3 Title and paragraph section)</span>
        </div>
        <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-11'>
        <div className='text-[18px] font-bold mt-2 mb-2  ml-1'>Title  <sup className='text-[#ff1b1b]'>*</sup></div>
        <TextField
          label="Title"
          variant="outlined"
          value={SubContent.title}
          onChange={(e)=>{setSubContent(prevstate=>({...prevstate,title:e.target.value}))}}
          fullWidth
          margin="normal"
          inputProps={{ maxLength: 70 }}
        />
        <div className='text-[18px] font-bold mt-2 mb-2  ml-1'>Description <sup className='text-[#ff1b1b]'>*</sup></div>

        <textarea
          rows={10}
          value={SubContent.paragraph}
          onChange={(e)=>{setSubContent(prevstate=>({...prevstate,paragraph:e.target.value}))}}
          className='border w-[100%] p-4 '
          placeholder='Description'
        />
        </div>
        <div className='col-span-1'>
         <Button component="span" variant="contained" color="success" disabled={!SubContent.title || !SubContent.paragraph} onClick={SubdataAddHandler}>
            ADD
          </Button>
        </div>

        </div>
        {
          SubSectionData?.length > 0 && SubSectionData?.map(item=>
        <div className='grid grid-cols-6 gap-3 border'>
          <div className="col-span-5 p-4">
            <div className='text-[18px] font-bold'>{item.title}</div>
            <div>{item.paragraph}</div>
          </div>
          <div className="col-span-1 m-auto"><BsTrashFill className='text-red-500' onClick={()=>{RemovePointsFromSubSection(item)}}/></div>

        </div>
          )}
        </div>
        {/* Submit Button */}
        <div>
        {
          iscreate ?
        <Button type="submit" variant="contained" color="success" className='my-3' disabled={loading || loading2 || !category ||!subType || !mainContent1.title || !mainContent1.paragraph|| !(mainContent1.imageurl.length > 0) || !(mainContent2.imageurl.length > 0)||!mainContent2.title || !mainContent2.paragraph || !(SubSectionData.length>=3)}  onClick={() => { setIsCreatePopup(true) }}>
          Publish
        </Button>
        :
        null
        }
         {
          isedit ?
        <Button type="submit" variant="contained" color="success" className='my-3' disabled={loading || loading2 || !category ||!subType || !mainContent1.title || !mainContent1.paragraph|| !(mainContent1.imageurl.length > 0) || !(mainContent2.imageurl.length > 0)||!mainContent2.title || !mainContent2.paragraph || !(SubSectionData.length>=3)}  onClick={() => { setIsEditPopup(true) }}>
          Save
        </Button>
        :
        null
        }
        </div>
        </div>
      </Container>
    </div>
    </Fragment>

  );
};

// Exporting the ImageUpload component as the default export
export default CreateEditBlog;
