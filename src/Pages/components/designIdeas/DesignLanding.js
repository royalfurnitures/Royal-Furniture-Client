import React, {Fragment, useEffect, useState} from "react"

  import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
  import PropTypes from 'prop-types';
   
import { Box, Container, Tab, Tabs } from "@mui/material";
import pic from "../../../assets/image/bg/homediv.webp"
import { Link ,useParams } from "react-router-dom";
import { edufurn, interior, medifurn, modular, shopfit } from "./data";
import Touch from "../commercial/Touch";
import Footer from "../Footer";
import Bottom from "../Bottom";
import modt from "../../../assets/image/bg/mod.webp"

   
export function Designideas() {
  const [designData,setDesignData] = useState([]);
  const [value, setValue] = useState(0);
  const [subvalue, setSubvalue] = useState(0);
  const [title, setTitle] = useState('');

  let { pagetype , tabdata } = useParams();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'instant'});
      }, []);

useEffect(()=>{
      // console.log(" pagetype , tabdata ",pagetype,tabdata); 

      if(pagetype === "interio"){
           setDesignData(interior.Tabs)
           setTitle(interior.Title)
      }
      
      if(pagetype === "edufurn"){
          setDesignData(edufurn.Tabs)
          setTitle(edufurn.Title)
      }

      
      if(pagetype === "medifurn"){
          setDesignData(medifurn.Tabs)
          setTitle(medifurn.Title)
      }


      if(pagetype === "modular"){
          setDesignData(modular.Tabs)
          setTitle(modular.Title)
      }


      if(pagetype === "shopfit"){
          setDesignData(shopfit.Tabs)
          setTitle(shopfit.Title)
      }

           setValue(Number(tabdata))       
  },[])
      
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <Fragment>
            
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
          </Fragment>
        );
      }
      
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
      }
      


    const handleChange = (event, newValue) => {
      console.log("value",newValue)
      console.log("event",event)
    setValue(newValue);
    };

    
    
    const data = [
      {
        label: "Kitchen",
        value: "html",
        desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people
        who are like offended by it, it doesn't matter.`,
      },
      {
        label: "living Room",
        value: "react",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
   
      {
        label: "Tv unit",
        value: "vue",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
   
      {
        label: "Wardrobe",
        value: "angular",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
   
      {
        label: "False ceiling",
        value: "svelte",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
    ];
   
    return (
      <Fragment>
        <Container>
             <div className="title-container">
            <div className="gold-line"></div>
            <h1 className=" gilroyBold text-r-tvoi text-xl md:text-2xl lg:text-4xl  text-justify">DESIGN IDEAS</h1>
            </div>
            <h5 className="mb-8 text-sm sm:text-xl text-justify gilroyMedium">{ title }</h5>
            <Box sx={{ maxWidth: "100%", bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
              {
                designData.length >0 && designData.map(item=>
                <Tab label={item.Name} />

                  )
              }
               
                
            </Tabs>
            <div>
                <TabPanel value={value} index={value} className="m-0 p-0">
                     
                     {
                      pagetype === "edufurn" ? 
                      <Fragment>
                      <div className="flex items-center justify-center">
                      <Tabs value={subvalue} onChange={(e, newValue) => { setSubvalue(newValue) ; }}>
                      <Tab label="Steel" />
                      <Tab label="Wood" />
                      <Tab label="Steel Plus Wood" />
                      </Tabs>
                      </div>
                      <TabPanel value={subvalue} index={0}>
                      <div className="grid grid-cols-6 gap-[10px]">
                      {
                        [1,2].map((item,index)=>                       
                        <div className="col-span-6 md:col-span-3  lg:col-span-2">
                        <Link to="/designideas/lshapekitchen">
                        <Card  className="w-full max-w-[26rem] shadow-lg">
                                <CardHeader floated={false} color="blue-gray">
                                <img
                                    src={pic}
                                    alt="ui/ux review check"
                                />
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                <IconButton
                                    size="sm"
                                    color="red"
                                    variant="text"
                                    className="!absolute top-4 right-4 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                    >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                </IconButton>
                                </CardHeader>
                                <CardBody>
                                <div className="mb-3 flex items-center justify-between">
                                    <Typography  color="blue-gray" className="text-sm sm:text-xl text-justify gilroyBold">
                                    Modern L-Shaped Kitchen Design With Pink Backsplash Tiles
                                    </Typography>
                                    <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                    >
                                
                                    </Typography>
                                </div>
                            
                                <div>
                                    <span className="gilroyBold">Size - </span> <span className="gilroyMedium">10x9</span>
                                </div>
                                </CardBody>
                                <CardFooter className="pt-3">
                                <Button size="lg" fullWidth={true} style={{backgroundColor: "#F7AE45"}}>
                                    Get free Quote
                                </Button>
                                </CardFooter>
                            </Card>
                            </Link>
                        </div>
                         )
                        }
                       
                    </div>
                      </TabPanel>
                      <TabPanel value={subvalue} index={1}>
                      <div className="grid grid-cols-6 gap-[10px]">
                      {
                        [1,2,3].map((item,index)=>                       
                        <div className="col-span-6 md:col-span-3  lg:col-span-2">
                        <Link to="/designideas/lshapekitchen">
                        <Card  className="w-full max-w-[26rem] shadow-lg">
                                <CardHeader floated={false} color="blue-gray">
                                <img
                                    src={pic}
                                    alt="ui/ux review check"
                                />
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                <IconButton
                                    size="sm"
                                    color="red"
                                    variant="text"
                                    className="!absolute top-4 right-4 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                    >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                </IconButton>
                                </CardHeader>
                                <CardBody>
                                <div className="mb-3 flex items-center justify-between">
                                    <Typography  color="blue-gray" className="text-sm sm:text-xl text-justify gilroyBold">
                                    Modern L-Shaped Kitchen Design With Pink Backsplash Tiles
                                    </Typography>
                                    <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                    >
                                
                                    </Typography>
                                </div>
                            
                                <div>
                                    <span className="gilroyBold">Size - </span> <span className="gilroyMedium">10x9</span>
                                </div>
                                </CardBody>
                                <CardFooter className="pt-3">
                                <Button size="lg" fullWidth={true} style={{backgroundColor: "#F7AE45"}}>
                                    Get free Quote
                                </Button>
                                </CardFooter>
                            </Card>
                            </Link>
                        </div>
                         )
                        }
                       
                    </div>
                      </TabPanel>
                      <TabPanel value={subvalue} index={2}>
                      <div className="grid grid-cols-6 gap-[10px]">
                      {
                        [1,2,3,4].map((item,index)=>                       
                        <div className="col-span-6 md:col-span-3  lg:col-span-2">
                        <Link to="/designideas/lshapekitchen">
                        <Card  className="w-full max-w-[26rem] shadow-lg">
                                <CardHeader floated={false} color="blue-gray">
                                <img
                                    src={pic}
                                    alt="ui/ux review check"
                                />
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                <IconButton
                                    size="sm"
                                    color="red"
                                    variant="text"
                                    className="!absolute top-4 right-4 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                    >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                </IconButton>
                                </CardHeader>
                                <CardBody>
                                <div className="mb-3 flex items-center justify-between">
                                    <Typography  color="blue-gray" className="text-sm sm:text-xl text-justify gilroyBold">
                                    Modern L-Shaped Kitchen Design With Pink Backsplash Tiles
                                    </Typography>
                                    <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                    >
                                
                                    </Typography>
                                </div>
                            
                                <div>
                                    <span className="gilroyBold">Size - </span> <span className="gilroyMedium">10x9</span>
                                </div>
                                </CardBody>
                                <CardFooter className="pt-3">
                                <Button size="lg" fullWidth={true} style={{backgroundColor: "#F7AE45"}}>
                                    Get free Quote
                                </Button>
                                </CardFooter>
                            </Card>
                            </Link>
                        </div>
                         )
                        }
                       
                    </div>
                      </TabPanel>
                  </Fragment>
                  
                      :
                    <div className="grid grid-cols-6 gap-[10px]">
                      {
                        [1,2,3,4].map((item,index)=>                       
                        <div className="col-span-6 md:col-span-3  lg:col-span-2">
                        <Link to="/designideas/lshapekitchen">
                        <Card  className="w-full max-w-[26rem] shadow-lg">
                                <CardHeader floated={false} color="blue-gray">
                                <img
                                    src={pic}
                                    alt="ui/ux review check"
                                />
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                <IconButton
                                    size="sm"
                                    color="red"
                                    variant="text"
                                    className="!absolute top-4 right-4 rounded-full"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                    >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                </IconButton>
                                </CardHeader>
                                <CardBody>
                                <div className="mb-3 flex items-center justify-between">
                                    <Typography  color="blue-gray" className="text-sm sm:text-xl text-justify gilroyBold">
                                    Modern L-Shaped Kitchen Design With Pink Backsplash Tiles
                                    </Typography>
                                    <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                    >
                                
                                    </Typography>
                                </div>
                            
                                <div>
                                    <span className="gilroyBold">Size - </span> <span className="gilroyMedium">10x9</span>
                                </div>
                                </CardBody>
                                <CardFooter className="pt-3">
                                <Button size="lg" fullWidth={true} style={{backgroundColor: "#F7AE45"}}>
                                    Get free Quote
                                </Button>
                                </CardFooter>
                            </Card>
                            </Link>
                        </div>
                         )
                        }
                       
                    </div>
                      }
                    
                </TabPanel>
            </div>
            </Box>
        </Container>
        {/* <div className='px-3'>
         <Touch image={modt} />
        </div> */}
         <Bottom/>
         <Footer />
      </Fragment>

    );
  }



