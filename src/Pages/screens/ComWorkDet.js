import { Container } from '@mui/material'
import React, {useState} from 'react';
import pic from "../../assets/image/bg/homediv.webp"
import { Chip } from '@material-tailwind/react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import int from "../../assets/image/bg/interio.webp"
import Touch from '../components/commercial/Touch';
import Footer from '../components/Footer';
import { useEffect } from 'react';



export default function ComWorkDet() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 - 1 : prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 2 - 1 ? 0 : prevIndex + 1));
    };
    useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'instant'});
    }, []);
  return (
    <>
    <Container>
       <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", paddingTop: "20px", alignItems: "start"}}>
            <img src={pic} style={{maxHeight: "70vh", order: "1", marginTop: "40px"}} />
            <div>
            <h1 className="gilroyBold text-r-tvoi text-xl">Shopfit</h1>
            <div className="title-container" >
            

                <div className="gold-line"></div>
                <h1 className="title gilroyBold text-r-tvoi">Brand - Allen Solly</h1>
            </div>
            <div style={{marginTop: "0px"}}>
                <h1 className='gilroyMedium text-2xl pr-4' style={{lineHeight: "38px"}} >The interior design project for Allen Solly, a renowned fashion brand synonymous with contemporary style, was a harmonious blend of innovation and elegance. The primary objective was to create a retail space that not only showcased the brand's sophisticated clothing collection but also provided customers with a memorable and immersive shopping experience.</h1>
            </div>
            </div>
        </div>
        <div style={{marginTop: "30px"}}>
                <h1 className='gilroyMedium text-2xl pr-4' style={{lineHeight: "38px"}} >The design team at Allen Solly envisioned a space that would resonate with the brand's ethos – modern, stylish, and effortlessly chic. The interior concept revolved around a minimalist yet vibrant palette, with neutral tones serving as the canvas upon which bursts of the brand's signature colors would come to life. Sleek and functional display units were strategically placed throughout the store, allowing the clothing to take center stage while maintaining an uncluttered and spacious feel.</h1>
            </div>
        <div style={{marginTop: "30px"}}>
                <h1 className='gilroyMedium text-2xl pr-4' style={{lineHeight: "38px"}} >The design team at Allen Solly envisioned a space that would resonate with the brand's ethos – modern, stylish, and effortlessly chic. The interior concept revolved around a minimalist yet vibrant palette, with neutral tones serving as the canvas upon which bursts of the brand's signature colors would come to life. Sleek and functional display units were strategically placed throughout the store, allowing the clothing to take center stage while maintaining an uncluttered and spacious feel.</h1>
            </div>
        <div style={{marginTop: "30px"}}>
                <h1 className='gilroyMedium text-2xl pr-4' style={{lineHeight: "38px"}} >The design team at Allen Solly envisioned a space that would resonate with the brand's ethos – modern, stylish, and effortlessly chic. The interior concept revolved around a minimalist yet vibrant palette, with neutral tones serving as the canvas upon which bursts of the brand's signature colors would come to life. Sleek and functional display units were strategically placed throughout the store, allowing the clothing to take center stage while maintaining an uncluttered and spacious feel.</h1>
            </div>
            <div className="slider" style={{width: "100%"}}>
    <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
     
    <div className="slide" style={{width: "100%", marginTop: "30px"}}>
    <div className="detimage-gal-one">
        <div style={{height: "320px", backgroundImage: `url(${int})`, width: "300px"}} className="gal-card">
        <Chip size="sm" value="Conference hall" color="gray" />
        </div>
        <div style={{height: "320px",backgroundImage: `url(${int})`, width: "300px"}} className="gal-card">
        <Chip size="sm" value="Canteen" color="gray" />
        </div>
        <div style={{height: "320px",backgroundImage: `url(${int})`, width: '100%'}} className="gal-card">
        <Chip size="sm" value="Cabin" color="gray" />
        </div>
    </div>
    <div className="detimage-gal-two">
        <div style={{height: "320px", backgroundImage: `url(${int})`, width: "300px"}} className="gal-card">
        <Chip size="sm" value="Front office" color="gray" />
        </div>
        <div style={{height: "320px",backgroundImage: `url(${int})`, width: '100%'}} className="gal-card">
        <Chip size="sm" value="Waiting area" color="gray" />
        </div>
        <div style={{height: "320px",backgroundImage: `url(${int})`, width: "300px"}} className="gal-card">
        <Chip size="sm" value="Work area" color="gray" />
        </div>
        
    </div>
    </div>
    <div className="slide">
    <div className="detimage-gal-one">
        <div style={{height: "320px", backgroundImage: `url(${int})`, width: "300px"}} className="gal-card">
        <Chip size="sm" value="Conference hall" color="gray" />
        </div>
        <div style={{height: "320px",backgroundImage: `url(${int})`, width: "300px"}} className="gal-card">
        <Chip size="sm" value="Canteen" color="gray" />
        </div>
        <div style={{height: "320px",backgroundImage: `url(${int})`, width: '100%'}} className="gal-card">
        <Chip size="sm" value="Cabin" color="gray" />
        </div>
    </div>
    <div className="detimage-gal-two">
        <div style={{height: "320px", backgroundImage: `url(${int})`, width: "300px"}} className="gal-card">
        <Chip size="sm" value="Front office" color="gray" />
        </div>
        <div style={{height: "320px",backgroundImage: `url(${int})`, width: '100%'}} className="gal-card">
        <Chip size="sm" value="Waiting area" color="gray" />
        </div>
        <div style={{height: "320px",backgroundImage: `url(${int})`, width: "300px"}} className="gal-card">
        <Chip size="sm" value="Work area" color="gray" />
        </div>
        
    </div>
    </div>
    </div>
      <button className="prev-button vert" onClick={handlePrevClick}>
        <GrPrevious />
      </button>
      <button className="next-button vert" onClick={handleNextClick}>
        <GrNext />
      </button>
      </div>
    <div>
        </div>
    </Container>
    <Touch />
    <Footer />
    </>
  )
}
