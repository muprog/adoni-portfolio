'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PortfolioProps } from '@/types'
import type { HTMLMotionProps } from 'framer-motion'

export default function Portfolio({
  image,
  name,
  description,
  project,
  framework,
  technologies,
  live,
  github,
}: PortfolioProps) {
  return (
    <motion.div
      {...({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        viewport: { once: true },
        className: ' lg:flex-row gap-12',
      } as HTMLMotionProps<'div'>)}
    >
      <motion.div
        {...({
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: true },
          className:
            'lg:w-1/2 relative h-[450px] rounded-2xl overflow-hidden group ',
        } as HTMLMotionProps<'div'>)}
      >
        <Image
          src={`/image/${image}`}
          alt={name}
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
          <h3 className='text-2xl font-bold text-white mb-2'>{name}</h3>
          <p className='text-gray-300'>{project}</p>
        </motion.div>
      </motion.div>

      <motion.div
        {...({
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.5, delay: 0.3 },
          viewport: { once: true },
          className: 'lg:w-1/2 flex flex-col justify-between',
        } as HTMLMotionProps<'div'>)}
      >
        <div className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className='text-4xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent'>
              {name}
            </h3>
            <p className='text-gray-400 text-lg leading-relaxed'>
              {description}
            </p>
          </motion.div>

          <motion.div
            {...{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.5 },
              viewport: { once: true },
              className: 'space-y-6',
            }}
          >
            <div className='flex items-center gap-3'>
              <span className='text-orange-400 font-semibold text-lg min-w-[140px]'>
                Project Type:
              </span>
              <span className='text-gray-300 text-lg'>{project}</span>
            </div>
            <div className='flex items-center gap-3'>
              <span className='text-orange-400 font-semibold text-lg min-w-[140px]'>
                Framework:
              </span>
              <span className='text-gray-300 text-lg'>{framework}</span>
            </div>
            <div>
              <span className='text-orange-400 font-semibold text-lg block mb-3'>
                Technologies:
              </span>
              <div className='flex flex-wrap gap-3'>
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    {...({
                      initial: { opacity: 0, scale: 0.8 },
                      whileInView: { opacity: 1, scale: 1 },
                      transition: { duration: 0.3, delay: 0.1 * index },
                      viewport: { once: true },
                      className:
                        'px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-full text-base border border-gray-700 hover:border-orange-500/50 transition-colors duration-300',
                    } as HTMLMotionProps<'div'>)}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.6 },
            viewport: { once: true },
            className: 'flex gap-4 mt-8',
          } as HTMLMotionProps<'div'>)}
        >
          <Link
            href={live}
            target='_blank'
            className='group px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-lg font-medium flex items-center gap-2'
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
            href={github}
            target='_blank'
            className='group px-8 py-3 border-2 border-gray-700 text-gray-300 rounded-full hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300 text-lg font-medium flex items-center gap-2'
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
  )
}
