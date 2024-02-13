import axios from 'axios';
let BASE_URL = "http://localhost:7878";
// let BASE_URL = "https://royalfurnitures.onrender.com"

let localurl = "http://localhost:3000";
let liveurl = "https://royalfurniturestesting.netlify.app";
export const ClientOrigin = liveurl ;


export const CreateUserHandler =async (options)=>{
    let data = fetch(`${BASE_URL}/api/auth/signup`,options);
    return data ;
  } 

export const LoginHandler =async (options)=>{
  let data = fetch(`${BASE_URL}/api/auth/login`,options);
  return data ;
} 

// SO.1
// Extract Youtube Video ID from Youtube video URL
// GetVideoURL handler start
export const GetVideoURL = async(url)=>{

// Declare Value its contain Youtube Video link 
let value = { url : url }

// Declare and initiate value for options 
 let options = {
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(value)
              };

  // Using Try catch to Call Backend API to get extract Video ID from video url
try {
   const response = await fetch(`${BASE_URL}/api/youtube/GetVideoID`,options); //call api ,POST Method
   const data = await response.json(); //and parse the response as JSON
   // console.log(data);
   return data; //return data 
} catch (error) {
   console.error('Error fetching data from API:', error);
throw error;
}

}
 
// SO.2
//  Create a Video  , with Title and Video ID 
// start createVideo handler
export const createVideo = async(videoid,Title)=>{
    // Declare Value its contain Youtube Video ID and User Given Title 
    let value = {
        VideoID : videoid,
        title:Title
        }
// Declare and initiate value for options 
// This options used in Fetch method
 let options = {
     method:"POST",
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify(value)
     }

// Using Try catch to Call Backend API to create a video Data using Video ID and User Given Title
try {
    const response = await fetch(`${BASE_URL}/api/youtube/createvideo`,options); //call api ,POST Method
    const data = await response.json();// //and parse the response as JSON
    // console.log(data);
       return data;
    } catch (error) {
    console.error('Error fetching data from API :', error);
    throw error;
    }
} 

export const updateVideo = async(value)=>{
    // Declare Value its contain Youtube Video ID and User Given Title 
    
// Declare and initiate value for options 
// This options used in Fetch method
 let options = {
     method:"POST",
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify(value)
     }

// Using Try catch to Call Backend API to create a video Data using Video ID and User Given Title
try {
    const response = await fetch(`${BASE_URL}/api/youtube/updatevideo`,options); //call api ,POST Method
    const data = await response.json();// //and parse the response as JSON
    // console.log(data);
       return data;
    } catch (error) {
    console.error('Error fetching data from API :', error);
    throw error;
    }
} 

export const deleteVideo = async(value)=>{
     
// This options used in Fetch method
 let options = {
     method:"POST",
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify(value)
     }

// Using Try catch to Call Backend API to create a video Data using Video ID and User Given Title
try {
    const response = await fetch(`${BASE_URL}/api/youtube/deletevideo`,options); //call api ,POST Method
    const data = await response.json();// //and parse the response as JSON
    // console.log(data);
       return data;
    } catch (error) {
    console.error('Error fetching data from API :', error);
    throw error;
    }
} 

// SO.3
// Get Youtube videos data from video data stored in backend
export const  GetallYoutubeVideos = async()=>{
    try {
        const response = await fetch(`${BASE_URL}/api/youtube/getvideodata`,{method:"GET"});//call api ,GET Method 
        const data = await response.json(); 
        // console.log(data);
           return data;
        } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
        }

}

// SO.4
// This HandleUpload handler is used to upload images to the Firebase Storage bucket.
export const handleUpload = async(selectedFiles)=>{
    // 'SelecedFiles' parameter contain Image file details 
    try {        
          
        const formData = new FormData();
        // Append each selected file to the formData object
        selectedFiles.forEach((file, index) => {
           formData.append('files', file);
        });
  
       // Make a POST request to upload files to the specified endpoint
        const response = await axios.post(`${BASE_URL}/api/gallery/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
       // Return the parsed response
        return response ;        
       
      } catch (error) {
        // Log an error message if the file upload fails
        console.error('Error uploading files:', error.message);
        return ;
      }
}

// SO.5
// Remove Uploaded image from firebase storage 
export const RemoveImageHandler = async (data)=>{
    let options = {
                   method:"POST",
                   headers:{"Content-Type":"application/json"},
                   body:JSON.stringify(data)
                 };
try{
     // Make a POST request to the specified API endpoint, and parse the response as JSON
    const response = await fetch(`${BASE_URL}/api/gallery/delete-photo`,options).then(res=>res.json());
    // Return the parsed response
    return response ;      
}
catch(error){
    // Log an error message if the request fails
    console.error('Error publishing data:', error.message);
    // Return error in case of an error
    return error ;
}
  
}

// SO.6
// Exporting a function named PublishAPIHandler that handles the publishing of data to a specific API endpoint
export const  PublishAPIHandler = async (data)=>{
    // console.log("data",data);

    // Define the options for the fetch request, including the method, headers, and the data to be sent
   let options = {
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(data)
          };
try{
     // Make a POST request to the specified API endpoint, and parse the response as JSON
    const response = await fetch(`${BASE_URL}/api/gallery/create-post`,options).then(res=>res.json());
    // Return the parsed response
    return response ;      
}
catch(error){
    // Log an error message if the request fails
    console.error('Error publishing data:', error.message);
    // Return error in case of an error
    return error ;
}

} 

export const  UpdateGalleryAPIHandler = async (data)=>{
    // console.log("data",data);

    // Define the options for the fetch request, including the method, headers, and the data to be sent
   let options = {
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(data)
          };
try{
     // Make a POST request to the specified API endpoint, and parse the response as JSON
    const response = await fetch(`${BASE_URL}/api/gallery/update-post`,options).then(res=>res.json());
    // Return the parsed response
    return response ;      
}
catch(error){
    // Log an error message if the request fails
    console.error('Error publishing data:', error.message);
    // Return error in case of an error
    return error ;
}

} 
export const  DeleteGalleryAPIHandler = async (data)=>{
    // console.log("data",data);

    // Define the options for the fetch request, including the method, headers, and the data to be sent
   let options = {
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(data)
          };
try{
     // Make a POST request to the specified API endpoint, and parse the response as JSON
    const response = await fetch(`${BASE_URL}/api/gallery/delete-post`,options).then(res=>res.json());
    // Return the parsed response
    return response ;      
}
catch(error){
    // Log an error message if the request fails
    console.error('Error publishing data:', error.message);
    // Return error in case of an error
    return error ;
}

} 

// SO.7
// Exporting a function named GetAllPhotoHandler that retrieves all photo posts from a specific API endpoint
export const GetAllPhotoHandler = async ()=>{
    try{
         // Make a GET request to the specified API endpoint and parse the response as JSON
        const response = await fetch(`${BASE_URL}/api/gallery/get-all-post`,{method:"GET"}).then(res=>res.json());
        // Return the parsed response
        return response ;      
    }
    catch(error){
         // Log an error message if the request fails
         console.error('Error fetching all photo posts:', error.message);

         // Return error undefined in case of an error
        return error ;
    }   
}

// SO.8
// Exporting a function named RegisterContact that handles the registration of contact data through a POST request
export const RegisterContact = async (data)=>{
    // console.log("data",data);
    try{
       // Define options for the fetch request, including method, headers, and the data to be sent
    let options = {
                  method:"POST",
                  headers:{"Content-Type":"application/json"},
                  body:JSON.stringify(data)                
                  }

   // Make a POST request to the specified API endpoint
   const response = await fetch(`${BASE_URL}/api/contact/register-contact`,options);
   
   // Parse the response as JSON
   const output = await response.json();
 //   console.log("output",output);
 // Return the parsed response
   return output ;
    }
    catch (error){
       // Throw an error if the request fails
       throw error;
    }
      
}

// SO.8
// Exporting a function named RegisterContact that handles the registration of contact data through a POST request
export const GetAllContacts = async ()=>{
 
    try{
       // Define options for the fetch request, including method, headers, and the data to be sent
    

   // Make a POST request to the specified API endpoint
   const response = await fetch(`${BASE_URL}/api/contact/get-all-contacts`,{method:"GET"});
   
   // Parse the response as JSON
   const output = await response.json();
 //   console.log("output",output);
 // Return the parsed response
   return output ;
    }
    catch (error){
       // Throw an error if the request fails
       throw error;
    }
      
}

export const DeleteContact = async (id)=>{
    console.log("id",id);
    try{
       // Define options for the fetch request, including method, headers, and the data to be sent
    

   // Make a POST request to the specified API endpoint
   const response = await fetch(`${BASE_URL}/api/contact/delete-contact/${id}`,{method:"GET"});
   
   // Parse the response as JSON
   const output = await response.json();
 //   console.log("output",output);
 // Return the parsed response
   return output ;
    }
    catch (error){
       // Throw an error if the request fails
       throw error;
    }
      
}




// SO.6
// Exporting a function named PublishAPIHandler that handles the publishing of data to a specific API endpoint
export const  ModulesPublishAPIHandler = async (data,type)=>{
    // console.log("data",data);

    // Define the options for the fetch request, including the method, headers, and the data to be sent
   let options = {
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(data)
          };
try{
    let APIType = "" ;
    if(type === "Interio"){ APIType = "interiogallery" }
    if(type === "Modular"){ APIType = "modulargallery" }
    if(type === "MediFurn"){ APIType = "medifurngallery" }
    if(type === "EduFurn"){ APIType = "edufurngallery" }
    if(type === "Shopfit"){ APIType = "shopfitgallery" }

     // Make a POST request to the specified API endpoint, and parse the response as JSON
    const response = await fetch(`${BASE_URL}/api/${APIType}/create-post`,options).then(res=>res.json());
    // Return the parsed response
    return response ;      
}
catch(error){
    // Log an error message if the request fails
    console.error('Error publishing data:', error.message);
    // Return error in case of an error
    return error ;
}

} 

export const  ModulesUpdateGalleryAPIHandler = async (data,type)=>{
    // console.log("data",data);

    // Define the options for the fetch request, including the method, headers, and the data to be sent
   let options = {
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(data)
          };
try{
    let APIType = "" ;
      if(type === "Interio"){ APIType = "interiogallery" }
      if(type === "Modular"){ APIType = "modulargallery" }
      if(type === "MediFurn"){ APIType = "medifurngallery" }
      if(type === "EduFurn"){ APIType = "edufurngallery" }
      if(type === "Shopfit"){ APIType = "shopfitgallery" }

     // Make a POST request to the specified API endpoint, and parse the response as JSON
    const response = await fetch(`${BASE_URL}/api/${APIType}/update-post`,options).then(res=>res.json());
    // Return the parsed response
    return response ;      
}
catch(error){
    // Log an error message if the request fails
    console.error('Error publishing data:', error.message);
    // Return error in case of an error
    return error ;
}

} 
export const  ModulesDeleteGalleryAPIHandler = async (data ,type)=>{
    // console.log("data",data);

    // Define the options for the fetch request, including the method, headers, and the data to be sent
   let options = {
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(data)
          };
try{
      let APIType = "" ;
      if(type === "Interio"){ APIType = "interiogallery" }
      if(type === "Modular"){ APIType = "modulargallery" }
      if(type === "MediFurn"){ APIType = "medifurngallery" }
      if(type === "EduFurn"){ APIType = "edufurngallery" }
      if(type === "Shopfit"){ APIType = "shopfitgallery" }

     // Make a POST request to the specified API endpoint, and parse the response as JSON
    const response = await fetch(`${BASE_URL}/api/${APIType}/delete-post`,options).then(res=>res.json());
    // Return the parsed response
    return response ;      
}
catch(error){
    // Log an error message if the request fails
    console.error('Error publishing data:', error.message);
    // Return error in case of an error
    return error ;
}

} 

// SO.7
// Exporting a function named GetAllPhotoHandler that retrieves all photo posts from a specific API endpoint
export const GetAllModulesPhotoHandler = async (type)=>{
    try{
        let APIType = "" ;
      if(type === "Interio"){ APIType = "interiogallery" }
      if(type === "Modular"){ APIType = "modulargallery" }
      if(type === "MediFurn"){ APIType = "medifurngallery" }
      if(type === "EduFurn"){ APIType = "edufurngallery" }
      if(type === "Shopfit"){ APIType = "shopfitgallery" }
         
        const response = await fetch(`${BASE_URL}/api/${APIType}/get-all-post`,{method:"GET"}).then(res=>res.json());
        return response ;      
    }
    catch(error){
         // Log an error message if the request fails
         console.error('Error fetching all photo posts:', error.message);

         // Return error undefined in case of an error
        return error ;
    }   
}





