'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

const portfolios = [
  {
    id: '0',
    image: 'next_amazon.png',
    name: 'Next Amazon',
    description:
      'A full-featured e-commerce platform inspired by Amazon, implementing user authentication, product management, and secure checkout.',
    project: 'E-commerce Platform',
    framework: 'Next.js',
    technologies: ['Next.js', 'Tailwind CSS'],
    live: 'https://next-amazon-ten.vercel.app/',
    github: 'https://github.com/muprog/next-amazon',
  },
  {
    id: '3',
    image: 'ecommerce.png',
    name: 'E-commerce',
    description: 'E-commerce',
    project: 'E-commerce',
    framework: 'React.js Node.js Express.js Mongodb',
    technologies: ['React.js', 'CSS', 'Node js', 'Express js', 'Mongoose'],
    live: 'https://ecommerce-eight-alpha-gzyinbwfvy.vercel.app',
    github: 'https://github.com/muprog/e-commerce',
  },
  {
    id: '1',
    image: 'music_addis.png',
    name: 'music app',
    description: 'A simple music app',
    project: 'Music app',
    framework: 'Next.js Redux js Node.js Express.js Mongodb',
    technologies: [
      'Next.js',
      'Redux js',
      'Tailwind CSS',
      'Node js',
      'Express js',
      'Mongoose',
    ],
    live: 'https://music-addis-sigma.vercel.app/',
    github: 'https://github.com/muprog/music_addis',
  },
  {
    id: '2',
    image: 'event_scheduler.png',
    name: 'Event Scheduler',
    description: 'Event Scheduler',
    project: 'Event Scheduler',
    framework: 'Next.js Node.js Express.js Mongodb',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Node js',
      'Express js',
      'Mongoose',
    ],
    live: 'https://event-scheduler-henna.vercel.app/',
    github: 'https://github.com/muprog/event_scheduler',
  },
  {
    id: '4',
    image: 'car_showcase.png',
    name: 'Car Showcase',
    description:
      'A modern car showcase platform built with Next.js, featuring advanced filtering, search functionality, and a sleek user interface.',
    project: 'Car Showcase',
    framework: 'Next.js',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'RapidAPI'],
    live: 'https://car-showcase-git-master-mus-projects-b80e04f8.vercel.app/',
    github: 'https://github.com/muprog/car_showcase',
  },
]

export default function MainPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolios.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolios.length - 1 : prevIndex - 1
    )
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div
      className='min-h-screen w-full bg-gradient-to-b from-gray-900 to-black py-12 sm:py-20 px-4 pb-40 sm:pb-52'
      id='portfolio'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-4 sm:mb-4'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
            My <span className='text-blue-400'>Projects</span>
          </h2>
        </div>

        {/* Mobile/Tablet View - All Projects Vertical */}
        <div className='block lg:hidden space-y-8'>
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className='bg-gray-800/30 rounded-xl overflow-hidden'
            >
              <div className='flex flex-col gap-6'>
                {/* Project Image - Top */}
                <div className='w-full relative h-[250px] rounded-xl overflow-hidden group'>
                  <Image
                    src={`/image/${portfolio.image}`}
                    alt={portfolio.name}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  <div className='absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <h3 className='text-xl font-bold text-blue-500 mb-1'>
                      {portfolio.name}
                    </h3>
                    <p className='text-blue-500 text-sm'>{portfolio.project}</p>
                  </div>
                </div>

                {/* Project Info - Bottom */}
                <div className='w-full flex flex-col p-6'>
                  <div className='space-y-6'>
                    <div>
                      <h3 className='text-2xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
                        {portfolio.name}
                      </h3>
                      <p className='text-gray-400 text-base leading-relaxed'>
                        {portfolio.description}
                      </p>
                    </div>

                    <div className='space-y-4'>
                      <div className='flex items-center gap-3'>
                        <span className='text-blue-400 font-semibold text-base min-w-[120px]'>
                          Project Type:
                        </span>
                        <span className='text-gray-300 text-base'>
                          {portfolio.project}
                        </span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-blue-400 font-semibold text-base min-w-[120px]'>
                          Framework:
                        </span>
                        <span className='text-gray-300 text-base'>
                          {portfolio.framework}
                        </span>
                      </div>
                      <div>
                        <span className='text-blue-400 font-semibold text-base block mb-2'>
                          Technologies:
                        </span>
                        <div className='flex items-center gap-2 mt-4'>
                          {portfolio.technologies &&
                            portfolio.technologies.map((tech) => {
                              let icon = '/file.svg'
                              if (tech === 'React' || tech === 'React.js')
                                icon = '/react.svg'
                              else if (tech === 'Next.js') icon = '/next.svg'
                              else if (tech === 'Tailwind CSS')
                                icon = '/tailwind.svg'
                              else if (tech === 'Node js' || tech === 'Node.js')
                                icon = '/node.svg'
                              else if (
                                tech === 'Express js' ||
                                tech === 'Express'
                              )
                                icon = '/express.svg'
                              else if (
                                tech === 'MongoDB' ||
                                tech === 'Mongoose'
                              )
                                icon = '/mongodb.svg'
                              else if (tech === 'CSS3' || tech === 'CSS')
                                icon = '/css.svg'
                              else if (tech === 'JavaScript')
                                icon = '/javascript.svg'
                              else if (tech === 'HTML5' || tech === 'HTML')
                                icon = '/html.svg'
                              else if (tech === 'Redux js' || tech === 'Redux')
                                icon = '/redux.png'
                              return (
                                <img
                                  key={tech}
                                  src={icon}
                                  alt={tech}
                                  className='w-8 h-8 rounded bg-white p-1'
                                  title={tech}
                                />
                              )
                            })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className='flex flex-col gap-3 mt-8'>
                    <Link
                      href={portfolio.live}
                      target='_blank'
                      className='group px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-base font-medium flex items-center justify-center gap-2'
                    >
                      Live Demo
                      <svg
                        className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                      </svg>
                    </Link>
                    <Link
                      href={portfolio.github}
                      target='_blank'
                      className='group px-6 py-2.5 border-2 border-gray-700 text-gray-300 rounded-full hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 text-base font-medium flex items-center justify-center gap-2'
                    >
                      View Code
                      <svg
                        className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Single Project Carousel */}
        <div className='hidden lg:block relative'>
          {/* Navigation Buttons - Left and Right (Desktop Only) */}
          <div className='absolute bottom-[-100px] -translate-y-1/2 left-0 right-0 flex justify-center gap-5 z-10 px-2 sm:px-4'>
            <button
              onClick={prevProject}
              className='p-3 bg-blue-500/0 hover:bg-blue-600/50 rounded-full transition-colors duration-300 border border-blue-600 border-opacity-30 hover:border-opacity-100'
            >
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button
              onClick={nextProject}
              className='p-3 bg-blue-500/0 hover:bg-blue-600/50 rounded-full transition-colors duration-300 border border-blue-600 border-opacity-30 hover:border-opacity-100'
            >
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>

          {/* Project Display */}
          <div className='bg-gray-800/30 rounded-2xl overflow-hidden'>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                {...({
                  custom: direction,
                  variants: slideVariants,
                  initial: 'enter',
                  animate: 'center',
                  exit: 'exit',
                  transition: {
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  },
                  className: 'flex flex-row gap-6',
                } as HTMLMotionProps<'div'>)}
              >
                {/* Project Image - Left Side */}
                <motion.div
                  {...({
                    initial: { opacity: 0, scale: 0.95 },
                    whileInView: { opacity: 1, scale: 1 },
                    transition: { duration: 0.5, delay: 0.2 },
                    viewport: { once: true },
                    className:
                      'w-1/2 relative h-[400px] rounded-2xl overflow-hidden group',
                  } as HTMLMotionProps<'div'>)}
                >
                  <Image
                    src={`/image/${portfolios[currentIndex].image}`}
                    alt={portfolios[currentIndex].name}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  <motion.div
                    {...({
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.4 },
                      viewport: { once: true },
                      className:
                        'absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                    } as HTMLMotionProps<'div'>)}
                  >
                    <h3 className='text-2xl font-bold text-blue-500 mb-2'>
                      {portfolios[currentIndex].name}
                    </h3>
                    <p className='text-blue-500 text-base'>
                      {portfolios[currentIndex].project}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Project Info - Right Side */}
                <motion.div
                  {...({
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 0.5, delay: 0.3 },
                    viewport: { once: true },
                    className: 'w-1/2 flex flex-col',
                  } as HTMLMotionProps<'div'>)}
                >
                  <div className='space-y-8'>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <h3 className='text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent'>
                        {portfolios[currentIndex].name}
                      </h3>
                      <p className='text-gray-400 text-lg leading-relaxed'>
                        {portfolios[currentIndex].description}
                      </p>
                    </motion.div>

                    <motion.div
                      {...({
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 0.5 },
                        viewport: { once: true },
                        className: 'space-y-6',
                      } as HTMLMotionProps<'div'>)}
                    >
                      <div className='flex items-center gap-3'>
                        <span className='text-blue-400 font-semibold text-lg min-w-[140px]'>
                          Project Type:
                        </span>
                        <span className='text-gray-300 text-lg'>
                          {portfolios[currentIndex].project}
                        </span>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-blue-400 font-semibold text-lg min-w-[140px]'>
                          Framework:
                        </span>
                        <span className='text-gray-300 text-lg'>
                          {portfolios[currentIndex].framework}
                        </span>
                      </div>
                      <div>
                        <span className='text-blue-400 font-semibold text-lg block mb-3'>
                          Technologies:
                        </span>
                        <div className='flex items-center gap-3 mt-4'>
                          {portfolios[currentIndex].technologies &&
                            portfolios[currentIndex].technologies.map(
                              (tech) => {
                                let icon = '/file.svg'
                                if (tech === 'React' || tech === 'React.js')
                                  icon = '/react.svg'
                                else if (tech === 'Next.js') icon = '/next.svg'
                                else if (tech === 'Tailwind CSS')
                                  icon = '/tailwind.svg'
                                else if (
                                  tech === 'Node js' ||
                                  tech === 'Node.js'
                                )
                                  icon = '/node.svg'
                                else if (
                                  tech === 'Express js' ||
                                  tech === 'Express'
                                )
                                  icon = '/express.svg'
                                else if (
                                  tech === 'MongoDB' ||
                                  tech === 'Mongoose'
                                )
                                  icon = '/mongodb.svg'
                                else if (tech === 'CSS3' || tech === 'CSS')
                                  icon = '/css.svg'
                                else if (tech === 'JavaScript')
                                  icon = '/javascript.svg'
                                else if (tech === 'HTML5' || tech === 'HTML')
                                  icon = '/html.svg'
                                else if (
                                  tech === 'Redux js' ||
                                  tech === 'Redux'
                                )
                                  icon = '/redux.png'
                                return (
                                  <img
                                    key={tech}
                                    src={icon}
                                    alt={tech}
                                    className='w-8 h-8 rounded bg-white p-1'
                                    title={tech}
                                  />
                                )
                              }
                            )}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Buttons */}
                  <motion.div
                    {...({
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.6 },
                      viewport: { once: true },
                      className: 'flex flex-row gap-4 mt-10',
                    } as HTMLMotionProps<'div'>)}
                  >
                    <Link
                      href={portfolios[currentIndex].live}
                      target='_blank'
                      className='group px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-lg font-medium flex items-center gap-2'
                    >
                      Live Demo
                      <svg
                        className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                      </svg>
                    </Link>
                    <Link
                      href={portfolios[currentIndex].github}
                      target='_blank'
                      className='group px-8 py-3 border-2 border-gray-700 text-gray-300 rounded-full hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 text-lg font-medium flex items-center gap-2'
                    >
                      View Code
                      <svg
                        className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
