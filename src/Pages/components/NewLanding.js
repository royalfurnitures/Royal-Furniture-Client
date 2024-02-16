import {useState} from "react"
import img1 from "../../assets/image/bg/homeinterior.webp";
import img2 from "../../assets/image/bg/edufurniture.webp";
import img3 from "../../assets/image/bg/medii.webp";
import img4 from "../../assets/image/bg/mod.webp";
import img5 from "../../assets/image/bg/shopfit.webp";
import { Link } from "react-router-dom";
import MiniLogo from "../../assets/image/Logo/mini_royal_logo.png";

function NewLanding() {
  const [isHovered, setIsHovered] = useState({
     index:null,
     ishover:false,
  });
  return (
    <div>
    <div className="hidden lg:block">
        <div className='flex flex-row h-[94vh] lg:h-[83vh] '>
           
              <div className='w-[20%] h-[100%]  homepage-card hover:w-[100%]' onMouseEnter={() => {setIsHovered({index:0,ishover:true})}}
              onMouseLeave={() => {setIsHovered({index:null,ishover:false})}}>
              <div className=' relative w-[100%] h-[100%]'>
               <img className='w-[100%] h-[100%] object-cover hover:object-fill ' loading="lazy" src={img1}/>
               {
                  isHovered.index === 0 && isHovered.ishover ?
                  null
                  :
                  <>
                  <div className={`absolute  mx-[5%] w-[90%] bottom-[5%]  `}>
                  <div className=' relative w-[100%] p-2   text-white text-center' >
                  <div className="relative w-[100%] top-0 z-10 left-0 right-0 bottom-0">
                   
                  <div className='font-bold text-sm md:text-lg lg:text-2xl py-1 montserratBold'>INTERIO</div>                 
                  <div  className=' text-md py-1 text-[8px] lg:text-[14px] montserratLight'>Home Interiors</div>                 
                  </div>
                  </div>
                  </div>
                   <div className="absolute z-40 bottom-[15%] w-[100%]">
                    <div className="flex items-center justify-center">
                     <img loading="lazy" src={MiniLogo} className="w-[100px] text-center" />
                    </div>
                   </div>
                   </>
               }
               {
                  isHovered.index === 0 && isHovered.ishover ?
                  null
                :
               <div className="absolute w-[100%]   bottom-0 h-50  bg-gradient-to-t from-black to-transparent"></div>

               }
               <div className={`absolute  mx-[5%] w-[90%]  top-[40%]  `}>
                
                 <div className=' relative w-[100%] p-2  text-white text-center' >
                 {
                  isHovered.index === 0 && isHovered.ishover ?
                  <div className="absolute rounded-lg  w-[100%] top-0 z-10 left-0 right-0 bottom-0 duration-300 opacity-70 backdrop-blur-sm backdrop-filter" style={{backgroundColor:"#6C3E2E"}}></div>
                  :
                  null
                  } 
                  <div className="relative w-[100%] top-0 z-10 left-0 right-0 bottom-0">
                        {
                                isHovered.index === 0 && isHovered.ishover ? <div className=''>
                                <div className='font-bold text-xl z-50 text-white py-1 gilroyBold' >INTERIO</div>  

                                   <div className="py-1 gilroyRegular"> Our product for crafting efficient and appealing home interiors</div>
                                  <Link to="/interio">
                                    <button className="gilroyRegular bg-orange-500 px-4 py-1 my-3 rounded-[20px] hover:text-black">Explore More</button>
                                  </Link>
                                  </div>
                                :
                               null
                               }
                  </div>
                 
                 </div>
                 
                </div> 
              </div>
              </div>
            <div className='w-[20%] h-full relative homepage-card hover:w-[100%]'onMouseEnter={() => {setIsHovered({index:1,ishover:true})}}
             onMouseLeave={() => {setIsHovered({index:null,ishover:false})}}>
              <img loading="lazy" className='w-[100%] h-[100%] object-cover hover:object-fill' src={img2}/>
              {
                  isHovered.index === 1 && isHovered.ishover ?
                  null
                  :
                  <>
              <div className={`absolute  mx-[5%] w-[90%] bottom-[5%]  `}>
              <div className=' relative w-[100%] p-2   text-white text-center' >
              <div className="relative w-[100%] top-0 z-10 left-0 right-0 bottom-0">
               
              <div className='font-bold text-sm md:text-lg lg:text-2xl py-1 montserratBold'>EDUFURN</div>                 
              <div className='text-md py-1 text-[8px] lg:text-[14px] montserratLight'>Institution Furniture</div>                 
              </div>
              </div>
              </div>
               <div className="absolute z-40 bottom-[15%] w-[100%]">
                <div className="flex items-center justify-center">
                 <img loading="lazy" src={MiniLogo} className="w-[100px] text-center" />
                </div>
               </div>
               </>
               }
              {
                  isHovered.index === 1 && isHovered.ishover ?
                  null
                :
               <div className="absolute w-[100%] bottom-0 h-50 bg-gradient-to-t from-black to-transparent"></div>

               }
              <div className={`absolute  mx-[5%] w-[90%]  top-[40%]`}>
                 <div className=' relative w-[100%] p-2   text-white text-center' >
                  
                 {
                  isHovered.index === 1 && isHovered.ishover ?
                  <div className="absolute w-[100%] top-0 z-10 rounded-lg  left-0 right-0 bottom-0 opacity-70" style={{backgroundColor:"#6C3E2E"}}></div>
                  :
                  null
                  } 
                  <div className="relative w-[100%] top-0 z-10 left-0 right-0 bottom-0">
                 {
                  isHovered.index === 1 && isHovered.ishover ?
                   <div className=''>
                  <div className='font-bold text-2xl py-1 gilroyBold'>EDUFURN</div>                 
                 <div className="py-1 gilroyRegular" > Our product for creating inspiring school and college interiors</div>
                 <Link to="/edufurn"> 
                    <button className="gilroyRegular bg-orange-500 px-4 py-1 my-3 rounded-[20px] hover:text-black">Explore More</button>
                    </Link>
                    </div>
                  
                  :
                  null
                 }
                  </div>
                 
                 </div>
                 
                </div>
            </div>
            <div className='w-[20%] h-full relative homepage-card hover:w-[100%]' onMouseEnter={() => {setIsHovered({index:2,ishover:true})}}
      onMouseLeave={() => {setIsHovered({index:null,ishover:false})}}>
              <img loading="lazy" className='w-[100%] h-[100%] object-cover hover:object-fill ' src={img3}/>
              {
                  isHovered.index === 2 && isHovered.ishover ?
                  null
                  :
                  <>
                  <div className={`absolute  mx-[5%] w-[90%] bottom-[5%]  `}>
                  <div className=' relative w-[100%] p-2   text-white text-center' >
                  <div className="relative w-[100%] top-0 z-10 left-0 right-0 bottom-0">
                   
                  <div className='font-bold text-sm md:text-lg lg:text-2xl py-1 montserratBold'>MEDIFURN</div>                 
                  <div className='text-md py-1 text-[8px] lg:text-[14px] montserratLight'>Hospitals</div>                 
                  </div>
                  </div>
                  </div>
                   <div className="absolute z-40 bottom-[15%] w-[100%]">
                    <div className="flex items-center justify-center">
                     <img loading="lazy" src={MiniLogo} className="w-[100px] text-center" />
                    </div>
                   </div>
                   </>
               }
              {
                  isHovered.index === 2 && isHovered.ishover ?
                  null
                :
               <div className="absolute w-[100%]   bottom-0 h-50  bg-gradient-to-t from-black to-transparent"></div>

               }
              <div className={`absolute  mx-[5%] w-[90%]  top-[40%]  `}>
             
                 <div className=' relative w-[100%] p-2   text-white text-center'>
                 {
                  isHovered.index === 2 && isHovered.ishover ?
                  <div className="absolute w-[100%] rounded-lg  top-0 z-10 left-0 right-0 bottom-0 opacity-70" style={{backgroundColor:"#6C3E2E"}}></div>
                  :
                  null
                  } 
                  <div className="relative w-[100%] top-0 z-10 left-0 right-0 bottom-0">
                 {
                  isHovered.index === 2 && isHovered.ishover ?
                   <div className=''>
                  <div className='font-bold text-xl py-1 gilroyBold'>MEDIFURN</div>                 

                 <div className="py-1 gilroyRegular"> Our product for crafting functional and welcoming hospital interiors</div>
                    <Link to="/medifurn">
                    <button className="gilroyRegular bg-orange-500 px-4 py-1 my-3 rounded-[20px] hover:text-black">Explore More</button>
                    </Link>
                  </div>
                  :
                  null
                 }
                   </div>
                 </div>
                 
                </div>
              </div>
            <div className='w-[20%] h-full relative homepage-card hover:w-[100%]' onMouseEnter={() => {setIsHovered({index:3,ishover:true})}}
             onMouseLeave={() => {setIsHovered({index:null,ishover:false})}}>
              <img loading="lazy" className='w-[100%] h-[100%] object-cover hover:object-fill ' src={img4}/>
              {
                  isHovered.index === 3 && isHovered.ishover ?
                  null
                  :
                  <>
                  <div className={`absolute  mx-[5%] w-[90%] bottom-[5%]   `}>
                  <div className=' relative w-[100%] p-2   text-white text-center' >
                  <div className="relative w-[100%] top-0 z-10 left-0 right-0 bottom-0">                   
                  <div className='font-bold text-sm md:text-lg lg:text-2xl py-1 montserratBold'>MODULAR</div>                 
                  <div className='text-md py-1 text-[8px] lg:text-[14px] montserratLight'>Work Station</div>                 
                  </div>
                  </div>
                  </div>
                   <div className="absolute z-40 bottom-[15%] w-[100%]">
                    <div className="flex items-center justify-center">
                     <img loading="lazy" src={MiniLogo} className="w-[100px] text-center" />
                    </div>
                   </div>
                   </>
               }
              {
                  isHovered.index === 3 && isHovered.ishover ?
                  null
                :
               <div className="absolute w-[100%] bottom-0 h-50 bg-gradient-to-t from-black to-transparent"></div>

               }
              <div className={`absolute  mx-[5%] w-[90%]  top-[40%] `}>
             
                 <div className=' relative w-[100%] p-2  text-white text-center' >
                 {
                  isHovered.index === 3 && isHovered.ishover ?
                  <div className="absolute w-[100%] rounded-lg  top-0 z-10 left-0 right-0 bottom-0 opacity-70" style={{backgroundColor:"#6C3E2E"}}></div>
                  :
                  null
                  } 
                  <div className="relative w-[100%] top-0 z-10 left-0 right-0 bottom-0">
                 {
                  isHovered.index === 3 && isHovered.ishover ?
                   <div className=''>
                  <div className='font-bold text-xl py-1 gilroyBold'>MODULAR</div>                 

                 <div  className="py-1 gilroyRegular"> Our product for crafting efficient and appealing office interiors</div>
                 <Link to="/modular">
                    <button className="gilroyRegular bg-orange-500 px-4 py-1 my-3 rounded-[20px] hover:text-black">Explore More</button>
                  </Link>
                    </div>
                  :
                 null

                 }
                 </div>
                
                 </div>
                 
                </div>              
              </div>
            <div className='w-[20%] h-full relative homepage-card hover:w-[100%] ' onMouseEnter={() => {setIsHovered({index:4,ishover:true})}}
              onMouseLeave={() => {setIsHovered({index:null,ishover:false})}}>
              <img loading="lazy" className='w-[100%] h-[100%] object-cover hover:object-fill' src={img5}/>
              
              {
                  isHovered.index === 4 && isHovered.ishover ?
                  null
                  :
                  <>
                  <div className={`absolute  mx-[5%] w-[90%] bottom-[5%]   `}>
                  <div className=' relative w-[100%] p-2   text-white text-center' >
                  <div className="relative w-[100%] top-0 z-10 left-0 right-0 bottom-0">
                   
                  <div className='font-bold text-sm md:text-lg lg:text-2xl py-1 montserratBold'>SHOPFIT</div>                 
                  <div className='text-md py-1 text-[8px] lg:text-[14px] montserratLight'> Retail Shop </div>                 
                  </div>
                  </div>
                  </div>
                   <div className="absolute z-40 bottom-[15%] w-[100%]">
                    <div className="flex items-center justify-center">
                     <img loading="lazy" src={MiniLogo} className="w-[100px] text-center" />
                    </div>
                   </div>
                   </>
               }
              {
                  isHovered.index === 4 && isHovered.ishover ?
                  null
                :
               <div className="absolute w-[100%]   bottom-0 h-50  bg-gradient-to-t from-black to-transparent"></div>

               }
              <div className={`absolute  mx-[5%] w-[90%]  top-[40%]  `}>
                 <div className=' relative w-[100%] p-2  text-white text-center' >
                 {
                  isHovered.index === 4 && isHovered.ishover ?
                  
                  <div className="absolute w-[100%] rounded-lg  top-0 z-10 left-0 right-0 bottom-0 opacity-70" style={{backgroundColor:"#6C3E2E"}}></div>
                  :
                  null
                  } 
                  <div className="relative w-[100%] top-0 z-10 left-0 right-0 bottom-0">
                 {
                  isHovered.index === 4 && isHovered.ishover ?
                   <div className=''>
                  <div className='font-bold text-xl py-1 gilroyBold '>SHOPFIT</div>                 

                 <div className="py-1 gilroyRegular"> Our product for designing and constructing appealing retail shop interiors</div>
                 <Link to="/shopfit"> 
                    <button className="bg-orange-500 px-4 py-1 my-3 rounded-[20px] hover:text-black gilroyRegular">Explore More</button>
                  </Link>
                    </div>
                  :
                  null

                 }
                  </div>
                
                 </div>
                 
                </div>

              </div>
        </div>
    </div>
    {/* <div className="hidden md:block lg:hidden">
          Tablets
    </div> */}
    <div className="block lg:hidden">
    <div className='flex flex-col md:flex-row h-[94vh]  '>
       <div className="w-[100%] md:w-[20%] h-[20%] md:h-[100%] bg-black  relative">
        <div className="h-[100%]">
        <Link to="/interio" className="block md:hidden bg-transparent absolute top-0 bottom-0 left-0 right-0 z-50" ></Link>
       <img className='w-[100%] h-[100%] object-cover  ' loading="lazy" src={img1}/>
        <div className="absolute w-[100%]   bottom-0 h-[80px] md:h-[250px] bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 text-white">
        <div className="flex flex-col items-center justify-center md:mb-10 ">
            <img loading="lazy" src={MiniLogo} className="w-[40px] text-center" />
            <div className='font-bold text-sm md:text-lg lg:text-2xl py-1 montserratBold'>INTERIO</div>                 
            <div  className=' text-md py-1 text-[8px] md:text-[14px] montserratLight'>Home Interiors</div> 
            <Link to="/interio" className=' text-md mt-3 py-1 hidden md:block md:text-[14px] montserratLight border rounded-[18px] px-2 font-bold'>  Know More</Link> 

        </div>
        </div>
        </div>
        </div>       
        <div className="w-[100%] md:w-[20%] h-[20%] md:h-[100%] bg-black  relative">
        <div className="h-[100%]">
        <Link to="/edufurn" className="block md:hidden bg-transparent absolute top-0 bottom-0 left-0 right-0 z-50" ></Link>
       <img className='w-[100%] h-[100%] object-cover  ' loading="lazy" src={img2}/>
        <div className="absolute w-[100%]   bottom-0 h-[80px] md:h-[250px]  bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 text-white">
        <div className="flex flex-col items-center justify-center md:mb-10">
            <img loading="lazy" src={MiniLogo} className="w-[40px] text-center" />
            <div className='font-bold text-sm md:text-lg lg:text-2xl py-1 montserratBold'>EDUFURN</div>                 
                  <div  className=' text-md py-1 text-[8px] md:text-[14px] montserratLight'>Institution Furniture</div> 
            <Link to="/edufurn" className=' text-md mt-3 py-1 hidden md:block md:text-[14px] montserratLight border rounded-[18px] px-2 font-bold'>  Know More</Link> 

        </div>
        </div>
        </div>
        </div>       
        <div className="w-[100%] md:w-[20%] h-[20%] md:h-[100%] bg-black  relative">
        <div className="h-[100%]">
        <Link to="/medifurn" className="block md:hidden bg-transparent absolute top-0 bottom-0 left-0 right-0 z-50" ></Link>
       <img className='w-[100%] h-[100%] object-cover  ' loading="lazy" src={img3}/>
        <div className="absolute w-[100%]   bottom-0 h-[80px] md:h-[250px]  bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 text-white">
        <div className="flex flex-col items-center justify-center md:mb-10">
            <img loading="lazy" src={MiniLogo} className="w-[40px] text-center" />
            <div className='font-bold text-sm md:text-lg lg:text-2xl py-1 montserratBold'>MEDIFURN</div>                 
            <div  className=' text-md py-1 text-[8px] md:text-[14px] montserratLight'>Hospitals</div> 
           <Link to="/medifurn" className=' text-md mt-3 py-1 hidden md:block md:text-[14px] montserratLight border rounded-[18px] px-2 font-bold'>  Know More</Link> 
        </div>
        </div>
        </div>
        </div>       
        <div className="w-[100%] md:w-[20%] h-[20%] md:h-[100%] bg-black  relative">
        <div className="h-[100%]">
        <Link to="/modular" className="block md:hidden bg-transparent absolute top-0 bottom-0 left-0 right-0 z-50" ></Link>
       <img className='w-[100%] h-[100%] object-cover  ' loading="lazy" src={img4}/>
        <div className="absolute w-[100%]   bottom-0 h-[80px] md:h-[250px]  bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 text-white">
        <div className="flex flex-col items-center justify-center md:mb-10">
            <img loading="lazy" src={MiniLogo} className="w-[40px] text-center" />
            <div className='font-bold text-sm md:text-lg lg:text-2xl py-1 montserratBold'>MODULAR</div>                 
            <div  className=' text-md py-1 text-[8px] md:text-[14px] montserratLight'>Work Station</div> 
            <Link to="/modular" className=' text-md mt-3 py-1 hidden md:block md:text-[14px] montserratLight border rounded-[18px] px-2 font-bold'>  Know More</Link> 
             
        </div>
        </div>
        </div>
        </div>        
        <div className="w-[100%] md:w-[20%] h-[20%] md:h-[100%] bg-black  relative">
        <div className="h-[100%]">
        <Link to="/shopfit" className="block md:hidden bg-transparent absolute top-0 bottom-0 left-0 right-0 z-50" ></Link>
       <img className='w-[100%] h-[100%] object-cover  ' loading="lazy" src={img5}/>
        <div className="absolute w-[100%]   bottom-0 h-[80px] md:h-[250px]  bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0  left-0 right-0 text-white">
        <div className="flex flex-col items-center justify-center md:mb-10 ">
            <img loading="lazy" src={MiniLogo} className="w-[40px] text-center" />
            <div className='font-bold text-sm md:text-lg lg:text-2xl  montserratBold'>SHOPFIT</div>                 
            <div  className=' text-md py-1 text-[8px] md:text-[14px] montserratLight'>Retail Shop</div> 
            <Link to="/shopfit" className=' text-md mt-3 py-1 hidden md:block md:text-[14px] montserratLight border rounded-[18px] px-2 font-bold'>  Know More</Link> 
        </div>
        </div>
        </div>
        </div>        
    </div>
    </div>
    </div>
            

  );
}

export default NewLanding;
