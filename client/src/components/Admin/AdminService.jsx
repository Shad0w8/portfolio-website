import React from 'react'
import pic from "../../images/pic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import pen1 from "../../images/pen1.png";
import pen from "../../images/pen.png";
import xmark1 from "../../images/xmark1.png";
import "../../css/AdminContact.css";
import { useState } from 'react';
import Works_service from "./Popups/Works_service";
import Works_serviceadd from "./Popups/Works_serviceadd";
import Services_description from "./Popups/Services_description";
function AdminService() {
  // const [services,setServices] = useState([]);
  // const [description,setDescription] = useState([]);
  const services = [{"name":"Service Name","desc":"service description"},{"name":"Service Name","desc":"service description"}]
    // useEffect(()=>{
    //        const getServices = async ()=>{
    //         const res = await axios.get("/service");
    //         setServices(res.data);
    //         console.log(res.data);
    //        }
    //        getServices();
    // },[])
  return (
    <>
    <div id="services" className='flex flex-col'>  
      <h1 className='font-[700] mt-[70px] text-[25px] '>Services</h1>
      <div className='shadows rounded-[20px] mt-[50px] w-[1200px] h-[880px]  flex flex-col justify-evenly items-center' >
        <div className='flex flex-col '>
          <div className='w-full justify-between flex'>

        <h1 className='leading-[24px] font-[600] text-[15px] mb-3'>Description</h1>
        {/* <img src={pen1} className='w-[22px] h-[22px] ' /> */}
        <Services_description />
          </div>
        <div className='w-[1100px] h-[126px] rounded-[10px] border-[#ACACAC] border-[1px] font-[400] text-[15px] p-4'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</div>
        </div> 
        {/* description */}
      <div className='flex flex-col justify-evenly'>
        <h1 className='leading-[24px] font-[600] text-[15px] mb-3'>Services Provided</h1>
         {services.map((service,index)=>{
             return(
                    <div className='flex flex-col w-[1100px] h-auto mb-6 border-[1px] border-[#ACACAC] rounded-[10px] p-5'>
                    <div className='flex w-full'><h1 className='font-[500] text-[15px] w-1/5 mb-3'>{service.name}</h1>
                    <div className='flex justify-end w-4/5'>
                    {/* <img src={pen1} className='w-[22px] h-[22px] inline  mr-2 text-[black] ' /> */}
                    <Works_service />
                    <img src={xmark1} className='w-[22px] h-[22px] inline  mr-2 text-[black] ' />
                    </div>
                       </div>
                    <div className='flex'>
                        <p className='text-[15px] font-[400] w-[820px] leading-[24px] mr-2'>{service.desc}</p>
                        <img src={pic} className='w-[230px] h-[150px] rounded-[20px]' />
                    </div>
                </div>
                  );
                }
        )}
        {/* <div className='flex flex-col w-[1100px] h-[228px] border-[1px] border-[#ACACAC] rounded-[10px] p-5'>
            <div className='flex w-full'><h1 className='font-[500] text-[15px] w-1/5 mb-3'>Service Name</h1>
            <div className='flex justify-end w-4/5'>
            <img src={pen1} className='w-[22px] h-[22px] inline  mr-2 text-[black] ml-96' />
                    <FontAwesomeIcon icon={faCircleXmark} className='mr-2  justify-self-end' />
            </div>
               </div>
            <div className='flex'>
                <p className='text-[15px] font-[400] w-[820px] leading-[24px] mr-2'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</p>
                <img src={pic} className='w-[230px] h-[150px] rounded-[20px]' />
            </div>
        </div>
        <div className='flex flex-col w-[1100px] h-[228px] border-[1px] border-[#ACACAC] rounded-[10px] p-5 mt-8'>
            <div className='flex w-full'><h1 className='font-[500] text-[15px] w-1/5 mb-3'>Service Name</h1>
            <div className='flex justify-end w-4/5'>
            <img src={pen1} className='w-[22px] h-[22px] inline  mr-2 text-[black] ml-96' />
                    <FontAwesomeIcon icon={faCircleXmark} className='mr-2  justify-self-end' />
            </div>
               </div>
            <div className='flex '>
                <p className='text-[15px] font-[400] w-[820px] leading-[24px] mr-2'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</p>
                <img src={pic} className='w-[230px] h-[150px] rounded-[20px]' />
            </div>
        </div> */}
      {/* <button className='flex mt-4 items-center justify-center w-[319px] h-[50px] text-[15px] font-[600] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Services</button> */}
  <Works_serviceadd />
      </div>
      </div>
      </div>
    </>
  )
}

export default AdminService
