import { Container } from '@mui/material'
import React from 'react'
import about from "../../assets/image/bg/aboutbg.webp";
import { Typography } from '@material-tailwind/react';
import t2 from "../../assets/image/icons/t2.webp"
import t3 from "../../assets/image/icons/t3.webp"
import t1 from "../../assets/image/icons/t1.webp"
import Touch from '../components/commercial/Touch';
import { Card, CardMedia } from '@mui/material'
import YoutubePlayer from 'react-youtube-player';
import Footer from '../components/Footer';
import { useEffect } from 'react';
// import Captain from "../../assets/image/icons/captain.png"
import Captain from "../../assets/image/Logo/founder.png"
import manager from "../../assets/image/Logo/manager.png"
import chairman from "../../assets/image/Logo/chairman.png"
import md from "../../assets/image/Logo/md.png"
import mach1 from "../../assets/image/Machinery/1.png";
import mach2 from "../../assets/image/Machinery/2.png";
import mach3 from "../../assets/image/Machinery/3.png";
import mach4 from "../../assets/image/Machinery/4.png";
import mach5 from "../../assets/image/Machinery/5.png";
import mach6 from "../../assets/image/Machinery/6.png";
import mach7 from "../../assets/image/Machinery/7.png";





export default function About() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, []);

    const team = [
        {
            img: t1,
            title: "The Design Lead (DL)",
            sub: "The Design Lead gets to know your requirements and your lifestyle intimately to ensure your home is a reflection of who you are."
        },
        {
            img: t2,
            title: "The Business Manager (BM)",
            sub: "To ensure your home journey is smooth sailing, your Business Manager oversees the entire design process and ensures there are no hiccups."
        },
        {
            img: t3,
            title: "The Project Manager (PM)",
            sub: "Your Project Manager steers the on-site execution. They make it their life’s mission to get your home ready in time."
        },
        
    ]
    
  return (
    <>
        <div className="relative h-[40vh] lg:h-[75vh] w-full">
        <img
          src={about}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end justify-center bg-gradient-to-t from-r-tvoi to-transparent to-50%">
          <div className="justify-center align-center">
            <div
              
              className=" mb-4 lg:pb-10 w-[100%]  text-5xl lg:text-6xl xl:text-7xl text-[white]  gilroyEBold text-center"
              style={{lineHeight: "65px"}}
            >
              ABOUT US
            </div>
            
          </div>
        </div>
    </div>
      <Container>
        <div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-0'>
          <div className='flex items-center col-span-1 justify-center flex-col'>
            <h1 style={{textAlign: "center"}} className='mt-5 md:mt-24  text-4xl gilroyEBold text-r-tvoi'>Founder</h1>
           
                <div className='mt-10 w-[220px]  relative' style={{display:"flex",flexDirection:"column",alignItems:'center',justifyContent:"center"}}>
                  <div className='w-[220px] bg-[#2A2A2A] h-[290px]'></div>
                  <img src={Captain} className='w-[220px] h-[290px] absolute -right-5 top-5' alt="image...." />
                  <div className='font-bold text-2xl mt-8'>Mr. K.C. KAILASAM</div>
                </div>

                </div>
           <div className='lg:pt-20 col-span-2'>
             
            <h4 className='text-justify  mt-16 text-sm sm:text-xl  text-r-tvoi gilroyMedium'>Experience the pinnacle of furniture excellence with Royal Furnitures, a renowned name in the industry since 1996. Our journey commenced under the visionary leadership of Mr. K.C. Kailasam, initiating with a modest team of 10 individuals within a 4000 square foot space. As time progressed, we evolved into a formidable force, now operating from our expansive 50,000-square-foot facility. With his journey as our foundation, we are poised to carry forward his legacy into the future
            </h4> 
            </div>
            </div>
            <h4 className='text-justify mt-16 text-sm sm:text-xl  text-r-tvoi gilroyMedium'>
            Having accumulated over two decades of expertise, Royal Furnitures now 
            boasts a team of over 100 skilled professionals. We operate from an ISO 
            9001:14001-certified factory that is equipped with state-of-the art machinery. 
            Our unwavering commitment to quality and customer satisfaction has 
            propelled us to reach new height
            </h4>
            <h4 className='text-justify mt-16 text-sm sm:text-xl  text-r-tvoi gilroyMedium'>
            Royal Furnitures takes pride in holding NSIC certification, which serves as a 
            testament to our industry leadership and credibility. We invite you to explore 
            our 5,000-square-foot display area that showcases our furniture offerings and 
            exemplifies our unwavering dedication to excellence.

            </h4>
            <h4 className='text-justify mt-16 text-sm sm:text-xl  text-r-tvoi gilroyMedium'>
            Discover the epitome of furniture craftsmanship at Royal Furnitures where we 
            bring together quality and innovative designs to ensure your utmost 
            satisfaction remains our priority.
            </h4>
            <Card style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} sx={{ width:'100%' ,marginTop:"50px" }} >
              <div
              className='w-[100%] h-[250px] md:h-[500px]'
                // image={img}
                title="green iguana"
                >
                        <YoutubePlayer
                        videoId='Y4C1_yRPhzY'
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
                  </div>
                </Card>
            <h1 style={{textAlign: "center"}} className='mt-24 text-2xl lg:text-3xl gilroyEBold text-r-tvoi'>What We Do</h1>
            <h4 className='text-justify mt-16 text-sm sm:text-xl  text-r-tvoi gilroyMedium'>
            Royal Furnitures, situated in Erode, Tamil Nadu, India, provides furniture 
           solutions that cater to a wide range of needs. We take pride in our collection of 
          stylish furniture designed for institutions, businesses, showrooms, residences, 
          and healthcare facilities. Our understanding of customer requirements has 
           enabled us to create a splendid range of furniture that perfectly complements 
          their preferences.

            </h4>
            <h4 className='text-justify mt-16 text-sm sm:text-xl  text-r-tvoi gilroyMedium'>
            Home interiors, classrooms, labs, modular office spaces, showrooms, retail 
            shops, restaurants, and high-end hospitals are just a few of the applications for 
             our furniture. We conduct significant studies to stay up-to-date with the 
             newest trends in furnishings for many sectors. We are enthusiastic about 
              serving you, and we are proud of the standard of quality that our years of 
            expertise in the furniture industry have helped us to maintain.
            </h4>
            {/* <h1 style={{textAlign: "center"}} className='mt-24 text-4xl gilroyEBold text-r-tvoi'>OUR FACTORY</h1> */}
            <div className=' mt-24'>
            <h4 className='text-center  text-2xl lg:text-3xl xl:text-3xl text-r-tvoi gilroyBold'>Leadership Team at Royal Furnitures</h4>
            <div className='flex items-center justify-center gap-10 md:flex-row flex-col md:gap-2 lg:gap-10 mt-20 '>
            <div className='flex items-center justify-center flex-col w-[300px] md:w-[250px] lg:w-[400px]'>
              <div className='bg-gray-500 w-[300px] md:w-[250px] lg:w-[300px] h-[400px]'>
                 <img src={md} className='w-[100%] h-[100%]' /> 
              </div>
            <h4 className='text-left mt-5 text-xl lg:text-2xl xl:text-[25px] text-r-tvoi gilroyBold'> THILAKA S </h4>
            <h4 className='text-left  text-lg lg:text-xl xl:text-[15px] text-r-tvoi gilroyMedium'> Managing Director</h4>
            </div>
            <div className='flex items-center justify-center flex-col w-[300px] md:w-[250px] lg:w-[400px]'>
            <div className='bg-gray-500 w-[300px] md:w-[250px] lg:w-[300px] h-[400px]'>
            <img src={chairman} className='w-[100%] h-[100%]' /> 
               
            </div>
            <h4 className='text-left mt-5 text-xl lg:text-2xl xl:text-[25px] text-r-tvoi gilroyBold'>Saravanan K </h4>
            <h4 className='text-left  text-lg lg:text-xl xl:text-[15px] text-r-tvoi gilroyMedium'> Chairman</h4>
            </div>
            <div className='flex items-center justify-center flex-col w-[300px] md:w-[250px] lg:w-[400px]'>
            <div className='bg-gray-500 w-[300px] md:w-[250px] lg:w-[300px] h-[400px]'>
            <img src={manager} className='w-[100%] h-[100%]' /> 
                
            </div>
            <h4 className='text-center mt-5 text-xl lg:text-2xl xl:text-[25px] text-r-tvoi gilroyBold'>  Hemachandhran P </h4>
            <h4 className='text-center text-lg lg:text-xl xl:text-[15px] text-r-tvoi gilroyMedium'> Manager </h4>
            </div>
            </div>
            </div>

            


            <Container>
            <div className='py-10 mt-10'>
            <h1 className='text-center gilroyBold text-r-tvoi steps-title text-2xl lg:text-3xl'>The Royal Team</h1>
            <h3 className='text-center gilroyMedium text-r-tvoi steps-sub text-sm  md:text-lg lg:text-xl'>Get to know the team that’ll be with you every step of the way.</h3>
            <div className='grid grid-cols-6 gap-5'>
                {team.map((team, index) => (
                <div className='col-span-6 md:col-span-2'>
                <div className='flex flex-col gap-3 items-center justify-center my-[10px] md:my-[50px]  ' key={index}>
                <img className='w-[200px] md:w-[80%]' src={team.img} />
                <div>
                  <h1 className='text-r-tvoi gilroyBold mb-2  mt-4 text-xl md:text-lg lg:text-2xl'>{team.title}</h1>
                </div>
                <div>
                  <h1 className='tgilroyMedium text-sm  md:text-md lg:text-xl  text-r-tvoi text-justify'>{team.sub}</h1>
                </div>
                </div>
                </div>
                ))}
            </div>
            
        </div>
    </Container>
    <div className='mb-10'>
    <h1 style={{textAlign: "center"}} className=' text-2xl lg:text-3xl gilroyEBold text-r-tvoi'>Machinery Photos</h1>
    <div className='grid grid-cols-4 gap-4 mt-5 '>
          <div className='col-span-4 md:col-span-2 '>
             <div className='w-[100%] border h-[300px] bg-[#424242]  relative'>
             <img src={mach1} className='w-[100%] h-[100%]' /> 
             </div>
          </div>
          <div className='col-span-4 md:col-span-2'>
             <div className='w-[100%] border  h-[300px] bg-[#424242]  relative'>
             <img src={mach2} className='w-[100%] h-[100%]' /> 
              
             </div>
          </div>
          <div className='col-span-4 md:col-span-2 '>
             <div className='w-[100%] border h-[300px] bg-[#424242]  relative'>
             <img src={mach3} className='w-[100%] h-[100%]' /> 
               
             </div>
          </div>
          <div className='col-span-4 md:col-span-2 '>
             <div className='w-[100%] border h-[300px] bg-[#424242]  relative'>
             <img src={mach4} className='w-[100%] h-[100%]' />                
             </div>
          </div>
          <div className='col-span-4 md:col-span-2 '>
             <div className='w-[100%] border h-[300px] bg-[#424242]  relative'>
             <img src={mach5} className='w-[100%] h-[100%]' />                
             </div>
          </div>
          <div className='col-span-4 md:col-span-2 '>
             <div className='w-[100%] border h-[300px] bg-[#424242]  relative'>
             <img src={mach6} className='w-[100%] h-[100%]' />                
             </div>
          </div>
          <div className='col-span-4 md:col-span-2 '>
             <div className='w-[100%] h-[300px] border bg-[#424242]  relative'>
             <img src={mach7} className='w-[100%] h-[100%]' />                
             </div>
          </div>
         
          
        
          

    </div>
    </div>
        </div>
      </Container>
      {/* <Touch /> */}
      <Footer />
    </>
  )
}
