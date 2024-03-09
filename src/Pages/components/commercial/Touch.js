import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Input,
    Checkbox,
    CardFooter,
    Dialog
  } from "@material-tailwind/react";

import subs from "../../../assets/image/bg/living.webp"
import { RegisterContact } from "../../../API/APIS";
import React ,{ Fragment, useState } from "react";
import { MdOutlineError } from "react-icons/md";
import { Link } from "react-router-dom";
   
  export default function Touch(props) {
    const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [mobileNo,setMobileNo] = useState('');
  const [pincode,setPincode] = useState('');
  const [message,setMessage] = useState('');
  const [isRegister,setIsRegister] = useState('');
  const [openalert,setOpenalert] = useState(false);
  const handlealertOpen = ()=> setOpenalert((cur) => !cur);


  const HandleContact = async (e)=>{
         e.preventDefault();

          // handlealertOpen();
    
            let data = {
                       Name:name,
                       Email:email,
                       MobileNo:mobileNo,
                       Pincode:pincode
                       }
              let result= await RegisterContact(data);
              console.log("result",result);
              setIsRegister(result.isRegistered)
              if(result.isRegistered){
                   setEmail('');
                   setMobileNo('');
                   setName('');
                   setPincode('');
                   setMessage('');
                   handlealertOpen();
              }
              else{
                 setMessage(result.message);
                 setTimeout(()=>{
                  setMessage('');
                 },3000)
              }
        
  }

    return (
      <Fragment>
     <div className="pb-3 mb:pb-0  md:my-10 flex align-center justify-center " >
     
      <Card className="w-full max-w-[60rem] h-full  min-h-[35rem] flex-col md:flex-row" style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-full md:w-3/5 shrink-0 rounded-b-none md:rounded-l-[20px] md:rounded-r-none"
        >
          <img
            src={props.image}
            alt="card-image"
            className="h-[100%] w-[100%] object-cover"
          />
        </CardHeader>
        <CardBody className="subs-cardcont md:rounded-r-[20px] rounded-b-[20px] md:rounded-l-none"  style={{background: 'linear-gradient(to right, #6C3E2E, #BB996B)'}}>
        {message && <div className="flex items-center w-[100%] px-4 py-2 bg-[#cf0505] text-white rounded-[10px] gap-3"><MdOutlineError />{message}</div> }
        <Input onChange={(e)=>setName(e.target.value)} value={name} placeholder="Name" size="lg" bg="white"  className="!border mb-7 !border-gray-300 !bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}  />
     
            <Input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="email" size="lg" className="!border mb-3 !border-gray-300 !bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}  />
            <Input onChange={(e)=>setMobileNo(e.target.value)} value={mobileNo} placeholder="number" size="lg" className="!border m-b3 !border-gray-300 !bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
         style={{backgroundColor:"white"}}
        labelProps={{
          className: "hidden",
        }}  />
            <div className="-ml-2.5 flex justify-start items-center mb-3">
              <Checkbox color="orange" style={{color: "#ffffff"}} /> <p style={{color: "#ffffff"}} className="gilroyMedium" >send updates on whatsapp</p>
            </div>
            <Input onChange={(e)=>setPincode(e.target.value)} value={pincode} placeholder="current residence pincode" size="lg" className="!border mb-3 !border-gray-300 !bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}  />
            <Button onClick={HandleContact} fullWidth className="bg-r-gold shadow-0 hover:shadow-0 rounded-[45px]">
              GET REGISTERED
            </Button>
            <Typography variant="small" className="mt-6 gilroyLight" color='white'>
             By submitting this form , you agree to <Link to="/privacypolicy" style={{textDecoration:"none"}} className="text-r-gold">privacy policy</Link>  & <span className="text-r-gold">terms and conditions</span>
            </Typography>
          </CardBody>
         
      </Card>
      </div>
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
      </Fragment>
    );
  }