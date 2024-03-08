import Cookies from 'js-cookie';
import React ,{ useState } from 'react'
import { Link ,NavLink ,useLocation ,useNavigate } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";


export const Admin = () => {
    const [tabindex,setTabIndex] = useState(0);
    const [ismenu,setIsMenu] = useState(false);
    const location = useLocation();
    let navigate = useNavigate();
    const currentPathname = location.pathname;
    console.log("current pathname" ,currentPathname);
    const currenttab = currentPathname.replace(/\//g, '');
   
    const MenuOpenHandler= ()=>{
        setIsMenu(!ismenu);
    }

    const HandleLogout = ()=>{
      Cookies.remove('mycookie');
      navigate('/');
  }


  return (

    <div className='bg-white'>
      <div className='flex items-center fixed left-0 right-0 top-0 text-black z-50 text-[20px] lg:text-[20px]' > 
        <div className='block lg:hidden' onClick={()=>MenuOpenHandler()}>
        <div className='flex items-center'>
        <TiThMenu className='' />
        Admin Menu
        </div>
        </div>
        </div>
        <div className='text-lg lg:text-2xl font-bold text-orange-500 flex items-center justify-center py-10 h-[60px] shadow-sm fixed left-0 right-0 top-0 border bg-white '> Admin </div>
        {/* <button className='block lg:hidden' onClick={()=>MenuOpenHandler()}>Menu</button> */}
         <div className={` ${ismenu ? "block" :"hidden"} shadow-sm h-[93vh] lg:h-[100vh]  lg:block  lg:w-[300px]  border-[2px]  px-4 fixed z-10 top-[60px] lg:top-[80px] bg-white `}>
          <div className='relative mb-10'>
             <button className='block lg:hidden absolute right-0' onClick={()=>MenuOpenHandler()}>X</button>              
          </div>

            <div className='flex gap-[10px]  flex-col px-4'>
               {/* <Link to="/"><div className={`${currenttab === "home" ? "bg-orange-400 rounded-lg p-2 text-white cursor-default text-bold":"p-2 cursor-pointer text-bold"}`} >Home</div></Link> */}
               <Link to="/adminphoto"><div className={`${currenttab === "adminphoto" ? "bg-orange-400 rounded-lg p-2 text-white cursor-default text-bold":"p-2 cursor-pointer text-bold"}`} onClick={()=>{setTabIndex(0)}}>Photo</div></Link>
               <Link to="/adminvideo"><div className={`${currenttab === "adminvideo" ? "bg-orange-400 rounded-lg p-2 text-white cursor-default text-bold":"p-2 cursor-pointer text-bold"}`} onClick={()=>{setTabIndex(1)}}>Video</div></Link>
               <Link to="/admininterio"><div className={`${currenttab === "admininterio" ? "bg-orange-400 rounded-lg p-2 text-white cursor-default text-bold":"p-2 cursor-pointer text-bold"}`} onClick={()=>{setTabIndex(2)}}>Interio</div></Link>
               <Link to="/adminmodular"><div className={`${currenttab === "adminmodular" ? "bg-orange-400 rounded-lg p-2 text-white cursor-default text-bold":"p-2 cursor-pointer text-bold"}`} onClick={()=>{setTabIndex(3)}}>Modular</div></Link>
               <Link to="/adminedufurn"><div className={`${currenttab === "adminedufurn" ? "bg-orange-400 rounded-lg p-2 text-white cursor-default text-bold":"p-2 cursor-pointer text-bold"}`} onClick={()=>{setTabIndex(4)}}>EduFurn</div></Link>
               <Link to="/adminmedifurn"><div className={`${currenttab === "adminmedifurn" ? "bg-orange-400 rounded-lg p-2 text-white cursor-default text-bold":"p-2 cursor-pointer text-bold"}`} onClick={()=>{setTabIndex(5)}}>MediFurn</div></Link>
               <Link to="/adminshopfit"><div className={`${currenttab === "adminshopfit" ? "bg-orange-400 rounded-lg p-2 text-white cursor-default text-bold":"p-2 cursor-pointer text-bold"}`} onClick={()=>{setTabIndex(6)}}>ShopFit</div> </Link> 
               <Link to="/admincontact"><div className={`${currenttab === "admincontact" ? "bg-orange-400 rounded-lg p-2 text-white cursor-default text-bold":"p-2 cursor-pointer text-bold"}`} onClick={()=>{setTabIndex(7)}}>Contact</div></Link>
               <Link to="/admindesignideas"><div className={`${currenttab === "admindesignideas" ? "bg-orange-400 rounded-lg p-2 text-white cursor-default text-bold":"p-2 cursor-pointer text-bold"}`} onClick={()=>{setTabIndex(8)}}>Design Ideas</div></Link>
               <div className={`${currenttab === "logout" ? "bg-orange-400 rounded-lg p-2 text-white cursor-default text-bold":"p-2 cursor-pointer text-bold"}`} onClick={()=>{HandleLogout()}}>Logout</div>                 
            </div>
         </div>
    </div>
  )
}
