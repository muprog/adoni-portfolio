'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => setIsAnimating(false), 1000)
    return () => clearTimeout(timer)
  }, [])
  const handleHireMeClick = () => {
    window.location.href = 'mailto:adoniyasseid722@gmail.com'
  }
  if (!isMounted) {
    return null
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black'>
      <div
        className={`${
          isAnimating ? 'animate-openFromCenter' : ''
        } w-full max-w-6xl px-4`}
      >
        <div
          id='home'
          className='min-h-screen flex flex-col justify-center items-center gap-8 py-20'
        >
          <motion.div
            {...{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: 'text-center',
            }}
          >
            <h1 className='text-4xl sm:text-6xl font-bold text-white mb-4'>
              Hello<span className='text-blue-400'>.</span>
            </h1>
            <h2 className='text-2xl sm:text-4xl font-semibold text-gray-300 mb-6'>
              I&apos;m Adoniyas
            </h2>
            <p className='text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto'>
              A passionate Full Stack Developer crafting modern web experiences
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={handleHireMeClick}
                className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg'
              >
                Hire Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
