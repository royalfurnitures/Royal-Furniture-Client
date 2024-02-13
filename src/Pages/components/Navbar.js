import React ,{Fragment, useState} from "react";
import { RegisterContact } from "../../API/APIS";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  Dialog,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";

import royal from "../../assets/image/Logo/droplogo.webp"

import Logo from "../../assets/image/Logo/logo.webp"
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
 
// profile menu component
const profileMenuItems = [
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  

 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-r-gold p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 
// nav list menu
const navListMenuItems = [
  {
    title: "Interio",
    description:"Master the art of living like the Royals",
    link: "/interio"

  },
  {
    title: "Modular",
    description:"Our product for crafting efficient and appealing office interiors",
    link: "/modular"

  },
  {
    title: "Edufurn",
    description:"Our product for creating inspiring school and college interiors",
    link: "/edufurn"

  },
  
  {
    title: "Medifurn",
    description:"Our product for crafting functional and welcoming hospital interiors",
    link: "/medifurn"
  },
  {
    title: "Shopfit",
    description:"Our product for designing and constructing appealing retail shop interiors",
    link: "/shopfit"
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = navListMenuItems.map(({ title, description, link }) => (
    <a href={link} key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1 gilroyBold uppercase">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" variant="small" className="font-bold">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2  lg:flex lg:rounded-full gilroyBold text-sm hover:text-r-brown text-r-brown"
            >
               OUR PRODUCTS{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <Card
            style={{backgroundColor: "#F7AE45"}}
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md  bg-r-gold"
          >
            <img src={royal} className="w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden ">
        {/* <Square3Stack3DIcon className="h-[18px] w-[18px]" />  */}
        Our Products{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
// nav list component
const navListItems = [
  {
    label: "INTERIO",
    icon: UserCircleIcon,
    link: "/interio"
  },
 
  {
    label: "MAGAZINES",
    icon: CubeTransparentIcon,
    link: "/magazine"

  },
  {
    label: "SHOWROOM",
    icon: CodeBracketSquareIcon,
    link: "/showroom"
  },
];
 
const secNavListItems = [

  {
    label: "ABOUT",
    link: "/about"
  },
  {
    label: "POLICIES",
    link:"/privacypolicy"
  },
  {
    label: "CONTACT",
    link: "contact"
  },
  {
    label: "ASSOCIATION WITH",
    link: "associatewith"
  },
];
 
function NavList({IsNavOpenhandler}) {
  return (
    <ul className="  flex flex-col gap-2 lg:mb-0 lg:mt-0 py-3 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, link }, key) => (
         <Fragment>
          {IsNavOpenhandler ?
         <Link to={link} onClick={()=>IsNavOpenhandler()} >
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full gilroyBold text-sm text-r-brown hover:text-r-brown font-bold">
            
            {label}
          </MenuItem>
        </Typography>
        </Link>
        :
        <Link to={link}  >
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full gilroyBold text-sm text-r-brown hover:text-r-brown font-bold">
            
            {label}
          </MenuItem>
        </Typography>
        </Link>

          }

        </Fragment>
      ))}
       {secNavListItems.map(({ label, icon, link }, key) => (
        <Fragment>
          {IsNavOpenhandler ?
          <Link to={link} className="block lg:hidden" onClick={IsNavOpenhandler}>
          <Typography
            key={label}
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full gilroyBold text-sm text-r-brown hover:text-r-brown font-bold">
              
              {label}
            </MenuItem>
          </Typography>
          </Link>
          :
        <Link to={link} className="block lg:hidden">
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full gilroyBold text-sm text-r-brown hover:text-r-brown font-bold">
            
            {label}
          </MenuItem>
        </Typography>
        </Link>
          }
        </Fragment>
      ))}
      <NavListMenu />

     

    </ul>
  );
}
 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [email,setEmail] = useState('');
  const [name,SetName] = useState('');
  const [mobileNo,setMobileNo] = useState('');
  const [pincode,setPincode] = useState('');
  const [message,setMessage] = useState('');
  const [isRegister,setIsRegister] =useState('');
  const [openalert,setOpenalert] = useState(false);
  const handlealertOpen = ()=> setOpenalert((cur) => !cur);

  const RegisterHandler = async (e)=>{
                     e.preventDefault();
                     
                         
                      
                      //  console.log("register handler !!!");
                       let data = {
                        Name:name,
                        Email:email,
                        MobileNo:mobileNo,
                        Pincode:pincode
                        }
               let result= await RegisterContact(data);
              //  console.log("result",result);
               setIsRegister(result.isRegistered)
               if(result.isRegistered){
                    setEmail('');
                    setMobileNo('');
                    SetName('');
                    setMessage(result.message);
                    setPincode('');
                    setTimeout(()=>{setMessage('')},3000);
                    handleOpen();
                    handlealertOpen();
                    
               }
               else{
                 
                 setMessage(result.message);
 
               }
  }
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
 
  const mobilemenu = () => setIsNavOpen((cur) => !cur);

  return (
    <>
    
    <Navbar className="sticky inset-0 z-50 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
    <Container>
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <img src={Logo} className="logo-nav w-[100px] md:w-[170px]" />
          </Link>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList  />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        
        {/* <ProfileMenu /> */}
      </div>
     </Container>
      <MobileNav open={isNavOpen} >
         <div className=" overflow-y-scroll max-h-[100vh] pb-10">
        <NavList IsNavOpenhandler={toggleIsNavOpen} />
        </div>
      </MobileNav>
    </Navbar>
   
    <Navbar className="sticky inset-0 z-49 h-max max-w-full rounded-none py-1 px-4 lg:px-8 lg:py-1 hidden  lg:block">
    <Container>
      <div className="flex items-center justify-between  text-blue-gray-900">
      <div style={{width: "200px"}}>

      </div>
    <ul className="mb-2 mt-1 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {secNavListItems.map((list, key) => (
        <Link to={list.link}>
        <Typography
          key={list.label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full gilroyBold text-xs text-r-brown hover:text-r-brown font-bold">
            {list.label}
          </MenuItem>
        </Typography>
        </Link>
      ))}
    </ul>
    <Button className="bg-r-gold rounded-full gilroyLight text-sm" onClick={handleOpen}>
      Get Free Consultation
    </Button>
      </div>
      </Container>
    </Navbar>

    <React.Fragment>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent drop-shadow-md"
      >
        <form onSubmit={RegisterHandler}>
         
        <Card className="mx-auto w-full max-w-[24rem]">
        <div className="text-3xl text-gray-300 font-bold absolute -right-[0px] -top-[30px] cursor-pointer" onClick={handleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  cursor-pointer  " >
           <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </div>

          <CardHeader
            className="mb-4 grid h-28 place-items-center quote-bg"
          >
            <Typography variant="h4" color="white" className='gilroyBold tracking-widest text-center'>
            Unveil the Beauty <br/> Within Your Home!
            </Typography>
            
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
          <Typography color={isRegister ? "green": "red"}>
                 {message}
          </Typography>
            <Input label="Name" size="lg" value={name} required onChange={(e)=>{SetName(e.target.value)}} />
            <Input label="email" size="lg" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <Input label="number" size="lg" required value={mobileNo} maxLength={10} onChange={(e)=>{setMobileNo(e.target.value)}} />
            <div className="-ml-2.5">
              <Checkbox label="send updates on whatsapp" color="orange" />
            </div>
            <Input label="current residence pincode" value={pincode} size="lg" onChange={(e)=>{setPincode(e.target.value)}} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button  fullWidth className="bg-r-gold" type="submit">
             Get FREE Quote
            </Button>
            <Typography variant="small" className="mt-6 gilroyLight">
             By submitting this form , you agree to <span className="text-r-gold">privacy policy</span>  & <span className="text-r-gold">terms and conditions</span>
            </Typography>
          </CardFooter>
        </Card>
        </form>
      </Dialog>
    </React.Fragment>

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
   </>
  );
}