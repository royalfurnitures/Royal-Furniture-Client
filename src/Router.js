import React, { Fragment, Suspense, useState } from 'react';
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode'; 
import Error404 from './Pages/components/Error404';
import FrontPage from './Pages/components/commercial/FrontPage';
import { Designideas } from "./Pages/components/designIdeas/DesignLanding"

const Home = React.lazy(() => import('./Pages/Home'));
const Navbar = React.lazy(() => import('./Pages/components/Navbar'));
const How = React.lazy(() => import('./Pages/How'));
const Interio = React.lazy(() => import('./Pages/screens/Interio'));
const Magazine = React.lazy(() => import('./Pages/screens/Magazine'));
const Modular = React.lazy(() => import('./Pages/screens/Modular'));
const Commercial = React.lazy(() => import('./Pages/screens/Commercial'));
const Edufurn = React.lazy(() => import('./Pages/screens/Edufurn'));
const Medifurn = React.lazy(() => import('./Pages/screens/Medifurn'));
const Shopfit = React.lazy(() => import('./Pages/screens/Shopfit'));
const Detaileddesignid = React.lazy(() => import('./Pages/screens/Detaileddesignid'));
const MagDetails = React.lazy(() => import('./Pages/screens/MagDetails'));
const About = React.lazy(() => import('./Pages/screens/About'));
const ComWorkDet = React.lazy(() => import('./Pages/screens/ComWorkDet'));
const Showroom = React.lazy(() => import('./Pages/screens/Showroom'));
const Contact = React.lazy(() => import('./Pages/screens/Contact'));
const IntHow = React.lazy(() => import('./Pages/screens/IntHow'));
const { Admin } = React.lazy(() => import('./Pages/ADMIN PART/Admin'));
const Video = React.lazy(() => import('./Pages/ADMIN PART/Video'));
const Photo = React.lazy(() => import('./Pages/ADMIN PART/Photo'));
const AdminInterio = React.lazy(() => import('./Pages/ADMIN PART/Interio'));
const Adminmodular = React.lazy(() => import('./Pages/ADMIN PART/Modular'));
const Adminedufurn = React.lazy(() => import('./Pages/ADMIN PART/EduFurn'));
const AdminMediFurn = React.lazy(() => import('./Pages/ADMIN PART/MediFurn'));
const AdminShopfit = React.lazy(() => import('./Pages/ADMIN PART/Shopfit'));
const AdminContact = React.lazy(() => import('./Pages/ADMIN PART/Contact'));
const Partner = React.lazy(() => import('./Pages/components/Partner/Partner'));
const PrivacyPolicy = React.lazy(() => import('./Pages/screens/PrivacyPolicy'));
const Login = React.lazy(() => import('./Pages/ADMIN PART/Login'));





let responsePayload ;
let routes ;
let login ;
export default function Router() {
  const token = Cookies.get('mycookie');
  if(token != undefined){
    responsePayload = jwtDecode(token);
    login = responsePayload.isloggedin;  
  } 
  
  const [isloggedon,setIsloggedon] = useState(login || false)
  return (
    <Fragment>
    <Suspense fallback={<FrontPage/>}>
    <Navbar />
    <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/:PageName/howitworks'  element={<IntHow />} />
        <Route path='/designideas'  element={<Designideas />} />
        <Route path='/interio'  element={<Interio />} />
        <Route path='/magazine'  element={<Magazine />} />
        <Route path='/modular'  element={<Modular />} />
        <Route path='/commercial'  element={<Commercial />} />
        <Route path='/edufurn'  element={<Edufurn />} />
        <Route path='/medifurn'  element={<Medifurn />} />
        <Route path='/shopfit'  element={<Shopfit />} />
        <Route path='/designideas/lshapekitchen'  element={<Detaileddesignid />} />
        <Route path='/magazine/:blogmetadata'  element={<MagDetails />} />
        <Route path='/about'  element={<About />} />
        <Route path='/privacypolicy'  element={<PrivacyPolicy />} />
        <Route path='/executive/works'  element={<ComWorkDet />} />
        <Route path='/showroom'  element={<Showroom />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/associatewith' element={<Partner />} />        
        <Route path="/login" element={<Login/>}/>
        <Route path="/error404" element={<Error404/>} />
        <Route path='*' element={<Navigate to ='/error404'/>} />
        {
        responsePayload?.Role === "Admin" ?        <>
        <Route path='/adminvideo' element={<Video/>} />
        <Route path='/adminphoto' element={<Photo/>} />
        <Route path='/admininterio' element={<AdminInterio/>} />
        <Route path='/adminmodular' element={<Adminmodular/>} />
        <Route path='/adminedufurn' element={<Adminedufurn/>} />
        <Route path='/adminmedifurn' element={<AdminMediFurn/>} />

        <Route path='/adminshopfit' element={<AdminShopfit/>} />
        <Route path='/admincontact' element={<AdminContact/>} />
        {/* <Route path='/admin' element={<Admin/>} />  */}
        </>
        :
        null
        }
    </Routes>
    </Suspense>
    </Fragment>
   
  )
}
