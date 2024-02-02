import React from 'react';
import '../components/Animation.css';
import imageMern from '../components/images/MERN-logo.png';

export default function home() {
  return (
    <>
      <div className='bg w-screen h-screen flex justify-center items-center'>
        <div className='card max-w-3xl p-3 sm:p-8 mx-8 md:mx-20 flex justify-center items-center flex-col'>
          <h1 className='text-slate-200 text-2xl border-b p-2 pb-4 text-center lg:text-3xl'>This is an authentication project made with MERN</h1>
          <img className='w-5/6 sm:w-2/3 md:w-1/2' src={imageMern}></img>
        </div>
      </div>
    </>
  )
}

