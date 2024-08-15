import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import pen1 from "../../../images/pen1.png";
export default function ServiceDetailsForm(props) {
  const [showModal, setShowModal] = useState(false);
   const [testimonial,setTestimonial] = useState(props.testimonial);
  const handleUpdate = () => {
    setShowModal(false); // Close the modal after updating
    Cnpost();
  };
  async function Cnpost(){
    const data = new FormData();
    data.set('serviceName',testimonial.serviceName);
    console.log("testimonial photo",testimonial.photo);
    data.set('photo',testimonial.photo);
    data.set('description',testimonial.description);
    data.set("organizationName",testimonial.organizationName);
    // ev.preventDefault();
    const response = await fetch(`http://localhost:5000/api/testimonials/${testimonial._id}`, {
        method:'PUT',
        body: data,
        // credentials: "include"
    });
    if(response.ok){
      const result = await response.json();
      console.log("testimonial added");
        
    props.setTestimonial((prevItems) =>
      prevItems.map((item) =>
        item._id === props.testimonial._id ? { ...result } : item
      )
    );
    }
  }
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Testimonials
      </button> */}
      <img className="w-[22px] h-[22px]" src={pen1} onClick={()=>setShowModal(true)} />
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between p-5">
                <h3 className="text-3xl font-bold text-center flex-1">
                  Testimonials
                </h3>
                <button
                  className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <IoClose />
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Service Name
                </h4>
                <input
                  type="text"
                  value={testimonial.serviceName}
                  onChange={(e) => setTestimonial({...testimonial,serviceName:e.target.value})}
                  placeholder="Enter service name"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Organization Name
                </h4>
                <input
                  type="text"
                  value={testimonial.organizationName}
                  onChange={(e) => setTestimonial({...testimonial,organizationName:e.target.value})}
                  placeholder="Enter organization name"
                  className="w-full bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4"
                />
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Photo
                </h4>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setTestimonial({...testimonial,photo:e.target.files[0]})}
                  className="mb-4"
                />
                <h4 className="my-4 text-blueGray-500 text-lg font-bold leading-relaxed">
                  Description
                </h4>
                <textarea
                  value={testimonial.description}
                  onChange={(e) => setTestimonial({...testimonial,description:e.target.value})}
                  placeholder="Enter service description"
                  className="w-full h-32 bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                />
              </div>
              <div className="flex items-center justify-end p-6">
                <button
                  className="bg-[#006BC2] text-white active:bg-blue-800 text-sm py-3 px-10 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1"
                  type="button"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      )}
    </>
  );
}
