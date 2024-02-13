import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import interio from "../../assets/image/bg/interio.webp";
import mod from "../../assets/image/bg/mod.webp";
import edu from "../../assets/image/bg/edu.webp";
import med from "../../assets/image/bg/med.webp";
import shop from "../../assets/image/bg/shop.webp";
import { Link } from 'react-router-dom';


const words = ['EDUFURN', 'MEDIFURN', 'INTERIO', 'SHOPFIT', 'MODULAR']; // Add your desired words here

const HSecTwo = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change the interval duration as per your preference (in milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const images1 = [
    { src: interio, text: 'INTERIO', link: '/interio' },
    { src: mod, text: 'MODULAR', link: '/modular'  },
    
  ];
  const images2 = [
    { src: edu, text: 'EDUFURN', link: '/edufurn'  },
    { src: shop, text: 'SHOPFIT', link: '/shopfit'  },
    { src: med, text: 'MEDIFURN', link: '/medifurn'  },
    
  ];

  return (
    <Container>
      <div>
        <div style={{padding: "0 10px"}}>
          <h1 className='prod-title gilroyBold text-r-tvoi'>Get Handcrafted Royal Comfort on <span className="interwood gilroyEBold text-r-gold">{words[currentWordIndex]}</span></h1>
          <h5 className='text-xl gilroyMedium text-r-tvoi'>Our Products</h5>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 my-3">
            {images1.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden prod-griditem col-span-1 mx-2 my-2"
                style={{ paddingBottom: '60%' }} // Maintain aspect ratio (4:3)
              >
                <Link to={image.link}>
                <img
                  src={image.src}
                  alt={image.text}
                  className="absolute object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-30%"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <span className='gilroyBold text-xl'>{image.text}</span>
                </div>
                </Link>
              </div>
            ))}          
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 my-3">
            {images2.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden prod-griditem col-span-1 mx-2 my-2"
                style={{ paddingBottom: '60%' }} // Maintain aspect ratio (4:3)
              >
                <Link to={image.link}>
                <img
                  src={image.src}
                  alt={image.text}
                  className="absolute object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-30%"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <span className='gilroyBold'>{image.text}</span>
                </div>
                </Link>
              </div>
            ))}          
        </div>  
      </div>
      
    </Container>
  );
};

export default HSecTwo;
