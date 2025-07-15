'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

const contactInfo = [
  {
    icon: '/image/phone.webp',
    title: 'Phone',
    content: '+251 98 913 0478',
    link: 'tel:+251989130478',
  },
  {
    icon: '/image/gmail.png',
    title: 'Email',
    content: 'muprog4@gmail.com',
    link: 'mailto:muprog4@gmail.com',
  },
  {
    icon: '/image/github.png',
    title: 'GitHub',
    content: 'Muprog',
    link: 'https://github.com/muprog/',
  },
  {
    icon: '/image/linkedin.png',
    title: 'LinkedIn',
    content: 'LinkedIn',
    link: 'https://www.linkedin.com/in/adoniyas-seid-b93abb335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
]

export default function Contact() {
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-gray-900 to-black'>
      {/* Main Contact Section */}
      <div
        className='min-h-screen flex flex-col justify-center py-20 px-4'
        id='contact'
      >
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: 'max-w-6xl mx-auto',
          } as HTMLMotionProps<'div'>)}
        >
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
              Get In <span className='text-orange-400'>Touch</span>
            </h2>
            <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
              Feel free to reach out to me for any questions or opportunities
            </p>
          </div>

          {/* Contact Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={info.link} target='_blank' className='block h-full'>
                  <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 h-full transform transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 group'>
                    <div className='relative w-12 h-12 mx-auto mb-4'>
                      <div className='absolute inset-0 bg-blue-400/50 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300' />
                      <Image
                        src={info.icon}
                        alt={info.title}
                        fill
                        className='object-contain p-2'
                      />
                    </div>
                    <h3 className='text-xl font-semibold text-white text-center mb-2'>
                      {info.title}
                    </h3>
                    <p className='text-gray-400 text-center group-hover:text-orange-400 transition-colors duration-300'>
                      {info.content}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
