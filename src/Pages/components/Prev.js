import React ,{ useEffect, useState } from 'react'
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, IconButton } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { GetAllPhotoHandler } from "../../API/APIS";
import {MdOutlineClose} from "react-icons/md"
import {
 
    Button,
   
    DialogBody,
   
    DialogFooter,
   
    DialogHeader,
   
    MCard,
    MIconButton,
  } from "@material-tailwind/react";
  import {
    Dialog,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
  } from "@material-tailwind/react";


  let data = [
    {
      _id:"6555ae1dcbea92d07e5ee596",
      Images: [
        {
          Filename: "286369b2-7024-466a-819d-11d760b5ad79_adoff.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113942082601",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/286369b2-7024-466a-819d-11d760b5ad79_adoff.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "8f2fb6b0-5f8a-46cb-b19f-fe14464e39ad_conf.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113941867330",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/8f2fb6b0-5f8a-46cb-b19f-fe14464e39ad_conf.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "c588007a-8624-4ec5-8bb3-d9966ae340d5_consult.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113939504205",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/c588007a-8624-4ec5-8bb3-d9966ae340d5_consult.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "92be85c6-7edb-4a9e-b21e-8b4edb4b096d_lob.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113939343828",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/92be85c6-7edb-4a9e-b21e-8b4edb4b096d_lob.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        }
      ],
      Title: "Exceed expectations , transformed our home beautifully  .highly recommeded !",
      
    },
    {
      _id:"6555ae1dcbea92d07e5ee596",
      Images: [
        {
          Filename: "286369b2-7024-466a-819d-11d760b5ad79_adoff.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113942082601",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/286369b2-7024-466a-819d-11d760b5ad79_adoff.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "8f2fb6b0-5f8a-46cb-b19f-fe14464e39ad_conf.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113941867330",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/8f2fb6b0-5f8a-46cb-b19f-fe14464e39ad_conf.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "c588007a-8624-4ec5-8bb3-d9966ae340d5_consult.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113939504205",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/c588007a-8624-4ec5-8bb3-d9966ae340d5_consult.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "92be85c6-7edb-4a9e-b21e-8b4edb4b096d_lob.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113939343828",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/92be85c6-7edb-4a9e-b21e-8b4edb4b096d_lob.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        }
      ],
      Title: "Exceed expectations , transformed our home beautifully  .highly recommeded !",
      
    },
    {
      _id:"6555ae1dcbea92d07e5ee596",
      Images: [
        {
          Filename: "286369b2-7024-466a-819d-11d760b5ad79_adoff.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113942082601",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/286369b2-7024-466a-819d-11d760b5ad79_adoff.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "8f2fb6b0-5f8a-46cb-b19f-fe14464e39ad_conf.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113941867330",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/8f2fb6b0-5f8a-46cb-b19f-fe14464e39ad_conf.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "c588007a-8624-4ec5-8bb3-d9966ae340d5_consult.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113939504205",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/c588007a-8624-4ec5-8bb3-d9966ae340d5_consult.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "92be85c6-7edb-4a9e-b21e-8b4edb4b096d_lob.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113939343828",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/92be85c6-7edb-4a9e-b21e-8b4edb4b096d_lob.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        }
      ],
      Title: "Exceed expectations , transformed our home beautifully  .highly recommeded !",
      
    },
    {
      _id:"6555ae1dcbea92d07e5ee596",
      Images: [
        {
          Filename: "286369b2-7024-466a-819d-11d760b5ad79_adoff.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113942082601",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/286369b2-7024-466a-819d-11d760b5ad79_adoff.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "8f2fb6b0-5f8a-46cb-b19f-fe14464e39ad_conf.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113941867330",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/8f2fb6b0-5f8a-46cb-b19f-fe14464e39ad_conf.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "c588007a-8624-4ec5-8bb3-d9966ae340d5_consult.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113939504205",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/c588007a-8624-4ec5-8bb3-d9966ae340d5_consult.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        },
        {
          Filename: "92be85c6-7edb-4a9e-b21e-8b4edb4b096d_lob.png",
          Bucket: "contentcreator-ddc7a.appspot.com",
          Generation: "1700113939343828",
          URL: "https://firebasestorage.googleapis.com/v0/b/contentcreator-ddc7a.appspot.com/o/92be85c6-7edb-4a9e-b21e-8b4edb4b096d_lob.png?alt=media&token=220e59bd-0243-4c14-b8a5-63b6687ea539"
        }
      ],
      Title: "Exceed expectations , transformed our home beautifully  .highly recommeded !",
      
    }
  ]

  

export default function Prev({moduleName}) {
    const sliderRef = React.useRef(null);
    const [images,setImages] = useState([]);
    const [posts,setPosts] = useState(data);

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Number of cards to show at a time
      slidesToScroll: 1,
      swipeToSlide: true, // Enable swiping multiple cards
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        },
      ],
    };
  
    const handlePrevious = () => {
      sliderRef.current.slickPrev();
    };
  
    const handleNext = () => {
      sliderRef.current.slickNext();
    };
    const [mopen, setMOpen] = React.useState(false);
  const mhandleOpen = () => setMOpen((cur) => !cur);
  const [open, setOpen] = React.useState(false);
  const [photos,setPhotos] = useState(false);


   useEffect(()=>{
    getallphotos();
   },[])
   const getallphotos = async()=>{
    let AllPhotos = await GetAllPhotoHandler(moduleName);
    console.log("Allphotos",AllPhotos);
    setPhotos(AllPhotos.data)
   }
 
  const handleOpen = (data) => {
                    setOpen(!open);
                    setImages(data);
  };

  useEffect(()=>{
    // GetDataHandler();
  },[])

  const GetDataHandler = async ()=>{
        const response = await GetAllPhotoHandler ();
              setPosts(response.data);
        // console.log("data",response);
  }
  
  return (
        <div>
            <Container>
            <div className='p-title flex flex-col sm:flex-row pb-5 md:pt-10 md:pb-10'>
            <div className='p-text  text-xl md:text-2xl lg:text-4xl gilroyBold text-left py-4 text-r-tvoi '>
             Uncover the Royal magic we bring to the homes
            </div>
            <Button className="bg-r-gold rounded-full gilroyLight text-xs " onClick={mhandleOpen}>
              Get Free Consultation
            </Button>
            </div>
            <div className="carousel-container pb-5 md:pb-10 mb-5 md:mb-10">
            <Slider ref={sliderRef} arrows={false} {...settings}>
            {/* Replace the following with your card components */}
            {
              photos.length > 0 && photos.map(item=><div key={item.Images[0]}>
                <Card  onClick={(e)=>{handleOpen(item.Images)}} className='m-auto ' style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", borderRadius: "20px", cursor: "pointer"}} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={item.Images[0].URL}
                        title=""
                        className='relative overflow-hidden '
                    >
                      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-30%"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <span className='gilroyMedium text-xl'>{item.Title}</span>
                </div>
                    </CardMedia>
                  
                </Card>
            </div>)
            }
            
            {/* Add more cards as needed */}
            </Slider>
            <div className="carousel-navigation">
            <button className="carousel-nav-button" onClick={handlePrevious}>
                <ExpandCircleDownIcon fontSize='large' style={{ transform: "rotate(90deg)"}} />
            </button>
            <button className="carousel-nav-button" onClick={handleNext}>
                <ExpandCircleDownIcon fontSize='large' style={{ transform: "rotate(270deg)"}} />
            </button>
            </div>
        </div>
        </Container>
        <React.Fragment>
          <Dialog
            size="xl"
            mopen={mopen}
            handler={mhandleOpen}
            className="bg-transparent drop-shadow-md"
          >
            <MCard className="mx-auto w-full max-w-[24rem]">
              <CardHeader
                className="mb-4 grid h-28 place-items-center quote-bg"
              >
                <Typography variant="h4" color="white" className='gilroyBold tracking-widest text-center'>
                Unveil the Beauty <br/> Within Your Home!
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Input label="Name" size="lg" />
                <Input label="email" size="lg" />
                <Input label="number" size="lg" />
                <div className="-ml-2.5">
                  <Checkbox label="send updates on whatsapp" color="orange" />
                </div>
                <Input label="current residence pincode" size="lg" />
              </CardBody>
              <CardFooter className="pt-0">
                <Button onClick={mhandleOpen} fullWidth className="bg-r-gold">
                  Get FREE Quote
                </Button>
                <Typography variant="small" className="mt-6 gilroyLight">
                  By submitting this form , you agree to <span className="text-r-gold">privacy policy</span>  & <span className="text-r-gold">terms and conditions</span>
                </Typography>
              </CardFooter>
            </MCard>
          </Dialog>
        </React.Fragment>
      <Dialog open={open} handler={handleOpen}size='xl'>
      <DialogFooter className="space-x-2">
        <MdOutlineClose size="40px" style={{cursor: "pointer"}} onClick={handleOpen}/>
      </DialogFooter>
        <DialogBody divider className="h-[40rem] overflow-scroll">
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            {
              images.length >0 && images.map(img=> <img src={img.URL} className='p-2' key={img.URL} /> )
            }           
           
          </div>
        </DialogBody>
        
      </Dialog>
        </div>
  )
}


