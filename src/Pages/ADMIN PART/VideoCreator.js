// Importing necessary modules from React, Material-UI, and custom API functions
import React, { Fragment, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import YoutubePlayer from 'react-youtube-player';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid';
import { GetVideoURL, createVideo, updateVideo } from "../../API/APIS";
import { IoClose } from "react-icons/io5";

// Functional component for Video Creator
export default function VideoCreator({Datahandler , editdata ,iscreate ,isedit , openHandler }) {
  // State variables for managing title, description, video URL, video ID, videos list, and error messages
  const [title, settitle] = useState(editdata ? editdata.YoutubeVideoTitle : '');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [VideoID, setVideoID] = useState( editdata ? editdata.YoutubeVideoID : '');
  const [Videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const [category, setCategory] = useState(editdata ? editdata.Category : ''); 

  // Function to handle fetching video based on the YouTube URL
  const handleGetVideo = async () => {
    let data = await GetVideoURL(videoUrl);
    // console.log("videoID", data.data);

    // Check if the YouTube video ID is valid and update state
    if (data.data.isValidID) {
      setVideoID(data.data.YoutubeVideoID);
    } else {
      setVideoID(false);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Function to handle adding video with the provided title and YouTube URL
  const handleAddVideo = async () => {
    if (title && VideoID && category) {
      setError('');
      let result = await createVideo(VideoID, title , category);
      console.log("result", result);

      // Handle logic based on the result of adding the video
      if (result.isCreate) {
        // Additional logic if video creation is successful
        Datahandler();
        openHandler();
      } else {
        // Additional logic if video creation fails
      }
    } else {
      setError('Fill the required Field!!!');
    }
  };

  const handleupdateVideo = async () => {
    if (title && VideoID && category) {
      setError('');
      let result = await updateVideo({id:editdata._id ,VideoID, title,Category:category});
      console.log("result", result);

      // Handle logic based on the result of adding the video
      if (result.isSuccess) {
        // Additional logic if video creation is successful
        Datahandler();
        openHandler();
      } else {
        // Additional logic if video creation fails
      }
    } else {
      setError('Fill the required Field!!!');
    }
  };

  // JSX for rendering the Video Creator component
  return (
    <Fragment>
    <div className='bg-black opacity-30 z-30 fixed w-full top-0 bottom-0 left-0 right-0'></div>
       <div className='h-[90vh] rounded-[20px] top-10 z-30 fixed   bottom-10 left-10 right-10' style={{backgroundColor:"white"}}>
         
          <Card style={{padding:"20px"}}>
          <div className='flex items-center justify-end mr-[40px]'>
          <IoClose className='text-5xl text-gray-500 cursor-pointer' onClick={openHandler} />
          </div>
        <CardContent>
          <Grid item xs={12} alignSelf='center'>
            {/* Display error message */}
            <div style={{ textAlign: "center", margin: "10px", color: 'red', fontWeight: 'bolder' }}>{error}</div>
          </Grid>

          {/* Form for entering video details */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* Title input */}
              <TextField
                label="Description *"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => settitle(e.target.value)}
                style={{ marginBottom: '20px' }}
                inputProps={{ maxLength: 90 }}
              />
            </Grid>
            <Grid item xs={12}>
            <select value={category} onChange={handleCategoryChange} className='w-[100%] h-[60px] border rounded-[10px]'>
             <option> --Select a Option-- </option>
             <option>Interio</option>
             <option>Modular</option>
             <option>EduFurn</option>
             <option>MediFurn</option>
             <option>Shopfit</option>
          </select>
            </Grid>

            <Grid item xs={9}>
              {/* YouTube Video URL input */}
              
              <TextField
                label="YouTube Video URL * "
                variant="outlined"
                fullWidth
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                style={{ marginBottom: '20px' }}
                
              />
            </Grid>

            <Grid item xs={3} textAlign="center" alignSelf="center">
              {/* Button to fetch video based on the provided URL */}
              <Button variant="contained" color="primary" onClick={handleGetVideo} style={{ marginRight: '10px' }} disabled={!videoUrl}>
                Get Video
              </Button>
            </Grid>

            <Grid item xs={12} textAlign="center" alignSelf="center">
              {/* Button to add the video with the provided details */}
              {
                iscreate ?
              <Button variant="contained" color="success" onClick={handleAddVideo} disabled={!VideoID || !title ||!category}>
                Add
              </Button>
              :
              null
               }
                {
                isedit ?
              <Button variant="contained" color="success" onClick={handleupdateVideo} disabled={!VideoID || !title ||!category}>
                Save
              </Button>
              :
              null
               }
            </Grid>

            {/* Display the selected video with its details */}
            {VideoID ?
              <Grid item xs={12} textAlign="center" alignSelf="center" key={VideoID}>
                <Card style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }} sx={{ maxWidth: 345 }} alignSelf="center">
                  <CardMedia
                    sx={{ height: 240 }}
                    title="green iguana"
                  >
                    {/* YouTube video player */}
                    <YoutubePlayer
                      videoId={VideoID}
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
                  <CardContent>
                    {/* Display video title */}
                    <Typography gutterBottom variant="h7" component="div">
                      <span className='text-r-tvoi gilroyBold'>{title}</span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              : null
            }
          </Grid>
        </CardContent>
      </Card>
      </div>    
    </Fragment>
  )
}
