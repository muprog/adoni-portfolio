'use client'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'portfolio', label: 'Projects' },
  { id: 'skill', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = navItems.map(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return { id, top: rect.top }
        }
        return { id, top: Infinity }
      })

      const currentSection = sections.reduce((prev, curr) =>
        Math.abs(curr.top) < Math.abs(prev.top) ? curr : prev
      )

      setActiveSection(currentSection.id)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Desktop Navigation */}
      <nav className='hidden sm:block max-w-6xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          <motion.div
            {...({
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              className: 'text-xl font-bold text-orange-400',
            } as HTMLMotionProps<'div'>)}
          >
            Adoniyas
          </motion.div>

          <ul className='flex items-center space-x-8'>
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.indexOf(item) * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-orange-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      {...({
                        layoutId: 'activeSection',
                        className:
                          'absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400',
                      } as HTMLMotionProps<'div'>)}
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className='sm:hidden'>
        <div className='flex items-center justify-between h-16 px-4'>
          <motion.div
            {...({
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              className: 'text-xl font-bold text-orange-400',
            } as HTMLMotionProps<'div'>)}
          >
            Adoniyas
          </motion.div>

          <button
            onClick={() => setIsOpen(true)}
            className='p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300'
          >
            <Image
              src='/image/menu.png'
              alt='Menu'
              width={24}
              height={24}
              className='object-contain'
            />
          </button>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className='relative z-50'
          >
            <TransitionChild
              enter='transition ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black/50 backdrop-blur-sm' />
            </TransitionChild>

            <TransitionChild
              enter='transition ease-out duration-300'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in duration-200'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <DialogPanel className='fixed inset-y-0 right-0 w-full max-w-xs bg-gray-900 shadow-xl'>
                <div className='flex items-center justify-between p-4 border-b border-gray-800'>
                  <h2 className='text-lg font-semibold text-white'>Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className='p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300'
                  >
                    <svg
                      className='w-6 h-6 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>

                <nav className='p-4'>
                  <ul className='space-y-4'>
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full px-4 py-2 text-left rounded-lg transition-colors duration-300 ${
                            activeSection === item.id
                              ? 'bg-orange-400 text-white'
                              : 'text-gray-300 hover:bg-gray-800'
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </DialogPanel>
            </TransitionChild>
          </Dialog>
        </Transition>
      </div>
    </header>
  )
}
