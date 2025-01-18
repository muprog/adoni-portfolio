'use client'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
export default function Header() {
  const [home, setHome] = useState('')
  const [about, setAbout] = useState('')
  const [skill, setSkill] = useState('')
  const [project, setProject] = useState('')
  const [contact, setContact] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=''>
      <div className='w-full bg-slate-900 h-11 fixed z-100 hidden sm:block'>
        <ul className='header-ul1 w-[40%] flex justify-between items-center p-3'>
          <li className={`header-li ${home}`}>
            <button
              onClick={() => {
                document
                  .getElementById('home')
                  ?.scrollIntoView({ behavior: 'smooth' })
                setHome('border-t-8')
                setAbout('')
                setSkill('')
                setProject('')
                setContact('')
              }}
            >
              Home
            </button>
          </li>
          <li className={`header-li ${about}`}>
            <button
              onClick={() => {
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' })
                setHome('')
                setAbout('border-t-8')
                setSkill('')
                setProject('')
                setContact('')
              }}
            >
              About
            </button>
          </li>
          <li className={`header-li ${skill}`}>
            <button
              onClick={() => {
                document
                  .getElementById('skill')
                  ?.scrollIntoView({ behavior: 'smooth' })
                setHome('')
                setAbout('')
                setSkill('border-t-8')
                setProject('')
                setContact('')
              }}
            >
              skill
            </button>
          </li>
          <li className={`header-li ${project}`}>
            <button
              onClick={() => {
                document
                  .getElementById('portfolio')
                  ?.scrollIntoView({ behavior: 'smooth' })
                setHome('')
                setAbout('')
                setSkill('')
                setProject('border-t-8')
                setContact('')
              }}
            >
              Projects
            </button>
          </li>
          <li className={`header-li ${contact}`}>
            <button
              onClick={() => {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
                setHome('')
                setAbout('')
                setSkill('')
                setProject('')
                setContact('border-t-8')
              }}
            >
              contact
            </button>
          </li>
        </ul>
      </div>

      <div className='fixed sm:hidden'>
        <button onClick={() => setIsOpen(true)}>
          <div
            className='w-[35px] h-[35px] relative top-4 left-4 hover:opacity-75 bg-slate-900 rounded-full  z-50
          '
          >
            <Image
              src='/image/menu.png'
              alt='menu'
              fill
              className='object-contain'
            />
          </div>
        </button>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-1000'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition ease-in duration-1000'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <TransitionChild
              enter='transition ease-out duration-200 transform'
              enterFrom='translate-x-full opacity-0'
              enterTo='translate-x-0 opacity-100'
              leave='transition ease-in duration-200 transform'
              leaveFrom='translate-x-0 opacity-100'
              leaveTo='translate-x-full opacity-0'
            >
              <DialogPanel className='fixed inset-0 w-full h-full bg-slate-950 pt-14 pl-4'>
                <button
                  onClick={() => setIsOpen(false)}
                  className='absolute top-4 left-4 text-[30px] font-semibold px-4 pb-1 bg-gray-700 rounded-full hover:opacity-75'
                >
                  x
                </button>
                <div>
                  <ul className='header-ul w-full flex flex-col justify-between p-3 text-[20px] font-lightbold gap-2 mt-2'>
                    <li>
                      <button
                        onClick={() => {
                          document
                            .getElementById('home')
                            ?.scrollIntoView({ behavior: 'smooth' })
                          setIsOpen(false)
                        }}
                      >
                        Home
                      </button>
                    </li>
                    <hr className='hr' />
                    <li>
                      <button
                        onClick={() => {
                          document
                            .getElementById('about')
                            ?.scrollIntoView({ behavior: 'smooth' })
                          setIsOpen(false)
                        }}
                      >
                        About
                      </button>
                    </li>
                    <hr />
                    <li>
                      <button
                        onClick={() => {
                          document
                            .getElementById('skill')
                            ?.scrollIntoView({ behavior: 'smooth' })
                          setIsOpen(false)
                        }}
                      >
                        skill
                      </button>
                    </li>
                    <hr />
                    <li>
                      <button
                        onClick={() => {
                          document
                            .getElementById('portfolio')
                            ?.scrollIntoView({ behavior: 'smooth' })
                          setIsOpen(false)
                        }}
                      >
                        Projects
                      </button>
                    </li>
                    <hr />
                    <li>
                      <button
                        onClick={() => {
                          document
                            .getElementById('contact')
                            ?.scrollIntoView({ behavior: 'smooth' })
                          setIsOpen(false)
                        }}
                      >
                        Contact
                      </button>
                    </li>
                    <hr />
                  </ul>
                </div>
              </DialogPanel>
            </TransitionChild>
          </Dialog>
        </Transition>
      </div>
    </div>
  )
}
