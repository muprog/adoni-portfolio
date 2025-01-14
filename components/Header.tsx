'use client'
import React from 'react'

export default function Header() {
  return (
    <div className='w-full bg-black h-11 fixed z-10 hidden sm:block'>
      <ul className='w-[40%] flex justify-between items-center p-3 '>
        <li>
          <button
            onClick={() =>
              document
                .getElementById('home')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              document
                .getElementById('portfolio')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            contact
          </button>
        </li>
      </ul>
    </div>
  )
}
