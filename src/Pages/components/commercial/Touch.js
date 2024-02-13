import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Input,
    Checkbox,
    CardFooter,
  } from "@material-tailwind/react";

import subs from "../../../assets/image/bg/living.webp"
   
  export default function Touch(props) {
    return (
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
        <Input placeholder="Name" size="lg" bg="white"  className="!border mb-7 !border-gray-300 !bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}  />
     
            <Input placeholder="email" size="lg" className="!border mb-3 !border-gray-300 !bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}  />
            <Input placeholder="number" size="lg" className="!border m-b3 !border-gray-300 !bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
         style={{backgroundColor:"white"}}
        labelProps={{
          className: "hidden",
        }}  />
            <div className="-ml-2.5 flex justify-start items-center mb-3">
              <Checkbox color="orange" style={{color: "#ffffff"}} /> <p style={{color: "#ffffff"}} className="gilroyMedium" >send updates on whatsapp</p>
            </div>
            <Input placeholder="current residence pincode" size="lg" className="!border mb-3 !border-gray-300 !bg-white text-black shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        labelProps={{
          className: "hidden",
        }}  />
            <Button fullWidth className="bg-r-gold shadow-0 hover:shadow-0 rounded-[45px]">
              GET REGISTERED
            </Button>
            <Typography variant="small" className="mt-6 gilroyLight" color='white'>
             By submitting this form , you agree to <span className="text-r-gold">privacy policy</span>  & <span className="text-r-gold">terms and conditions</span>
            </Typography>
          </CardBody>
         
      </Card>
      </div>
    );
  }