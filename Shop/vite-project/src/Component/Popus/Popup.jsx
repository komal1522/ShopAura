import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          {/* Background Overlay */}
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm" onClick={() => setOrderPopup(false)}>
          {/* Popup Content */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white dark:bg-gray-800 p-4 rounded-md shadow-md z-60 duration-200  w-[300px]">
          <div className='flex items-center justify-between'>
            <div><h1>Order Now</h1></div>
            <div>
                <IoCloseOutline className='text-2xl cursor-pointer
                ' onClick={()=> setOrderPopup(false)}/>
            </div>
          </div>
          <div className='mt-4'>
            <input type='text' placeholder='Name' className='w-full rounded-full border border-gray-300 dark:border-gray-500
            dark:bg-slate-800 px-2 py-1 mb-4'></input>

<input type='email' placeholder='Email' className='w-full rounded-full border border-gray-300 dark:border-gray-500
            dark:bg-slate-800 px-2 py-1 mb-4'></input>

<input type='text' placeholder='Address' className='w-full rounded-full border border-gray-300 dark:border-gray-500
            dark:bg-slate-800 px-2 py-1 mb-4'></input>
           <div className='flex justify-center' >
             <button className='bg-gradient-to-r from-primary to bg-secondary
             hover:scale-105 duration-200 text-white py-1 px-4 rounded-full'>Order Now</button>
          </div>
          </div>
         
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default Popup;
