import React, { useEffect, useState } from 'react'
import { Admin } from './Admin'
import { DeleteContact, GetAllContacts } from '../../API/APIS';
import FrontPage from '../components/commercial/FrontPage';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popup from './Popup';

const Contact = () => {
    const [contactlist,setContactlist] = useState([]);
    const [loading,setLoading] = useState(false);
    const [deletedata,setDeleteData] = useState('');
   const [isDeletePopup,setIsDeletePopup] = useState(false);

    useEffect(()=>{
         GetAllContactHandler();
    },[])

    const GetAllContactHandler = async ()=>{
        setLoading(true);
        let result= await GetAllContacts();
        // console.log("response",result)
         setContactlist(result.data);
         setLoading(false);
    }

    const DeleteContactHandler = async(id)=>{
        let result= await DeleteContact(id);
        GetAllContactHandler();
    }
    const handleDeletemodel = (action)=>{
      if(action === true){
        DeleteContactHandler(deletedata);
      }
      setIsDeletePopup(false);
    }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-white z-50'>
         <Admin/>
         {
        isDeletePopup ?
        <Popup handleModel={handleDeletemodel} isDelete={true} />
        :
        null
        }
         {
        loading ?
        <FrontPage/>:
        null
       }
         <div className='lg:ml-[300px] mt-[100px] py-8 px-0'>
         <div className='grid grid-cols-12 gap-[10px] overflow-y-scroll pb-20 px-4 h-[80vh]'>
             {contactlist.length > 0 && contactlist?.map(item=>
              <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                 {/* <div className='border p-4 rounded-lg'>

                   
                    <div className='mt-3 font-semibold'>Created Time : {new Date(item.createdAt).toLocaleString()}</div>
                    <div className='mt-3 font-semibold'>Name : {item.Name}</div>
                    <div className='mt-3 font-semibold'>Email :{item.Email}</div>
                    <div className='mt-3 font-semibold'>Mobile No :{item.MobileNo}</div>
                    <div className='mt-3 mb-3 font-semibold'>Pincode : {item?.Pincode ? item.Pincode : "-" }</div>
                    <div className='flex items-center justify-center'>
                        <button className='p-2 rounded-xl bg-red-500 text-white' onClick={()=>{DeleteContactHandler(item._id)}}>Delete</button>
                    </div>
                        
                         
                       
                 </div> */}
                 <Card variant="outlined">
                 <CardContent>
                 <Typography variant="h5" component="div">
                  Name : {item.Name}
                  </Typography>
                  <Typography  color="text.secondary">
                  Email : {item.Email}
                  </Typography>
                  <Typography variant="body2">
                  Mobile No : {item.MobileNo}      
                  </Typography>
                  {item?.Pincode ?
                  <Typography variant="body2">
                  Pincode : {item.Pincode}      
                  </Typography>
                  :
                  null
                   }
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Created Time : {new Date(item.createdAt).toLocaleString()}
                  </Typography>
                  
                  
                 
                </CardContent>
                <CardActions>
                  <Button size="small" color='warning' onClick={()=>{setIsDeletePopup(true);setDeleteData(item._id)}}>Delete</Button>
                </CardActions>
                </Card>
             </div>)}
          </div>
         </div>
    </div>
  )
}

export default Contact