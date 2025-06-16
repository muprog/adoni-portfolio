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
        <div className='mb-8'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
            About <span className='text-orange-400'>Me</span>
          </h2>
          <p className='text-gray-400 text-lg mb-6'>
            A passionate Full Stack developer with a strong foundation in web
            development and a keen eye for creating beautiful, functional
            applications.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <motion.div
            {...({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { delay: 0.2 },
              viewport: { once: true },
              className:
                'bg-gray-800/50 p-6 rounded-lg block sm:hidden lg:block',
            } as HTMLMotionProps<'div'>)}
          >
            <h3 className='text-orange-400 font-semibold text-xl mb-4'>
              Personal Info
            </h3>
            <ul className='space-y-3 text-gray-300'>
              <li className='flex items-center gap-3'>
                <span className='text-gray-400 min-w-[120px] text-base'>
                  Age:
                </span>
                <span className='text-base font-medium'>24 Years</span>
              </li>
              <li className='flex items-center gap-3'>
                <span className='text-gray-400 min-w-[120px] text-base'>
                  Nationality:
                </span>
                <span className='text-base font-medium'>Ethiopian</span>
              </li>
              <li className='flex items-center gap-3'>
                <span className='text-gray-400 min-w-[120px] text-base'>
                  Languages:
                </span>
                <span className='text-base font-medium'>Amharic & English</span>
              </li>
              <li className='flex items-center gap-3'>
                <span className='text-gray-400 min-w-[120px] text-base'>
                  Freelance:
                </span>
                <span className='text-green-400 text-base font-medium'>
                  Available
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            {...({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              viewport: { once: true },
              className: 'bg-gray-800/50 p-6 rounded-lg',
            } as HTMLMotionProps<'div'>)}
          >
            <h3 className='text-orange-400 font-semibold text-xl mb-4'>
              Contact Info
            </h3>
            <ul className='space-y-3 text-gray-300'>
              <li className='flex items-center gap-3'>
                <span className='text-gray-400 min-w-[120px] text-base'>
                  Phone:
                </span>
                <a
                  href='tel:+251989130478'
                  className='text-base font-medium hover:text-orange-400 transition-colors'
                >
                  +251 98 913 0478
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <span className='text-gray-400 min-w-[120px] text-base'>
                  Email:
                </span>
                <a
                  href='mailto:muprog4@gmail.com'
                  className='text-base font-medium hover:text-orange-400 transition-colors'
                >
                  muprog4@gmail.com
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <span className='text-gray-400 min-w-[120px] text-base'>
                  Location:
                </span>
                <span className='text-base font-medium'>
                  Addis Ababa, Ethiopia
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            {...({
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              viewport: { once: true },
              className: 'bg-gray-800/50 p-6 rounded-lg sm:col-span-2',
            } as HTMLMotionProps<'div'>)}
          >
            <h3 className='text-orange-400 font-semibold text-xl mb-4'>
              Education
            </h3>
            <div className='text-gray-300'>
              <p className='text-base font-medium'>
                Bachelor of Computer Science
              </p>
              <p className='text-gray-400 text-base'>University of Gondar</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
