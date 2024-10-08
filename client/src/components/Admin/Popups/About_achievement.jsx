import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import pen1 from "../../../images/pen1.png";
export default function AchievementForm(props) {
  const [showModal, setShowModal] = useState(false);
  const [achievement, setAchievement] = useState(props.achievement); // State to hold the achievement text
  const handleUpdate = () => {
    // Implement your update logic here (e.g., send the updated bio to an API)
    console.log("Updated Bio:", achievement);
    setShowModal(false); // Close the modal after updating
    aboutachievementadd()
  };
  async function aboutachievementadd(){
    // const data = new FormData();
    // data.set('bio',bio);
    const data = {achievement};
    // ev.preventDefault();
    const response = await fetch('https://portfolio-website-48v8.onrender.com/api/About/achievement/update', {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),  
     
    });
    if(response.ok){
      const achievement = await response.json();
        console.log("achievement added");
        console.log(achievement);

        props.setAchievement(achievement);
    }
  }
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Achievement
      </button> */}
      <img className="w-[22px] h-[22px]" onClick={()=>setShowModal(true)} src={pen1} />
      {showModal && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between p-5">
                <h3 className="text-3xl font-bold text-center flex-1">
                  About
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
                  Achievement
                </h4>
                {/* Textarea for entering the achievement */}
                <textarea
                  value={achievement}
                  onChange={(e) => setAchievement(e.target.value)}
                  className="w-full h-32 bg-gray-100 border border-[#006BC2] rounded-xl px-4 py-3 text-sm text-gray-700 resize-none"
                  placeholder="Enter achievement"
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
