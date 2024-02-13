import React, { useEffect, useState } from 'react'
import { Admin } from './Admin'
import { DeleteContact, GetAllContacts } from '../../API/APIS';

const Contact = () => {
    const [contactlist,setContactlist] = useState([]);

    useEffect(()=>{
         GetAllContactHandler();
    },[])

    const GetAllContactHandler = async ()=>{
        let result= await GetAllContacts();
        console.log("response",result)
         setContactlist(result.data);
    }

    const DeleteContactHandler = async(id)=>{
        let result= await DeleteContact(id);
        GetAllContactHandler();
    }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-white z-50'>
         <Admin/>
         <div className='lg:ml-[300px] mt-[100px] p-8'>
         <div className='grid grid-cols-12 gap-[10px] overflow-y-scroll pb-10 h-[80vh]'>
             {contactlist.length > 0 && contactlist?.map(item=>
              <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                 <div className='border p-4 rounded-lg'>

                   
                    <div className='mt-3 font-semibold'>Created Time : {new Date(item.createdAt).toLocaleString()}</div>
                    <div className='mt-3 font-semibold'>Name : {item.Name}</div>
                    <div className='mt-3 font-semibold'>Email :{item.Email}</div>
                    <div className='mt-3 font-semibold'>Mobile No :{item.MobileNo}</div>
                    <div className='mt-3 mb-3 font-semibold'>Pincode : {item?.Pincode ? item.Pincode : "-" }</div>
                    <div className='flex items-center justify-center'>
                        <button className='p-2 rounded-xl bg-red-500 text-white' onClick={()=>{DeleteContactHandler(item._id)}}>Delete</button>
                    </div>
                        
                         
                       
                 </div>
             </div>)}
          </div>
         </div>
    </div>
  )
}

export default Contact