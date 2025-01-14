import React from 'react'
import Image from 'next/image'
export default function About() {
  return (
    <div className='transition-all duration-100 ease-in-out w-full md:flex md:justify-center md:items-center'>
      <div
        className='w-full h-screen flex justify-center items-center p-5 transition-all duration-500 ease-in-out'
        id='about'
      >
        <div className='w-[80%] h-[80%] relative'>
          <Image
            src={'/image/adoni.JPG'}
            alt='Adoniyas'
            fill
            className='object-contain rounded-3xl'
          />
        </div>
      </div>

      <div className='w-full flex flex-col justify-start'>
        <div className='transition-all duration-100 ease-in-out w-full flex justify-center items-center md:justify-start'>
          <h2 className='text-xl font-bold flex flex-col'>
            <span className='text-orange-400'>Adoniyas</span> <span>Seid</span>
          </h2>
        </div>
        <div className='transition-all duration-100 ease-in-out w-full flex justify-center items-center md:justify-start'>
          <ul className='list-disc list-inside text-orange-400 text-[12px]'>
            <li className='font-semibold'>
              <span className='text-slate-400'>Age : </span>
              <span className='text-white'>24 Years</span>
            </li>
            <li>
              <span className='text-slate-400'>Nationality : </span>
              <span className='text-white'>Ethiopian</span>
            </li>
            <li>
              <span className='text-slate-400'>Freelance : </span>
              <span className='text-white'>Available</span>
            </li>
            <li>
              <span className='text-slate-400'>Language : </span>
              <span className='text-white'>Amharic & English</span>
            </li>
            <li>
              <span className='text-slate-400'>Address : </span>
              <span className='text-white'>Addis Ababa</span>
            </li>
            <li>
              <span className='text-slate-400'>Phone : </span>
              <span className='text-white'>09 89 13 04 78</span>
            </li>
            <li>
              <span className='text-slate-400'>Email : </span>
              <span className='text-white'>muprog4@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
