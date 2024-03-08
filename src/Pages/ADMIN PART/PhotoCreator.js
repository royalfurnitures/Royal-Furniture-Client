// Importing necessary modules from React, Material-UI, axios, and custom API functions
import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { DeleteGalleryAPIHandler, handleUpload, PublishAPIHandler , RemoveImageHandler, UpdateGalleryAPIHandler } from '../../API/APIS';
import CircularProgress from '@mui/material/CircularProgress';
import { Card, Container } from '@mui/material';
import CropSection from './CropSection';
import { IoMdClose } from 'react-icons/io';

// Functional component for image upload functionality
const ImageUpload = ({openHandler , editdata ,iscreate ,isedit, Datahandler}) => {
  // State variables for managing selected files, upload errors, uploaded images, title, blob URLs, and loading state
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadError, setUploadError] = useState(null);
  const [uploadImages, setUploadImages] = useState(editdata ? editdata.Images : []);
  const [title, setTitle] = useState(editdata ?  editdata.Title :"");
  const [bloburls, setBlobUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Photo,setPhoto] = useState('');
  const [croppingModel1Open,setCroppingModel1Open] = useState(false);

  // Event handler for file input change
  const handleFileChange = async (event) => {
    const files = event.target.files;
    const blobUrls =  URL.createObjectURL(files[0]);
    let newarray = [...bloburls];
       newarray.push(blobUrls)
    setPhoto(blobUrls); 
    setCroppingModel1Open(true);
    setBlobUrls(newarray);
    
  };
  console.log("bloblurls",bloburls);
  console.log("selecturl",selectedFiles);

  const handleFilechangeChange = async (cropimg) => {
    const files = cropimg;
    // const blobUrls = await Array.from(files).map((file) => URL.createObjectURL(file));
    // setBlobUrls([...blobUrls]);
    setCroppingModel1Open(false);

    let newarray =[...selectedFiles];
        newarray.push(files)
    console.log("handle change",files);
    setSelectedFiles(newarray);
  };

  // Effect hook to trigger photo upload when selected files change
  useEffect(() => {
    if (selectedFiles.length > 0)
      UploadPhotosHandler();
  }, [selectedFiles]);

  // Event handler for title text change
  const handleTextChange = (event) => {
    setTitle(event.target.value);
  };

  // Function to handle the upload of photos
  const UploadPhotosHandler = async () => {
    setLoading(true);

    // Call the handleUpload function to upload selected files
    let response = await handleUpload(selectedFiles);
    // console.log('response', response);

    // Check the response status and update state accordingly
    if (response.status === 200) {
      let newimgarray = [...uploadImages];
          newimgarray.push(response.data.imageUrls[0]);
          console.log("imageURLS",response.data.imageUrls)
      setUploadImages(newimgarray);
      setBlobUrls([]);
      setSelectedFiles([]); 
      setLoading(false);
    } else {
      setLoading(false);
      // console.error('Failed to upload files');
    }
  };

  // Function to handle the Remove image from upload 
  const RemoveImagefromupload = async(data)=>{ 
      const response = await RemoveImageHandler(data);
      console.log("response", response);
      // Assuming uploadimages is your state containing image details   
      const updatedImages = uploadImages.filter(image => !(image.Filename === response.data.Filename && image.Generation === response.data.Generation));
      // Update the state with the modified array
       setUploadImages(updatedImages); // Assuming you have a function like setUploadImages to update the state    
      
  }

  // Function to handle the publishing of images
  const PublishHandler = async () => {
    // Create data object with uploaded images and title
    let data = {
      Images: uploadImages,
      Title: title
    };

    // Call the PublishAPIHandler function to publish data
    const response = await PublishAPIHandler(data);
       openHandler();
       Datahandler();
    console.log("response", response);
  }

  const UpdateHandler = async () => {
    // Create data object with uploaded images and title
    let data = {
      id:editdata._id,
      Images: uploadImages,
      Title: title
    };

    // Call the PublishAPIHandler function to publish data
    const response = await UpdateGalleryAPIHandler(data);
       openHandler();
       Datahandler()
    console.log("response", response);
  }


  const handleProfileCroppedImgSet = (image)=>{
    //  console.log("image",image);     
    
}

  const handleprofilecancel = ()=>{
    setCroppingModel1Open(false);
   }
  


  // JSX for rendering the image upload form
  return (
    <Fragment>
      {
        croppingModel1Open ? 
        <CropSection imageSetHandler={handleFilechangeChange} image={Photo} cancelhandler={handleprofilecancel} aspect={3/4}/>
        :
        null
      }
    <div className='bg-black opacity-30 z-30 fixed w-full top-0 bottom-0 left-0 right-0'></div>
    <div className='bg-white   h-[90vh] rounded-[20px] top-10 z-30 fixed   bottom-10 left-10 right-10' style={{backgroundColor:"white"}}>
      <Container >
        {/* Title Input */}
        <div className='relative py-5 '>
          <button className='absolute right-[20px] font-bold text-[30px]  text-gray-500' onClick={openHandler}><IoMdClose/></button>
        </div>
        <div>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={handleTextChange}
          fullWidth
          margin="normal"
        />

        {/* File Upload Input */}
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput">
          <Button component="span" variant="contained" color="primary">
            Upload Image
          </Button>
        </label>

        {/* Display Selected Images with Loading Spinner */}
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
          {
            uploadImages.length > 0 ?
            <>
            {uploadImages.length > 0 && uploadImages.map((imageUrl, index) => (
              <div key={index} style={{ width: '150px', height: 'auto', marginRight: '10px', position: "relative" }} onClick={()=>{RemoveImagefromupload(imageUrl)}}>               
                  <div style={{ position: "relative" }}>
                     <div style={{ position: 'absolute', top: "10%", right: "10%" ,backgroundColor:"white",padding:"0px 5px 0px 5px ", color:"red", fontWeight:"bolder",borderRadius:"50%",cursor:"pointer"}}>X</div>
                    <img src={imageUrl.URL} alt={`uploaded-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                
              </div>
            ))}
            </>
            :
            <>
          
          {bloburls.length > 0 && bloburls.map((imageUrl, index) => (
            <div key={index} style={{ width: '150px', height: 'auto', marginRight: '10px', position: "relative" }}>
              {loading ?
                <div style={{ position: "relative" }}>
                  <div style={{ position: 'absolute', top: "40%", left: "40%" }}><CircularProgress /></div>
                  <img src={imageUrl} alt={`uploaded-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                :   
               null
              }
            </div>
          ))}
          </>
         }
        </div>

        {/* Submit Button */}
        {
          iscreate ?
        <Button type="submit" variant="contained" color="success" className='my-3' disabled={!uploadImages.length > 0 || !title} onClick={() => { PublishHandler() }}>
          Publish
        </Button>
        :
        null
        }
         {
          isedit ?
        <Button type="submit" variant="contained" color="success" className='my-3' disabled={!uploadImages.length > 0 || !title} onClick={() => { UpdateHandler() }}>
          Save
        </Button>
        :
        null
        }
        </div>
      </Container>
    </div>
    </Fragment>
  );
};

// Exporting the ImageUpload component as the default export
export default ImageUpload;
