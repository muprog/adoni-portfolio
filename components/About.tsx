'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
export default function About() {
  return (
    <div
      className='min-h-screen w-full flex flex-col sm:flex-row items-center justify-center bg-gradient-to-b from-gray-900 to-black py-20 px-4'
      id='about'
    >
      <motion.div
        {...({
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: 'w-full sm:w-1/2 flex justify-center items-center p-6',
        } as HTMLMotionProps<'div'>)}
      >
        <div className='relative w-[250px] h-[250px] sm:w-[400px] sm:h-[500px] overflow-hidden rounded-2xl shadow-2xl'>
          <Image
            src={'/image/adoni.JPG'}
            alt='Adoniyas'
            fill
            className='object-cover object-top hover:scale-105 transition-transform duration-500'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
        </div>
      </motion.div>

      <motion.div
        {...({
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: 'w-full sm:w-1/2 flex flex-col justify-center p-6',
        } as HTMLMotionProps<'div'>)}
      >
        <div className=''>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
            About <span className='text-blue-400'>Me</span>
          </h2>
          <p className='text-gray-400 text-lg mb-6'>
            <strong>Hi, I&rsquo;m Adoniyas!</strong> A passionate{' '}
            <strong>Full Stack Developer</strong> with a strong foundation in
            web development and a keen eye for creating beautiful, functional
            applications. I graduated with a{' '}
            <strong>
              Bachelor of Computer Science from University of Gondar
            </strong>
            . I love building modern web experiences and am always eager to
            learn new technologies and take on new challenges.
          </p>
        </div>

        {/* Tech Stack Section for xs only */}
        <div className='mb-8 flex flex-wrap gap-4 items-center sm:hidden'>
          <h3 className='text-blue-400 font-semibold text-xl mb-4 w-full'>
            Tech Stack
          </h3>
          <div className='flex flex-wrap gap-4 items-center'>
            <div className='flex flex-col items-center'>
              <img src='/react.svg' alt='React' className='w-7 h-7' />
              <span className='text-xs text-gray-300 mt-1'>React</span>
            </div>
            <div className='flex flex-col items-center'>
              <img src='/next.svg' alt='Next.js' className='w-7 h-7' />
              <span className='text-xs text-gray-300 mt-1'>Next.js</span>
            </div>
            <div className='flex flex-col items-center'>
              <img src='/css.svg' alt='CSS3' className='w-7 h-7' />
              <span className='text-xs text-gray-300 mt-1'>CSS</span>
            </div>
            <div className='flex flex-col items-center'>
              <img src='/tailwind.svg' alt='Tailwind CSS' className='w-7 h-7' />
              <span className='text-xs text-gray-300 mt-1'>Tailwind CSS</span>
            </div>
            <div className='flex flex-col items-center'>
              <img src='/node.svg' alt='Node.js' className='w-7 h-7' />
              <span className='text-xs text-gray-300 mt-1'>Node.js</span>
            </div>
            <div className='flex flex-col items-center'>
              <img src='/express.svg' alt='Express' className='w-7 h-7' />
              <span className='text-xs text-gray-300 mt-1'>Express</span>
            </div>
            <div className='flex flex-col items-center'>
              <img src='/mongodb.svg' alt='MongoDB' className='w-7 h-7' />
              <span className='text-xs text-gray-300 mt-1'>MongoDB</span>
            </div>
          </div>
        </div>

        {/* Contact Info Only (no location) */}
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.4 },
            viewport: { once: true },
            className: 'bg-gray-800/50 py-1 p-2 rounded-lg',
          } as HTMLMotionProps<'div'>)}
        >
          <h3 className='text-blue-400 font-semibold text-xl mb-4'>
            Contact Info
          </h3>
          <ul className='space-y-3 text-gray-300'>
            <li className='flex  gap-3'>
              <span className='text-gray-400 min-w-[60px] text-base'>
                Phone:
              </span>
              <a
                href='tel:+251989130478'
                className='text-base font-medium hover:text-blue-400 transition-colors'
              >
                +251 98 913 0478
              </a>
            </li>
            <li className='w-full flex gap-3'>
              <span className='text-gray-400 min-w-[60px] text-base'>
                Email:
              </span>
              <a
                href='mailto:muprog4@gmail.com'
                className='text-base font-medium hover:text-blue-400 transition-colors'
              >
                muprog4@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  )
}
