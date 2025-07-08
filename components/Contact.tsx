'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import type { HTMLMotionProps } from 'framer-motion'

const contactInfo = [
  {
    icon: '/image/contact.png',
    title: 'Phone',
    content: '+251 98 913 0478',
    link: 'tel:+251989130478',
  },
  {
    icon: '/image/mail.png',
    title: 'Email',
    content: 'muprog4@gmail.com',
    link: 'mailto:muprog4@gmail.com',
  },
  {
    icon: '/image/github.jpg',
    title: 'GitHub',
    content: 'Muprog',
    link: 'https://github.com/muprog/',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      setIsLoading(false)
      return
    }

    try {
      await emailjs.send(
        'service_zp9w6ry',
        'template_86m5agx',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Adoniyas',
          reply_to: formData.email,
        },
        'yz7qovRH7l06K5EWk'
      )

      setShowSuccess(true)
      setFormData({ name: '', email: '', message: '' })

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    } catch (error) {
      setError('Failed to send message. Please try again.')
      console.error('Error sending email:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const scrollToForm = () => {
    const formSection = document.getElementById('message-section')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

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
                      <div className='absolute inset-0 bg-orange-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300' />
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

          {/* Message Link */}
          <div className='text-center mt-12'>
            <button
              onClick={scrollToForm}
              className='inline-block px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300 text-lg font-medium'
            >
              Send me a message →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div
        className='min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-900/50'
        id='message-section'
      >
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: 'max-w-2xl mx-auto',
          } as HTMLMotionProps<'div'>)}
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Send a <span className='text-orange-400'>Message</span>
            </h2>
            <p className='text-gray-400 text-lg'>
              Fill out the form below and I&apos;ll get back to you as soon as
              possible
            </p>
          </div>

          {showSuccess && (
            <motion.div
              {...({
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                className:
                  'mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center',
              } as HTMLMotionProps<'div'>)}
            >
              Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}
          {error && (
            <motion.div
              {...({
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                className:
                  'mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center',
              } as HTMLMotionProps<'div'>)}
            >
              {error}
            </motion.div>
          )}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div>
                <label htmlFor='name' className='block text-gray-300 mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-400 text-white'
                  placeholder='Your name'
                  required
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-gray-300 mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-400 text-white'
                  placeholder='Your email'
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor='message' className='block text-gray-300 mb-2'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className='w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-400 text-white resize-none'
                placeholder='Your message'
                required
              />
            </div>
            <button
              type='submit'
              disabled={isLoading}
              className={`w-full px-6 py-3 bg-orange-500 text-white rounded-lg transition-colors duration-300 ${
                isLoading
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover:bg-orange-600'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
