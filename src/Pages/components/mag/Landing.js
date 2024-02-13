import { Container } from '@mui/material'
import React from 'react';
import int from "../../../assets/image/bg/interio.webp";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { BlogData } from "../../screens/BlogData";

export default function Landing() {
  console.log("blog",BlogData);
  return (
    <Container>
       <div className="title-container">
        <div className="gold-line"></div>
        <h1 className="title gilroyBold text-r-tvoi text-xl md:text-2xl lg:text-4xl  text-justify">MAGAZINES</h1>
        </div>
        <h5 className="mb-8 text-sm sm:text-xl text-justify gilroyMedium">Explore our captivating magazine for inspiring interior designs. Discover trendsetting decor ideas, expert tips, and stunning visuals to transform your spaces into captivating havens of style and comfort.</h5>
        <div className='grid grid-cols-12 gap-4 mt-[30px]'>
          {
            BlogData.map(blog=> 
            <Card className="mt-6 w-[full] col-span-12 md:col-span-6 lg:col-span-4">
            <Link to={`/magazine/${blog.name}`} className=' appearance-none'>
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={blog.image1}
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <h1 className="text-xl md:text-2xl lg:text-2xl  text-justify gilroyBold" >
            {blog.title1}
            </h1>
            <h5 className='mt-3 text-sm sm:text-xl text-justify gilroyMedium'>
           {blog.desPreview1}
            </h5>
          </CardBody>
          <CardFooter className="pt-0">
            <Button style={{backgroundColor: "#F7AE45"}}>Read More</Button>
          </CardFooter>
          </Link>
          </Card>)
          }
       
        
        </div>

    </Container>
  )
}
