import React ,{ useState , useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import img from "../../assets/image/bg/homediv.webp"
import YoutubePlayer from 'react-youtube-player';
import quote from "../../assets/image/Logo/quote.webp";
import { GetallYoutubeVideos } from "../../API/APIS";

let data = [
  {
    _id: "65535259e860053e35109cd7",
    YoutubeVideoID: "Y4C1_yRPhzY",
    YoutubeVideoTitle: " Their expertise and design skills \nwere invaluable throughout the \nentire process, from consultation \nto delivery.",
  },
  {
    _id: "65535259e860053e35109cd8",
    YoutubeVideoID: "Y4C1_yRPhzY",
    YoutubeVideoTitle: " Thank you for the excellent furniture services and design that turned our house into a home.",
  },
  {
    _id: "65535259e860053e35109cd8",
    YoutubeVideoID: "Y4C1_yRPhzY",
    YoutubeVideoTitle: " They exceeded our design expectations and offered excellent furniture  services."
  },
  {
    _id: "65535259e860053e35109cd0",
    YoutubeVideoID: "Y4C1_yRPhzY",
    YoutubeVideoTitle: " Their craftsmanship and strong sense of style made our home elegant   and comfortable.",
  },
  {
    _id: "65535259e860053e35109cd0",
    YoutubeVideoID: "Y4C1_yRPhzY",
    YoutubeVideoTitle: " Your furniture services and design expertise gave our house the royal   finishing touch. Highly recommend them!",
  },
  {
    _id: "65535259e860053e35109cd0",
    YoutubeVideoID: "Y4C1_yRPhzY",
    YoutubeVideoTitle: " We were happy with their furniture and design services, which    completely transformed our home.",
  }
]
export const ClientPrev = (props) => {
  const [allVideos,setAllVideos] = useState([]);

  

  useEffect(()=>{
    GetAllVideos()
  },[]);

  const sliderRef = React.useRef(null);

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

  const GetAllVideos = async ()=>{
        let data = await GetallYoutubeVideos(props.moduleName);
        setAllVideos(data.data);
  } 

  console.log("videos",allVideos);

  return (
    <div className='bg-r-bggray'>
    <Container>
      <div className='cp-title gilroyBold mt-[20px] mb-[30px] md:mt-[45px] md:mb-[60px] text-xl md:text-2xl lg:text-4xl text-r-tvoi pt-10 sm:pt-24'>
      {props.title}
      </div>
      <div className="carousel-container pb-5 md:pb-24 mb-0 md:mb-12">
        <Slider ref={sliderRef} arrows={false} {...settings}>
          {/* Replace the following with your card components */}
          {
            allVideos.length > 0 && allVideos.map(item=><div key={item._id}>
              <Card style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} className='m-auto' sx={{ maxWidth: 345 }}>
                  <CardMedia
                      sx={{ height: 240 }}
                      image={img}
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
                  </CardContent>
                  
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
    </div>
  );
};

