import React, { useEffect } from 'react'
import '../../css/AdminContact.css';
import pic from "../../images/pic.png";
import xmark from "../../images/xmark.png";
import xmark1 from "../../images/xmark1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import Works_service from "./Popups/Works_service";
import Works_serviceadd from "./Popups/Works_serviceadd";
import Works_projectadd from "./Popups/Works_projectadd";
import Works_project from "./Popups/Works_project";
import pen1 from "../../images/pen1.png"
import { useState } from 'react';
function AdminWork() {
    const [project,setProject] = useState([]);
    // const [experiences,setExperiences] = useState({});
    // useEffect(()=>{
    //        const getBio = async ()=>{
    //         const res = await axios.get("/bio");
    //         setBio(res.data);
    //         console.log(res.data);
    //        }
    //        getBio();
    // },[])
    useEffect(()=>{
           getProject();
    },[])
   
    const handleDelete = async (id) =>{
        const response = await fetch(`https://portfolio-website-48v8.onrender.com/api/work/projects/${id}`, {//function to be defined
            method:'DELETE'       
        });
        console.log(response);
        if(response.ok){
            console.log("experience deleted");
            const newProject = project.filter((experience) => {return experience._id !== id});
            console.log(newProject);
            setProject(newProject);
        }
    }
    const getProject = async () =>{
        try {
            const response = await fetch('https://portfolio-website-48v8.onrender.com/api/work/projects/', {
              method: 'GET'          
            });     
            if (!response.ok) {
              throw new Error(`Failed to fetch experience : ${response.statusText}`);
            }           
            const project = await response.json();
            console.log('Fetched project:', project);            
            setProject(project);
          } catch (error) {
            console.error('Error fetching project:', error.message);
          }
    }
  return (
    <>
    <div id="work" className='flex flex-col w-[80%] xl:w-[70%]'>
       <h1 className='font-[700] mt-[70px] text-[25px] '>Work</h1>
    <div className='shadows rounded-[20px] w-[99%] h-auto py-8 px-8 sm:px-16 mt-[50px]  flex flex-col justify-evenly items-center' >
        <div className='w-[100%]'>

        <h1 className=' font-[600] text-[15px] mb-4'>Projects</h1>     
        </div>
            {project.map((project,index)=>{
                return (
                    <div className='flex flex-col w-[99%] mb-8  h-auto border-[1px] border-[#ACACAC] rounded-[10px] p-5'>
                    <div className='flex flex-col'>
                        <div className='flex w-full justify-between'>
                        <h1 className='font-[500] text-[15px] '>{project.projectname}</h1>
                    <div className='flex  '>
                    {/* <img src={pen1} className='w-[22px] h-[22px] mr-2' /> */}
                    <Works_project project={project} setProject={setProject} />
                     
                            {/* <FontAwesomeIcon icon={faCircleXmark} className='mr-2  justify-self-end' /> */}
                            <img src={xmark1} onClick={()=>{handleDelete(project._id)}} className='w-[22px] h-[22px]' />
                    </div>
                        </div>
                        <ul className='flex mb-3 text-[13px] list-disc justify-evenly w-auto flex flex-col  sm:flex-row sm:justify-start flex-wrap'>
                            {project.skill.map((skill)=>{
                                   return(
                                       <li className='sm:ml-8'>{skill}</li> 
                                   )
                            })}
                            {/* <li className='mr-2'>Skill2</li>
                            <li className='mr-2'>Skill3</li>
                            <li className='mr-2'>Skill4</li>   */}
                        </ul>
                       </div>
                    <div className='flex flex-col-reverse md:flex-row md:justify-between'>
                        <p className='text-[15px] mt-8 md:mt-0 font-[400] w-auto leading-[24px] mr-2'>{project.description}</p>
                       {project.photo && <img  src={`https://portfolio-website-48v8.onrender.com/${project.photo}`} className='w-[230px] h-[150px] rounded-[20px]' />} 
                    </div>
                </div>
                );
            })}
        {/* <div className='flex flex-col w-[1100px] h-[248px] border-[1px] border-[#ACACAC] rounded-[10px] p-5'>

            <div className='flex flex-col'>
                <div className='flex w-full'>
                <h1 className='font-[500] text-[15px] w-1/5'>Abc Position</h1>
            <div className='flex justify-end w-4/5'>
            <img src={pen1} className='w-[22px] h-[22px] inline  mr-2 text-[black] ml-96' />
                    <FontAwesomeIcon icon={faCircleXmark} className='mr-2  justify-self-end' />
            </div>
                </div>
                <ul className='flex mb-3 text-[13px] list-disc justify-evenly w-[228px]'>
                    <li className='mr-2'>Skill1</li> 
                    <li className='mr-2'>Skill2</li>
                    <li className='mr-2'>Skill3</li>
                    <li className='mr-2'>Skill4</li>
                </ul>
               </div>
            <div className='flex'>
                <p className='text-[15px] font-[400] w-[820px] leading-[24px] mr-2'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</p>
                <img src={pic} className='w-[230px] h-[150px] rounded-[20px]' />
            </div>
        </div>
        <div className='flex flex-col w-[1100px] h-[248px] border-[1px] border-[#ACACAC] rounded-[10px] p-5 mt-8'>
            <div className='flex flex-col'>
                <div className='flex w-full'>
                <h1 className='font-[500] text-[15px] w-1/5 '>Abc Position</h1>
            <div className='flex justify-end w-4/5'>
            <img src={pen1} className='w-[22px] h-[22px] inline  mr-2 text-[black] ml-96' />
                    <FontAwesomeIcon icon={faCircleXmark} className='mr-2  justify-self-end' />
            </div>
                </div>
                <ul className='flex mb-3 text-[13px] list-disc justify-evenly w-[228px]'>
                    <li className='mr-2'>Skill1</li> 
                    <li className='mr-2'>Skill2</li>
                    <li className='mr-2'>Skill3</li>
                    <li className='mr-2'>Skill4</li>
                </ul>
               </div>
            <div className='flex '>
                <p className='text-[15px] font-[400] w-[820px] leading-[24px] mr-2'>Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim. Lorem ipsum dolor sit amet consectetur. Tellus ac sapien mauris urna urna ipsum. Neque sed lacus aliquet orci risus id. Tristique amet pulvinar pellentesque imperdiet diam urna auctor pellentesque commodo. Tincidunt et auctor et vitae in adipiscing enim.</p>
                <img src={pic} className='w-[230px] h-[150px] rounded-[20px]' />
            </div>
        </div> */}
      {/* <button className='flex self-start ml-[50px] mt-4 items-center justify-center w-[319px] h-[50px] text-[15px] font-[600] bg-[#EAFCFF] butt rounded-[10px] border-[1px] border-[#1395DF] border-dashed text-[#1395DF]'> <FontAwesomeIcon icon={faPlus} className='mr-2' /> Add Projects</button> */}
      <Works_projectadd project={project} setProject={setProject} />
      </div>
      </div>
    </>
  )
}

export default AdminWork
