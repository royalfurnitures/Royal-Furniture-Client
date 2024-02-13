import React, { Fragment ,useState } from 'react';
import {GrNext, GrPrevious} from "react-icons/gr";
import { FaLessThan } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SlideImages({ images1 }) {
    const [currentIndex, setCurrentIndex] = useState(0);


  const chunkSize = 5;
  const outputArray = [];
  
  for (let i = 0; i < images1.length; i += chunkSize) {
    const imgCount = Math.min(chunkSize, images1.length - i);
    const indexStart = i;
    outputArray.push({ imgCount, indexStart });
  }

  const getArray = (count,idx)=>{
    let array = [];
    
      if(count === 5){
      for(let i = 0 ; i<count ; i++){
          array.push(images1[idx+i]);
      }
      }
    else{
        for(let i = 0 ; i<count ; i++){
            array.push(images1[idx+i]);
        }
        let remain = 0 ;
        for (let index = 0; index < 5 - count; index++) {
          array.push(images1[remain+index]);
        }
    }
      return array;
  }


  let range = []; 
  for(let i =0 ; i<outputArray.length ; i++){
       const getelement = getArray(outputArray[i].imgCount , outputArray[i].indexStart);
       range.push(getelement);
  }
  

  //  Large screen function
   const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? range.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === range.length - 1 ? 0 : prevIndex + 1));
  };

   //  Mobile screen function
   const handlemobilePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images1.length - 1 : prevIndex - 1));
  };

  const handlemobileNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images1.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Fragment>
         <div className="slider hidden md:block" style={{width: "100%"}}>
      <div className="slider-inner " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
     
           {range.length >0 && range.map((card,index)=>
           <div className="slide">
            <div className="prod-gridone">
           {
            card.length > 0 && card.map((item,idx)=>
              <>
              {
              idx === 0 ?               
              <Link to={item.link}>
              <div                
                className="relative overflow-hidden prod-griditem"
                style={{ paddingBottom: '60%' }}
              >
                <img
                  src={item.src}
                  alt={item.text}
                  className="absolute object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-30%"></div>
                <div className="absolute bottom-0 left-0 px-2 pb-1 sm:mb-4   text-white">
                  <span className='gilroyMedium text-xs sm:text-xl'>{item.text}</span>
                </div>
              </div>
              </Link>
              :
              null
              }
              {
              idx === 1 ? 
              <Link to={item.link} >
              <div
                // key={index}
                className="relative overflow-hidden prod-griditem"
                style={{ paddingBottom: '60%' }}
              >
                <img
                  src={item.src}
                  alt={item.text}
                  className="absolute object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-30%"></div>
                <div className="absolute bottom-0 left-0 px-2 pb-1 sm:mb-4   text-white">
                  <span className='gilroyMedium text-xs sm:text-xl'>{item.text}</span>
                </div>
              </div>
              </Link>
              :
              null
              }
              </>
          )}
          </div>
          <div className="prod-gridtwo">
          {
            card.length > 0 && card.map((item,idx)=>
             <>
             {
              idx === 2 ?               
              <div
                // key={index}
                className="relative overflow-hidden prod-griditem "
                style={{ paddingBottom: '60%' }}
              >
                <Link to={item.link}>
                <img
                  src={item.src}
                  alt={item.text}
                  className="absolute object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-30%"></div>
                <div className="absolute bottom-0 left-0 px-2 pb-1 sm:mb-4 text-white">
                  <span className='gilroyMedium text-xs sm:text-xl'>{item.text}</span>
                </div>
                </Link>
              </div>
              :
              null
              }
              {
              idx === 3 ? 
              <div
                // key={index}
                className="relative overflow-hidden prod-griditem "
                style={{ paddingBottom: '60%' }}
              >
                <Link to={item.link}>
                <img
                  src={item.src}
                  alt={item.text}
                  className="absolute object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-30%"></div>
                <div className="absolute bottom-0 left-0 px-2 pb-1 sm:mb-4 text-white">
                  <span className='gilroyMedium text-xs sm:text-xl'>{item.text}</span>
                </div>
                </Link>
              </div>
              :
              null
              }
              {
              idx === 4 ? 
              <div
                // key={index}
                className="relative overflow-hidden prod-griditem "
                style={{ paddingBottom: '60%' }}
              >
                <Link to={item.link}>
                <img
                  src={item.src}
                  alt={item.text}
                  className="absolute object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-30%"></div>
                <div className="absolute bottom-0 left-0 px-2 pb-1 sm:mb-4 text-white">
                  <span className='gilroyMedium text-xs sm:text-xl'>{item.text}</span>
                </div>
                </Link>
              </div>
              :
              null
              }                      
          </>
         )}
         </div>
        </div> 
            )}
          
      </div>
      <button className="prev-button" onClick={handlePrevClick}>
        <GrPrevious style={{color:"black"}} />
      </button>
      <button className="next-button" onClick={handleNextClick}>
        <GrNext style={{color:"black"}} />
      </button>
    </div>


{/* Mobile Screen */}
    <div className="slider block md:hidden" style={{width: "100%"}}>
      <div className="slider-inner " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
       {
          images1.map((item,index)=>
          <div className="slide">
          <div className="grid grid-cols-1">
          <Link to={item.link} >
              <div
                key={index}
                className="relative overflow-hidden prod-griditem"
                style={{ paddingBottom: '60%' }}
              > 
             <img
                  src={item.src}
                  alt={item.text}
                  className="absolute object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-30%"></div>
                <div className="absolute bottom-0 left-0 px-2 pb-1 sm:mb-4 text-white">
                  <span className='gilroyMedium text-xs sm:text-xl'>{item.text}</span>
                </div>

                </div>
                </Link>
          </div>

        </div>)
       }         
              
        </div>
        <button className="absolute left-[10px] top-1/2 transform -translate-y-1/2 bg-white text-white rounded-full border-none h-6 w-6 opacity-70 text-xl px-2 cursor-pointer" onClick={handlemobilePrevClick}>
        <GrPrevious style={{color:"black"}}  size={10} />
      </button>
      <button className="absolute right-[10px] top-1/2 transform -translate-y-1/2 bg-white text-white rounded-full border-none h-6 w-6 opacity-70 text-xl px-2 cursor-pointer" onClick={handlemobileNextClick}>
        <GrNext style={{color:"black"}} size={10} />
      </button>
        </div>
    </Fragment>
  )
}
