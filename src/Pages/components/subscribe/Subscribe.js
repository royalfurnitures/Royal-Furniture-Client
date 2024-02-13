import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography } from '@material-tailwind/react'
import { Container } from '@mui/material'
import React ,{useState} from 'react';
import sub from "../../../assets/image/bg/subs.webp";
import { RegisterContact } from "../../../API/APIS";

export default function Subscribe() {
  const [email,setEmail] = useState('');
  const [name,SetName] = useState('');
  const [mobileNo,setMobileNo] = useState('');
  const [pincode,setPincode] = useState('');

  const RegisterHandler = async (e)=>{
                       e.preventDefault();
                       console.log("register handler !!!");
                       let data = {
                        Name:name,
                        Email:email,
                        MobileNo:mobileNo,
                        Pincode:pincode
                        }
               let result= await RegisterContact(data);
               console.log("result",result);
              //  setIsRegister(result.isRegistered)
               if(result.isRegistered){
                    setEmail('');
                    setMobileNo('');
                    SetName('');
                    // setMessage(result.message);
               }
               else{
                 
                //  setMessage(result.message);
 
               }
  }
  return (
    <Container>
      <div className='subs-main'>
        <img src={sub} className='subs-cont' />
        <form className='subs-cardcont' onSubmit={RegisterHandler}>
        <Card className=" w-full max-w-[24rem]" style={{backgroundColor: "transparent", boxShadow: "none"}}>
          
          <CardBody className="flex flex-col gap-4">
            <input label="Name" size="lg"  style={{backgroundColor: "#ffffff"}} onChange={(e)=>{SetName(e.target.value)}}  required />
            <input label="email" size="lg" style={{backgroundColor: "#ffffff"}} onChange={(e)=>{setEmail(e.target.value)}} required />
            <input label="number" size="lg" style={{backgroundColor: "#ffffff"}} onChange={(e)=>{setMobileNo(e.target.value)}} required />
            <div className="-ml-2.5">
              <Checkbox label="send updates on whatsapp" color="orange" style={{color: "#ffffff"}} required />
            </div>
            <input label="current residence pincode" size="lg" style={{backgroundColor: "#ffffff"}} onChange={(e)=>{setPincode(e.target.value)}} required />
          </CardBody>
          <CardFooter className="pt-0">
            <button type="submit" fullWidth className="bg-r-gold" >
             Get FREE Quote
            </button>
            <Typography variant="small" className="mt-6 gilroyLight" color='white'>
             By submitting this form , you agree to <span className="text-r-gold">privacy policy</span>  & <span className="text-r-gold">terms and conditions</span>
            </Typography>
          </CardFooter>
        </Card>
        </form>
      </div>
    </Container>
    
  )
}
