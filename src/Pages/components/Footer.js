import { Container } from '@mui/material'
import React ,{ useState  , useEffect } from 'react';
import flogo from '../../assets/image/Logo/flogo.webp'
import ins from '../../assets/image/Logo/ins.webp'
import fb from '../../assets/image/Logo/fb.webp'
import yt from '../../assets/image/Logo/yt.webp'
import t from '../../assets/image/Logo/t.webp'
import { FiMail } from 'react-icons/fi';
import { MdCall } from 'react-icons/md';
import Touch from "../components/commercial/Touch";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Dialog,
  CardBody,
  CardFooter
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { RegisterContact } from '../../API/APIS';


export default function Footer() {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [mobileNo,setMobileNo] = useState('');
  const [message,setMessage] = useState('');
  const [isRegister,setIsRegister] = useState('');
  const [openalert,setOpenalert] = useState(false);
  const handlealertOpen = ()=> setOpenalert((cur) => !cur);


  const HandleContact = async (e)=>{
    e.preventDefault();

          handlealertOpen();
    
            let data = {
                       Name:name,
                       Email:email,
                       MobileNo:mobileNo
                       }
              let result= await RegisterContact(data);
              console.log("result",result);
              setIsRegister(result.isRegistered)
              if(result.isRegistered){
                   setEmail('');
                   setMobileNo('');
                   setName('');
                   setMessage(result.message);
                   handlealertOpen();
              }
              else{
                setMessage(result.message);
              }
        
  }

  return (
    <div className='' style={{ minHeight: "50vh", background: 'linear-gradient(to right, #6C3E2E, #BB996B)',}}>
      <Container >
         <div className='flex flex-col md:flex-row mb-3'>
        <div className='flex flex-col gap-10 items-center justify-center md:justify-start'>
             {/* Tailwind change Css code start */}
        <div className='pt-10'>
        
          <div className=' flex flex-col items-center justify-center md:justify-start'>
            <div className='pb-4 text-center lg:text-start w-[100%] '>
              <img src={flogo} className='flogo w-full' />
            </div>
            <div className=' w-[100%] flex items-center justify-center md:justify-start mt-3'>
                <a href='https://www.facebook.com/RoyalFurn.in/' target='_blank'><img className='m-[10px] h-[15px]  sm:h-[15px] ' src={fb} /></a>
                <a href='https://instagram.com/' target='_blank'><img className='m-[10px] h-[15px]  sm:h-[15px]' src={ins} /></a>
                <a href='https://www.youtube.com/channel/UCOYKEWcJcF7_43a3y8o2yDA' target='_blank'><img className='m-[10px] h-[15px]  sm:h-[15px]' src={yt} /></a>
                <a href='https://twitter.com/royalfurn1' target='_blank'><img className='m-[10px] h-[15px]  sm:h-[15px]' src={t} /></a>
              </div>
          </div>
        </div>
        {/* Tailwind change Css code End */}
        <div className='flex flex-col items-left justify-center md:justify-start w-[100%]'>
        {/* <hr className='style14' /> */}
        <h5 className='text-white gilroyRegular text-xl font-bold mb-2 pl-2 flex items-center justify-center md:justify-start w-[100%]  '>Contact Us</h5>
                <div className='pl-2 flex items-center justify-center md:justify-start w-[100%] gap-[10px]'  >
                    <FiMail size="18px" color='white' />
                    <p className='gilroyBold text-sm md:text-md lg:text-lg text-white'>info@royalfurn.in</p>
                </div>
                <div className='flex flex-col items-center  w-[100%] text-white text-lg lg:text-xl pl-2'  >
                    
                    {/* <div className='flex flex-row items-left justify-left'>
                    <MdCall size="18px" color='white' className='mt-1'/>
                    <div className='text-left'>+91-98427 35863 </div>
                    </div>
                    <div className='flex flex-row items-left justify-left'>
                    <MdCall size="18px" color='white' className='mt-1'/>
                    <span className='text-left'>+91-94431 35863  </span>
                    </div> */}
                     <div className='flex flex-row  items-center justify-center md:justify-start w-[100%] '>
                    <span className=' text-white gilroyRegular  font-bold mt-3'>Customer Care   </span>
                    </div>
                    
                    <div className='flex flex-row mt-1 items-center justify-center md:justify-start w-[100%]'>
                    <MdCall size="18px" color='white' className='mt-1'/>
                    <span className='text-center text-sm md:text-md lg:text-lg lg:text-left'> &nbsp;+91-93131 63131  </span>
                    </div>
                   
                    
                    
                    <div className='gilroyBold text-lg flex flex-col sm:flex-col text-white'>
                    </div>
                </div>
         
        </div>

       
        </div>
         <div className='flex flex-grow'></div>
        <div className='flex justify-center items-center flex-row'>
          
          <div className='py-12 text-center gap-10 justify-stretch items-stretch flex-row'>
            <h5 className='text-white gilroyRegular text-lg md:text-xl font-bold'>Our Branches</h5>
            
         {/* Tailwind change Css code start */}
            <div className='p-1 sm:p-5 '>
              <div className=' justify-stretch items-stretch flex-row'>
              <div className=' mx-1 sm:mx-3 w-[310px] mt-2 md:mt-5'>
              <h6 className='text-white gilroyRegular font-bold text-[16px] md:text-[18px]'>ERODE</h6>
              <h6 className='text-white gilroyRegular md:px-0 px-3  text-[12px] md:text-[16px] '>3-3, Kanjikovil Main Road,
              Thiththampalayam Pirivu,<br />
              Perundurai,
              Erode - 638 052</h6>
              <h6 className='text-white gilroyBold text-[13px] md:text-[14px] mt-1'> Contact- Hemachandhran  +91-9842935863 </h6>

              </div>
              <div className='   mx-1 sm:mx-3 w-[310px] mt-3 md:mt-5'>
              <h6 className='text-white gilroyRegular font-bold text-[16px] md:text-[18px]'>COIMBATORE</h6>
              <h6 className='text-white gilroyRegular text-[12px] md:px-0 px-3 md:text-[16px]'>New Door No.188/189,
              (Old Door No.56),
              Ward No.29, Diwan Bahadur Road,
              R S Puram,
              Coimbatore - 641 002.</h6>
              <h6 className='text-white gilroyBold text-[13px] md:text-[14px] mt-1'>Contact- Vishnu  +91-9942535863 </h6>
              </div>
              </div>
            </div>
         {/* Tailwind change Css code End */}

          </div>
        </div>
        </div>
        

        
     
    

        <div>
          {/* <hr className='style14' /> */}
          {/* <div className='p-12 career-card'> */}
          {/* <Card color="transparent" shadow={false}> */}
            {/* <Typography variant="h4" className="text-white gilroyRegular">
              Start your career with Royal Furn!
            </Typography>
            <Typography color="gray" className="mt-1 gilroyRegular text-white">
              Enter your details to register.
            </Typography> */}
            {/* {
              isRegister ?  
            
            <Typography color="green" className="mt-1 gilroyRegular ">
              {message &&  message }
            </Typography>
            :
            <Typography color="red" className="mt-1 gilroyRegular ">
              {message &&  message }
            </Typography>
            }
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={(e)=>{HandleContact(e)}}>
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Name" type="text" required value={name} onChange={(e)=>{setName(e.target.value)}} />
                <Input size="lg" label="Email" type="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <Input type="text" size="lg"maxLength={10}  label="Mobile no." required value={mobileNo} onChange={(e)=>{setMobileNo(e.target.value)}} />
              </div>
              <Checkbox
              color='amber'
              required
                label={
                  <Typography
                    variant="small"
                    color="amber"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6 gilroyBold text-white text-lg" fullWidth color='amber' type='submit'>
                Register
              </Button>
              
            </form> */}
          {/* </Card> */}
        {/* </div> */}
        </div>
        <div>
          <hr className='text-white font-bold' />
          <div className='flex md:flex-row flex-col py-3 w-[100%]'>
          <div className='flex-1 md:justify-start items-center justify-center w-[100%]' style={{display: "flex", gap: "10px", color: "#ffffff", padding: "5px"}}>
          <Link to='/privacypolicy'>
          <p className='gilroyRegular text-[12px] md:text-sm'>
            POLICIES &nbsp; |
          </p>
          
          </Link>
          <p className='gilroyRegular text-[12px] md:text-sm'>
            TERMS & CONDITIONS
          </p>
          |
          <Link to='/contact'>
          <p className='gilroyRegular text-[12px] md:text-sm'>
            CONTACT US
          </p>
          </Link>
          </div>
          <div className='flex-1 flex md:justify-end items-center justify-center text-[12px] md:text-sm  w-[100%]   ' style={{ color: "#ffffff", padding: "5px"}}>
            <a href='https://www.thedottech.in/' target='_blank'>POWERED BY THEDOT TECH</a>
          </div>
          </div>
        </div>
      </Container>
      
      <React.Fragment>
      <Dialog
        size="sm"
        open={openalert}
        handler={handlealertOpen}
        className="bg-transparent drop-shadow-md"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
          <Typography variant="h4" color="gray" className='gilroyBold tracking-widest text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 absolute cursor-pointer right-[10px] top-[10px]" onClick={handlealertOpen}>
           <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>

            </Typography>
          <Typography variant="h5" className='gilroyBold tracking-widest text-left'>
         
 <div className="text-r-tvoi flex">
  <div> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
</svg> 
</div>
<div className="ml-2">
  Your contact details have been received successfully. We'll be in touch with you soon.
</div>
</div>
          </Typography>
          </CardBody>
          <CardFooter className="pt-0">
           
          </CardFooter>
        </Card>
        
      </Dialog>
    </React.Fragment>
    </div>
  )
}
