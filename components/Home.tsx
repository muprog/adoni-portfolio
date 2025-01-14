'use client'
import React from 'react'
import Image from 'next/image'
export default function Home() {
  return (
    <div
      id='home'
      className='transition-all duration-500 ease-in-out w-full h-screen flex justify-center items-center flex-col gap-10 sm:flex-row sm:gap-40'
    >
      <div className='transition-all duration-500 ease-in-out text-[30px]  w-[150px] sm:w-[300px] font-semibold sm:text-[50px]  sm:font-bold'>
        <div>
          <h1 className='text-shadow-lg tracking-widest'>
            Hello<span className='text-orange-400 font-bold'>.</span>
          </h1>
        </div>
        <div className='text-shadow-lg tracking-widest'>
          <h1 className='w-full flex flex-row flex-1 items-center'>
            <span className='sm:w-[150px]'>I am</span>
            <span className='transition-all duration-500 ease-in-out text-[15px] tracking-tighter hidden sm:block'>
              Next js junior developer
            </span>
          </h1>
        </div>
        <div className='text-shadow-lg tracking-widest'>
          <h1>Adoniyas</h1>
        </div>
      </div>
      <div>
        <button className='sm:hidden'>
          <Image
            src='/image/down-arrow.png'
            alt='down-arrow'
            height={40}
            width={40}
            className='bg-orange-500 rounded-full p-2'
            onClick={() =>
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </button>
        <button className='sm:block hidden'>
          <Image
            src='/image/right-arrow.png'
            alt='right-arrow'
            height={40}
            width={40}
            className='bg-orange-500 rounded-full p-2'
            onClick={() =>
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </button>
      </div>
    </div>
  )
}
