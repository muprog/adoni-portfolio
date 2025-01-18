'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
export default function Home() {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Stop the animation after it's completed
    const timer = setTimeout(() => setIsAnimating(false), 1000) // Match duration with animation time
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='flex items-center justify-center h-screen'>
      <div
        className={`${
          isAnimating ? 'animate-openFromCenter' : ''
        }  shadow-lg text-center  overflow-hidden max-w-3xl transition-all duration-1000 w-full h-screen`}
      >
        <div
          id='home'
          className={`transition-all duration-500 ease-in-out w-full h-screen flex justify-center items-center flex-col gap-10 sm:flex-row sm:gap-40 pt-10 pl-10`}
        >
          <div className='transition-all duration-500 ease-in-out text-[25px]  w-[150px] sm:w-[300px] font-bold sm:text-[50px]  sm:font-bold flex flex-col  items-center'>
            <div>
              <h1 className='text-shadow-lg tracking-widest'>
                Hello<span className='text-orange-400 font-bold'>.</span>
              </h1>
            </div>
            <div className='text-shadow-lg tracking-widest transition-all duration-500'>
              <h1 className='w-full flex flex-row flex-1 items-center'>
                <span className='sm:w-[150px]'>
                  I am <span className='sm:hidden'>A</span>
                </span>
                <span className='transition-all duration-500 ease-in-out text-[15px] tracking-tighter hidden sm:block'>
                  A Next js junior Developer
                </span>
              </h1>
            </div>
            <div className='text-shadow-lg tracking-widest hidden sm:block'>
              <h1>Adoniyas</h1>
            </div>
            <div className='text-shadow-lg text-[12px] sm:hidden'>
              <h1> Next js Junior Developer</h1>
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
      </div>
    </div>
  )
}
